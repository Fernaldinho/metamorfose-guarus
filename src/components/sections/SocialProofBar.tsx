const ITEMS = [
  { num: "53+", label: "Avaliações" },
  { num: "5.0", label: "Avaliação no Google" },
  { num: "100%", label: "Foco na sua evolução" },
];

export function SocialProofBar() {
  return (
    <div className="border-y border-[#2A2A2A] bg-[#0B0B0B]">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {ITEMS.map((it) => (
          <div key={it.label} className="reveal">
            <p className="font-display text-4xl md:text-5xl font-extrabold text-[#E60000]">
              {it.num}
            </p>
            <p className="mt-1 text-xs md:text-sm uppercase tracking-[0.18em] text-white/80">
              {it.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
