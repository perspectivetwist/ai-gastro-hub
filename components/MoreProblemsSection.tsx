import { EyeOff, Ban, ShieldAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const problems: { icon: LucideIcon; title: string; text: string; color: string; gradient?: string }[] = [
  {
    icon: EyeOff,
    title: "ChatGPT kennt dein Restaurant nicht.",
    text: "Jemand fragt ChatGPT: \u201EWo esse ich heute Abend gut?\u201C Die KI empfiehlt drei Restaurants. Deins ist nicht dabei \u2014 obwohl dein Essen besser ist als das der anderen.",
    color: "#00FFE0",
    gradient: "linear-gradient(180deg, #00AAFF, #00FF88)",
  },
  {
    icon: Ban,
    title: "G\u00e4ste wollen \u00fcber KI reservieren \u2014 und k\u00f6nnen es nicht.",
    text: "Ein Gast sagt zu seinem KI-Assistenten: \u201EBuche mir einen Tisch f\u00fcr Freitag.\u201C Der Agent sucht \u2014 und findet nur Restaurants mit Online-Reservierung. Deins hat keine. Der Gast ist weg.",
    color: "#FFE600",
  },
  {
    icon: ShieldAlert,
    title: "Google KI erfindet Angebote, die es nicht gibt.",
    text: "Eine Pizzeria in Missouri musste \u00f6ffentlich warnen: Google KI hatte Spezialangebote erfunden, die nie existierten. Kunden kamen w\u00fctend ins Restaurant. Das kann auch dir passieren.",
    color: "#FF1744",
  },
];

export default function MoreProblemsSection() {
  return (
    <section
      id="more-problems"
      className="relative py-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      {/* SVG Gradient Definition für Card 1 Icon */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="wake-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00AAFF" />
            <stop offset="100%" stopColor="#00FF88" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Drei Probleme, <span className="gradient-accent">eine Lösung.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={i}
              className="flex gap-0 rounded-lg overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="w-1 flex-shrink-0 rounded-full"
                style={{ background: p.gradient || p.color }}
              />
              <div className="p-6">
                <Icon
                  className="w-8 h-8 mb-4"
                  style={p.gradient
                    ? { stroke: "url(#wake-gradient)" }
                    : { color: p.color }
                  }
                />
                <h3 className="text-lg font-bold mb-3 gradient-accent">
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#cccccc" }}
                >
                  {p.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
