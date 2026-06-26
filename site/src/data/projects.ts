import {
  Activity,
  AlertTriangle,
  BarChart3,
  Brain,
  Building2,
  CalendarClock,
  FileText,
  GitBranch,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  type LucideIcon,
  MessagesSquare,
  Microscope,
  Network,
  Rocket,
  ScrollText,
  Sparkles,
  Stethoscope,
  Target,
  Users,
  Workflow,
} from "lucide-react";

export type Theme = {
  name: string;
  primary: string;
  secondary: string;
  glow: string;
  /** gradiente css pronto (135deg) */
  gradient: string;
  /** classe tailwind de cor de texto da marca */
  text: string;
  ring: string;
  border: string;
  shadow: string;
};

export type Module = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export type Project = {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  area: string;
  status: string;
  tagline: string;
  icon: LucideIcon;
  theme: Theme;
  problemLead: string;
  problemPoints: string[];
  solutionLead: string;
  modules: Module[];
  whyEtec: { title: string; desc: string }[];
  alignment: { program: string; connection: string }[];
  stack: string[];
  timeline: { phase: string; desc: string; duration: string }[];
  ip: string;
  metrics: { value: string; label: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "etec-01",
    slug: "epidemiologia",
    number: "01",
    title: "IA para Monitoramento Epidemiológico Municipal",
    shortTitle: "Epidemiologia IA",
    area: "Saúde Pública",
    status: "Proposta Inicial",
    tagline:
      "Vigilância epidemiológica que lê os dados do SUS municipal, detecta surtos antes e fala em linguagem natural com o gestor.",
    icon: HeartPulse,
    theme: {
      name: "Clínico Vivo",
      primary: "#10b981",
      secondary: "#0d9488",
      glow: "#2dd4bf",
      gradient: "linear-gradient(135deg, #34d399 0%, #10b981 45%, #0d9488 100%)",
      text: "text-emerald-300",
      ring: "ring-emerald-400/40",
      border: "border-emerald-400/30",
      shadow: "shadow-[0_0_60px_-15px_rgba(16,185,129,0.55)]",
    },
    problemLead:
      "Maricá já tem o LACEN, a ETEC do Heberprot-P em andamento e um projeto de monitoramento epidemiológico aprovado no PIC 2025/2026. Mas a análise dos dados de saúde pública ainda é manual e fragmentada.",
    problemPoints: [
      "Dados do SUS local, das USFs e do LACEN não conversam entre si.",
      "Não há geração automática de alertas — a decisão depende de ler tabelas na mão.",
      "Surtos são identificados com atraso, quando já estão em curso.",
    ],
    solutionLead:
      "Um sistema de IA/LLM para Vigilância Epidemiológica Municipal que integra, analisa e comunica os dados de saúde pública.",
    modules: [
      {
        title: "Ingestão integrada",
        desc: "Conectores para SINAN local, USFs e laudos do LACEN em um único fluxo de dados.",
        icon: Network,
      },
      {
        title: "Detecção de anomalias",
        desc: "Séries temporais + LLM identificam padrões fora da curva automaticamente.",
        icon: Activity,
      },
      {
        title: "Alertas em linguagem natural",
        desc: "O gestor recebe o aviso explicado — não um gráfico cru para interpretar.",
        icon: AlertTriangle,
      },
      {
        title: "Dashboard narrativo",
        desc: "Painel executivo que interpreta os números, não apenas os plota.",
        icon: LayoutDashboard,
      },
      {
        title: "Relatórios automáticos",
        desc: "Saídas já no formato exigido pelo Ministério da Saúde.",
        icon: FileText,
      },
      {
        title: "WhatsApp 24/7 (AtendIA)",
        desc: "Notificações para coordenadores das USFs a qualquer hora.",
        icon: MessagesSquare,
      },
    ],
    whyEtec: [
      {
        title: "Integração de dados fragmentados",
        desc: "Os sistemas do SUS municipal não têm interoperabilidade nativa com IA.",
      },
      {
        title: "Treinamento contextualizado",
        desc: "LLM calibrado para o perfil de Maricá: área lagunar, crescimento acelerado e doenças específicas.",
      },
      {
        title: "Incerteza do resultado",
        desc: "A viabilidade técnica depende de P&D com os dados reais do município.",
      },
    ],
    alignment: [
      { program: "LACEN", connection: "Fonte primária de dados laboratoriais" },
      { program: "ETEC Heberprot-P", connection: "Dados de evolução diabética como input" },
      { program: "PIC 2025/2026 — Epidemiologia", connection: "Bolsistas como colaboradores do P&D" },
      { program: "Qualifica Maricá", connection: "Capacitação dos profissionais de saúde no sistema" },
    ],
    stack: [
      ".NET 8 + EF Core 8",
      "Gemini 2.0-flash (Vertex AI)",
      "Qdrant (RAG)",
      "PostgreSQL 15 (Neon)",
      "Hangfire",
      "AtendIA (WhatsApp Meta)",
      "React 18 + Vite",
      "TanStack Query",
    ],
    timeline: [
      { phase: "Fase 1", desc: "P&D: mapeamento das fontes, conectores e treinamento do modelo", duration: "6 meses" },
      { phase: "Fase 2", desc: "Validação com dados reais do LACEN e USFs (PoC)", duration: "3 meses" },
      { phase: "Fase 3", desc: "Dashboard em produção e treinamento das equipes", duration: "3 meses" },
    ],
    ip: "Titularidade compartilhada — ICTIM com direito de uso perpétuo; VCorp retém o direito de replicar a solução (anonimizada) para outros municípios.",
    metrics: [
      { value: "3", label: "fontes integradas" },
      { value: "24/7", label: "alertas automáticos" },
      { value: "12", label: "meses de execução" },
    ],
  },
  {
    id: "etec-02",
    slug: "passaporte",
    number: "02",
    title: "IA para Gestão do Passaporte Universitário e PIC",
    shortTitle: "Passaporte & PIC IA",
    area: "Educação e Pesquisa Científica",
    status: "Proposta Inicial",
    tagline:
      "A jornada do bolsista, do edital ao relatório de impacto, gerida por IA — feita por quem foi bolsista do próprio Passaporte.",
    icon: GraduationCap,
    theme: {
      name: "Índigo Acadêmico",
      primary: "#6366f1",
      secondary: "#7c3aed",
      glow: "#a78bfa",
      gradient: "linear-gradient(135deg, #818cf8 0%, #6366f1 45%, #7c3aed 100%)",
      text: "text-indigo-300",
      ring: "ring-indigo-400/40",
      border: "border-indigo-400/30",
      shadow: "shadow-[0_0_60px_-15px_rgba(99,102,241,0.6)]",
    },
    problemLead:
      "O Passaporte Universitário e o PIC são os programas mais identitários do ICTIM — dezenas de bolsistas, orientadores, projetos de 12 meses e relatórios científicos. A gestão atual é manual: planilhas e e-mails.",
    problemPoints: [
      "Sem matching automático entre o perfil do bolsista e o tema de pesquisa.",
      "Sem acompanhamento de marcos ao longo dos 12 meses.",
      "Sem revisão dos relatórios científicos antes da submissão.",
      "Sem extração automática de indicadores de impacto.",
      "Sem atendimento aos bolsistas fora do horário comercial.",
    ],
    solutionLead:
      "Uma plataforma de Gestão de Pesquisa Científica com IA para o Passaporte Universitário e o PIC, em cinco módulos.",
    modules: [
      {
        title: "Seleção inteligente",
        desc: "Matching semântico entre currículo e temas, com parecer preliminar para o comitê. Decisão segue humana.",
        icon: Target,
      },
      {
        title: "Acompanhamento de bolsistas",
        desc: "Painel de marcos e entregas em tempo real, com alertas aos orientadores.",
        icon: Users,
      },
      {
        title: "Assistente de redação",
        desc: "LLM treinado nas normas do PIC orienta e revisa — sem escrever pelo bolsista.",
        icon: ScrollText,
      },
      {
        title: "Dashboard de impacto",
        desc: "Indicadores extraídos automaticamente e Relatório de Impacto gerado para prestação de contas.",
        icon: BarChart3,
      },
      {
        title: "Suporte via WhatsApp",
        desc: "AtendIA responde dúvidas sobre normas e prazos 24/7, com avisos proativos de marcos.",
        icon: MessagesSquare,
      },
    ],
    whyEtec: [
      {
        title: "Contexto municipal, não acadêmico",
        desc: "Lattes/CNPq e SIGAA são universitários e não têm LLM de assistência à redação em inovação social.",
      },
      {
        title: "Normas próprias do PIC de Maricá",
        desc: "Treinar o LLM em inovação social, sustentabilidade e ODS é P&D de risco.",
      },
      {
        title: "Matching de inclusão",
        desc: "Calibrar o matching ao perfil do bolsista do Passaporte (inclusão social) é inédito.",
      },
    ],
    alignment: [
      { program: "Passaporte Universitário", connection: "Beneficiários diretos — gestão digital completa da jornada" },
      { program: "PIC 2025/2026", connection: "Acompanhamento dos 14 projetos aprovados" },
      { program: "Formatec: Maricá+Técnico", connection: "Expansão futura para cursos técnicos" },
      { program: "Incubadora de Tecnologias", connection: "Startups como empregadoras futuras dos bolsistas" },
    ],
    stack: [
      ".NET 8 + EF Core 8",
      "Gemini 2.0-flash (Vertex AI)",
      "Qdrant (RAG)",
      "PostgreSQL 15 (Neon)",
      "Hangfire",
      "AtendIA (WhatsApp Meta)",
      "React 18 + Vite",
      "TanStack Query",
    ],
    timeline: [
      { phase: "Fase 1", desc: "P&D: normas do PIC, matching e módulo de revisão", duration: "4 meses" },
      { phase: "Fase 2", desc: "Piloto com o ciclo PIC 2025/2026 em andamento", duration: "4 meses" },
      { phase: "Fase 3", desc: "Ajustes pós-piloto, dashboard de impacto e módulo WhatsApp", duration: "4 meses" },
    ],
    ip: "Titularidade compartilhada — ICTIM com direito de uso e de compartilhar com municípios parceiros; VCorp retém o direito de licenciar (white label) para outros programas de bolsas municipais.",
    metrics: [
      { value: "14", label: "projetos PIC ativos" },
      { value: "5", label: "módulos de IA" },
      { value: "24/7", label: "suporte ao bolsista" },
    ],
  },
  {
    id: "etec-03",
    slug: "parque",
    number: "03",
    title: "Sistema de Gestão Inteligente do Parque Tecnológico",
    shortTitle: "Parque Tecnológico IA",
    area: "Inovação e Empreendedorismo",
    status: "Proposta Inicial",
    tagline:
      "O primeiro sistema de gestão de parque tecnológico municipal com IA generativa do Rio de Janeiro — onboarding, matchmaking e transparência pública.",
    icon: Building2,
    theme: {
      name: "Âmbar Inovação",
      primary: "#f59e0b",
      secondary: "#f97316",
      glow: "#fdba74",
      gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 45%, #f97316 100%)",
      text: "text-amber-300",
      ring: "ring-amber-400/40",
      border: "border-amber-400/30",
      shadow: "shadow-[0_0_60px_-15px_rgba(245,158,11,0.55)]",
    },
    problemLead:
      "O Parque Tecnológico de Maricá (Ubatiba) tem 6.207 m² em 4 pavimentos, auditório para 200, coworking e a UFRJ como parceira. O ICTIM assume a gestão desse ecossistema sem nenhum sistema digital dedicado.",
    problemPoints: [
      "Startups residentes em seleção e incubação, sem fluxo digital.",
      "Pesquisadores e núcleos universitários (UFRJ + futuros parceiros) sem conexão sistematizada.",
      "Auditório e salas com agendamento compartilhado e sem controle.",
      "Obrigações de transparência pública e prestação de contas municipal feitas à mão.",
    ],
    solutionLead:
      "Um Sistema Integrado de Gestão do Ecossistema de Inovação com IA e LLM, em seis módulos.",
    modules: [
      {
        title: "Onboarding de startups",
        desc: "LLM analisa o plano de negócios e gera parecer estruturado: aderência, maturidade e empregos locais.",
        icon: Rocket,
      },
      {
        title: "Gestão de residentes",
        desc: "Painel de marcos, crescimento, empregos gerados, receita e investimento, com alertas contratuais.",
        icon: Users,
      },
      {
        title: "Transparência pública",
        desc: "Relatório de impacto narrativo no formato do portal de transparência e dashboard público.",
        icon: LayoutDashboard,
      },
      {
        title: "Matchmaking inteligente",
        desc: "Conecta demandas das startups a pesquisadores da UFRJ/IFF e a editais (FINEP, FAPERJ, BID).",
        icon: GitBranch,
      },
      {
        title: "Gestão de espaços",
        desc: "Agendamento digital de auditório, salas e coworking, com relatório de ocupação.",
        icon: CalendarClock,
      },
      {
        title: "Suporte via WhatsApp",
        desc: "AtendIA como canal ICTIM → ecossistema: dúvidas, lembretes e editais.",
        icon: MessagesSquare,
      },
    ],
    whyEtec: [
      {
        title: "Transparência pública com IA generativa",
        desc: "Gerar prestação de contas narrativa no formato do TCE-RJ via LLM é aplicação inédita.",
      },
      {
        title: "Onboarding por LLM em autarquia pública",
        desc: "Análise de plano de negócios com critérios de impacto social não tem precedente no Brasil.",
      },
      {
        title: "Matchmaking pesquisador-startup",
        desc: "Calibrado para o ecossistema específico de Maricá — risco tecnológico real.",
      },
    ],
    alignment: [
      { program: "Parque Tecnológico (Ubatiba)", connection: "Usuário primário do sistema" },
      { program: "Galpão Tecnológico (Inoã)", connection: "Ambiente de piloto" },
      { program: "UFRJ (biotecnologia)", connection: "Fonte de pesquisadores para matchmaking" },
      { program: "PIC / Passaporte", connection: "Bolsistas como estagiários nas startups" },
      { program: "Portal de Transparência", connection: "Destino dos relatórios automáticos" },
    ],
    stack: [
      ".NET 8 + EF Core 8",
      "SignalR (tempo real)",
      "Gemini 2.0-flash (Vertex AI)",
      "Qdrant (RAG)",
      "PostgreSQL 15 (Neon)",
      "Hangfire",
      "AtendIA (WhatsApp Meta)",
      "React 18 + Vite",
    ],
    timeline: [
      { phase: "Fase 1", desc: "P&D: módulos 1–3 (onboarding, gestão, dashboard)", duration: "5 meses" },
      { phase: "Fase 2", desc: "Piloto no Galpão de Inoã", duration: "3 meses" },
      { phase: "Fase 3", desc: "Migração para Ubatiba + módulos 4–6", duration: "4 meses" },
    ],
    ip: "Titularidade compartilhada — ICTIM com direito de uso perpétuo e de compartilhar com a rede de inovação do Estado; VCorp retém o direito de licenciar (white label) para outros parques tecnológicos municipais.",
    metrics: [
      { value: "6.207", label: "m² geridos" },
      { value: "6", label: "módulos de IA" },
      { value: "1º", label: "do tipo no RJ" },
    ],
  },
];

export const PROJECTS_BY_SLUG = Object.fromEntries(
  PROJECTS.map((p) => [p.slug, p])
) as Record<string, Project>;

/** Ícones reexportados para uso em páginas estáticas */
export const SharedIcons = {
  Brain,
  Sparkles,
  Microscope,
  Stethoscope,
  Workflow,
  Network,
};
