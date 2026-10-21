export interface CaseStudy {
  slug: string;
  overview: string;
  problem: string;
  architecture: string[];
  features: { title: string; description: string }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  deflist: {
    slug: "deflist",
    overview:
      "DefList nasceu da observação de que as pessoas adoram fazer rankings — melhores filmes, ferramentas favoritas, restaurantes imperdíveis — mas não existe uma plataforma social dedicada a isso. O resultado são listas espalhadas em tweets, stories e notas de celular que ninguém encontra depois.",
    problem:
      "Criar uma plataforma social completa do zero: autenticação, feed, interações sociais, busca, perfis públicos, SEO e deploy — tudo em poucas semanas, usando tecnologias modernas.",
    architecture: [
      "TanStack Start como meta-framework React com SSR via Nitro/Vite",
      "Supabase para autenticação (email + Google), banco PostgreSQL e storage de imagens",
      "shadcn/ui (Radix + Tailwind) para o design system com 40+ componentes",
      "TanStack Query para gerenciamento de estado e cache do servidor",
      "@dnd-kit para reordenação de itens por drag-and-drop",
      "Deploy na Vercel com preview por branch e produção a partir de main",
    ],
    features: [
      {
        title: "Listas versionadas",
        description:
          "Qualquer usuário pode criar sua versão de uma lista existente, com rastreamento de proveniência (autor e título originais). O conceito de 'fork social' aplicado a rankings.",
      },
      {
        title: "Editor com drag-and-drop",
        description:
          "Editor de lista com reordenação por arraste, upload de imagens, campo de nota do autor e seletor de visibilidade (rascunho/publicado). Suporte a 3-20 itens.",
      },
      {
        title: "SSR e SEO completo",
        description:
          "Páginas públicas renderizadas no servidor com meta tags, canonical URLs, JSON-LD structured data e OpenGraph cards. Cada lista é indexável e compartilhável.",
      },
      {
        title: "Feed e descoberta",
        description:
          "Feed cronológico de listas publicadas e atualizadas, com cards que mostram título, autor, número de itens e prévia. Busca unificada por listas, pessoas e itens.",
      },
      {
        title: "Social completo",
        description:
          "Follow de criadores, likes em listas, comentários com link para versões derivadas, perfis públicos com rankings publicados e contadores de interação.",
      },
    ],
  },
  porcolab: {
    slug: "porcolab",
    overview:
      "PorcoLab é um projeto de análise de dados do Brasileirão que vai além das estatísticas básicas. O pipeline coleta, valida e armazena dados de todas as 24 temporadas da era dos pontos corridos (2003–2026), permitindo comparações históricas que não existem em nenhuma outra plataforma pública.",
    problem:
      "Dados do futebol brasileiro são fragmentados: a temporada atual exige scraping, temporadas antigas usam APIs diferentes, nomes de clubes mudam ao longo dos anos e jogos de 2020 foram disputados em 2021. Construir uma base unificada e confiável exige tratamento cuidadoso.",
    architecture: [
      "Pipeline Python: api_client.py (scraping) → classificacao.py (cálculos) → consolidar_base.py (unificação) → supabase_repository.py (persistência)",
      "Catálogo de clubes para normalização de nomes entre fontes e temporadas",
      "Referências históricas para corrigir anomalias (ex: jogos de 2020 disputados em 2021)",
      "Supabase como banco relacional (tabelas: partidas, tabela_classificacao, clubes, campeoes)",
      "Frontend Next.js com Chart.js e Recharts para visualizações interativas",
      "Deploy contínuo na Vercel com atualização automática dos dados da temporada atual",
    ],
    features: [
      {
        title: "Classificação por rodada",
        description:
          "Tabela do campeonato em qualquer rodada de qualquer temporada. Permite ver como o campeonato se desenrolou semana a semana, com pontos, vitórias, saldo de gols e aproveitamento.",
      },
      {
        title: "Comparação entre temporadas",
        description:
          "Desempenho de um clube em uma rodada específica ao longo de todas as temporadas. Permite comparar, por exemplo, como o líder da 20ª rodada de 2026 se compara historicamente.",
      },
      {
        title: "Gráficos históricos",
        description:
          "Títulos por clube desde 2003, pontos acumulados, sequências de vitórias e invencibilidade, rodada de consolidação do campeão, maiores rivalidades e maior distância entre líder e vice.",
      },
      {
        title: "Pipeline automatizado",
        description:
          "Scraping da API esportiva para a temporada 2026, com validação automática dos resultados, consolidação com a base histórica e upsert no Supabase. Executável com um único comando.",
      },
      {
        title: "Seção Arenas",
        description:
          "Páginas dedicadas a estádios e arenas do futebol brasileiro, com informações visuais e dados contextuais de cada venue.",
      },
    ],
  },
  "dash-vendas": {
    slug: "dash-vendas",
    overview:
      "Dash Vendas é um dashboard executivo que demonstra como IA pode ser integrada ao processo decisório de negócio. Uma rede varejista fictícia de 40 lojas em 5 regiões serve como cenário: o JEV (motor de decisão) analisa um dossiê completo do mês e aponta a causa raiz do resultado, com score de certeza.",
    problem:
      "Dashboards tradicionais mostram números, mas não dizem o que fazer. O desafio foi separar rigorosamente os papéis: Python calcula, JEV julga a causa, Haiku escreve a ação — nenhum cruza a linha do outro.",
    architecture: [
      "Backend em Python puro (stdlib: urllib, json, http.server) — zero dependências pip",
      "Supabase com 5 tabelas (lojas, performance, relatórios, reviews, pós-venda) e RLS",
      "JEV (TypeSafe jev-1.13) via OpenRouter: choice, score e noul em uma chamada",
      "Claude Haiku 4.5 via OpenRouter: gera texto de ação a partir da decisão do JEV",
      "Frontend single-page HTML com Chart.js 4.4.1, sem frameworks",
      "Deploy na Vercel com serverless functions Python e HTML estático",
    ],
    features: [
      {
        title: "JEV Analysis com Score de Certeza",
        description:
          "O dossiê mensal (7 blocos: KPIs, regiões, piores lojas, pós-venda, comentários, reviews, ocorrências) é enviado ao JEV, que retorna causa provável, score 0-100, etiqueta (Agir/Confirmar/Investigar) e nível de risco.",
      },
      {
        title: "Cross-filter inteligente",
        description:
          "Clicar numa barra de região ou loja recalcula todo o dashboard em Python (big numbers, gráficos, títulos descritivos). A análise JEV sempre avalia a rede inteira; os filtros servem para investigar.",
      },
      {
        title: "Geração de texto de ação",
        description:
          "Após a decisão do JEV, o Claude Haiku redige mensagens para o gerente da loja prioritária, resumo para a diretoria ou texto livre — sempre tratando a decisão do JEV como fato imutável.",
      },
      {
        title: "Lojas prioritárias",
        description:
          "As 3 lojas com pior atingimento são exibidas com decomposição do faturamento (visitas × conversão × ticket médio) e o fator que mais caiu vs mês anterior. Clicar filtra o dashboard.",
      },
      {
        title: "Zero dependências externas",
        description:
          "O backend usa apenas a biblioteca padrão do Python 3: urllib para HTTP, json para serialização, http.server para servir. Demonstra que nem sempre frameworks são necessários.",
      },
    ],
  },
};
