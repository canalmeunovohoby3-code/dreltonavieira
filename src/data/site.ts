const enderecoConsultorio =
  "Rua Estevão Alves Corrêa, 1323 - Sala 7, Bairro Alto, Aquidauana - MS, 79200-000";

export const site = {
  nome: "Dr. Elton Avieira",
  cidade: "Aquidauana",
  estado: "MS",
  estadoNome: "Mato Grosso do Sul",
  whatsappExibicao: "67 99662-8097",
  whatsappNumero: "5567996628097",
  whatsappAlternativos: [
    { exibicao: "67 99250-2143", numero: "5567992502143" },
    { exibicao: "67 99201-3161", numero: "5567992013161" },
  ],
  mensagemWhatsapp:
    "Olá! Gostaria de obter informações sobre as consultas do Dr. Elton Avieira.",
  instagramHandle: "@dr.eltonavieira",
  instagramUrl: "https://www.instagram.com/dr.eltonavieira/",
  boaConsultaUrl:
    "https://boaconsulta.com/especialista/elton-de-almeida-vieira-6a14ac966be81400620007ea?source=6a14ac306be81400620007d8",
  endereco: {
    rua: "Rua Estevão Alves Corrêa",
    numero: "1323",
    complemento: "Sala 7",
    bairro: "Bairro Alto",
    cidade: "Aquidauana",
    estado: "MS",
    cep: "79200-000",
    linha: "Rua Estevão Alves Corrêa, 1323 · Sala 7",
    completo: enderecoConsultorio,
  },
  mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(
    enderecoConsultorio,
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    enderecoConsultorio,
  )}`,
  crm: "",
  rqe: "",
  logo: {
    png: "/midia/logonova-recorte.png",
  },
  videoHero: "/Site.mp4",
  imagens: {
    hero: "/midia/fotohero.jpeg",
    medico: "/midia/dr-elton-avieira.jpg",
  },
};

export function urlWhatsApp(
  numero: string,
  mensagem: string = site.mensagemWhatsapp,
) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

export const whatsappUrl = urlWhatsApp(site.whatsappNumero);

export const linksNavegacao = [
  { rotulo: "Início", href: "#inicio" },
  { rotulo: "Sobre", href: "#sobre" },
  { rotulo: "Áreas", href: "#areas" },
  { rotulo: "Atendimento", href: "#atendimento" },
  { rotulo: "Contato", href: "#contato" },
] as const;

export type AreaIcone =
  | "clinica"
  | "emagrecimento"
  | "comorbidades"
  | "integrativa";

export type AreaAtuacao = {
  numero: string;
  icone: AreaIcone;
  titulo: string;
  descricao: string;
  servicos: string | null;
  nota: string | null;
};

export const areasAtuacao: AreaAtuacao[] = [
  {
    numero: "01",
    icone: "clinica",
    titulo: "Clínica Geral",
    descricao:
      "Atendimento médico para avaliação, orientação e acompanhamento das necessidades gerais de saúde.",
    servicos:
      "Atestado de saúde (admissional ou contrato de trabalho), atestado médico, atestado para academias e práticas esportivas, renovação de receitas, entre outros.",
    nota: null,
  },
  {
    numero: "02",
    icone: "emagrecimento",
    titulo: "Emagrecimento",
    descricao:
      "Acompanhamento médico individualizado, com avaliação clínica e definição de estratégias adequadas para cada paciente, incluindo, quando indicado, protocolos envolvendo tirzepatida, peptídeos e suplementos multivitamínicos e hormonais.",
    servicos: null,
    nota:
      "A indicação de protocolos com tirzepatida, peptídeos e suplementos depende de avaliação médica individual e dos critérios clínicos aplicáveis.",
  },
  {
    numero: "03",
    icone: "comorbidades",
    titulo: "Diabetes e Hipertensão",
    descricao:
      "Acompanhamento de condições crônicas, com atenção aos fatores de risco e às necessidades individuais.",
    servicos: null,
    nota: null,
  },
  {
    numero: "04",
    icone: "integrativa",
    titulo: "Medicina Integrativa",
    descricao:
      "Abordagem individualizada que considera diferentes aspectos da saúde e do bem-estar do paciente.",
    servicos: null,
    nota: null,
  },
];
