import { areasAtuacao, whatsappUrl } from "../data/site";
import { Reveal } from "../components/Reveal";
import { SectionMarker } from "../components/SectionMarker";
import {
  IconeEstetoscopio,
  IconeFolha,
  IconeGota,
  IconeInfo,
  IconeIntegrativa,
  IconeSeta,
} from "../components/Icons";
import "./Areas.css";

const icones = {
  clinica: IconeEstetoscopio,
  emagrecimento: IconeFolha,
  comorbidades: IconeGota,
  integrativa: IconeIntegrativa,
};

const notaTirzepatida = areasAtuacao.find((area) => area.nota)?.nota;

export function Areas() {
  return (
    <section
      className="areas secao secao--azul"
      id="areas"
      aria-labelledby="areas-titulo"
    >
      <div className="container areas__grid">
        <div className="areas__intro">
          <Reveal variante="fade">
            <SectionMarker numero="03" rotulo="Áreas de atuação" />
          </Reveal>
          <Reveal atraso={70} variante="esquerda">
            <h2 id="areas-titulo">Áreas de atuação</h2>
          </Reveal>
          <Reveal atraso={120} variante="fade">
            <p className="areas__texto">
              Um acompanhamento que se adapta às necessidades de cada pessoa, com
              avaliação clínica e orientação individualizada em cada etapa.
            </p>
          </Reveal>
          <Reveal atraso={170}>
            <div className="areas__nota">
              <span className="areas__nota-linha" aria-hidden="true" />
              <p>
                Atendimento presencial em Aquidauana – MS e telemedicina, conforme
                a necessidade de cada caso.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="areas__lista">
          {areasAtuacao.map((area, indice) => {
            const Icone = icones[area.icone];

            return (
              <Reveal
                key={area.titulo}
                atraso={indice * 70}
                className="areas__item"
              >
                <article className="area">
                  <span className="area__numero" aria-hidden="true">
                    {area.numero}
                  </span>

                  <span className="area__icone" aria-hidden="true">
                    <Icone size={25} />
                  </span>

                  <div className="area__conteudo">
                    <h3>{area.titulo}</h3>
                    <p>{area.descricao}</p>
                    {area.servicos && (
                      <p className="area__servicos">{area.servicos}</p>
                    )}
                  </div>

                  <span className="area__acao" aria-hidden="true">
                    <span className="area__acao-rotulo">Falar</span>
                    <span className="area__seta">
                      <IconeSeta size={15} />
                    </span>
                  </span>

                  <a
                    className="area__link"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Falar sobre ${area.titulo} pelo WhatsApp`}
                  />
                </article>
              </Reveal>
            );
          })}

          {notaTirzepatida && (
            <Reveal atraso={areasAtuacao.length * 70 + 30} variante="fade">
              <p className="areas__observacao">
                <IconeInfo size={14} />
                <span>{notaTirzepatida}</span>
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
