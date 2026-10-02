import { IMAGES } from "../../data/site";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function CtaFinal() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={IMAGES.ctaFinal}
        alt="Pessoa treinando — comece sua transformação"
        width={1800}
        height={800}
        loading="lazy"
        decoding="async"
        className="kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#B80000]/30 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8 py-20 md:py-28 text-center">
        <h2 className="reveal font-display font-extrabold uppercase text-3xl md:text-6xl leading-tight">
          Sua transformação começa <br className="hidden md:block" /> com uma decisão.
        </h2>
        <p className="reveal mt-4 text-[#B8B8B8] text-lg">Dê o primeiro passo hoje.</p>
        <div className="reveal mt-8 flex justify-center">
          <WhatsAppButton size="lg" href="#matricula">
            Quero começar
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
