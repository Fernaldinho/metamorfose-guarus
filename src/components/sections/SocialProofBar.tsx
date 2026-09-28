import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { value: 53, decimals: 0, suffix: "+", label: "Avaliações" },
  { value: 5.0, decimals: 1, suffix: "", label: "Avaliação no Google" },
  { value: 100, decimals: 0, suffix: "%", label: "Foco na sua evolução" },
];

function useCountUp(
  target: number,
  decimals: number,
  start: boolean,
  duration = 1400,
) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val.toFixed(decimals);
}

function Stat({
  value,
  decimals,
  suffix,
  label,
  start,
}: {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const display = useCountUp(value, decimals, start);
  return (
    <div className="reveal">
      <p className="font-display text-4xl md:text-5xl font-extrabold text-[#E60000] tabular-nums">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-xs md:text-sm uppercase tracking-[0.18em] text-white/80">
        {label}
      </p>
    </div>
  );
}

export function SocialProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setStart(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="border-y border-[#2A2A2A] bg-[#0B0B0B]">
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-4 md:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
      >
        {ITEMS.map((it) => (
          <Stat key={it.label} {...it} start={start} />
        ))}
      </div>
    </div>
  );
}
