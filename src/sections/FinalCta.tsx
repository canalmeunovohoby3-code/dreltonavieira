import { site, whatsappUrl } from "../data/site";
import { Reveal } from "../components/Reveal";
import { SectionMarker } from "../components/SectionMarker";
import { SinalPulso } from "../components/Graphics";
import { IconeSeta, IconeSetaDiagonal, IconeWhatsApp } from "../components/Icons";
import "./FinalCta.css";

export function FinalCta() {
  return (
    <section className="cta" aria-labelledby="cta-titulo">
      <div className="cta__grade" aria-hidden="true" />
      <div className="cta__anel" aria-hidden="true" />
      <SinalPulso className="cta__pulso" />

      <div className="container cta__inner">
        <Reveal variante="destaque" className="cta__conteudo">
          <SectionMarker numero="05" rotulo="Agendamento" claro />
          <h2 id="cta-titulo">Cuide da sua saúde com acompanhamento médico.</h2>
          <p>
            Entre em contato e saiba mais sobre as modalidades de atendimento e
            disponibilidade de consultas.
          </p>
        </Reveal>

        <Reveal atraso={120} variante="escala" className="cta__acoes">
          <a
            className="btn btn--claro btn--whats cta__botao"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconeWhatsApp size={17} className="btn__icone" />
            Agendar consulta pelo WhatsApp
            <IconeSeta size={15} className="btn__seta" />
          </a>

          <a
            className="cta__telefone"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.whatsappExibicao}
            <IconeSetaDiagonal size={15} />
          </a>

          <span className="cta__detalhe">
            Presencial em {site.cidade} – {site.estado} · Telemedicina
          </span>
        </Reveal>
      </div>
    </section>
  );
}
