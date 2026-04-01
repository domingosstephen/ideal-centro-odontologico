export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  benefits: string[];
  faq: { q: string; a: string }[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: "avaliacao-clinica",
    title: "Avaliação Clínica Completa",
    shortTitle: "Avaliação Clínica",
    tagline: "O primeiro passo para o seu sorriso ideal",
    description:
      "Uma avaliação detalhada da sua saúde bucal com tecnologia de ponta. Analisamos cada detalhe — da gengiva à articulação — para criar um plano de tratamento personalizado que respeita o seu tempo e o seu bolso.",
    icon: "🔍",
    benefits: [
      "Diagnóstico completo com radiografia digital",
      "Plano de tratamento personalizado",
      "Orientação preventiva individualizada",
      "Sem compromisso — você decide no seu ritmo",
    ],
    faq: [
      {
        q: "Quanto tempo dura a avaliação?",
        a: "A consulta de avaliação dura em média 40 minutos, tempo suficiente para um diagnóstico completo e detalhado.",
      },
      {
        q: "Preciso de encaminhamento?",
        a: "Não. Você pode agendar diretamente pelo WhatsApp sem necessidade de encaminhamento.",
      },
    ],
    related: ["ortodontia", "lentes-de-resina", "clinica-geral"],
  },
  {
    slug: "ortodontia",
    title: "Ortodontia",
    shortTitle: "Ortodontia",
    tagline: "Dentes alinhados, autoestima elevada",
    description:
      "Tratamento ortodôntico moderno para corrigir o alinhamento dos dentes e a mordida. Utilizamos aparelhos de última geração que oferecem mais conforto, menos consultas e resultados mais rápidos.",
    icon: "😁",
    benefits: [
      "Aparelhos estéticos e convencionais",
      "Planejamento digital do tratamento",
      "Acompanhamento mensal personalizado",
      "Resultados visíveis desde as primeiras semanas",
    ],
    faq: [
      {
        q: "Quanto tempo dura o tratamento ortodôntico?",
        a: "O tempo varia de 12 a 30 meses, dependendo da complexidade do caso. Na avaliação inicial, damos uma estimativa precisa.",
      },
      {
        q: "Adultos podem usar aparelho?",
        a: "Sim! Não existe idade limite para ortodontia. Atendemos pacientes adultos com opções estéticas discretas.",
      },
    ],
    related: ["avaliacao-clinica", "lentes-de-resina", "harmonizacao-orofacial"],
  },
  {
    slug: "protese-e-implantes",
    title: "Prótese e Implantes Dentários",
    shortTitle: "Prótese e Implantes",
    tagline: "Recupere a função e a beleza do seu sorriso",
    description:
      "Implantes dentários de titânio e próteses de alta qualidade para substituir dentes perdidos. Devolvemos a sua capacidade de mastigar, sorrir e viver com confiança — como se fossem seus dentes naturais.",
    icon: "🦷",
    benefits: [
      "Implantes de titânio com alta taxa de sucesso",
      "Próteses fixas e removíveis de última geração",
      "Procedimento seguro com anestesia local",
      "Resultado natural e duradouro",
    ],
    faq: [
      {
        q: "O implante dói?",
        a: "O procedimento é feito com anestesia local e o desconforto pós-operatório é mínimo, controlado com medicação simples.",
      },
      {
        q: "Quanto tempo dura um implante?",
        a: "Com os cuidados adequados e visitas regulares, um implante pode durar a vida toda.",
      },
    ],
    related: ["avaliacao-clinica", "clinica-geral", "harmonizacao-orofacial"],
  },
  {
    slug: "lentes-de-resina",
    title: "Lentes de Resina",
    shortTitle: "Lentes de Resina",
    tagline: "Transforme seu sorriso em uma única sessão",
    description:
      "As lentes de resina são lâminas ultrafinas aplicadas sobre os dentes para corrigir cor, formato e pequenos desalinhamentos. Um procedimento minimamente invasivo que transforma completamente o seu sorriso — muitas vezes em apenas uma consulta.",
    icon: "✨",
    benefits: [
      "Resultado imediato — sorriso novo no mesmo dia",
      "Procedimento minimamente invasivo",
      "Aparência natural e harmônica",
      "Correção de cor, forma e proporção",
    ],
    faq: [
      {
        q: "Qual a diferença entre lentes de resina e porcelana?",
        a: "As lentes de resina são mais acessíveis e podem ser feitas em sessão única. As de porcelana duram mais, mas exigem mais sessões. Na avaliação, indicamos a melhor opção para o seu caso.",
      },
      {
        q: "As lentes de resina escurecem?",
        a: "Com o tempo, podem sofrer leve alteração de cor. Manutenções periódicas garantem que seu sorriso se mantenha sempre impecável.",
      },
    ],
    related: ["harmonizacao-orofacial", "ortodontia", "avaliacao-clinica"],
  },
  {
    slug: "harmonizacao-orofacial",
    title: "Harmonização Orofacial",
    shortTitle: "Harmonização Orofacial",
    tagline: "Equilíbrio e beleza para o seu rosto",
    description:
      "Procedimentos estéticos que harmonizam as proporções do rosto com o sorriso. Utilizamos técnicas avançadas como toxina botulínica e preenchimento facial para realçar a sua beleza natural com resultados sutis e elegantes.",
    icon: "💎",
    benefits: [
      "Procedimentos rápidos e com mínimo desconforto",
      "Resultados naturais e harmônicos",
      "Profissionais especializados em estética facial",
      "Complemento perfeito para tratamentos dentários",
    ],
    faq: [
      {
        q: "É seguro fazer harmonização com dentista?",
        a: "Sim. O dentista é o profissional mais capacitado para procedimentos na região orofacial, com profundo conhecimento da anatomia local.",
      },
      {
        q: "Os resultados são permanentes?",
        a: "A maioria dos procedimentos tem duração de 6 a 18 meses, permitindo ajustes conforme sua preferência.",
      },
    ],
    related: ["lentes-de-resina", "ortodontia", "avaliacao-clinica"],
  },
  {
    slug: "clinica-geral",
    title: "Clínica Geral e Tratamentos Preventivos",
    shortTitle: "Clínica Geral",
    tagline: "Prevenção é o melhor tratamento",
    description:
      "Cuidados essenciais para manter sua saúde bucal em dia. Desde limpezas e restaurações até tratamentos de canal e extrações — tudo com a delicadeza e o cuidado que você merece.",
    icon: "🩺",
    benefits: [
      "Limpeza profissional com ultrassom",
      "Restaurações estéticas em resina",
      "Tratamento de canal moderno e indolor",
      "Programa de prevenção personalizado",
    ],
    faq: [
      {
        q: "Com que frequência devo ir ao dentista?",
        a: "Recomendamos visitas a cada 6 meses para limpeza e avaliação preventiva, mas a frequência pode variar conforme seu caso.",
      },
      {
        q: "Tratamento de canal dói?",
        a: "Com as técnicas e anestesias modernas, o tratamento de canal é praticamente indolor. O objetivo é justamente eliminar a dor.",
      },
    ],
    related: ["avaliacao-clinica", "ortodontia", "protese-e-implantes"],
  },
];

export const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511951407017&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta";
export const PHONE = "(11) 95140-7017";
export const ADDRESS = "Rua Lincoln Junqueira, 137 - Jardim São Pedro, São Paulo";
export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.583651731514!2d-46.4308445!3d-23.547472699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce65ae9cf71b99%3A0x4fdc2ea9e2d31c2c!2sIdeal%20Centro%20Odontol%C3%B3gico!5e0!3m2!1spt-BR!2sbr";
export const INSTAGRAM = "https://www.instagram.com/idealcentroodontologico/";
