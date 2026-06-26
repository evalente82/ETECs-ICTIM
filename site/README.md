# Site de apresentação — ETECs-ICTIM

Site institucional das três propostas de Encomendas Tecnológicas (ETECs) em IA/LLM da **VCorp Sistem** para o **ICTIM**.

**No ar:** https://evalente82.github.io/ETECs-ICTIM/

## Stack

- **React 18 + Vite + TypeScript**
- **TailwindCSS** — design system e tokens de cor por projeto
- **Framer Motion** — animações, scroll reveals e transições de página
- Componentes de efeito inspirados em **Aceternity UI**, **Magic UI** e **react-bits**
  (BackgroundBeams, Spotlight, 3D Card, BorderBeam, Meteors, NumberTicker, SplitText, Marquee, Aurora)
- **react-router-dom** (HashRouter, compatível com GitHub Pages)
- **lucide-react** — ícones

## Identidade visual por projeto

| Projeto | Paleta |
|---|---|
| ETEC 01 — Epidemiologia | Teal / Esmeralda |
| ETEC 02 — Passaporte & PIC | Índigo / Violeta |
| ETEC 03 — Parque Tecnológico | Âmbar / Laranja |

## Rodar localmente

```bash
cd site
npm install
npm run dev      # http://localhost:5173/ETECs-ICTIM/
```

## Build de produção

```bash
npm run build    # gera ./dist
npm run preview  # serve o build em http://localhost:4173/ETECs-ICTIM/
```

## Deploy

O deploy é automático via **GitHub Actions** (`.github/workflows/deploy-pages.yml`)
a cada push em `main` que altere a pasta `site/`.

> **Configuração única necessária:** em **Settings → Pages**, definir o *Source* como
> **GitHub Actions**.

## Estrutura

```
site/
├── src/
│   ├── components/
│   │   ├── ui/            # biblioteca de efeitos (beams, spotlight, 3d card, ...)
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Ecosystem.tsx  # organograma animado do ecossistema
│   │   └── ProjectCard.tsx
│   ├── data/projects.ts   # conteúdo e tema das 3 propostas
│   ├── pages/             # Home, ProjectPage, MarcoLegal
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts         # base: "/ETECs-ICTIM/"
└── tailwind.config.js
```
