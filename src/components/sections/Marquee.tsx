import { Flame } from "lucide-react";

const WORDS = [
  "Força",
  "Evolução",
  "Transformação",
  "Constância",
  "Resultado",
  "Energia",
];

function Strip({
  hidden = false,
  outline = false,
}: {
  hidden?: boolean;
  outline?: boolean;
}) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-8 pr-8">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center gap-8">
          <span
            className={`font-display text-lg md:text-xl font-extrabold uppercase tracking-widest ${
              outline ? "text-stroke-red" : "text-white"
            }`}
          >
            {w}
          </span>
          <Flame
            size={18}
            className={`shrink-0 ${outline ? "text-[#E60000]" : "text-white/80"}`}
          />
        </span>
      ))}
    </div>
  );
}

export function Marquee({
  variant = "solid",
  reverse = false,
}: {
  variant?: "solid" | "outline";
  reverse?: boolean;
}) {
  const outline = variant === "outline";
  return (
    <div
      className={`marquee overflow-hidden py-3 ${
        reverse ? "marquee-reverse" : ""
      } ${
        outline
          ? "border-y border-[#2A2A2A] bg-[#050505]"
          : "border-y border-[#B80000] bg-[#E60000]"
      }`}
    >
      <div className="marquee-track flex w-max">
        <Strip outline={outline} />
        <Strip hidden outline={outline} />
      </div>
    </div>
  );
}
