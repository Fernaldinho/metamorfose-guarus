import { MapPin, MessageCircle, Phone } from "lucide-react";
import {
  ADDRESS_FULL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOGO_SRC,
  NAV_LINKS,
  PHONE_RAW,
} from "../../data/site";
import { WA_MESSAGES, whatsappLink } from "../../lib/whatsapp";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#2A2A2A] pb-24 md:pb-8">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={LOGO_SRC}
              alt="Academia Metamorfose Guarus"
              width={44}
              height={44}
              loading="lazy"
              decoding="async"
              className="w-11 h-11 rounded-full object-cover border border-[#2A2A2A]"
            />
            <span className="font-display font-extrabold uppercase text-lg">
              Metamorfose
            </span>
          </div>
          <p className="mt-4 text-sm text-[#B8B8B8] leading-relaxed">
            Academia Metamorfose Guarus — mais que treino, uma transformação em
            Campos dos Goytacazes.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h3 className="font-display font-bold uppercase tracking-wide text-sm mb-4">
            Links rápidos
          </h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-[#B8B8B8] hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div id="contato">
          <h3 className="font-display font-bold uppercase tracking-wide text-sm mb-4">
            Contato
          </h3>
          <p className="flex items-center gap-2 text-sm text-[#B8B8B8]">
            <Phone size={16} className="text-[#E60000]" /> {PHONE_RAW}
          </p>
          <p className="mt-2 flex items-start gap-2 text-sm text-[#B8B8B8]">
            <MapPin size={16} className="text-[#E60000] mt-0.5" /> {ADDRESS_FULL}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={whatsappLink(WA_MESSAGES.faleConosco)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-[#E60000] rounded-[8px] px-4 py-2.5 hover:bg-[#E60000] transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-[#2A2A2A] rounded-[8px] px-4 py-2.5 hover:border-[#E60000] transition-colors"
            >
              <InstagramIcon size={16} className="text-[#E60000]" /> @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2A2A2A]">
        <p className="mx-auto max-w-6xl px-4 md:px-8 py-5 text-xs text-[#B8B8B8]">
          © 2026 Academia Metamorfose Guarus. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
