#!/usr/bin/env node
/**
 * Aggregates scan data from 10 Notion city databases
 * Outputs: /data/city-studies/[stadt].json
 */

const fs = require('fs');
const path = require('path');

const NOTION_TOKEN = process.env.NOTION_TOKEN;

const CITIES = [
  { name: 'Berlin', slug: 'berlin', dbId: 'dba3ee72-b524-4150-9a22-a5e8d2b038d3' },
  { name: 'Hamburg', slug: 'hamburg', dbId: 'fb13e012-1bbc-4581-8be4-1fcf77c20bab' },
  { name: 'München', slug: 'muenchen', dbId: 'c1e25c58-05c0-42aa-b68f-b676ad8e231b' },
  { name: 'Köln', slug: 'koeln', dbId: '37033337-a148-482e-8aeb-e07f3223a1d7' },
  { name: 'Frankfurt', slug: 'frankfurt', dbId: 'b3094b9b-bfc7-474d-affd-5f9dad481f98' },
  { name: 'Stuttgart', slug: 'stuttgart', dbId: '6f55c8a0-bcb4-41df-a85f-e3a3d8b25175' },
  { name: 'Düsseldorf', slug: 'duesseldorf', dbId: '56730a95-2e21-4f4d-9776-90adf706036c' },
  { name: 'Leipzig', slug: 'leipzig', dbId: '64715dae-60a9-4d4f-9a71-b31ad77c10aa' },
  { name: 'Dortmund', slug: 'dortmund', dbId: '91fd7335-571b-4c47-900a-cd98c22a71b0' },
  { name: 'Mannheim', slug: 'mannheim', dbId: '78bdc5d8-efe7-47f1-b486-5c975d99cf92' },
];

// National averages from main study
const NATIONAL = {
  aeo_avg: 43.8,
  geo_avg: 42.7,
  agent_avg: 60.7,
  security_avg: 83.6,
};

// City ranking from main study
const CITY_RANKING = {
  'Berlin': 41.3, 'Hamburg': 46.3, 'München': 44.1, 'Köln': 43.5,
  'Frankfurt': 42.0, 'Stuttgart': 42.6, 'Düsseldorf': 44.6,
  'Leipzig': 43.8, 'Dortmund': 43.1, 'Mannheim': 46.6,
};

async function queryAllPages(dbId) {
  let allResults = [];
  let hasMore = true;
  let startCursor = undefined;

  while (hasMore) {
    const body = { page_size: 100 };
    if (startCursor) body.start_cursor = startCursor;

    const res = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (data.object === 'error') {
      console.error(`Error querying ${dbId}:`, data.message);
      return [];
    }

    allResults = allResults.concat(data.results || []);
    hasMore = data.has_more;
    startCursor = data.next_cursor;
  }

  return allResults;
}

function extractValue(page, field) {
  const prop = page.properties[field];
  if (!prop) return null;

  switch (prop.type) {
    case 'number': return prop.number;
    case 'title': return prop.title?.map(t => t.plain_text).join('') || '';
    case 'rich_text': return prop.rich_text?.map(t => t.plain_text).join('') || '';
    case 'select': return prop.select?.name || '';
    case 'url': return prop.url || '';
    default: return null;
  }
}

function computeDistribution(scores, bands) {
  const total = scores.length;
  return bands.map(band => {
    const count = scores.filter(s => s >= band.min && s <= band.max).length;
    return { ...band, count, pct: total > 0 ? Math.round((count / total) * 1000) / 10 : 0 };
  });
}

function aggregateProblems(pages) {
  const problemCounts = {};

  for (const page of pages) {
    for (const field of ['Problem 1', 'Problem 2', 'Problem 3']) {
      const val = extractValue(page, field);
      if (val && val.trim()) {
        const normalized = val.trim().toLowerCase();
        problemCounts[normalized] = (problemCounts[normalized] || { text: val.trim(), count: 0 });
        problemCounts[normalized].count++;
      }
    }
  }

  const sorted = Object.values(problemCounts).sort((a, b) => b.count - a.count);
  const total = pages.length;
  return sorted.slice(0, 3).map(p => ({
    text: p.text,
    count: p.count,
    pct: Math.round((p.count / total) * 1000) / 10,
  }));
}

