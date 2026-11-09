import { whatsappUrl } from "../data/site";
import { Reveal } from "../components/Reveal";
import { SectionMarker } from "../components/SectionMarker";
import { SinalPulso } from "../components/Graphics";
import { BoaConsultaLink } from "../components/BoaConsultaLink";
import {
  IconeCheck,
  IconePin,
  IconeSeta,
  IconeVideo,
  IconeWhatsApp,
} from "../components/Icons";
import "./Modalities.css";

const presencial = [
  "Consulta médica presencial",
  "Avaliação e acompanhamento individualizado",
  "Atendimento em Aquidauana – MS",
];

const telemedicina = [
  "Teleconsulta por vídeo",
  "Acompanhamento à distância",
  "Agendamento pelo WhatsApp",
];

export function Modalities() {
  return (
    <section
      className="modalidades secao"
      id="atendimento"
      aria-labelledby="modalidades-titulo"
    >
      <div className="container">
        <div className="modalidades__cabecalho">
          <Reveal variante="fade">
            <SectionMarker numero="04" rotulo="Modalidades" />
          </Reveal>
          <Reveal atraso={70} variante="esquerda">
            <h2 id="modalidades-titulo">Duas formas de cuidar da sua saúde.</h2>
          </Reveal>
          <Reveal atraso={130} variante="direita">
            <p className="modalidades__intro">
              Escolha a modalidade que melhor se adequa à sua rotina. Em ambos os
              formatos, o atendimento é individualizado e começa por uma conversa.
            </p>
          </Reveal>
        </div>

        <div className="modalidades__split">
          <Reveal variante="esquerda" className="modalidades__coluna">
            <article className="modalidade modalidade--presencial">
              <div className="modalidade__grafico" aria-hidden="true">
                <span className="modalidade__anel" />
                <IconePin size={30} />
              </div>

              <div className="modalidade__conteudo">
                <div className="modalidade__topo">
                  <span className="modalidade__numero">01</span>
                  <span className="modalidade__rotulo">Presencial</span>
                  <span className="modalidade__linha" aria-hidden="true" />
                </div>

                <h3>Consulta presencial</h3>
                <p className="modalidade__descricao">
                  Atendimento em Aquidauana – MS, com atenção individualizada e
                  acolhimento.
                </p>

                <ul className="modalidade__lista">
                  {presencial.map((item) => (
                    <li key={item}>
                      <IconeCheck size={14} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  className="btn btn--primario btn--whats modalidade__cta"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconeWhatsApp size={16} className="btn__icone" />
                  Agendar pelo WhatsApp
                  <IconeSeta size={14} className="btn__seta" />
                </a>

                <BoaConsultaLink className="modalidade__boa" />
              </div>

              <span className="modalidade__palavra" aria-hidden="true">
                Presencial
              </span>
            </article>
          </Reveal>

          <Reveal atraso={110} variante="direita" className="modalidades__coluna">
            <article className="modalidade modalidade--tele">
              <div className="modalidade__grafico modalidade__grafico--tele" aria-hidden="true">
                <span className="modalidade__frame-video" />
                <IconeVideo size={26} />
                <SinalPulso className="modalidade__pulso" />
              </div>

              <div className="modalidade__conteudo">
                <div className="modalidade__topo">
                  <span className="modalidade__numero">02</span>
                  <span className="modalidade__rotulo">Telemedicina</span>
                  <span className="modalidade__linha" aria-hidden="true" />
                </div>

                <h3>Telemedicina</h3>
                <p className="modalidade__descricao">
                  Tenha acesso ao atendimento médico online, com praticidade e
                  comodidade, respeitando os critérios clínicos e as possibilidades
                  de atendimento.
                </p>

                <ul className="modalidade__lista">
                  {telemedicina.map((item) => (
                    <li key={item}>
                      <IconeCheck size={14} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  className="btn btn--claro btn--whats modalidade__cta"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconeWhatsApp size={16} className="btn__icone" />
                  Agendar pelo WhatsApp
                  <IconeSeta size={14} className="btn__seta" />
                </a>

                <BoaConsultaLink claro className="modalidade__boa" />
              </div>

              <span className="modalidade__palavra" aria-hidden="true">
                Online
              </span>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
