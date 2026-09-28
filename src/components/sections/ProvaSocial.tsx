import { Star, User } from "lucide-react";
import { RATING_COUNT, RATING_VALUE, REVIEWS } from "../../data/site";
import { Red, Section, SectionTitle } from "../ui/Section";

export function ProvaSocial() {
  return (
    <Section className="py-16 md:py-24">
      <SectionTitle align="center" eyebrow="Avaliações">
        Quem treina, <Red>recomenda.</Red>
      </SectionTitle>
      <div className="reveal mt-4 flex items-center justify-center gap-2">
        <span className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} className="fill-[#E60000] text-[#E60000]" />
          ))}
        </span>
        <span className="font-display font-extrabold">{RATING_VALUE} no Google</span>
        <span className="text-sm text-[#B8B8B8]">{RATING_COUNT} avaliações</span>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure
            key={r.text}
            className="reveal glow-card rounded-[12px] border border-[#2A2A2A] bg-[#111111] p-6 hover:border-[#E60000] transition-colors"
          >
            <span className="font-display text-5xl leading-none text-[#E60000]">“</span>
            <blockquote className="mt-1 text-sm leading-relaxed text-white">
              {r.text}
            </blockquote>
            <span className="mt-3 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-[#E60000] text-[#E60000]" />
              ))}
            </span>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#181818] border border-[#2A2A2A]">
                <User size={18} className="text-[#B8B8B8]" />
              </span>
              <span className="text-xs text-[#B8B8B8]">{r.author}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
