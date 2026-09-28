import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "whatsapp";
  size?: "md" | "lg";
  block?: boolean;
};

export function WhatsAppButton({
  children,
  variant = "primary",
  size = "md",
  block = false,
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-wide rounded-[8px] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none";
  const sizes =
    size === "lg" ? "px-7 py-4 text-base" : "px-[22px] py-[14px] text-sm";
  const variants =
    variant === "primary"
      ? "bg-[#E60000] text-white hover:bg-[#FF0000] btn-shine"
      : variant === "whatsapp"
        ? "bg-[#E60000] text-white hover:bg-[#FF0000] btn-shine"
        : "bg-transparent border border-[#E60000] text-white hover:bg-[#E60000]";
  const width = block ? "w-full" : "";
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes} ${variants} ${width} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
