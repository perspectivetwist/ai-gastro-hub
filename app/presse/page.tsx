import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presse & Medien — AI Shift Drift",
  description:
    "Pressematerial und Kern-Aussagen aus dem AI-Readiness Report 2026. 85% der deutschen Restaurants sind für KI-Suchmaschinen unsichtbar.",
  openGraph: {
    title: "Presse & Medien — AI Shift Drift",
    description:
      "Pressematerial und Kern-Aussagen aus dem AI-Readiness Report 2026.",
    locale: "de_DE",
    url: "https://www.ki-gastronomie.com/presse",
  },
};

export default function Presse() {
  return (
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

      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Presse &amp; Medien
      </h1>
      <p className="text-lg mb-12" style={{ color: "#888" }}>
        F&uuml;r Journalisten und Redakteure die &uuml;ber KI-Sichtbarkeit in
        der Gastronomie berichten
      </p>

      <div
        className="space-y-12 text-base leading-relaxed"
        style={{ color: "#cccccc" }}
      >
        {/* Pressekontakt */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Pressekontakt</h2>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:asd.gastronomie@gmail.com"
              className="hover:underline"
              style={{ color: "#F59E0B" }}
            >
              asd.gastronomie@gmail.com
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://www.ki-gastronomie.com"
              className="hover:underline"
              style={{ color: "#F59E0B" }}
            >
              www.ki-gastronomie.com
            </a>
          </p>
        </div>

        {/* Kern-Aussagen */}
        <div>
          <h2 className="text-xl font-bold mb-6 text-white">Kern-Aussagen</h2>
          <div className="space-y-6">
            <blockquote
              className="p-5 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderLeft: "3px solid #F59E0B",
              }}
            >
              <p className="text-white font-medium mb-2">
                &bdquo;85% der deutschen Restaurants sind f&uuml;r ChatGPT,
                Perplexity und Google AI unsichtbar.&ldquo;
              </p>
              <cite className="text-sm not-italic" style={{ color: "#888" }}>
                &mdash; AI Shift Drift, AI-Readiness Report 2026
              </cite>
            </blockquote>

            <blockquote
              className="p-5 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderLeft: "3px solid #F59E0B",
              }}
            >
              <p className="text-white font-medium mb-2">
                &bdquo;96,6% der deutschen Restaurants werden von generativen
                KI-Modellen nicht als verl&auml;ssliche Quelle erkannt.&ldquo;
              </p>
              <cite className="text-sm not-italic" style={{ color: "#888" }}>
                &mdash; AI Shift Drift, AI-Readiness Report 2026
              </cite>
            </blockquote>

            <blockquote
              className="p-5 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderLeft: "3px solid #F59E0B",
              }}
            >
              <p className="text-white font-medium mb-2">
                &bdquo;Kein einziges der 1.000 analysierten Restaurants ist
                wirklich agent-ready &mdash; KI-Agenten k&ouml;nnen bei keinem
                selbst&auml;ndig einen Tisch reservieren.&ldquo;
              </p>
              <cite className="text-sm not-italic" style={{ color: "#888" }}>
                &mdash; AI Shift Drift, AI-Readiness Report 2026
              </cite>
            </blockquote>

            <blockquote
              className="p-5 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderLeft: "3px solid #F59E0B",
              }}
            >
              <p className="text-white font-medium mb-2">
                &bdquo;59,1% der Restaurants mit 4,5+ Google-Sternen sind
                trotzdem f&uuml;r KI-Suchmaschinen nicht auffindbar.
                Google-Reputation und KI-Sichtbarkeit sind zwei v&ouml;llig
                verschiedene Dinge.&ldquo;
              </p>
              <cite className="text-sm not-italic" style={{ color: "#888" }}>
                &mdash; AI Shift Drift, AI-Readiness Report 2026
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Über die Studie */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">
            &Uuml;ber die Studie
          </h2>
          <p>
            Der AI-Readiness Report 2026 basiert auf 4.000 Einzel-Scans von
            1.000 Restaurants in Berlin, Hamburg, M&uuml;nchen, K&ouml;ln,
            Frankfurt, Stuttgart, D&uuml;sseldorf, Leipzig, Dortmund und
            Mannheim. Ver&ouml;ffentlicht: M&auml;rz 2026.
          </p>
          <p className="mt-3">
            <Link
              href="/ai-readiness-report-2026"
              className="font-semibold hover:underline"
              style={{ color: "#F59E0B" }}
            >
              Vollst&auml;ndiger Report &rarr;
              www.ki-gastronomie.com/ai-readiness-report-2026
            </Link>
          </p>
        </div>

        {/* Zitierhinweis */}
        <div
          className="p-5 rounded-lg"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h3 className="text-sm font-bold mb-2 text-white">Zitierhinweis</h3>
          <p className="text-sm" style={{ color: "#aaa" }}>
            Wenn Sie Daten aus diesem Report verwenden, zitieren Sie bitte:
          </p>
          <p
            className="text-sm mt-2 font-mono"
            style={{ color: "#cccccc" }}
          >
            AI Shift Drift (2026). AI-Readiness Report: Deutschlands
            Gastronomie auf KI-Blindflug. Abgerufen von
            www.ki-gastronomie.com/ai-readiness-report-2026
          </p>
        </div>
      </div>

      <div className="mt-12 text-xs" style={{ color: "#444" }}>
        &copy; 2026 ASD - AI Shift Drift
      </div>
    </section>
  );
}
