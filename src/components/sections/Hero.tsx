import { ArrowRight, CheckCircle2, MapPin, MessageCircle } from "lucide-react";
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
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8 pt-[130px] md:pt-[150px] pb-14 md:pb-20">
        <p className="reveal inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white/90 border border-[#2A2A2A] bg-white/[0.06] rounded-full px-4 py-2">
          <MapPin size={16} className="text-[#E60000]" /> Campos dos Goytacazes — RJ
        </p>
        <h1 className="reveal mt-5 font-display font-extrabold uppercase leading-[0.95] tracking-tight text-5xl md:text-7xl">
          Sua
          <br />
          <span className="text-[#E60000]">Metamorfose</span>
          <br />
          começa
          <br />
          aqui.
        </h1>
        <p className="reveal mt-5 max-w-xl text-base md:text-lg text-white leading-relaxed">
          Mais que uma academia. Um espaço para você cuidar do corpo, da saúde
          e evoluir todos os dias.
        </p>
        <div className="reveal mt-8 flex flex-col sm:flex-row gap-3">
          <WhatsAppButton href={whatsappLink(WA_MESSAGES.hero)}>
            Matricule-se <ArrowRight size={16} />
          </WhatsAppButton>
          <WhatsAppButton variant="outline" href={whatsappLink(WA_MESSAGES.conheca)}>
            Conheça a academia <ArrowRight size={16} />
          </WhatsAppButton>
        </div>
        <div className="reveal mt-6">
          <span className="inline-flex items-center gap-2 text-sm border border-[#2A2A2A] bg-white/[0.06] rounded-full px-4 py-2">
            <CheckCircle2 size={18} className="text-[#E60000]" />
            <MessageCircle size={16} className="text-white/70" />
            Atendimento direto no WhatsApp
          </span>
        </div>
      </div>
    </section>
  );
}
