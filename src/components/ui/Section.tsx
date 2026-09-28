import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  container = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  container?: boolean;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div
        className={
          container ? "mx-auto w-full max-w-6xl px-4 md:px-8" : "w-full"
        }
      >
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({
  children,
  align = "left",
  eyebrow,
}: {
  children: ReactNode;
  align?: "left" | "center";
  eyebrow?: string;
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2 font-display text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#E60000] ${
            centered ? "" : ""
          }`}
        >
          <span className="inline-block h-[2px] w-8 bg-[#E60000]" />
          {eyebrow}
          {centered && <span className="inline-block h-[2px] w-8 bg-[#E60000]" />}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-5xl font-800 font-extrabold uppercase leading-[1.05] tracking-tight`}
      >
        {children}
      </h2>
    </div>
  );
}

export function Red({ children }: { children: ReactNode }) {
  return <span className="text-[#E60000]">{children}</span>;
}
