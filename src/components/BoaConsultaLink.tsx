import { site } from "../data/site";
import { IconeSetaDiagonal } from "./Icons";
import "./BoaConsultaLink.css";

type BoaConsultaLinkProps = {
  className?: string;
  claro?: boolean;
  texto?: string;
  onClick?: () => void;
};

export function BoaConsultaLink({
  className,
  claro = false,
  texto = "Agendar pelo BoaConsulta",
  onClick,
}: BoaConsultaLinkProps) {
  return (
    <a
      className={`boa-consulta${claro ? " boa-consulta--claro" : ""}${
        className ? ` ${className}` : ""
      }`}
      href={site.boaConsultaUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {texto}
      <IconeSetaDiagonal size={13} />
    </a>
  );
}
