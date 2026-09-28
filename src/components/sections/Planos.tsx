import { ArrowRight, Check } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "../../lib/whatsapp";
import { Red, Section, SectionTitle } from "../ui/Section";
import { WhatsAppButton } from "../ui/WhatsAppButton";

const PLANS = [
  {
    name: "[[PREENCHER: NOME DO PLANO]]",
    featured: false,
  },
  {
    name: "[[PREENCHER: NOME DO PLANO]]",
    featured: true,
  },
  {
    name: "[[PREENCHER: NOME DO PLANO]]",
    featured: false,
  },
];

export function Planos() {
  return (
    <Section id="planos" className="py-16 md:py-24 bg-[#0B0B0B] border-y border-[#2A2A2A]">
      <SectionTitle align="center">
        Escolha <Red>seu plano.</Red>
      </SectionTitle>
      <p className="reveal mt-3 text-center text-[#B8B8B8]">
        Encontre a opção que combina com a sua rotina.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name + String(p.featured)}
            className={`reveal relative rounded-[12px] border bg-[#111111] p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
              p.featured ? "border-[#E60000]" : "border-[#2A2A2A] hover:border-[#E60000]"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E60000] text-white text-[11px] font-display font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Mais escolhido
              </span>
            )}
            <h3 className="font-display font-bold uppercase text-sm text-[#B8B8B8]">
              Plano
            </h3>
            <p className="mt-1 font-display font-extrabold uppercase leading-tight">
              {p.name}
            </p>
            <p className="mt-4">
              <span className="text-sm text-[#B8B8B8]">R$</span>{" "}
              <span className="font-display text-4xl font-extrabold">
                [[PREENCHER: VALOR]]
              </span>{" "}
              <span className="text-sm text-[#B8B8B8]">/mês</span>
            </p>
            <ul className="mt-6 space-y-2.5 text-sm flex-1">
              {[
                "Acesso à academia",
                "Estrutura completa",
                "Acompanhamento",
                "[[PREENCHER: BENEFÍCIO REAL]]",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-[#E60000]" /> {b}
                </li>
              ))}
            </ul>
            <WhatsAppButton
              block
              variant={p.featured ? "primary" : "outline"}
              className="mt-6"
              href={whatsappLink(WA_MESSAGES.plano(p.name))}
            >
              Quero esse plano <ArrowRight size={16} />
            </WhatsAppButton>
          </div>
        ))}
      </div>
    </Section>
  );
}
