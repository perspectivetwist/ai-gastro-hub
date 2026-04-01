export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative pt-16 pb-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        G&auml;ste suchen nicht mehr bei Google.{" "}
        <span className="gradient-accent">Sie fragen ChatGPT.</span>
      </h2>

      <div className="space-y-6 mb-16 max-w-3xl">
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            Heute fragt jemand ChatGPT: &bdquo;Wo kann ich heute Abend gut italienisch essen?&ldquo;
          </p>
        </div>
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            Wenn dein Restaurant nicht in der Antwort ist, geht der Gast woanders hin. Ohne dass du es je erf&auml;hrst.
          </p>
        </div>
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            Das Essen kann noch so gut sein — wenn ChatGPT dein Restaurant nicht kennt, empfiehlt es die Konkurrenz.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            stat: "78%",
            text: "der Restaurant-Suchen zeigen bereits KI-Antworten statt Linklisten (BrightEdge 2026)",
          },
          {
            stat: "2.900",
            text: "Restaurants haben 2025 geschlossen. Wie viele davon waren unsichtbar f\u00fcr ChatGPT?",
          },
          {
            stat: "58%",
            text: "der Deutschen entdecken Restaurants digital \u2014 Tendenz steigend (Lightspeed/YouGov 2024)",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-6"
            style={{
              borderColor: "#FF006E33",
              background: "rgba(255,0,110,0.04)",
            }}
          >
            <div className="text-4xl font-bold mb-3 gradient-accent">
              {item.stat}
            </div>
            <div
              className="text-sm leading-relaxed"
              style={{ color: "#cccccc" }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
