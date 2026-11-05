import { Fragment, useEffect, useState } from "react";

const LINHAS = [
  { texto: "Sua saúde", destaque: false },
  { texto: "merece atenção", destaque: false },
  { texto: "em cada detalhe.", destaque: true },
];

let sequencia = 0;

const linhas = LINHAS.map((linha) => ({
  ...linha,
  palavras: linha.texto.split(" ").map((palavra) =>
    Array.from(palavra).map((caractere) => {
      const indice = sequencia;
      sequencia += 1;
      return { caractere, indice };
    }),
  ),
}));

const TOTAL = sequencia;
const TEXTO = LINHAS.map((linha) => linha.texto).join(" ");

type Fase = "digitando" | "pausa" | "apagando";

export function TypewriterTitle() {
  const [quantidade, setQuantidade] = useState(1);
  const [fase, setFase] = useState<Fase>("digitando");

  useEffect(() => {
    let temporizador: number;

    if (fase === "digitando") {
      if (quantidade < TOTAL) {
        temporizador = window.setTimeout(
          () => setQuantidade((atual) => atual + 1),
          46,
        );
      } else {
        temporizador = window.setTimeout(() => setFase("pausa"), 120);
      }
    } else if (fase === "pausa") {
      temporizador = window.setTimeout(() => setFase("apagando"), 2000);
    } else if (quantidade > 0) {
      temporizador = window.setTimeout(
        () => setQuantidade((atual) => atual - 1),
        24,
      );
    } else {
      temporizador = window.setTimeout(() => setFase("digitando"), 380);
    }

    return () => window.clearTimeout(temporizador);
  }, [fase, quantidade]);

  return (
    <h1 className="hero__titulo" id="hero-titulo" aria-label={TEXTO}>
      {linhas.map((linha, indiceLinha) => (
        <Fragment key={linha.texto}>
          <span
            className={`hero__linha${
              linha.destaque ? " hero__linha--destaque" : ""
            }`}
            aria-hidden="true"
          >
            {linha.palavras.map((palavra, indicePalavra) => (
              <Fragment key={palavra[0]?.indice ?? indicePalavra}>
                <span className="type-palavra">
                  {palavra.map(({ caractere, indice }) => (
                    <span
                      key={indice}
                      className={`type-caractere${
                        indice < quantidade ? " type-caractere--visivel" : ""
                      }`}
                    >
                      {caractere}
                    </span>
                  ))}
                </span>
                {indicePalavra < linha.palavras.length - 1 ? " " : null}
              </Fragment>
            ))}
          </span>
          {indiceLinha < linhas.length - 1 ? " " : null}
        </Fragment>
      ))}
    </h1>
  );
}
