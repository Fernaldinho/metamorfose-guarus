import { IMAGES } from "../../data/site";
import { Red, Section, SectionTitle } from "../ui/Section";

export function NossaMetamorfose() {
  return (
    <Section className="py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="reveal">
          <SectionTitle>
            Mais que treino. <Red>Uma transformação.</Red>
          </SectionTitle>
          <p className="mt-6 text-[#B8B8B8] leading-relaxed">
            A verdadeira metamorfose não acontece de um dia para o outro. Ela
            acontece na constância, nas escolhas e em cada pequeno avanço. Na
            Academia Metamorfose Guarus, cada aluno tem uma história, cada
            história tem uma transformação e cada transformação representa uma
            evolução.
          </p>
          <p className="mt-6 inline-block border-l-4 border-[#E60000] pl-4 font-display font-bold uppercase tracking-wide">
            Evolua. Treine. Transforme.
          </p>
        </div>
        <div className="reveal">
          <img
            src={IMAGES.metamorfose}
            alt="Aluno treinando musculação na Metamorfose Guarus"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="w-full rounded-[12px] border border-[#2A2A2A] object-cover aspect-[4/3] transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </Section>
  );
}
