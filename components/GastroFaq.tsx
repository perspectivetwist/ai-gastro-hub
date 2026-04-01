'use client'

import { useState } from 'react'
import { ShieldCheck, DatabaseZap, Flag, ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'Kennt ChatGPT mein Restaurant? Wie finde ich das heraus?',
    answer: 'Gib deine URL in einen unserer 4 kostenlosen Scanner ein. In unter 20 Sekunden siehst du, ob ChatGPT, Google KI und Perplexity dein Restaurant kennen und empfehlen. Kein Account, kein Abo. Nur deine URL.',
    alwaysOpen: true,
    showUsps: true,
  },
  {
    question: 'Funktioniert das auch für kleine Restaurants auf dem Land?',
    answer: 'Gerade für die. Große Ketten haben Marketing-Teams die sich um KI-Sichtbarkeit kümmern. Als Einzelgastronom stehst du allein da. Unsere Scanner sind genau dafür gebaut: schnell, verständlich, kostenlos.',
  },
  {
    question: 'Was kostet das? Ist das wieder so ein Abo?',
    answer: 'Alle 4 Scans sind kostenlos. Für immer. Du siehst deinen Score bevor du auch nur einen Cent ausgibst. Wenn du einen detaillierten Aktionsplan mit konkreten Schritten willst, kostet er 29\u20AC einmalig. Kein Abo. Kein Vertrag. Kein Kleingedrucktes.',
  },
  {
    question: 'Was genau wird geprüft?',
    answer: 'Vier Dinge: (1) Kann ChatGPT deine Website lesen? (2) Kennt ChatGPT deinen Ruf und deine Bewertungen? (3) Können Gäste über KI bei dir reservieren? (4) Stimmen deine Daten überall? Oder erfindet Google KI falsche Infos?',
  },
  {
    question: 'Ich hab ein Google-Profil und Instagram. Reicht das nicht?',
    answer: 'Vor einem Jahr hätte ich ja gesagt. Aber seit 2025 zeigt Google bei 78% der Restaurant-Suchen KI-Antworten statt Linklisten. ChatGPT hat 800 Millionen Nutzer pro Woche. Über TheFork kann man schon direkt im Chat reservieren. Ein Google-Profil allein reicht nicht mehr. Dein Restaurant muss für KI lesbar, auffindbar und buchbar sein.',
  },
  {
    question: 'Brauche ich technisches Wissen dafür?',
    answer: 'Nein. Du gibst deine URL ein. In unter 20 Sekunden siehst du deinen Score. Die Handlungsempfehlungen sind in Gastronomen-Sprache, nicht in Technik-Deutsch. Wenn etwas einen Webdesigner braucht, sagen wir das klar.',
  },
]

export default function GastroFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="relative py-24 px-6 max-w-3xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Häufige <span className="gradient-accent">Fragen.</span>
      </h2>
      <div>
        {faqItems.map((item, i) => {
          const isAlwaysOpen = 'alwaysOpen' in item && item.alwaysOpen
          const showUsps = 'showUsps' in item && item.showUsps
          const isOpen = isAlwaysOpen || openIndex === i

          return (
            <div
              key={i}
              className="border-b py-5"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              {isAlwaysOpen ? (
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="font-semibold text-lg text-white">
                      {item.question}
                    </div>
                    <p
                      className="mt-3 leading-relaxed"
                      style={{ color: "#cccccc" }}
                    >
                      {item.answer}
                    </p>
                    {showUsps && (
                      <div className="flex flex-wrap gap-6 mt-5">
                        <div className="flex items-center gap-2 text-sm" style={{ color: "#888" }}>
                          <ShieldCheck size={16} style={{ color: "#00FF88" }} />
                          DSGVO-konform
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: "#888" }}>
                          <DatabaseZap size={16} style={{ color: "#00FF88" }} />
                          Keine Datenspeicherung
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: "#888" }}>
                          <Flag size={16} style={{ color: "#00FF88" }} />
                          Made in Germany
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex items-center justify-between w-full text-left gap-3 cursor-pointer"
                  >
                    <span className="font-semibold text-lg text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className="shrink-0 transition-transform duration-200"
                      style={{
                        color: "#888",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  {isOpen && (
                    <p
                      className="mt-3 leading-relaxed"
                      style={{ color: "#cccccc" }}
                    >
                      {item.answer}
                    </p>
                  )}
                </>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
