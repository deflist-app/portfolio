export type Locale = "pt" | "en";

export const translations = {
  pt: {
    nav: { projects: "Projetos", about: "Sobre", contact: "Contato" },
    hero: {
      role: "Product Builder",
      bio: "11 anos em finanças corporativas. Agora construo produtos digitais do zero ao deploy — com o rigor analítico de quem viveu dados, risco e resultado.",
    },
    projects: {
      label: "Projetos",
      headline: "3 produtos construídos em 2 meses",
    },
    about: {
      label: "Sobre",
      p1: "Sou analista financeiro com mais de 11 anos em grandes empresas — Itaú, Redecard, Grupo Fleury e a fintech PAGGI — atuando em tesouraria, contas a receber, controladoria e risco de crédito.",
      p2: "O que me motiva é transformar dados dispersos em decisões concretas. Essa motivação me levou à tecnologia: hoje desenvolvo produtos digitais de ponta a ponta, do banco de dados ao deploy em produção.",
      p3before: "Trago algo que costuma faltar em times técnicos: ",
      p3highlight: "profundo entendimento de negócio, finanças e risco",
    },
    contact: {
      label: "Contato",
      headline: "Vamos conversar?",
      location: "São Paulo, SP · Disponível para oportunidades em tecnologia, produto e inovação",
    },
    caseStudy: {
      back: "Voltar",
      liveApp: "Ver app ao vivo",
      overview: "Visão geral",
      challenge: "Desafio",
      stack: "Stack técnica",
      architecture: "Arquitetura",
      features: "Funcionalidades",
      highlights: "Destaques",
      allProjects: "Ver todos os projetos",
    },
    footer: "Construído com Next.js e Tailwind CSS.",
  },
  en: {
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      role: "Product Builder",
      bio: "11 years in corporate finance. Now I build digital products from scratch to deploy — with the analytical rigor of someone who lived data, risk and results.",
    },
    projects: {
      label: "Projects",
      headline: "3 products built in 2 months",
    },
    about: {
      label: "About",
      p1: "I'm a financial analyst with 11+ years at major companies — Itaú, Redecard, Grupo Fleury and fintech PAGGI — working in treasury, accounts receivable, controlling and credit risk.",
      p2: "What drives me is turning scattered data into concrete decisions. That motivation brought me to tech: today I develop digital products end-to-end, from database to production deploy.",
      p3before: "I bring something often missing in technical teams: ",
      p3highlight: "deep understanding of business, finance and risk",
    },
    contact: {
      label: "Contact",
      headline: "Let's talk?",
      location: "São Paulo, Brazil · Open to opportunities in technology, product and innovation",
    },
    caseStudy: {
      back: "Back",
      liveApp: "View live app",
      overview: "Overview",
      challenge: "Challenge",
      stack: "Tech stack",
      architecture: "Architecture",
      features: "Features",
      highlights: "Highlights",
      allProjects: "View all projects",
    },
    footer: "Built with Next.js and Tailwind CSS.",
  },
} as const;

export const projectTranslations = {
  pt: {
    deflist: {
      tagline: "Rede social de listas ranqueadas",
      description: "Plataforma social onde cada post é uma lista de 3 a 20 itens. Usuários criam, versionam e descobrem rankings sobre qualquer assunto.",
    },
    porcolab: {
      tagline: "Análise histórica do Brasileirão",
      description: "Plataforma de dados do Campeonato Brasileiro (2003–presente). Duas seções: Brasileirão Analytics (classificação, comparações, gráficos históricos) e Histórico Arenas (estatísticas das arenas pós-Copa).",
    },
    "dash-vendas": {
      tagline: "Dashboard executivo com IA decisória",
      description: "Dashboard de 1 tela para rede varejista fictícia de 40 lojas. O JEV (motor de decisão TypeSafe) analisa o dossiê mensal e aponta a causa do resultado.",
    },
  },
  en: {
    deflist: {
      tagline: "Social network for ranked lists",
      description: "Social platform where every post is a list of 3 to 20 items. Users create, version and discover rankings about any topic.",
    },
    porcolab: {
      tagline: "Brazilian League historical analytics",
      description: "Data platform for the Brazilian Championship (2003–present). Two sections: League Analytics (standings, comparisons, historical charts) and Arena History (post-World Cup arena statistics).",
    },
    "dash-vendas": {
      tagline: "Executive dashboard with AI-driven decisions",
      description: "Single-page dashboard for a fictional 40-store retail chain. JEV (TypeSafe decision engine) analyzes the monthly dossier and identifies the root cause.",
    },
  },
} as const;
