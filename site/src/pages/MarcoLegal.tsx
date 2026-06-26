import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building,
  CheckCircle2,
  FileCheck,
  Landmark,
  Quote,
  Scale,
  Workflow,
} from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SplitText, GradientText } from "@/components/ui/text-effects";
import { GlowCard } from "@/components/ui/glow-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Eyebrow, SectionHeading } from "@/components/Bits";

const ACCENT = "#a78bfa";

const norms = [
  { code: "Lei 10.973/2004", rel: "Lei de Inovação — Art. 20 institui a ETEC" },
  { code: "Lei 13.243/2016", rel: "Marco Legal de CT&I — empresas privadas contratadas diretamente" },
  { code: "Decreto 9.283/2018", rel: "Arts. 27-33 — procedimentos da ETEC" },
  { code: "Lei 14.133/2021", rel: "Art. 75, V — mantém a dispensa de licitação" },
];

const eligible = ["Empresas privadas de qualquer porte", "ICTs públicas ou privadas", "Entidades sem fins lucrativos", "Consórcios"];

const conditions = [
  "Problema técnico específico e bem definido",
  "Risco tecnológico — solução não existe pronta",
  "Capacidade tecnológica comprovável",
  "Publicidade do processo (chamamento público)",
];

const flow = [
  "ICTIM identifica o problema",
  "Publica chamamento público",
  "Empresas submetem propostas",
  "Comitê técnico avalia",
  "Contrato assinado (dispensa de licitação)",
  "Execução do P&D em fases/marcos",
  "Entrega validada",
  "Fornecimento em escala (opcional)",
];

const precedents = [
  {
    title: "Assert.IA — TCU",
    year: "2023",
    desc: "LLM em ambiente multiagente para instrução assistida de processos. Consórcio NeuralMind & Terranova, selecionado entre 18 propostas. Em produção desde 2024 — primeiro precedente nacional de ETEC com LLM.",
    highlight: true,
  },
  {
    title: "Vacina COVID-19 — Fiocruz + AstraZeneca",
    year: "2020",
    desc: "A ETEC mais cara da história nacional.",
  },
  {
    title: "ETEC Cogumelos — ICTIM + UFRRJ",
    year: "2023",
    desc: "Encomenda tecnológica do próprio Instituto de Maricá.",
  },
  {
    title: "ETEC Ônibus Híbrido — ICTIM",
    year: "em andamento",
    desc: "UFRJ / Coppetec / Tracel. Mobilidade sustentável municipal.",
  },
  {
    title: "ETEC Respirador Não-Invasivo — ICTIM",
    year: "desde 2020",
    desc: "Resposta tecnológica à pandemia.",
  },
  {
    title: "ETEC Heberprot-P (diabetes) — ICTIM",
    year: "2025-2026",
    desc: "Codemar + ICTBIOMAS. Tratamento de úlceras diabéticas.",
  },
];

export default function MarcoLegal() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[70svh] items-center pt-28">
        <div className="absolute inset-0 bg-grid mask-radial opacity-50" />
        <BackgroundBeams color={ACCENT} className="opacity-40" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="container-page relative z-10">
          <Reveal>
            <Eyebrow color={ACCENT}>
              <Scale size={12} /> Base legal
            </Eyebrow>
          </Reveal>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            <SplitText text="Encomendas Tecnológicas:" />
            <br />
            <GradientText gradient="linear-gradient(135deg,#a78bfa,#6366f1)">
              <SplitText text="o instrumento legal" delay={0.4} />
            </GradientText>
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              A ETEC é uma hipótese de dispensa de licitação que permite ao poder público contratar
              diretamente atividades de PD&I com risco tecnológico. Nela,{" "}
              <span className="text-white/90">adquire-se o esforço, não o resultado.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CITAÇÃO */}
      <section className="relative py-12">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-violet-500/[0.06] p-8 sm:p-12">
              <Quote size={40} className="text-violet-400/40" />
              <p className="mt-4 max-w-3xl font-display text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">
                O risco tecnológico pode derivar da{" "}
                <span className="text-violet-300">integração inédita de tecnologias já disponíveis</span>,
                não apenas de tecnologias novas. Aplicações de IA/LLM no setor público se enquadram —
                o risco está na adaptação ao contexto e na integração com sistemas municipais.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BASE NORMATIVA */}
      <section className="relative py-16">
        <div className="container-page">
          <Reveal>
            <Eyebrow color={ACCENT}>Base normativa</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading className="mt-5">Quatro normas sustentam a ETEC</SectionHeading>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2">
            {norms.map((n) => (
              <StaggerItem key={n.code}>
                <GlowCard glow={ACCENT} className="h-full">
                  <div className="flex items-start gap-4 p-5">
                    <Landmark size={22} className="mt-0.5 shrink-0 text-violet-300" />
                    <div>
                      <p className="font-display font-bold text-white">{n.code}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">{n.rel}</p>
                    </div>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* QUEM PODE + CONDIÇÕES */}
      <section className="relative py-16">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <Building size={24} className="text-violet-300" />
              <h3 className="mt-4 font-display text-xl font-bold text-white">Quem pode ser contratado</h3>
              <ul className="mt-5 space-y-3">
                {eligible.map((e) => (
                  <li key={e} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 size={17} className="shrink-0 text-emerald-400" /> {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <FileCheck size={24} className="text-violet-300" />
              <h3 className="mt-4 font-display text-xl font-bold text-white">Condições obrigatórias</h3>
              <ul className="mt-5 space-y-3">
                {conditions.map((c, i) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-xs font-bold text-violet-300">
                      {i + 1}
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FLUXO */}
      <section className="relative py-16">
        <div className="container-page">
          <Reveal>
            <Eyebrow color={ACCENT}>
              <Workflow size={12} /> O processo
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading className="mt-5">Do problema ao fornecimento</SectionHeading>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((step, i) => (
              <StaggerItem key={step}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <span className="font-display text-2xl font-extrabold text-violet-400/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm leading-snug text-white/75">{step}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* PRECEDENTES */}
      <section className="relative py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow color={ACCENT}>Precedentes nacionais</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">ETECs já são realidade</SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/55">
                Inclusive com LLM (Assert.IA/TCU) e dentro do próprio ICTIM de Maricá.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {precedents.map((p) => (
              <StaggerItem key={p.title}>
                <div
                  className={`h-full rounded-2xl border p-6 ${
                    p.highlight
                      ? "border-violet-400/40 bg-violet-500/[0.07]"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold leading-snug text-white">{p.title}</h4>
                    <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-white/60">
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{p.desc}</p>
                  {p.highlight && (
                    <span className="mt-4 inline-block rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-200">
                      ★ 1º com LLM no Brasil
                    </span>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16">
        <div className="container-page">
          <Reveal className="text-center">
            <SectionHeading>As propostas da VCorp para o ICTIM</SectionHeading>
            <Link
              to="/#propostas"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#06070d] transition-transform hover:scale-[1.03]"
            >
              Ver as três ETECs <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
