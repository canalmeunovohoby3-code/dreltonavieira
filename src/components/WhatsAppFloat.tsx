import { whatsappUrl } from "../data/site";
import { IconeWhatsApp } from "./Icons";
import "./WhatsAppFloat.css";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-flutuante"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
    >
      <span className="whatsapp-flutuante__texto" aria-hidden="true">
        Agendar
      </span>
      <span className="whatsapp-flutuante__botao">
        <IconeWhatsApp size={27} />
      </span>
    </a>
  );
}
