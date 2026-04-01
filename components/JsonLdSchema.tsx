export default function JsonLdSchema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Shift Drift",
    "url": "https://ai-gastro-hub.vercel.app",
    "sameAs": ["https://github.com/perspectivetwist"]
  }

  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Gastro Hub",
    "url": "https://ai-gastro-hub.vercel.app",
    "description": "4 kostenlose KI-Scanner für Restaurants"
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kennt ChatGPT mein Restaurant? Wie finde ich das heraus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gib deine URL in einen unserer 4 kostenlosen Scanner ein. In unter 20 Sekunden siehst du, ob ChatGPT, Google KI und Perplexity dein Restaurant kennen und empfehlen. Kein Account, kein Abo. Nur deine URL."
        }
      },
      {
        "@type": "Question",
        "name": "Funktioniert das auch f\u00fcr kleine Restaurants auf dem Land?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gerade f\u00fcr die. Gro\u00dfe Ketten haben Marketing-Teams die sich um KI-Sichtbarkeit k\u00fcmmern. Als Einzelgastronom stehst du allein da. Unsere Scanner sind genau daf\u00fcr gebaut: schnell, verst\u00e4ndlich, kostenlos."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet das? Ist das wieder so ein Abo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alle 4 Scans sind kostenlos. F\u00fcr immer. Du siehst deinen Score bevor du auch nur einen Cent ausgibst. Wenn du einen detaillierten Aktionsplan mit konkreten Schritten willst, kostet er 29\u20AC einmalig. Kein Abo. Kein Vertrag. Kein Kleingedrucktes."
        }
      },
      {
        "@type": "Question",
        "name": "Was genau wird gepr\u00fcft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vier Dinge: (1) Kann ChatGPT deine Website lesen? (2) Kennt ChatGPT deinen Ruf und deine Bewertungen? (3) K\u00f6nnen G\u00e4ste \u00fcber KI bei dir reservieren? (4) Stimmen deine Daten \u00fcberall? Oder erfindet Google KI falsche Infos?"
        }
      },
      {
        "@type": "Question",
        "name": "Ich hab ein Google-Profil und Instagram. Reicht das nicht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vor einem Jahr h\u00e4tte ich ja gesagt. Aber seit 2025 zeigt Google bei 78% der Restaurant-Suchen KI-Antworten statt Linklisten. ChatGPT hat 800 Millionen Nutzer pro Woche. \u00dcber TheFork kann man schon direkt im Chat reservieren. Ein Google-Profil allein reicht nicht mehr. Dein Restaurant muss f\u00fcr KI lesbar, auffindbar und buchbar sein."
        }
      },
      {
        "@type": "Question",
        "name": "Brauche ich technisches Wissen daf\u00fcr?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nein. Du gibst deine URL ein. In unter 20 Sekunden siehst du deinen Score. Die Handlungsempfehlungen sind in Gastronomen-Sprache, nicht in Technik-Deutsch. Wenn etwas einen Webdesigner braucht, sagen wir das klar."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  )
}
