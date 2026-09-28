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
}: {
  children: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <h2
      className={`font-display text-3xl md:text-5xl font-800 font-extrabold uppercase leading-[1.05] tracking-tight ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {children}
    </h2>
  );
}

export function Red({ children }: { children: ReactNode }) {
  return <span className="text-[#E60000]">{children}</span>;
}
