import { useState } from "react";
import { site } from "../data/site";
import "./Logo.css";

type LogoProps = {
  prioridade?: boolean;
  claro?: boolean;
  className?: string;
};

export function Logo({
  prioridade = false,
  claro = false,
  className,
}: LogoProps) {
  const [falhou, setFalhou] = useState(false);

  return (
    <span
      className={`logo${claro ? " logo--claro" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {!falhou ? (
        <img
          className="logo__imagem"
          src={site.logo.png}
          alt={site.nome}
          width={882}
          height={630}
          loading={prioridade ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFalhou(true)}
        />
      ) : (
        <span className="logo__fallback" role="img" aria-label={site.nome}>
          <span className="logo__simbolo" aria-hidden="true">
            EA
          </span>
          <span className="logo__texto" aria-hidden="true">
            <span className="logo__nome">{site.nome}</span>
            <span className="logo__sub">Medicina</span>
          </span>
        </span>
      )}
    </span>
  );
}
