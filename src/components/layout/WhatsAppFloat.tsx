import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "../../lib/whatsapp";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div
      className={`fixed right-4 z-[60] flex flex-col items-end gap-3 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
    >
      {open && (
        <a
          href={whatsappLink(WA_MESSAGES.flutuante)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#111111] border border-[#2A2A2A] rounded-[12px] pl-4 pr-2 py-2 shadow-2xl"
        >
          <span className="text-sm">Unidade Guarus — falar agora</span>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-[8px] bg-[#E60000] text-white">
            <MessageCircle size={20} />
          </span>
        </a>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar WhatsApp" : "Falar conosco no WhatsApp"}
        className="btn-pulse group flex items-center gap-3 bg-[#E60000] hover:bg-[#FF0000] text-white rounded-[12px] pl-4 pr-4 md:pr-5 py-3 shadow-2xl transition-all"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        <span className="hidden md:inline font-display font-bold uppercase text-sm tracking-wide">
          Fale conosco
        </span>
        <span className="md:hidden sr-only">WhatsApp</span>
      </button>
    </div>
  );
}
