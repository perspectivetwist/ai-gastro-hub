import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MoreProblemsSection from "@/components/MoreProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import ProductsSection from "@/components/ProductsSection";
import VisionSection from "@/components/VisionSection";
import GastroFaq from "@/components/GastroFaq";
import TrustSection from "@/components/TrustSection";

// SEO/AEO Keywords: KI Restaurant, ChatGPT Restaurant, KI-Sichtbarkeit Gastronomie, Restaurant bei ChatGPT
// AEO-Strategie: Title und H1 beantworten die Frage die Gastronomen bei ChatGPT stellen würden

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="max-w-2xl mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-400 leading-relaxed">
          &Uuml;ber 15.000 Restaurants haben ihren KI-Score bereits gesehen. AI Shift Drift zeigt dir in 60 Sekunden, ob ChatGPT dein Restaurant kennt — kostenlos, auf Deutsch, ohne Abo.
        </p>
      </section>
      <ProblemSection />
      <MoreProblemsSection />
      <SolutionSection />
      <ProductsSection />
      <VisionSection />
      <GastroFaq />
      <TrustSection />
    </>
  );
}
