import type { Metadata } from "next";
import CityStudyPage from "@/components/CityStudyPage";
import cityData from "@/data/city-studies/dortmund.json";

export const metadata: Metadata = {
  title: "KI-Readiness Restaurants Dortmund 2026 | 85% unsichtbar für ChatGPT",
  description:
    "85% der Dortmunder Restaurants sind für ChatGPT, Perplexity und Google AI unsichtbar. 100 Restaurants, 19 Stadtteile, 4 Scanner.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
  },
  openGraph: {
    title: "85% der Dortmunder Restaurants unsichtbar für KI",
    description:
      "KI-Readiness Dortmund 2026: 100 Restaurants, 19 Stadtteile, 4 Scanner. Substudie aus dem AI-Readiness Report.",
    locale: "de_DE",
    type: "article",
    url: "https://www.ki-gastronomie.com/dortmund-ki-studie-2026",
    publishedTime: "2026-04-20T00:00:00Z",
    authors: ["AI Shift Drift"],
  },
  twitter: {
    card: "summary_large_image",
    title: "85% der Dortmunder Restaurants unsichtbar für KI",
    description:
      "KI-Readiness Dortmund 2026: 100 Restaurants, 19 Stadtteile, 4 Scanner.",
  },
  alternates: {
    canonical: "https://www.ki-gastronomie.com/dortmund-ki-studie-2026",
  },
};

export default function DortmundKiStudie2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "85% der Dortmunder Restaurants unsichtbar für KI",
            "description": "KI-Readiness Dortmund 2026: 100 Restaurants analysiert.",
            "datePublished": "2026-04-20",
            "dateModified": "2026-04-20",
            "author": {
              "@type": "Organization",
              "name": "AI Shift Drift",
              "url": "https://www.ki-gastronomie.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AI Shift Drift"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.ki-gastronomie.com/dortmund-ki-studie-2026"
            },
            "isPartOf": {
              "@type": "Article",
              "url": "https://www.ki-gastronomie.com/ai-readiness-report-2026",
              "name": "AI-Readiness Report 2026"
            }
          })
        }}
      />
      <CityStudyPage data={cityData} />
    </>
  );
}
