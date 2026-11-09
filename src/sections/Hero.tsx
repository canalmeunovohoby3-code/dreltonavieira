import { useEffect, useRef } from "react";
import { site, whatsappUrl } from "../data/site";
import { TypewriterTitle } from "../components/TypewriterTitle";
import { BoaConsultaLink } from "../components/BoaConsultaLink";
import { Reveal } from "../components/Reveal";
import { IconePin, IconeSeta } from "../components/Icons";
import "./Hero.css";

const itensMeta = [
  "Presencial em Aquidauana – MS",
  "Telemedicina",
  "Atendimento individualizado",
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tocar = () => {
      void video.play().catch(() => {});
    };

    if (typeof IntersectionObserver === "undefined") {
      tocar();
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        const entrada = entradas[0];
        if (entrada?.isIntersecting) {
          tocar();
        } else {
          video.pause();
        }
      },
      { threshold: 0.12 },
    );

    observador.observe(video);

    return () => {
      observador.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-titulo">
      <div className="container hero__grid">
        <div className="hero__conteudo">
          <Reveal variante="fade">
            <p className="eyebrow">Medicina em Aquidauana · MS</p>
          </Reveal>

          <TypewriterTitle />

          <Reveal atraso={130} variante="fade">
            <p className="hero__texto">
              Atendimento médico presencial e por telemedicina, com acompanhamento
              individualizado e atenção integral à sua saúde.
            </p>
          </Reveal>

          <Reveal atraso={190}>
            <div className="hero__acoes">
              <a
                className="btn btn--primario btn--whats"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar consulta
                <IconeSeta size={15} className="btn__seta" />
              </a>
              <a className="btn btn--secundario" href="#sobre">
                Conhecer o médico
                <IconeSeta size={15} className="btn__seta" />
              </a>
            </div>
          </Reveal>

          <Reveal atraso={220}>
            <BoaConsultaLink className="hero__boa" />
          </Reveal>

          <Reveal atraso={250} variante="fade">
            <ul className="hero__meta">
              {itensMeta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal atraso={150} variante="escala" className="hero__arte">
          <div className="hero__arte-painel">
            <video
              ref={videoRef}
              className="hero__arte-video"
              poster={site.imagens.hero}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls
              aria-label="Vídeo de apresentação do Dr. Elton Avieira"
            >
              <source src={site.videoHero} type="video/mp4" />
            </video>
            <div className="hero__arte-scrim" aria-hidden="true" />

            <div className="hero__arte-topo" aria-hidden="true">
              <span className="hero__arte-numero">01</span>
              <span className="hero__arte-rotulo">Atendimento médico</span>
              <span className="hero__arte-linha" />
            </div>

            <span className="hero__arte-vertical" aria-hidden="true">
              Presencial · Telemedicina
            </span>


          </div>

          <div className="hero__arte-tag" aria-hidden="true">
            <span className="hero__arte-tag-rotulo">Cuidado médico</span>
            <strong>Presencial + online</strong>
            <span className="hero__arte-tag-local">
              <IconePin size={13} />
              Aquidauana – MS
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
