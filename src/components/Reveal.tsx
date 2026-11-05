import { useEffect, useRef, useState, type ReactNode } from "react";

export type RevealVariante =
  | "subir"
  | "esquerda"
  | "direita"
  | "escala"
  | "fade"
  | "mascara"
  | "destaque";

type RevealProps = {
  children: ReactNode;
  atraso?: number;
  variante?: RevealVariante;
  className?: string;
};

export function Reveal({
  children,
  atraso = 0,
  variante = "subir",
  className = "",
}: RevealProps) {
  const referencia = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = referencia.current;
    if (!elemento) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }

    let observador: IntersectionObserver | undefined;

    try {
      observador = new IntersectionObserver(
        (entradas) => {
          const entrada = entradas[0];
          if (entrada?.isIntersecting) {
            setVisivel(true);
            observador?.disconnect();
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
      );

      observador.observe(elemento);
    } catch {
      setVisivel(true);
    }

    return () => observador?.disconnect();
  }, []);

  return (
    <div
      ref={referencia}
      className={`revelar revelar--${variante}${
        visivel ? " revelar--visivel" : ""
      }${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${atraso}ms` }}
    >
      {children}
    </div>
  );
}
