export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  github?: string;
  stack: string[];
  color: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "deflist",
    title: "DefList",
    tagline: "Rede social de listas ranqueadas",
    description:
      "Plataforma social onde cada post é uma lista de 3 a 20 itens. Usuários criam, versionam e descobrem rankings sobre qualquer assunto — de filmes a ferramentas de trabalho.",
    url: "https://www.deflist.com",
    github: "https://github.com/deflist-app/deflist",
    stack: [
      "TanStack Start",
      "React",
      "TypeScript",
      "Supabase",
      "shadcn/ui",
      "Tailwind CSS",
      "Vite",
    ],
    color: "#8b5cf6",
    highlights: [
      "Listas com drag-and-drop e versionamento",
      "Feed social com likes, follows e comentários",
      "SSR com SEO e JSON-LD para cada lista",
      "Busca por listas, pessoas e itens",
      "Perfis públicos com rankings publicados",
    ],
  },
  {
    slug: "porcolab",
    title: "PorcoLab",
    tagline: "Análise histórica do Brasileirão",
    description:
      "Plataforma de dados do Campeonato Brasileiro (2003–presente). Duas seções: Brasileirão Analytics (classificação, comparações, gráficos históricos) e Histórico Arenas (estatísticas das arenas reformadas e construídas pós-Copa).",
    url: "https://porco-lab.vercel.app",
    github: "https://github.com/deflist-app/PorcoLab",
    stack: [
      "Python",
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Chart.js",
      "Recharts",
      "Tailwind CSS",
    ],
    color: "#16a34a",
    highlights: [
      "Pipeline de dados com web scraping e API",
      "Classificação por rodada de qualquer temporada",
      "Comparação de desempenho entre temporadas",
      "Gráficos históricos: títulos, pontos, sequências",
      "Histórico Arenas: estatísticas das arenas pós-Copa",
      "Atualização automática da temporada 2026",
    ],
  },
  {
    slug: "dash-vendas",
    title: "Dash Vendas",
    tagline: "Dashboard executivo com IA decisória",
    description:
      "Dashboard de 1 tela para rede varejista fictícia de 40 lojas. O JEV (motor de decisão TypeSafe) analisa o dossiê mensal e aponta a causa do resultado; o Claude Haiku transforma a decisão em texto de ação.",
    url: "https://dash-vendas-brunno-lilac.vercel.app",
    github: "https://github.com/deflist-app/Dash-Vendas-Brunno",
    stack: [
      "Python",
      "JEV (TypeSafe)",
      "Claude Haiku",
      "Supabase",
      "Chart.js",
      "OpenRouter",
    ],
    color: "#0ea5a4",
    highlights: [
      "Motor de decisão JEV com score de certeza",
      "Cross-filter: região e loja recalculam tudo",
      "Geração de texto de ação com Claude Haiku",
      "3 lojas prioritárias com decomposição de faturamento",
      "Zero dependências externas no backend (stdlib Python)",
    ],
  },
];
