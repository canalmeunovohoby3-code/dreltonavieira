import { useState } from "react";
import "./Media.css";

type MediaProps = {
  src: string;
  alt: string;
  rotulo: string;
  prioridade?: boolean;
  className?: string;
};

export function Media({ src, alt, rotulo, prioridade = false, className }: MediaProps) {
  const [falhou, setFalhou] = useState(false);

  return (
    <div className={`midia${className ? ` ${className}` : ""}`}>
      {!falhou ? (
        <img
          className="midia__imagem"
          src={src}
          alt={alt}
          loading={prioridade ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFalhou(true)}
        />
      ) : (
        <div className="midia__placeholder" role="img" aria-label={alt}>
          <span className="midia__monograma" aria-hidden="true">
            EA
          </span>
          <span className="midia__rotulo">{rotulo}</span>
          <span className="midia__dica">Espaço reservado para fotografia</span>
        </div>
      )}
    </div>
  );
}
