# Portfólio — Lucas Ferrari

Portfólio pessoal feito com **React + Vite** e **React Router**.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Estrutura

```
src/
├── main.jsx            # liga o React e o BrowserRouter
├── App.jsx             # layout (Navbar + Rodapé) e as rotas
├── dados.js            # todo o conteúdo (textos, habilidades, projetos)
├── index.css           # estilização
├── components/
│   ├── Navbar.jsx      # menu (useState abre/fecha no celular)
│   ├── Apresentacao.jsx# nome, cargo, foto (props)
│   ├── Titulo.jsx      # título de seção reutilizável (props)
│   ├── Habilidades.jsx # abas de habilidades (useState)
│   ├── CardProjeto.jsx # card reutilizável, mostra/esconde detalhes (props + useState)
│   └── Rodape.jsx
└── pages/
    ├── Inicio.jsx      # rota "/"         → apresentação, sobre mim, habilidades
    ├── Projetos.jsx    # rota "/projetos" → filtro por tipo (useState) + cards
    └── Contato.jsx     # rota "/contato"  → formulário controlado (useState)
```

## Conceitos usados

- **Componentes:** cada parte da tela é um componente em `components/` ou `pages/`.
- **Props:** `Apresentacao`, `Titulo`, `Habilidades` e `CardProjeto` recebem os dados por props.
- **useState:** menu mobile, abas de habilidades, filtro de projetos, "mais detalhes" nos cards e formulário de contato.
- **React Router:** três páginas (`/`, `/projetos`, `/contato`) com `NavLink` destacando a página atual.
