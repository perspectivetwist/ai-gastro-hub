import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.ki-gastronomie.com'

const CITIES = [
  'berlin', 'hamburg', 'muenchen', 'koeln', 'frankfurt',
  'stuttgart', 'duesseldorf', 'leipzig', 'dortmund', 'mannheim',
]

const SCANNERS = [
  'aeo-scanner', 'geo-scanner', 'agent-scanner', 'security-scanner',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date()

  // Newsroom articles
  let articleUrls: MetadataRoute.Sitemap = []
  try {
    const dir = path.join(process.cwd(), 'public', 'newsroom')
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
    articleUrls = files.map(f => ({
      url: `${BASE_URL}/newsroom/${f.replace('.json', '')}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {}

  return [
    // Hauptseite
    { url: BASE_URL, lastModified: today, changeFrequency: 'weekly', priority: 1 },

    // Sub-Pages
    { url: `${BASE_URL}/ueber-uns`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/presse`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/newsroom`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/ai-readiness-report-2026`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },

    // Newsroom-Artikel
    ...articleUrls,

    // Scanner-Pages
    ...SCANNERS.map(scanner => ({
      url: `${BASE_URL}/${scanner}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Stadt-Pages
    ...CITIES.map(city => ({
      url: `${BASE_URL}/staedte/${city}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // Legal
    { url: `${BASE_URL}/impressum`, lastModified: today, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE_URL}/datenschutz`, lastModified: today, changeFrequency: 'monthly', priority: 0.3 },
  ]
}
