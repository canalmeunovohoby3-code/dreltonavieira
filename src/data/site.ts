export const site = {
  nome: "Dr. Elton Avieira",
  cidade: "Aquidauana",
  estado: "MS",
  estadoNome: "Mato Grosso do Sul",
  whatsappExibicao: "67 99662-8097",
  whatsappNumero: "5567996628097",
  mensagemWhatsapp:
    "Olá! Gostaria de obter informações sobre as consultas do Dr. Elton Avieira.",
  instagramHandle: "@dr.eltonavieira",
  instagramUrl: "https://www.instagram.com/dr.eltonavieira/",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Aquidauana%2C%20MS%2C%20Brasil&t=&z=13&ie=UTF8&iwloc=&output=embed",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Aquidauana%2C+MS%2C+Brasil",
  crm: "",
  rqe: "",
  logo: {
    png: "/midia/logo.png",
  },
  imagens: {
    hero: "/midia/fotohero.jpeg",
    medico: "/midia/dr-elton-avieira.jpg",
  },
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(
  site.mensagemWhatsapp,
)}`;

export const linksNavegacao = [
  { rotulo: "Início", href: "#inicio" },
  { rotulo: "Sobre", href: "#sobre" },
  { rotulo: "Áreas", href: "#areas" },
  { rotulo: "Atendimento", href: "#atendimento" },
  { rotulo: "Contato", href: "#contato" },
] as const;

export type AreaIcone = "clinica" | "emagrecimento" | "comorbidades" | "integrativa";

export type AreaAtuacao = {
  numero: string;
  icone: AreaIcone;
  titulo: string;
  descricao: string;
  nota: string | null;
};

export const areasAtuacao: AreaAtuacao[] = [
  {
    numero: "01",
    icone: "clinica",
    titulo: "Clínica Geral",
    descricao:
      "Atendimento médico para avaliação, orientação e acompanhamento das necessidades gerais de saúde.",
    nota: null,
  },
  {
    numero: "02",
    icone: "emagrecimento",
    titulo: "Emagrecimento",
    descricao:
      "Acompanhamento médico individualizado, com avaliação clínica e definição de estratégias adequadas para cada paciente, incluindo, quando indicado, protocolos envolvendo tirzepatida.",
    nota:
      "A indicação de protocolos com tirzepatida depende de avaliação médica individual e dos critérios clínicos aplicáveis.",
  },
  {
    numero: "03",
    icone: "comorbidades",
    titulo: "Diabetes e Hipertensão",
    descricao:
      "Acompanhamento de condições crônicas, com atenção aos fatores de risco e às necessidades individuais.",
    nota: null,
  },
  {
    numero: "04",
    icone: "integrativa",
    titulo: "Medicina Integrativa",
    descricao:
      "Abordagem individualizada que considera diferentes aspectos da saúde e do bem-estar do paciente.",
    nota: null,
  },
];
