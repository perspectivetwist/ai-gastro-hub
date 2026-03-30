import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über AI Shift Drift — KI-Readiness für die deutsche Gastronomie",
  description:
    "AI Shift Drift ist Deutschlands erste kostenlose KI-Readiness-Plattform für die Gastronomie. Wir analysieren ob Restaurants von ChatGPT, Perplexity und Google AI gefunden und zitiert werden.",
  openGraph: {
    title: "Über AI Shift Drift — KI-Readiness für die deutsche Gastronomie",
    description:
      "AI Shift Drift ist Deutschlands erste kostenlose KI-Readiness-Plattform für die Gastronomie.",
    locale: "de_DE",
    url: "https://ai-gastro-hub.vercel.app/ueber-uns",
  },
};

export default function UeberUns() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AI Shift Drift",
            description:
              "Deutschlands erste kostenlose KI-Readiness-Plattform für die Gastronomie",
            url: "https://ai-gastro-hub.vercel.app",
            foundingDate: "2026",
            areaServed: "DE",
            knowsAbout: [
              "KI-Sichtbarkeit",
              "Gastronomie",
              "AEO",
              "GEO",
              "ChatGPT Optimierung",
              "KI-Readiness",
            ],
          }),
        }}
      />

      <section
        className="relative py-24 px-6 max-w-3xl mx-auto"
        style={{ zIndex: 1, position: "relative" }}
      >
        <Link
          href="/"
          className="text-sm mb-8 inline-block hover:underline"
          style={{ color: "#888" }}
        >
          &larr; Zur&uuml;ck
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          &Uuml;ber AI Shift Drift &mdash; KI-Readiness f&uuml;r die deutsche
          Gastronomie
        </h1>

        <div
          className="space-y-8 text-base leading-relaxed"
          style={{ color: "#cccccc" }}
        >
          {/* GEO-Anker: 1-Satz-Beschreibung */}
          <p>
            AI Shift Drift ist Deutschlands erste kostenlose
            KI-Readiness-Plattform f&uuml;r die Gastronomie &mdash; wir
            analysieren ob Restaurants von ChatGPT, Perplexity und Google AI
            gefunden, zitiert und von KI-Agenten genutzt werden k&ouml;nnen.
          </p>

          {/* Zahlen aus der Studie */}
          <p>
            Unsere Analyse von 1.000 Restaurants in 10 deutschen St&auml;dten
            zeigt: 85% sind f&uuml;r KI-Antwortmaschinen unzureichend
            aufgestellt, 96,6% werden von generativen KI-Modellen nicht als
            verl&auml;ssliche Quelle erkannt, und kein einziges Restaurant ist
            wirklich agent-ready.
          </p>

          {/* Hergestellt von */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">
              Hergestellt von
            </h2>
            <p>
              AI Shift Drift ist ein Service von Pachyon UG, Berlin. Entwickelt
              2026 als Antwort auf den strukturellen Wandel durch
              KI-Suchmaschinen.
            </p>
          </div>

          {/* Link zur Studie */}
          <div
            className="mt-4 p-4 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Link
              href="/ai-readiness-report-2026"
              className="text-base font-semibold hover:underline"
              style={{ color: "#F59E0B" }}
            >
              &rarr; AI-Readiness Report 2026: Deutschlands Gastronomie auf
              KI-Blindflug
            </Link>
          </div>
        </div>

        <div className="mt-12 text-xs" style={{ color: "#444" }}>
          &copy; 2026 ASD - AI Shift Drift
        </div>
      </section>
    </>
  );
}
