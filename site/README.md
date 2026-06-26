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
- **React Three Fiber + drei + Three.js** — cenas 3D das versões imersivas (carregadas sob demanda)

## Identidade visual por projeto

| Projeto | Paleta | Experiência imersiva (3D) |
|---|---|---|
| ETEC 01 — Epidemiologia | Teal / Esmeralda | Microscópio → mergulho em um campo viral |
| ETEC 02 — Passaporte & PIC | Índigo / Violeta | Viagem orbital ao redor de um globo conectado |
| ETEC 03 — Parque Tecnológico | Âmbar / Laranja | Caminhada pelo prédio (vigas em X) até dashboards internos |

## Duas versões por projeto

Cada proposta tem **duas leituras**, alternáveis pelo botão flutuante:

- **Versão rápida** (`/projeto/:slug`) — leitura objetiva, para quem quer as informações em velocidade.
- **Versão imersiva** (`/imersivo/:slug`) — cena 3D dirigida por scroll (**React Three Fiber + drei**),
  com o conteúdo emergindo da profundidade sobre o ambiente. O bundle 3D é carregado sob demanda
  (`React.lazy`), então a versão rápida não paga o custo do Three.js.

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
│   │   ├── VersionToggle.tsx  # alterna rápida ⇄ imersiva
│   │   └── ProjectCard.tsx
│   ├── immersive/         # versão imersiva 3D
│   │   ├── ImmersivePage.tsx   # Canvas + scroll + overlay
│   │   ├── ImmersiveOverlay.tsx
│   │   ├── DepthBeat.tsx       # bloco que emerge da profundidade
│   │   └── scenes/            # Epidemiologia / Passaporte / Parque
│   ├── data/projects.ts   # conteúdo e tema das 3 propostas
│   ├── pages/             # Home, ProjectPage, MarcoLegal
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts         # base: "/ETECs-ICTIM/"
└── tailwind.config.js
```
