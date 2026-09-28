import { ArrowRight, CheckCircle2, ChevronDown, MapPin, MessageCircle } from "lucide-react";
import { IMAGES } from "../../data/site";
import { WA_MESSAGES, whatsappLink } from "../../lib/whatsapp";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function Hero() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden">
      <img
        src={IMAGES.hero}
        alt="Pessoa treinando na Academia Metamorfose Guarus"
        width={1600}
        height={900}
        fetchPriority="high"
        className="kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      {/* brilho vermelho animado */}
      <div
        aria-hidden="true"
        className="anim-float pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#E60000]/25 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8 pt-[130px] md:pt-[150px] pb-14 md:pb-20">
        <p className="anim-fade-up anim-d1 inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white/90 border border-[#2A2A2A] bg-white/[0.06] rounded-full px-4 py-2">
          <MapPin size={16} className="text-[#E60000]" /> Campos dos Goytacazes — RJ
        </p>
        <h1 className="anim-fade-up anim-d2 mt-5 font-display font-extrabold uppercase leading-[0.95] tracking-tight text-5xl md:text-7xl">
          Sua
          <br />
          <span className="text-[#E60000] drop-shadow-[0_0_25px_rgba(230,0,0,0.45)]">
            Metamorfose
          </span>
          <br />
          começa
          <br />
          aqui.
        </h1>
        <p className="anim-fade-up anim-d3 mt-5 max-w-xl text-base md:text-lg text-white leading-relaxed">
          Mais que uma academia. Um espaço para você cuidar do corpo, da saúde
          e evoluir todos os dias.
        </p>
        <div className="anim-fade-up anim-d4 mt-8 flex flex-col sm:flex-row gap-3">
          <WhatsAppButton
            className="btn-pulse"
            href={whatsappLink(WA_MESSAGES.hero)}
          >
            Matricule-se <ArrowRight size={16} />
          </WhatsAppButton>
        </div>
        <div className="anim-fade-up anim-d5 mt-6">
          <span className="inline-flex items-center gap-2 text-sm border border-[#2A2A2A] bg-white/[0.06] rounded-full px-4 py-2">
            <CheckCircle2 size={18} className="text-[#E60000]" />
            <MessageCircle size={16} className="text-white/70" />
            Atendimento direto no WhatsApp
          </span>
        </div>
      </div>

      <a
        href="#transformacao"
        aria-label="Rolar para a próxima seção"
        className="anim-float absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-white/60 hover:text-white transition-colors md:block"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
