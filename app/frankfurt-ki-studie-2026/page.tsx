import type { Metadata } from "next";
import CityStudyPage from "@/components/CityStudyPage";
import cityData from "@/data/city-studies/frankfurt.json";

export const metadata: Metadata = {
  title: "KI-Readiness Restaurants Frankfurt 2026 | 84% unsichtbar für ChatGPT",
  description:
    "84% der Frankfurter Restaurants sind für ChatGPT, Perplexity und Google AI unsichtbar. 100 Restaurants, 21 Stadtteile, 4 Scanner.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
  },
  openGraph: {
    title: "84% der Frankfurter Restaurants unsichtbar für KI",
    description:
      "KI-Readiness Frankfurt 2026: 100 Restaurants, 21 Stadtteile, 4 Scanner. Substudie aus dem AI-Readiness Report.",
    locale: "de_DE",
    type: "article",
    url: "https://www.ki-gastronomie.com/frankfurt-ki-studie-2026",
    publishedTime: "2026-04-20T00:00:00Z",
    authors: ["AI Shift Drift"],
  },
  twitter: {
    card: "summary_large_image",
    title: "84% der Frankfurter Restaurants unsichtbar für KI",
    description:
      "KI-Readiness Frankfurt 2026: 100 Restaurants, 21 Stadtteile, 4 Scanner.",
  },
  alternates: {
    canonical: "https://www.ki-gastronomie.com/frankfurt-ki-studie-2026",
  },
};

export default function FrankfurtKiStudie2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "84% der Frankfurter Restaurants unsichtbar für KI",
            "description": "KI-Readiness Frankfurt 2026: 100 Restaurants analysiert.",
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
              "@id": "https://www.ki-gastronomie.com/frankfurt-ki-studie-2026"
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