function computeStadtteilRanking(pages) {
  const stadtteile = {};

  for (const page of pages) {
    const stadtteil = extractValue(page, 'Stadtteil');
    const aeoScore = extractValue(page, 'AEO Score');
    if (stadtteil && aeoScore !== null) {
      if (!stadtteile[stadtteil]) stadtteile[stadtteil] = [];
      stadtteile[stadtteil].push(aeoScore);
    }
  }

  return Object.entries(stadtteile)
    .map(([name, scores]) => ({
      name,
      avg_aeo: Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10,
      count: scores.length,
    }))
    .sort((a, b) => b.avg_aeo - a.avg_aeo);
}

function computeKuechenBreakdown(pages) {
  const kuechen = {};

  for (const page of pages) {
    const kueche = extractValue(page, 'Küche');
    const aeoScore = extractValue(page, 'AEO Score');
    if (kueche && kueche.trim() && aeoScore !== null) {
      const normalized = kueche.trim();
      if (!kuechen[normalized]) kuechen[normalized] = [];
      kuechen[normalized].push(aeoScore);
    }
  }

  return Object.entries(kuechen)
    .map(([name, scores]) => ({
      name,
      count: scores.length,
      avg_aeo: Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

async function processCity(city) {
  console.log(`Processing ${city.name}...`);
  const pages = await queryAllPages(city.dbId);
  console.log(`  → ${pages.length} restaurants found`);

  if (pages.length === 0) return null;

  // Extract scores
  const aeoScores = pages.map(p => extractValue(p, 'AEO Score')).filter(s => s !== null);
  const geoScores = pages.map(p => extractValue(p, 'GEO Score')).filter(s => s !== null);
  const agentScores = pages.map(p => extractValue(p, 'AgentReady Score')).filter(s => s !== null);
  const securityScores = pages.map(p => extractValue(p, 'Security Score')).filter(s => s !== null);

  const avg = arr => arr.length > 0 ? Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 10) / 10 : 0;

  const result = {
    city: city.name,
    slug: city.slug,
    total_restaurants: pages.length,
    generated_at: new Date().toISOString(),

    // Averages
    aeo_avg: avg(aeoScores),
    geo_avg: avg(geoScores),
    agent_avg: avg(agentScores),
    security_avg: avg(securityScores),

    // AEO Distribution
    aeo_distribution: computeDistribution(aeoScores, [
      { label: 'Kritisch', emoji: '🔴', min: 0, max: 30 },
      { label: 'Ausbaufähig', emoji: '🟡', min: 31, max: 60 },
      { label: 'Gut', emoji: '🟢', min: 61, max: 85 },
      { label: 'Top', emoji: '⭐', min: 86, max: 100 },
    ]),

    // GEO Distribution
    geo_distribution: computeDistribution(geoScores, [
      { label: 'Kritisch', emoji: '🔴', min: 0, max: 19 },
      { label: 'Schwach', emoji: '🟠', min: 20, max: 39 },
      { label: 'Ausbaufähig', emoji: '🟡', min: 40, max: 59 },
      { label: 'Gut', emoji: '🟢', min: 60, max: 79 },
      { label: 'Sehr gut', emoji: '⭐', min: 80, max: 100 },
    ]),

    // Top 3 Problems
    top_problems: aggregateProblems(pages),

    // Stadtteil Ranking
    stadtteil_ranking: computeStadtteilRanking(pages),

    // Küchen Breakdown
    kuechen_breakdown: computeKuechenBreakdown(pages),

    // National comparison
    national: NATIONAL,
    city_aeo_ranking: CITY_RANKING,

    // Computed insights
    sichtbarkeitsdefizit_pct: 0, // will compute below
    above_national: false,
  };

  // Sichtbarkeitsdefizit = % with AEO Score <= 60
  const defizitCount = aeoScores.filter(s => s <= 60).length;
  result.sichtbarkeitsdefizit_pct = Math.round((defizitCount / aeoScores.length) * 1000) / 10;
  result.above_national = result.aeo_avg > NATIONAL.aeo_avg;

  return result;
}

async function main() {
  const outDir = path.join(__dirname, '..', 'data', 'city-studies');
  fs.mkdirSync(outDir, { recursive: true });

  // Process all cities in parallel
  const results = await Promise.all(CITIES.map(city => processCity(city)));

  for (const result of results) {
    if (result) {
      const filePath = path.join(outDir, `${result.slug}.json`);
      fs.writeFileSync(filePath, JSON.stringify(result, null, 2));
      console.log(`✓ Saved ${filePath}`);
    }
  }

  console.log('\nDone! All city data aggregated.');
}

main().catch(console.error);
