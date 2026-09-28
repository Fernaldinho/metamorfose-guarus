import { ArrowRight } from "lucide-react";
import { IMAGES } from "../../data/site";
import { WA_MESSAGES, whatsappLink } from "../../lib/whatsapp";
import { Red, Section, SectionTitle } from "../ui/Section";

const CARDS = [
  {
    title: "Musculação",
    desc: "Treine força, resistência e desenvolvimento muscular.",
    img: IMAGES.musculacao,
  },
  {
    title: "Cardio",
    desc: "Melhore seu condicionamento e sua resistência.",
    img: IMAGES.cardio,
  },
  {
    title: "Aulas",
    desc: "Movimente-se, divirta-se e mantenha sua rotina ativa.",
    img: IMAGES.aulas,
  },
];

export function Modalidades() {
  return (
    <Section id="modalidades" className="py-16 md:py-24">
      <div className="reveal max-w-2xl">
        <SectionTitle eyebrow="Modalidades">
          Encontre <Red>seu ritmo.</Red>
        </SectionTitle>
        <p className="mt-4 text-[#B8B8B8]">
          Treinos e modalidades para diferentes objetivos e níveis de experiência.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {CARDS.map((c) => (
          <a
            key={c.title}
            href={whatsappLink(
              `Olá! Quero saber mais sobre ${c.title} na Academia Metamorfose Guarus.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal glow-card group relative overflow-hidden rounded-[12px] border border-[#2A2A2A] hover:border-[#E60000] hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={c.img}
              alt={c.title}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:bg-black/60 transition-colors" />
            <div className="absolute bottom-0 p-5 w-full flex items-end justify-between gap-3">
              <div>
                <p className="h-1 w-10 bg-[#E60000] rounded mb-3" />
                <h3 className="font-display font-extrabold uppercase text-xl">{c.title}</h3>
                <p className="mt-1 text-sm text-[#B8B8B8]">{c.desc}</p>
              </div>
              <ArrowRight
                size={20}
                className="shrink-0 text-[#E60000] transition-transform group-hover:translate-x-1"
              />
            </div>
          </a>
        ))}
      </div>
      <p className="sr-only">{WA_MESSAGES.conheca}</p>
    </Section>
  );
}
