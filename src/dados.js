// Todo o conteúdo do portfólio fica aqui, separado dos componentes.
// Assim, para atualizar um texto, não preciso mexer no JSX.

export const perfil = {
  nome: 'Lucas Ferrari',
  cargo: 'Arquiteto de Software',
  resumo:
    'Projeto sistemas que crescem sem virar bagunça: Clean Architecture, Domain-Driven Design e infraestrutura pensada desde o primeiro commit.',
  github: 'https://github.com/lucaszferrari',
}

export const sobre = [
  'Sou arquiteto de software com foco em backend e infraestrutura. Gosto de pegar um problema de negócio confuso e transformar em um domínio bem modelado, com regras claras e camadas que não se misturam.',
  'Trabalho com Clean Architecture e DDD no dia a dia: entidades e casos de uso no centro, frameworks e banco de dados na borda. Isso deixa o sistema testável e fácil de trocar de peça quando precisa.',
  'Meu objetivo é construir produtos SaaS que escalem de verdade, liderar decisões técnicas e continuar evoluindo como engenheiro, tanto na faculdade quanto no mercado.',
]

// Habilidades separadas por categoria: cada chave vira uma aba na tela
export const habilidades = {
  Arquitetura: ['Clean Architecture', 'Domain-Driven Design', 'Multi-tenant SaaS', 'Arquitetura orientada a eventos', 'SOLID'],
  Backend: ['Node.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Supabase'],
  Infraestrutura: ['Docker', 'Railway', 'Vercel', 'CI/CD', 'n8n (automações)'],
  Frontend: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript'],
}

export const projetos = [
  {
    id: 1,
    nome: 'Veloce Flux',
    tipo: 'SaaS',
    resumo: 'Plataforma de gestão de redes sociais para Instagram.',
    detalhes:
      'Agenda e publica posts via Meta Graph API, com backend em Fastify separado do frontend. Banco no Supabase (PostgreSQL) com regras de acesso por cliente.',
    tecnologias: ['Next.js', 'Fastify', 'Supabase', 'Meta Graph API'],
    link: null, // repositório privado
  },
  {
    id: 2,
    nome: 'Veloce Food',
    tipo: 'SaaS',
    resumo: 'Garçom virtual com IA para pizzarias, direto pelo WhatsApp.',
    detalhes:
      'O cliente lê o QR Code da mesa, faz o pedido em linguagem natural no WhatsApp e o pedido cai em tempo real na tela da cozinha. Multi-tenant desde o dia 1, modelado com DDD.',
    tecnologias: ['Next.js', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'IA'],
    link: null, // repositório privado
  },
  {
    id: 3,
    nome: 'Ferrari Cellshop',
    tipo: 'Acadêmico',
    resumo: 'Controle de estoque de celulares.',
    detalhes: 'Feito só com HTML, CSS e JavaScript puro, sem framework, para praticar manipulação do DOM.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/lucaszferrari/ferraricellshop',
  },
  {
    id: 4,
    nome: 'n8n Render',
    tipo: 'Infra',
    resumo: 'Deploy próprio do n8n para automações.',
    detalhes: 'Imagem Docker configurada para subir o n8n em nuvem e rodar automações de forma independente.',
    tecnologias: ['Docker', 'n8n'],
    link: null, // repositório privado
  },
]
