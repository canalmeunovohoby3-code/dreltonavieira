import { linksNavegacao, site, whatsappUrl } from "../data/site";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import {
  IconeInstagram,
  IconePin,
  IconeSetaTopo,
  IconeWhatsApp,
} from "./Icons";
import "./Footer.css";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="rodape__grade" aria-hidden="true" />
      <div className="rodape__anel" aria-hidden="true" />

      <div className="container rodape__interno">
        <div className="rodape__topo">
          <Reveal className="rodape__marca" variante="subir">
            <a
              className="rodape__logo-link"
              href="#inicio"
              aria-label={`${site.nome} — página inicial`}
            >
              <Logo claro />
            </a>
            <p className="rodape__assinatura">
              Medicina com atenção em cada detalhe.
            </p>
            <span className="rodape__local">
              {site.cidade} – {site.estado} · Presencial e telemedicina
            </span>
          </Reveal>

          <Reveal atraso={80} className="rodape__coluna" variante="subir">
            <nav aria-label="Navegação do rodapé">
              <h3>Navegação</h3>
              <ul className="rodape__links">
                {linksNavegacao.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.rotulo}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal atraso={160} className="rodape__coluna" variante="subir">
            <h3>Contato</h3>
            <ul className="rodape__contato">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <IconeWhatsApp size={14} />
                  {site.whatsappExibicao}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconeInstagram size={14} />
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <span>
                  <IconePin size={14} />
                  {site.cidade} – {site.estado}
                </span>
              </li>
              <li>
                <span>Atendimento presencial e telemedicina</span>
              </li>
            </ul>
          </Reveal>

          <Reveal atraso={240} className="rodape__coluna" variante="subir">
            <h3>Informações</h3>
            <p className="rodape__info">
              Atendimento médico presencial em {site.cidade} – {site.estado} e por
              telemedicina, com acompanhamento individualizado.
            </p>

            {(site.crm || site.rqe) && (
              <div className="rodape__registro">
                {site.crm && <span>CRM/UF: {site.crm}</span>}
                {site.rqe && <span>RQE: {site.rqe}</span>}
              </div>
            )}
          </Reveal>
        </div>

        <Reveal atraso={320} className="rodape__base" variante="fade">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
          </p>
          <p className="rodape__disclaimer">
            Conteúdo informativo. Este site não substitui uma consulta médica.
          </p>
          <a className="rodape__topo-link" href="#inicio">
            Voltar ao topo
            <IconeSetaTopo size={14} />
          </a>
        </Reveal>
      </div>
    </footer>
  );
}
