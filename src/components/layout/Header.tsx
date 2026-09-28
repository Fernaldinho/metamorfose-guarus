import { useEffect, useState } from "react";
import { ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import { LOGO_SRC, NAV_LINKS } from "../../data/site";
import { WA_MESSAGES, whatsappLink } from "../../lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur border-b border-[#2A2A2A] transition-shadow ${
        scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.6)]" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8 h-[72px] md:h-[80px] flex items-center justify-between gap-4">
        {/* mobile: hamburger esquerda */}
        <button
          className="lg:hidden p-2 -ml-2 text-white"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={LOGO_SRC}
            alt="Academia Metamorfose Guarus"
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover border border-[#2A2A2A]"
          />
          <span className="font-display font-extrabold uppercase tracking-wide text-lg leading-none text-center lg:text-left">
            Metamorfose
            <span className="block text-[11px] font-body font-medium tracking-[0.2em] text-[#B8B8B8]">
              Guarus
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#B8B8B8] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* desktop CTA */}
        <a
          href={whatsappLink(WA_MESSAGES.header)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-[#E60000] hover:bg-[#FF0000] text-white font-display font-bold uppercase text-sm tracking-wide px-[22px] py-[12px] rounded-[8px] transition-all hover:scale-[1.02]"
        >
          Matricule-se <ArrowRight size={16} />
        </a>

        {/* mobile: contato direita */}
        <a
          href={whatsappLink(WA_MESSAGES.menuMobile)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-[8px] bg-[#E60000] text-white"
        >
          <MessageCircle size={20} />
        </a>
      </div>

      {/* menu mobile */}
      {open && (
        <div className="lg:hidden border-t border-[#2A2A2A] bg-[#050505]">
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Menu móvel">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-[8px] text-white hover:bg-[#181818] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink(WA_MESSAGES.menuMobile)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#E60000] text-white font-display font-bold uppercase px-5 py-4 rounded-[8px]"
            >
              Quero treinar <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
