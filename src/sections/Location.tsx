import { site, urlWhatsApp, whatsappUrl } from "../data/site";
import { Reveal } from "../components/Reveal";
import { SectionMarker } from "../components/SectionMarker";
import {
  IconeCalendario,
  IconeCheck,
  IconeInstagram,
  IconePin,
  IconeSetaDiagonal,
  IconeWhatsApp,
} from "../components/Icons";
import "./Location.css";

export function Location() {
  return (
    <section className="local secao" id="contato" aria-labelledby="local-titulo">
      <div className="container local__grid">
        <div className="local__conteudo">
          <Reveal variante="fade">
            <SectionMarker numero="06" rotulo="Localização e contato" />
          </Reveal>

          <Reveal atraso={70} variante="esquerda">
            <h2 id="local-titulo">Perto de você, em Aquidauana ou online.</h2>
          </Reveal>

          <Reveal atraso={120} variante="fade">
            <p className="local__texto">
              Consultas presenciais no consultório em Aquidauana – MS e atendimento
              por telemedicina, com acompanhamento individualizado e atenção às
              necessidades de cada paciente.
            </p>
          </Reveal>

          <Reveal atraso={170} variante="subir">
            <div className="local__contatos">
              <a
                className="contato"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contato__icone" aria-hidden="true">
                  <IconeWhatsApp size={18} />
                </span>
                <span className="contato__texto">
                  <span className="contato__rotulo">WhatsApp principal</span>
                  <strong>{site.whatsappExibicao}</strong>
                </span>
                <span className="contato__seta" aria-hidden="true">
                  <IconeSetaDiagonal size={15} />
                </span>
              </a>

              {site.whatsappAlternativos.map((contato) => (
                <a
                  key={contato.numero}
                  className="contato"
                  href={urlWhatsApp(contato.numero)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contato__icone" aria-hidden="true">
                    <IconeWhatsApp size={18} />
                  </span>
                  <span className="contato__texto">
                    <span className="contato__rotulo">WhatsApp alternativo</span>
                    <strong>{contato.exibicao}</strong>
                  </span>
                  <span className="contato__seta" aria-hidden="true">
                    <IconeSetaDiagonal size={15} />
                  </span>
                </a>
              ))}

              <a
                className="contato"
                href={site.boaConsultaUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contato__icone" aria-hidden="true">
                  <IconeCalendario size={18} />
                </span>
                <span className="contato__texto">
                  <span className="contato__rotulo">BoaConsulta</span>
                  <strong>Agendar consulta online</strong>
                </span>
                <span className="contato__seta" aria-hidden="true">
                  <IconeSetaDiagonal size={15} />
                </span>
              </a>

              <a
                className="contato"
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contato__icone" aria-hidden="true">
                  <IconeInstagram size={18} />
                </span>
                <span className="contato__texto">
                  <span className="contato__rotulo">Instagram</span>
                  <strong>{site.instagramHandle}</strong>
                </span>
                <span className="contato__seta" aria-hidden="true">
                  <IconeSetaDiagonal size={15} />
                </span>
              </a>

              <div className="contato contato--estatico contato--endereco">
                <span className="contato__icone" aria-hidden="true">
                  <IconePin size={18} />
                </span>
                <span className="contato__texto">
                  <span className="contato__rotulo">Localização</span>
                  <strong className="contato__endereco">
                    <span>
                      {site.endereco.rua}, {site.endereco.numero} ·{" "}
                      {site.endereco.complemento}
                    </span>
                    <span>
                      {site.endereco.bairro}, {site.endereco.cidade} –{" "}
                      {site.endereco.estado}
                    </span>
                    <span>CEP {site.endereco.cep}</span>
                  </strong>
                </span>
              </div>

              <div className="contato contato--estatico">
                <span className="contato__icone" aria-hidden="true">
                  <IconeCheck size={18} />
                </span>
                <span className="contato__texto">
                  <span className="contato__rotulo">Atendimento</span>
                  <strong>Presencial e telemedicina</strong>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal atraso={120} variante="direita" className="local__visual">
          <div className="local__mapa">
            <div className="local__mapa-topo">
              <span className="local__mapa-rotulo">Localização no mapa</span>
              <span className="local__mapa-referencia">
                Endereço do consultório
              </span>
            </div>

            <div className="local__mapa-frame">
              <iframe
                src={site.mapsEmbedUrl}
                title="Mapa do consultório do Dr. Elton Avieira"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="local__mapa-rodape">
              <div className="local__mapa-cidade">
                <h3>Aquidauana</h3>
                <p>Mato Grosso do Sul · Brasil</p>
                <p className="local__mapa-endereco">{site.endereco.linha}</p>
              </div>

              <a
                className="local__mapa-link"
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no Google Maps
                <IconeSetaDiagonal size={13} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
