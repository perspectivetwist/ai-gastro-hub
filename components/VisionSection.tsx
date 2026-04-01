export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-24 px-6 max-w-5xl mx-auto text-center"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Dein <span className="gradient-accent">Zeitfenster...</span>
      </h2>
      <p
        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        style={{ color: "#cccccc" }}
      >
        Die <strong className="text-white">MwSt-Senkung auf 7%</strong> gibt dir zum ersten Mal seit 4 Jahren Luft zum Investieren. Gleichzeitig entscheiden KI-Systeme immer st&auml;rker, welche Restaurants G&auml;ste finden. Dieses Zeitfenster schlie&szlig;t sich.{" "}
        <strong className="text-white">60 Sekunden</strong> reichen um zu sehen, wo du stehst.
      </p>
      <div className="mt-10">
        <a
          href="#products"
          className="inline-block rounded-full transition-all duration-300 hover:scale-105 p-[1.5px] focus:outline-none"
          style={{ background: "linear-gradient(135deg, #FFB432 0%, #FF3CAC 50%, #FF2D78 100%)" }}
        >
          <span
            className="block px-10 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white"
            style={{ background: "#000008" }}
          >
            Jetzt kostenlos pr&uuml;fen
          </span>
        </a>
      </div>
    </section>
  );
}
