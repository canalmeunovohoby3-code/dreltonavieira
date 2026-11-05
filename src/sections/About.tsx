import { site } from "../data/site";
import { Media } from "../components/Media";
import { Reveal } from "../components/Reveal";
import { SectionMarker } from "../components/SectionMarker";
import { IconeSeta } from "../components/Icons";
import "./About.css";

const pilares = [
  {
    numero: "01",
    titulo: "Escuta",
    texto: "Cada consulta parte da história e das necessidades de cada paciente.",
  },
  {
    numero: "02",
    titulo: "Clareza",
    texto: "Orientações diretas para compreender cada etapa do acompanhamento.",
  },
  {
    numero: "03",
    titulo: "Acompanhamento",
    texto: "Cuidado próximo, presencial ou online, alinhado à sua rotina.",
  },
];

export function About() {
  return (
    <section className="sobre secao" id="sobre" aria-labelledby="sobre-titulo">
      <div className="container">
        <div className="sobre__cabecalho">
          <Reveal variante="fade">
            <SectionMarker numero="02" rotulo="Sobre o médico" />
          </Reveal>

          <Reveal atraso={70} variante="esquerda">
            <h2 id="sobre-titulo">
              Um cuidado médico que olha para você por inteiro.
            </h2>
          </Reveal>

          <Reveal atraso={130} variante="subir">
            <p className="sobre__lead">
              Dr. Elton Avieira oferece atendimento médico com atenção
              individualizada, buscando compreender as necessidades de cada paciente
              e proporcionar um acompanhamento alinhado aos seus objetivos de saúde
              e bem-estar.
            </p>
          </Reveal>
        </div>

        <div className="sobre__corpo">
          <Reveal variante="mascara" className="sobre__visual">
            <figure className="sobre__figura">
              <div className="sobre__foto">
                <Media
                  src={site.imagens.medico}
                  alt="Dr. Elton Avieira"
                  rotulo="Retrato do Dr. Elton Avieira"
                />
              </div>
              <figcaption className="sobre__legenda">
                <span className="sobre__legenda-nome">{site.nome}</span>
                <span className="sobre__legenda-local">
                  {site.cidade} · {site.estado}
                </span>
                <span className="sobre__legenda-mais" aria-hidden="true" />
              </figcaption>
            </figure>
          </Reveal>

          <div className="sobre__conteudo">
            <Reveal atraso={80}>
              <p className="sobre__texto">
                A consulta é conduzida com escuta e cuidado, para que as orientações
                façam sentido para a sua realidade e para o seu momento de saúde.
              </p>
            </Reveal>

            <Reveal atraso={140}>
              <p className="sobre__declaracao">
                Escuta atenta, orientação clara e acompanhamento próximo.
              </p>
            </Reveal>

            <div className="sobre__pilares">
              {pilares.map((pilar, indice) => (
                <Reveal
                  className="sobre__pilar"
                  atraso={200 + indice * 80}
                  key={pilar.numero}
                >
                  <span className="sobre__pilar-numero">{pilar.numero}</span>
                  <strong>{pilar.titulo}</strong>
                  <p>{pilar.texto}</p>
                </Reveal>
              ))}
            </div>

            <Reveal atraso={460} className="sobre__areas">
              <span className="sobre__areas-rotulo">Áreas de atuação</span>
              <p>
                Clínica geral, emagrecimento, diabetes e hipertensão e medicina
                integrativa.
              </p>
            </Reveal>

            <Reveal atraso={520}>
              <a className="link-seta sobre__link" href="#areas">
                Conhecer as áreas de atuação
                <IconeSeta size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
