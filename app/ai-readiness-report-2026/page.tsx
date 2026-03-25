import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Readiness Report 2026 – Deutschlands Gastronomie in der KI-Blindzone | AI Shift Drift",
  description:
    "85% der deutschen Restaurants sind für ChatGPT, Perplexity und Google AI unsichtbar. 1.000 Restaurants, 10 Städte, 4.000 Scans.",
  openGraph: {
    title: "AI-Readiness Report 2026 – Deutschlands Gastronomie in der KI-Blindzone",
    description:
      "85% der deutschen Restaurants sind für ChatGPT, Perplexity und Google AI unsichtbar. 1.000 Restaurants, 10 Städte, 4.000 Scans.",
    locale: "de_DE",
    url: "https://ai-gastro-hub.vercel.app/ai-readiness-report-2026",
  },
};

export default function AIReadinessReport2026() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
        style={{ zIndex: 1 }}
      >
        <div className="relative max-w-4xl">
          <div
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border"
            style={{ borderColor: "#F59E0B44", color: "#F59E0B", background: "rgba(245,158,11,0.06)" }}
          >
            10 Städte · 1.000 Restaurants · 4.000 Scans
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            AI-Readiness Report
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: "#cccccc" }}>
            Deutschlands Gastronomie in der KI-Blindzone (2026)
          </p>
          <p className="text-sm" style={{ color: "#666" }}>
            AI Shift Drift · März 2026
          </p>
        </div>
      </section>

      {/* AUF EINEN BLICK */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 max-w-3xl">
          <span className="gradient-accent">85% der deutschen Restaurants</span> sind für ChatGPT, Perplexity und Google AI unsichtbar.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              stat: "85%",
              label: "Sichtbarkeits-Defizit (AEO)",
              text: "85% sind für KI-Antwortmaschinen unzureichend aufgestellt. Bei GEO-Zitierbarkeit sogar 96,6%.",
              color: "#6366f1",
            },
            {
              stat: "52%",
              label: "Nutzbarkeits-Defizit",
              text: "Bei 52% fehlt KI-Agenten die Infrastruktur um zu handeln. Kein einziges Restaurant ist wirklich 'agent-ready'.",
              color: "#FFE600",
            },
            {
              stat: "59,1%",
              label: "Das Google-Paradox",
              text: "59,1% der Restaurants mit 4,5+ Google-Sternen sind für KI-Suchmaschinen nicht oder nur schwer auffindbar.",
              color: "#FF1744",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="border rounded-lg p-6"
              style={{
                borderColor: `${card.color}33`,
                background: `${card.color}0A`,
              }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: card.color }}>
                {card.stat}
              </div>
              <div className="text-sm font-semibold mb-3" style={{ color: card.color }}>
                {card.label}
              </div>
              <div className="text-sm leading-relaxed" style={{ color: "#cccccc" }}>
                {card.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KONTEXT */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Warum KI-Sichtbarkeit <span className="gradient-accent">Umsatz kostet</span>
        </h2>
        <p className="text-base leading-relaxed mb-16 max-w-3xl" style={{ color: "#cccccc" }}>
          Ein Restaurant das in KI-Antworten nicht auftaucht, existiert für einen wachsenden Teil potenzieller Gäste nicht. Jede nicht erfolgte Empfehlung durch ChatGPT&amp;Co ist eine entgangene Reservierung. Jede fehlende Erwähnung in den KI-generierten Antworten von Google AI Overviews, Perplexity oder ChatGPT ist ein Tisch der leer bleibt. Die Frage ist nicht ob KI-Sichtbarkeit relevant wird – sie ist es bereits.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Der strukturelle Wandel <span className="gradient-accent">hat begonnen</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            "+357% mehr KI-Suchanfragen in den letzten 6 Monaten.",
            "14,2% Conversion-Rate über KI-Suche vs. 2,8% über Google – wer in KI-Antworten auftaucht, gewinnt fünfmal mehr Kunden pro Kontakt.",
            "90% aller Websites sind für KI-Suchmaschinen strukturell nicht sichtbar – klassisches SEO und Google-Marketing reichen nicht mehr.",
            "KI-Agenten buchen bald selbst: Die nächste Welle sind autonome Agenten die eigenständig Tische reservieren, Öffnungszeiten prüfen und Restaurants empfehlen. Wer nicht 'agent-ready' ist, wird vollautomatisch übergangen.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex gap-0 rounded-lg overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="w-1 flex-shrink-0"
                style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }}
              />
              <p className="text-sm leading-relaxed p-5" style={{ color: "#cccccc" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-base leading-relaxed max-w-3xl" style={{ color: "#cccccc" }}>
          Dieser Wandel ist keine Zukunftsvision. Er läuft bereits – und die Daten dieses Reports zeigen: Die deutsche Gastronomie ist darauf nicht vorbereitet.
        </p>
      </section>

      {/* METHODIK */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="gradient-accent">Methodik</span>
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
            <tbody>
              {[
                ["Was gemessen wurde", "3 Dimensionen: Sichtbarkeit (AEO + GEO), Nutzbarkeit (KI-Agent-Readiness), Sicherheit (KI-Sicherheit)"],
                ["Wer analysiert wurde", "Restaurants mit Google-Bewertung \u22654,0 und mind. 30 Bewertungen, manuell ausgewählt aus Google Maps"],
                ["Umfang", "1.000 Restaurants – 10 Städte \u00d7 100 Restaurants \u00d7 10 Stadtteile pro Stadt"],
                ["Scan-Volumen", "4.000 Einzel-Scans – jedes Restaurant mit allen 4 Scannern parallel analysiert"],
                ["Zeitraum", "März 2026"],
                ["Werkzeuge", "KI-Sichtbarkeits-Scanner, KI-Zitierbarkeits-Scanner, KI-Agent-Readiness-Scanner, KI-Sicherheits-Scanner (AI Shift Drift)"],
              ].map(([label, value], i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <td className="py-3 pr-6 font-semibold whitespace-nowrap align-top" style={{ color: "#F59E0B" }}>
                    {label}
                  </td>
                  <td className="py-3" style={{ color: "#cccccc" }}>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Callout */}
        <div
          className="rounded-lg p-6 mb-12 border"
          style={{ background: "rgba(245,158,11,0.04)", borderColor: "rgba(245,158,11,0.15)" }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "#cccccc" }}>
            <span className="font-semibold" style={{ color: "#F59E0B" }}>Datenerhebung:</span>{" "}
            Die Analyse erfolgte durch automatisierte Einzelscans jedes der 1.000 Restaurants über vier unabhängige Scanner. Jeder Scanner erfasst eine klar abgegrenzte Dimension der KI-Readiness und gibt einen Score von 0–100 sowie strukturierte Befunde aus. Die Scans wurden parallel durchgeführt und sind methodisch voneinander unabhängig. Gesamt-Datenbasis: 4.000 Einzel-Scans.
          </p>
        </div>

        {/* 4 Scanner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: "KI-Sichtbarkeits-Scanner",
              question: "Wird dein Restaurant von ChatGPT&Co zitiert?",
              desc: "Misst On-Page-Kriterien: u.a. Antwortstruktur, Schema Markup und Autor-Signale.",
              color: "#6366f1",
            },
            {
              name: "KI-Zitierbarkeits-Scanner",
              question: "Kennt ChatGPT&Co deinen Ruf als Restaurant?",
              desc: "Misst Zitierbarkeits-Dimensionen: u.a. Schema Markup, E-E-A-T Signale und Content-Struktur.",
              color: "#A8E6A3",
            },
            {
              name: "KI-Agent-Readiness-Scanner",
              question: "Können Gäste via KI-Agenten einen Tisch reservieren oder dein Restaurant finden?",
              desc: "Misst Infrastruktur-Dimensionen: u.a. Zugang für KI-Bots, Auffindbarkeit und Buchbarkeit.",
              color: "#FFE600",
            },
            {
              name: "KI-Sicherheits-Scanner",
              question: "Wie angreifbar ist dein Restaurant für KI-gestützte Angriffe?",
              desc: "Misst Sicherheits-Dimensionen: u.a. Datenprofil-Exposition, Deepfake-Risiko und KI-Einfallstore.",
              color: "#FF1744",
            },
          ].map((scanner, i) => (
            <div
              key={i}
              className="flex gap-0 rounded-lg overflow-hidden"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <div className="w-1 flex-shrink-0" style={{ background: scanner.color }} />
              <div className="p-6">
                <div className="font-bold mb-1" style={{ color: scanner.color }}>
                  {scanner.name}
                </div>
                <div className="text-sm font-semibold mb-3" style={{ color: "#ffffff" }}>
                  {scanner.question}
                </div>
                <div className="text-sm leading-relaxed" style={{ color: "#999" }}>
                  {scanner.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KAPITEL 1: SICHTBARKEITS-DEFIZIT */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Kapitel 1: <span className="gradient-accent">Das Sichtbarkeits-Defizit</span>
        </h2>

        {/* 1.1 AEO */}
        <h3 className="text-xl font-bold mb-6">1.1 AEO – Answer Engine Optimization</h3>
        <div
          className="rounded-lg p-6 mb-6 border"
          style={{ background: "rgba(99,102,241,0.04)", borderColor: "rgba(99,102,241,0.15)" }}
        >
          <p className="text-base font-semibold" style={{ color: "#6366f1" }}>
            85,2% der deutschen Restaurants sind für KI-Antwortmaschinen unzureichend aufgestellt.
          </p>
        </div>
        <p className="text-sm leading-relaxed mb-4 max-w-3xl" style={{ color: "#cccccc" }}>
          <span className="font-semibold text-white">Was das für den Gastronomen bedeutet:</span> ChatGPT, Perplexity und Google AI Overviews können den Inhalt der Website nicht direkt als Antwort verwenden. Das Restaurant taucht in KI-generierten Empfehlungen nicht auf – selbst wenn ein potenzieller Gast explizit nach einem Restaurant in der Nähe sucht.
        </p>
        <p className="text-sm leading-relaxed mb-8 max-w-3xl" style={{ color: "#cccccc" }}>
          <span className="font-semibold text-white">Wie der AEO Score gemessen wird:</span> Der KI-Sichtbarkeits-Scanner prüft 8 On-Page-Kriterien – darunter ob eine direkte Antwort am Seitenanfang steht, ob maschinenlesbares Schema Markup vorhanden ist und ob FAQ-Strukturen für KI-Extraktion aufgebaut sind.
        </p>

        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Kategorie</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Score</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>Restaurants</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>Anteil</th>
              </tr>
            </thead>
            <tbody>
              {[
                { emoji: "🔴", label: "Kritisch – Nicht auffindbar für KI-Suche", score: "0–30", count: "117", pct: "11,7%" },
                { emoji: "🟡", label: "Ausbaufähig – Teilweise sichtbar, aber nicht empfohlen", score: "31–60", count: "735", pct: "73,5%" },
                { emoji: "🟢", label: "Gut – Solide Basis, vereinzelt zitierbar", score: "61–85", count: "148", pct: "14,8%" },
                { emoji: "⭐", label: "Top – Wird von KI zuverlässig gefunden und empfohlen", score: "86–100", count: "0", pct: "0,0%" },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-3 pr-4" style={{ color: "#cccccc" }}>{row.emoji} {row.label}</td>
                  <td className="py-3 pr-4" style={{ color: "#888" }}>{row.score}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.count}</td>
                  <td className="py-3 text-right font-semibold" style={{ color: "#ffffff" }}>{row.pct}</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <td className="py-3 pr-4 font-semibold" style={{ color: "#F59E0B" }}>Ø Score gesamt</td>
                <td className="py-3 pr-4" />
                <td className="py-3 pr-4" />
                <td className="py-3 text-right font-bold" style={{ color: "#F59E0B" }}>43,8</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 1.2 GEO */}
        <h3 className="text-xl font-bold mb-6">1.2 GEO – Generative Engine Optimization</h3>
        <div
          className="rounded-lg p-6 mb-6 border"
          style={{ background: "rgba(168,230,163,0.04)", borderColor: "rgba(168,230,163,0.15)" }}
        >
          <p className="text-base font-semibold" style={{ color: "#A8E6A3" }}>
            96,6% der deutschen Restaurants werden von generativen KI-Modellen nicht als zuverlässige Quelle erkannt.
          </p>
        </div>
        <p className="text-sm leading-relaxed mb-8 max-w-3xl" style={{ color: "#cccccc" }}>
          <span className="font-semibold text-white">Was das für den Gastronomen bedeutet:</span> KI-Modelle wie ChatGPT zitieren Quellen die sie als vertrauenswürdig, strukturiert und relevant einschätzen. Wer nicht zitiert wird, baut keinen Ruf im KI-Ökosystem auf – auch nicht über Jahre hinweg.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Kategorie</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Score</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>Restaurants</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>Anteil</th>
              </tr>
            </thead>
            <tbody>
              {[
                { emoji: "🔴", label: "Kritisch – Vollständig unsichtbar für KI-Modelle", score: "0–19", count: "15", pct: "1,5%" },
                { emoji: "🟠", label: "Schwach – Kaum als Quelle erkennbar", score: "20–39", count: "304", pct: "30,4%" },
                { emoji: "🟡", label: "Ausbaufähig – Teilweise als Quelle erkennbar", score: "40–59", count: "647", pct: "64,7%" },
                { emoji: "🟢", label: "Gut – Gute Grundlagen, gelegentlich zitiert", score: "60–79", count: "34", pct: "3,4%" },
                { emoji: "⭐", label: "Sehr gut – Wird regelmäßig von KI-Modellen zitiert", score: "80–100", count: "0", pct: "0,0%" },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-3 pr-4" style={{ color: "#cccccc" }}>{row.emoji} {row.label}</td>
                  <td className="py-3 pr-4" style={{ color: "#888" }}>{row.score}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.count}</td>
                  <td className="py-3 text-right font-semibold" style={{ color: "#ffffff" }}>{row.pct}</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <td className="py-3 pr-4 font-semibold" style={{ color: "#F59E0B" }}>Ø Score gesamt</td>
                <td className="py-3 pr-4" />
                <td className="py-3 pr-4" />
                <td className="py-3 text-right font-bold" style={{ color: "#F59E0B" }}>42,7</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Top 3 Probleme */}
        <h4 className="text-base font-bold mb-4" style={{ color: "#ffffff" }}>Top 3 Probleme</h4>
        <div className="space-y-3 mb-8">
          {[
            "E-E-A-T Totalausfall – bei ~983 Restaurants (98,3%) kein sichtbarer Autor, kein Veröffentlichungsdatum, keine Expertise-Signale. KI-Suchmaschinen wie Perplexity oder Google AI Overviews bewerten Quellen nach Vertrauenswürdigkeit – Restaurant-Websites liefern null Vertrauenssignale.",
            "Kein klarer Einstiegssatz – bei 553 Restaurants (55,3%) fehlt eine direkte Antwort auf die Hauptfrage der Seite. KI-Systeme überspringen Seiten ohne sofort verwertbaren Inhalt.",
            "Kein maschinenlesbares Markup – bei 344 Restaurants (34,4%) fehlt Schema.org / JSON-LD Markup. Ohne dieses können KI-Modelle das Restaurant nicht als strukturierte Entität erkennen und zitieren.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex gap-0 rounded-lg overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #3b82f6, #22c55e)" }} />
              <p className="text-sm leading-relaxed p-4" style={{ color: "#cccccc" }}>
                <span className="font-semibold text-white">{i + 1}.</span> {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* KAPITEL 2: NUTZBARKEITS-DEFIZIT */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Kapitel 2: <span className="gradient-accent">Das Nutzbarkeits-Defizit</span>
        </h2>
        <div
          className="rounded-lg p-6 mb-6 border"
          style={{ background: "rgba(255,230,0,0.04)", borderColor: "rgba(255,230,0,0.15)" }}
        >
          <p className="text-base font-semibold" style={{ color: "#FFE600" }}>
            52% der deutschen Restaurants können von KI-Agenten nicht vollständig genutzt werden – und kein einziges ist wirklich &apos;agent-ready&apos;.
          </p>
        </div>
        <p className="text-sm leading-relaxed mb-8 max-w-3xl" style={{ color: "#cccccc" }}>
          <span className="font-semibold text-white">Was das für den Gastronomen bedeutet:</span> KI-Agenten – wie ChatGPT mit Browsing, Perplexity oder Google-Assistenten – versuchen zunehmend eigenständig zu handeln: Tische reservieren, Öffnungszeiten prüfen, Speisekarten auslesen. Wer hier nicht erreichbar ist, wird automatisch übergangen.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Kategorie</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Score</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>Restaurants</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>Anteil</th>
              </tr>
            </thead>
            <tbody>
              {[
                { emoji: "🔴", label: "Kritisch – KI-Agenten können das Restaurant nicht erreichen", score: "0–30", count: "2", pct: "0,2%" },
                { emoji: "🟡", label: "Ausbaufähig – KI-Agenten können lesen, aber nicht handeln", score: "31–60", count: "518", pct: "51,8%" },
                { emoji: "🟢", label: "Gut – Grundinfrastruktur vorhanden, fast nutzbar", score: "61–85", count: "480", pct: "48,0%" },
                { emoji: "⭐", label: "Top – KI-Agenten können vollständig buchen und handeln", score: "86–100", count: "0", pct: "0,0%" },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-3 pr-4" style={{ color: "#cccccc" }}>{row.emoji} {row.label}</td>
                  <td className="py-3 pr-4" style={{ color: "#888" }}>{row.score}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.count}</td>
                  <td className="py-3 text-right font-semibold" style={{ color: "#ffffff" }}>{row.pct}</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <td className="py-3 pr-4 font-semibold" style={{ color: "#F59E0B" }}>Ø Score gesamt</td>
                <td className="py-3 pr-4" />
                <td className="py-3 pr-4" />
                <td className="py-3 text-right font-bold" style={{ color: "#F59E0B" }}>60,7</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-relaxed mb-8 max-w-3xl" style={{ color: "#cccccc" }}>
          Das Ergebnis ist eindeutig: Bei über der Hälfte (52%) fehlt KI-Agenten die Infrastruktur um zu handeln. Bei den restlichen 48,0% ist zwar eine Grundlage vorhanden – aber kein einziges Restaurant ist wirklich &apos;agent-ready&apos;.
        </p>

        <h4 className="text-base font-bold mb-4" style={{ color: "#ffffff" }}>Top 3 Probleme</h4>
        <div className="space-y-3">
          {[
            "Kein HTTPS – 178 Restaurants (17,8%) haben kein SSL-Zertifikat. Ohne HTTPS verweigern KI-Agenten die Interaktion da sie unsichere Verbindungen als Risiko einstufen.",
            "Keine Sitemap.xml – 172 Restaurants (17,2%) bieten KI-Agenten keine maschinenlesbare Seitenstruktur. Ohne Sitemap fehlt Agenten die Übersicht über die Website.",
            "Kein programmatischer Endpunkt – 149 Restaurants (14,9%) haben keinen MCP/WebMCP-Endpunkt für KI-Agenten. Insgesamt fehlt bei 409 Restaurants (40,9%) jede Möglichkeit für KI-Agenten aktiv zu handeln – buchen, bestellen oder anfragen.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex gap-0 rounded-lg overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="w-1 flex-shrink-0" style={{ background: "#FFE600" }} />
              <p className="text-sm leading-relaxed p-4" style={{ color: "#cccccc" }}>
                <span className="font-semibold text-white">{i + 1}.</span> {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* KAPITEL 3: SICHERHEITS-DEFIZIT */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Kapitel 3: <span className="gradient-accent">Das Sicherheits-Defizit</span>
        </h2>
        <div
          className="rounded-lg p-6 mb-6 border"
          style={{ background: "rgba(255,23,68,0.04)", borderColor: "rgba(255,23,68,0.15)" }}
        >
          <p className="text-base font-semibold" style={{ color: "#FF1744" }}>
            Kein Restaurant ist vollständig gut aufgestellt. 60,9% sind nur teilgeschützt – mit konkreten Lücken die KI-gestützte Angriffe erleichtern.
          </p>
        </div>
        <p className="text-sm leading-relaxed mb-8 max-w-3xl" style={{ color: "#cccccc" }}>
          <span className="font-semibold text-white">Was der KI-Sicherheits-Scanner misst – und was nicht:</span> Der KI-Sicherheits-Scanner analysiert die öffentlich sichtbare Angriffsfläche einer Website für KI-gestützte Angriffe: Deepfake-Risiko durch Fotos und Videos, offene Personendaten, ungeschützte Formulare und Chatbot-Einfallstore. Was der Scanner bewusst nicht misst: interne Netzwerksicherheit, Serverinfrastruktur oder aktive Schwachstellen – das wäre rechtlich nicht vertretbar ohne explizite Genehmigung.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Kategorie</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Score</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>Restaurants</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>Anteil</th>
              </tr>
            </thead>
            <tbody>
              {[
                { emoji: "🔴", label: "Kritisch – Erhebliche Angriffsfläche", score: "0–30", count: "0", pct: "0,0%" },
                { emoji: "🟠", label: "Gefährdet – Offene Einfallstore", score: "31–60", count: "0", pct: "0,0%" },
                { emoji: "🟡", label: "Teilgeschützt – Grundschutz vorhanden, aber mit Lücken", score: "61–85", count: "609", pct: "60,9%" },
                { emoji: "🟢", label: "Gut aufgestellt – Geringe Angriffsfläche", score: "86–100", count: "391", pct: "39,1%" },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-3 pr-4" style={{ color: "#cccccc" }}>{row.emoji} {row.label}</td>
                  <td className="py-3 pr-4" style={{ color: "#888" }}>{row.score}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.count}</td>
                  <td className="py-3 text-right font-semibold" style={{ color: "#ffffff" }}>{row.pct}</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <td className="py-3 pr-4 font-semibold" style={{ color: "#F59E0B" }}>Ø Score gesamt</td>
                <td className="py-3 pr-4" />
                <td className="py-3 pr-4" />
                <td className="py-3 text-right font-bold" style={{ color: "#F59E0B" }}>83,6</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-base font-bold mb-4" style={{ color: "#ffffff" }}>Top 3 Sicherheits-Probleme</h4>
        <div className="space-y-3 mb-8">
          {[
            "Offene Personendaten – bei 718 Restaurants (71,8%) sind Mitarbeiternamen öffentlich abrufbar – insgesamt ~30.400 Namen. Das ist Rohmaterial für KI-gestützte Social-Engineering- und Phishing-Angriffe.",
            "Unkontrollierter KI-Crawler-Zugang – 175 Restaurants (125 mit wirkungsloser robots.txt + 50 ohne robots.txt) können nicht steuern welche Inhalte KI-Systeme indexieren.",
            "Offene E-Mail-Adressen – bei 62 Restaurants sind ~199 E-Mail-Adressen ungeschützt auf der Website – Spam- und Phishing-Ziel.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex gap-0 rounded-lg overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="w-1 flex-shrink-0" style={{ background: "#FF1744" }} />
              <p className="text-sm leading-relaxed p-4" style={{ color: "#cccccc" }}>
                <span className="font-semibold text-white">{i + 1}.</span> {text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg p-5 border"
          style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs leading-relaxed" style={{ color: "#888" }}>
            <span className="font-semibold" style={{ color: "#aaa" }}>Hinweis zur Scoring-Logik:</span> Der KI-Sicherheits-Score gewichtet aktive Angriffsflächen höher als passive Exposition.
          </p>
        </div>
      </section>

      {/* KAPITEL 4: GOOGLE-PARADOX */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Kapitel 4: <span className="gradient-accent">Das Google-Paradox</span>
        </h2>
        <div
          className="rounded-lg p-6 mb-6 border"
          style={{ background: "rgba(245,158,11,0.04)", borderColor: "rgba(245,158,11,0.15)" }}
        >
          <p className="text-base font-semibold" style={{ color: "#F59E0B" }}>
            591 Restaurants (59,1%) haben 4,5+ Google-Sterne – sind aber für KI-Suchmaschinen nicht oder nur schwer auffindbar (AEO-Score unter 60).
          </p>
        </div>
        <p className="text-sm leading-relaxed mb-8 max-w-3xl" style={{ color: "#cccccc" }}>
          Mehr als die Hälfte der bestbewerteten Restaurants in Deutschland ist für KI-Suchmaschinen strukturell nicht sichtbar. Wer jahrelang in Google-Bewertungen investiert hat, hat damit buchstäblich nichts für seine KI-Sichtbarkeit getan. Die Korrelation zwischen Google-Sternebewertung und AEO-Score beträgt praktisch null. Beide Welten funktionieren nach völlig unterschiedlichen Regeln.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Kriterium</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>Restaurants</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>Anteil</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Google \u22654,5 Sterne UND AEO <60 (nicht auffindbar für KI)", count: "591", pct: "59,1%" },
                { label: "Google \u22654,0 Sterne UND AEO <60", count: "844", pct: "84,4%" },
                { label: "Pearson-Korrelation Google \u2194 AEO", count: "r = \u22120,04", pct: "–" },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-3 pr-4" style={{ color: "#cccccc" }}>{row.label}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.count}</td>
                  <td className="py-3 text-right font-semibold" style={{ color: "#ffffff" }}>{row.pct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "#cccccc" }}>
          <span className="font-semibold text-white">Die Logik dahinter:</span> Google bewertet Kundenzufriedenheit, Relevanz und Klickverhalten. KI-Modelle bewerten Inhaltsstruktur, Maschinenlesbarkeit und Antwortfähigkeit. Das sind zwei vollständig getrennte Optimierungsfelder – wer eines gut macht, hat damit nichts für das andere getan.
        </p>
      </section>

      {/* KAPITEL 5: STÄDTERANKING */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Kapitel 5: <span className="gradient-accent">Städteranking</span>
        </h2>
        <p className="text-sm mb-8" style={{ color: "#cccccc" }}>
          Welche Stadt ist am besten für die KI-Ära aufgestellt? Die Unterschiede sind überraschend.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Stadt</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#6366f1" }}>AEO Ø</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#A8E6A3" }}>GEO Ø</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#FFE600" }}>AgentReady Ø</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#FF1744" }}>Security Ø</th>
              </tr>
            </thead>
            <tbody>
              {[
                { city: "Mannheim", aeo: "46,6", geo: "42,3", agent: "63,3", sec: "84,0" },
                { city: "Hamburg", aeo: "46,3", geo: "41,8", agent: "58,2", sec: "82,0" },
                { city: "Düsseldorf", aeo: "44,6", geo: "40,9", agent: "64,1", sec: "83,1" },
                { city: "München", aeo: "44,1", geo: "40,8", agent: "59,5", sec: "82,6" },
                { city: "Leipzig", aeo: "43,8", geo: "48,3", agent: "63,7", sec: "85,6" },
                { city: "Köln", aeo: "43,5", geo: "40,3", agent: "59,4", sec: "82,7" },
                { city: "Dortmund", aeo: "43,1", geo: "46,1", agent: "63,9", sec: "84,8" },
                { city: "Stuttgart", aeo: "42,6", geo: "44,0", agent: "57,7", sec: "84,2" },
                { city: "Frankfurt", aeo: "42,0", geo: "42,7", agent: "57,8", sec: "83,5" },
                { city: "Berlin", aeo: "41,3", geo: "40,2", agent: "59,8", sec: "83,5" },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-3 pr-4 font-semibold" style={{ color: "#ffffff" }}>{row.city}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.aeo}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.geo}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.agent}</td>
                  <td className="py-3 text-right" style={{ color: "#cccccc" }}>{row.sec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 className="text-base font-bold mb-4" style={{ color: "#ffffff" }}>Befunde</h4>
        <div className="space-y-3">
          {[
            "Mannheim führt bei AEO – die kleinste Stadt im Ranking überholt Hamburg, München und Berlin. Größe ist kein Vorteil.",
            "Leipzig führt bei GEO (48,3) und Security (85,6) – deutlich vor allen anderen.",
            "Berlin ist Schlusslicht bei AEO (41,3) und GEO (40,2) – die Hauptstadt mit dem größten Restaurant-Markt hat die schlechteste KI-Sichtbarkeit.",
            "Düsseldorf führt bei AgentReady (64,1) – die beste Infrastruktur für KI-Agenten.",
            "Die maximale Spanne zwischen bester und schlechtester Stadt beträgt 8 Punkte auf einer 100er-Skala. Die KI-Herausforderungen der Gastronomie sind nicht regional, sie sind strukturell.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex gap-0 rounded-lg overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
              <p className="text-sm leading-relaxed p-4" style={{ color: "#cccccc" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAZIT */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Fazit: <span className="gradient-accent">Die Spielregeln haben sich geändert</span> – und die meisten wissen es noch nicht
        </h2>

        <div className="space-y-6 max-w-3xl">
          <p className="text-base leading-relaxed" style={{ color: "#cccccc" }}>
            59,1% der bestbewerteten Restaurants in Deutschland sind trotz 4,5+ Google-Sternen für KI-Suchsysteme nicht auffindbar. Die Korrelation zwischen Google-Reputation und KI-Sichtbarkeit ist statistisch nicht existent. Online-Reputation und KI-Sichtbarkeit sind zwei strukturell verschiedene Disziplinen, die unterschiedliche Maßnahmen erfordern.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#cccccc" }}>
            Die Studie belegt: Das Defizit ist nicht auf einzelne Städte oder Betriebstypen beschränkt. Es ist branchenweit und strukturell. 85% der analysierten Restaurants – unabhängig von Größe, Standort oder Bewertungsniveau – erfüllen die Grundvoraussetzungen für KI-Sichtbarkeit nicht.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#cccccc" }}>
            Der Markt befindet sich in einer frühen Positionierungsphase. Kein Betrieb verfügt heute über eine gefestigte KI-Sichtbarkeits-Position – aber das ändert sich. KI-Systeme lernen über Zeit welchen Quellen sie vertrauen können: ähnlich wie Reputation im klassischen Sinne entsteht dieses Vertrauen durch wiederholte, konsistente Präsenz. Betriebe die jetzt strukturell handeln sichern sich eine Marktposition die mit wachsender KI-Adoption an strategischem Wert gewinnt.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Wo steht <span className="gradient-accent">Ihr Gastronomiebetrieb?</span>
        </h2>
        <p className="text-sm mb-12 max-w-3xl" style={{ color: "#cccccc" }}>
          Die Studie zeigt den Branchendurchschnitt. Was zählt ist Ihre individuelle Ausgangsposition. Alle vier Scanner sind kostenlos verfügbar – Ergebnis in unter 60 Sekunden.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "KI-Sichtbarkeit (AEO)", url: "https://aeo-gastro.vercel.app", color: "#6366f1", emoji: "📸" },
            { name: "KI-Zitierbarkeit (GEO)", url: "https://geo-gastro.vercel.app", color: "#A8E6A3", emoji: "⭐" },
            { name: "KI-Agent-Readiness", url: "https://agentready-gastro.vercel.app", color: "#FFE600", emoji: "🤖" },
            { name: "KI-Sicherheit", url: "https://aisecurity-gastro.vercel.app", color: "#FF1744", emoji: "🔒" },
          ].map((cta, i) => (
            <a
              key={i}
              href={cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-0 rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02]"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <div className="w-1 flex-shrink-0" style={{ background: cta.color }} />
              <div className="p-6">
                <div className="font-bold mb-2" style={{ color: cta.color }}>
                  {cta.emoji} {cta.name}
                </div>
                <span
                  className="inline-block mt-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors duration-200 hover:bg-white/10"
                  style={{ borderColor: cta.color, color: cta.color }}
                >
                  Jetzt prüfen
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative max-w-5xl mx-auto px-6 pb-16 pt-12" style={{ zIndex: 1 }}>
        <div
          className="border-t pt-8 text-center"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-sm mb-2" style={{ color: "#888" }}>
            AI-Readiness Report: Deutschlands Gastronomie in der KI-Blindzone (2026)
          </p>
          <p className="text-xs" style={{ color: "#444" }}>
            © AI Shift Drift – März 2026
          </p>
        </div>
      </footer>
    </>
  );
}
