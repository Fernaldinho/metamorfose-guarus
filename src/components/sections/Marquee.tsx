import { Flame } from "lucide-react";

const WORDS = [
  "Força",
  "Evolução",
  "Transformação",
  "Constância",
  "Resultado",
  "Energia",
];

function Strip({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {WORDS.map((w) => (
        <span key={w} className="flex items-center gap-8">
          <span className="font-display text-lg md:text-xl font-extrabold uppercase tracking-widest text-white">
            {w}
          </span>
          <Flame size={18} className="shrink-0 text-white/80" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-[#B80000] bg-[#E60000] py-3">
      <div className="marquee-track flex w-max">
        <Strip />
        <Strip hidden />
      </div>
    </div>
  );
}
