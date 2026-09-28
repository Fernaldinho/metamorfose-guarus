import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  ADDRESS_CEP,
  ADDRESS_CITY,
  ADDRESS_NEIGHBORHOOD,
  ADDRESS_STATE,
  ADDRESS_STREET,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_RAW,
} from "../../data/site";
import { WA_MESSAGES, whatsappLink } from "../../lib/whatsapp";
import { Red, Section, SectionTitle } from "../ui/Section";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function Localizacao() {
  return (
    <Section className="py-16 md:py-24 bg-[#0B0B0B] border-t border-[#2A2A2A]">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="reveal">
          <SectionTitle eyebrow="Onde estamos">
            Venha <Red>nos conhecer.</Red>
          </SectionTitle>
          <h3 className="mt-6 font-display font-extrabold uppercase text-lg">
            Academia Metamorfose Guarus
          </h3>
          <address className="mt-3 not-italic text-[#B8B8B8] leading-relaxed">
            {ADDRESS_STREET}
            <br />
            {ADDRESS_NEIGHBORHOOD}
            <br />
            {ADDRESS_CITY} — {ADDRESS_STATE}
            <br />
            {ADDRESS_CEP}
          </address>
          <p className="mt-4 flex items-center gap-2 text-white">
            <Phone size={16} className="text-[#E60000]" /> {PHONE_RAW}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <WhatsAppButton href={whatsappLink(WA_MESSAGES.comoChegar)}>
              Como chegar <ArrowRight size={16} />
            </WhatsAppButton>
            <WhatsAppButton variant="outline" href={whatsappLink(WA_MESSAGES.faleConosco)}>
              <MessageCircle size={16} /> Fale conosco
            </WhatsAppButton>
          </div>
        </div>
        <div className="reveal overflow-hidden rounded-[12px] border border-[#2A2A2A]">
          <div className="flex items-center gap-2 border-b border-[#2A2A2A] bg-[#111111] px-4 py-3 text-sm text-[#B8B8B8]">
            <MapPin size={16} className="text-[#E60000]" /> {ADDRESS_STREET} —{" "}
            {ADDRESS_NEIGHBORHOOD}
          </div>
          <iframe
            title="Mapa — Academia Metamorfose Guarus"
            src={MAPS_EMBED_URL}
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#111111] px-4 py-3 text-sm text-center hover:text-[#E60000] transition-colors"
          >
            Abrir rota no Google Maps →
          </a>
        </div>
      </div>
    </Section>
  );
}
