import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { WhatsAppFloat } from "./components/layout/WhatsAppFloat";
import { CtaFinal } from "./components/sections/CtaFinal";
import { DestaqueTransformacao } from "./components/sections/DestaqueTransformacao";
import { Diferenciais } from "./components/sections/Diferenciais";
import { Hero } from "./components/sections/Hero";
import { Localizacao } from "./components/sections/Localizacao";
import { Marquee } from "./components/sections/Marquee";
import { Matricula } from "./components/sections/Matricula";
import { Modalidades } from "./components/sections/Modalidades";
import { NossaMetamorfose } from "./components/sections/NossaMetamorfose";
import { Planos } from "./components/sections/Planos";
import { ProvaSocial } from "./components/sections/ProvaSocial";
import { SocialProofBar } from "./components/sections/SocialProofBar";
import { useReveal } from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased">
      <ScrollProgress />
      <Header />
      <main className="pt-[72px] md:pt-[80px]">
        {/* 1. IMPACTO */}
        <Hero />
        <Marquee />
        {/* 2. CREDIBILIDADE */}
        <SocialProofBar />
        {/* 3. IDENTIDADE */}
        <NossaMetamorfose />
        {/* 4. MODALIDADES */}
        <Modalidades />
        {/* 5. DIFERENCIAIS */}
        <Diferenciais />
        {/* 6. TRANSFORMAÇÃO */}
        <DestaqueTransformacao />
        {/* 7. CONVERSÃO */}
        <Planos />
        {/* 7b. MATRÍCULA INTERATIVA */}
        <Matricula />
        {/* 8. LOCALIZAÇÃO */}
        <Localizacao />
        {/* 9. PROVA SOCIAL */}
        <ProvaSocial />
        <Marquee variant="outline" reverse />
        {/* 11. CTA FINAL */}
        <CtaFinal />
      </main>
      {/* 12. FOOTER */}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
