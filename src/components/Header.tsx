import { useEffect, useState } from "react";
import { linksNavegacao, site, whatsappUrl } from "../data/site";
import { Logo } from "./Logo";
import { BoaConsultaLink } from "./BoaConsultaLink";
import {
  IconeFechar,
  IconeInstagram,
  IconeMenu,
  IconePin,
  IconeSeta,
  IconeWhatsApp,
} from "./Icons";
import "./Header.css";

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [rolado, setRolado] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState("inicio");

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 8);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    const ids = linksNavegacao.map((link) => link.href.slice(1));
    let frame = 0;

    const atualizar = () => {
      frame = 0;
      const header = document.querySelector<HTMLElement>(".cabecalho");
      const altura = header?.offsetHeight ?? 82;
      const ponto = window.scrollY + altura + Math.min(window.innerHeight * 0.26, 210);
      let atual = ids[0];

      for (const id of ids) {
        const elemento = document.getElementById(id);
        if (!elemento) continue;
        const topo = elemento.getBoundingClientRect().top + window.scrollY;
        if (topo <= ponto) atual = id;
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      ) {
        atual = ids[ids.length - 1];
      }

      setSecaoAtiva(atual);
    };

    const aoRolar = () => {
      if (!frame) frame = requestAnimationFrame(atualizar);
    };

    atualizar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);

    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!aberto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAberto(false);
    };

    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.body.style.overflow = overflowAnterior;
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto]);

  useEffect(() => {
    if (!aberto) return;

    const aoRedimensionar = () => {
      if (window.innerWidth > 1080) setAberto(false);
    };

    window.addEventListener("resize", aoRedimensionar);
    return () => window.removeEventListener("resize", aoRedimensionar);
  }, [aberto]);

  const fecharMenu = () => setAberto(false);

  const linkAtivo = (href: string) => secaoAtiva === href.slice(1);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__interno">
          <span className="topbar__forte">
            Medicina presencial + telemedicina
          </span>
          <div className="topbar__direita">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconeInstagram size={13} />
              {site.instagramHandle}
            </a>
            <span className="topbar__separador" aria-hidden="true" />
            <span>
              <IconePin size={13} />
              {site.cidade} – {site.estado}
            </span>
          </div>
        </div>
      </div>

      <header
        className={`cabecalho${rolado ? " cabecalho--rolado" : ""}${
          aberto ? " cabecalho--menu" : ""
        }`}
      >
        <div className="container cabecalho__interno">
          <a
            className="cabecalho__marca"
            href="#inicio"
            aria-label={`${site.nome} — página inicial`}
            onClick={fecharMenu}
          >
            <Logo prioridade claro />
          </a>

          <nav className="cabecalho__nav" aria-label="Navegação principal">
            {linksNavegacao.map((link) => (
              <a
                key={link.href}
                className={`cabecalho__link${
                  linkAtivo(link.href) ? " cabecalho__link--ativo" : ""
                }`}
                href={link.href}
                aria-current={linkAtivo(link.href) ? "location" : undefined}
              >
                {link.rotulo}
              </a>
            ))}
          </nav>

          <div className="cabecalho__acoes">
            <span className="cabecalho__divisor" aria-hidden="true" />
            <BoaConsultaLink claro className="cabecalho__boa" texto="BoaConsulta" />
            <a
              className="btn btn--claro btn--whats cabecalho__cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar consulta
              <IconeSeta size={14} className="btn__seta" />
            </a>

            <button
              type="button"
              className="cabecalho__menu-botao"
              aria-expanded={aberto}
              aria-controls="menu-mobile"
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              onClick={() => setAberto((valor) => !valor)}
            >
              {aberto ? <IconeFechar size={22} /> : <IconeMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`menu${aberto ? " menu--aberto" : ""}`}
        id="menu-mobile"
        aria-hidden={!aberto}
      >
        <div className="menu__grade" aria-hidden="true" />
        <div className="menu__anel" aria-hidden="true" />

        <div className="menu__interno">
          <nav aria-label="Navegação para dispositivos móveis">
            <ul className="menu__lista">
              {linksNavegacao.map((link, indice) => (
                <li key={link.href}>
                  <a
                    className={`menu__link${
                      linkAtivo(link.href) ? " menu__link--ativo" : ""
                    }`}
                    href={link.href}
                    onClick={fecharMenu}
                    aria-current={linkAtivo(link.href) ? "location" : undefined}
                  >
                    <span className="menu__numero" aria-hidden="true">
                      {String(indice + 1).padStart(2, "0")}
                    </span>
                    {link.rotulo}
                    <span className="menu__seta" aria-hidden="true">
                      <IconeSeta size={16} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu__rodape">
            <a
              className="btn btn--claro btn--whats menu__cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={fecharMenu}
            >
              <IconeWhatsApp size={17} className="btn__icone" />
              Agendar pelo WhatsApp
            </a>

            <BoaConsultaLink
              claro
              className="menu__boa"
              onClick={fecharMenu}
            />

            <div className="menu__contatos">
              <span>
                <IconePin size={14} />
                {site.cidade} – {site.estado}
              </span>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                {site.instagramHandle}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {site.whatsappExibicao}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
