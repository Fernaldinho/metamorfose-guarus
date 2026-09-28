import { Building2, Flame, HeartHandshake, Users } from "lucide-react";
import { Red, Section, SectionTitle } from "../ui/Section";

const ITEMS = [
  {
    n: "01",
    icon: Building2,
    title: "Estrutura",
    desc: "Equipamentos e espaço preparados para seus treinos.",
  },
  {
    n: "02",
    icon: HeartHandshake,
    title: "Acompanhamento",
    desc: "Orientação para você evoluir com segurança.",
  },
  {
    n: "03",
    icon: Users,
    title: "Ambiente",
    desc: "Um espaço pensado para tornar seu treino mais agradável.",
  },
  {
    n: "04",
    icon: Flame,
    title: "Constância",
    desc: "Resultados são construídos através de pequenos avanços todos os dias.",
  },
];

export function Diferenciais() {
  return (
    <Section id="diferenciais" className="py-16 md:py-24">
      <SectionTitle align="center" eyebrow="Diferenciais">
        Por que <Red>Metamorfose?</Red>
      </SectionTitle>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {ITEMS.map((it, i) => (
          <div
            key={it.n}
            style={{ transitionDelay: `${i * 90}ms` }}
            className="reveal glow-card rounded-[12px] border border-[#2A2A2A] bg-[#111111] p-6 hover:border-[#E60000] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-4xl font-extrabold text-[#E60000]">
                {it.n}
              </span>
              <it.icon size={26} className="text-[#E60000]" />
            </div>
            <h3 className="mt-4 font-display font-bold uppercase text-lg">{it.title}</h3>
            <p className="mt-2 text-sm text-[#B8B8B8] leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
