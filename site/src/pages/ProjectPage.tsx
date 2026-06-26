import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Check,
  CircleAlert,
  Layers,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { Aurora, GlowOrb } from "@/components/ui/aurora";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { GlowCard } from "@/components/ui/glow-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SplitText } from "@/components/ui/text-effects";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Eyebrow, SectionHeading, Pill } from "@/components/Bits";
import { ScrollProgress } from "@/components/ScrollUtils";
import { VersionToggle } from "@/components/VersionToggle";
import { PROJECTS, PROJECTS_BY_SLUG } from "@/data/projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? PROJECTS_BY_SLUG[slug] : undefined;

  if (!project) return <Navigate to="/" replace />;

  const t = project.theme;
  const Icon = project.icon;
  const idx = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div className="overflow-hidden">
      <ScrollProgress color={t.primary} />
      <VersionToggle mode="fast" slug={project.slug} color={t.primary} />

      {/* ============== HERO ============== */}
      <section className="relative flex min-h-[88svh] items-center pt-28">
        <Aurora color={t.primary} secondary={t.secondary} />
        <GlowOrb className="-right-40 top-10" color={t.primary} size={520} />
        <div className="absolute inset-0 bg-grid mask-radial opacity-50" />

        <div className="container-page relative z-10">
          <Reveal>
            <Link
              to="/#propostas"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft size={15} /> Todas as propostas
            </Link>
          </Reveal>

          <div className="mt-8 flex flex-col items-start gap-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              className="flex items-center gap-4"
            >
              <span
                className="flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ background: `${t.primary}1f`, color: t.primary, border: `1px solid ${t.primary}44` }}
              >
                <Icon size={30} />
              </span>
              <div>
                <span className="font-display text-sm font-semibold tracking-widest text-white/40">
                  ETEC {project.number}
                </span>
                <p className="text-sm font-medium" style={{ color: t.primary }}>
                  {project.area}
                </p>
              </div>
            </motion.div>

            <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
              <SplitText text={project.title} />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-2xl text-lg leading-relaxed text-white/60"
            >
              {project.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-2 flex flex-wrap gap-8"
            >
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-4xl font-extrabold" style={{ color: t.primary }}>
                    <NumberTicker value={m.value} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-white/40">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============== PROBLEMA ============== */}
      <section className="relative py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Reveal>
                <Eyebrow color={t.primary}>
                  <CircleAlert size={12} /> O problema
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <SectionHeading className="mt-5">O que resolver</SectionHeading>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-white/65">{project.problemLead}</p>
              </Reveal>
              <StaggerGroup className="mt-7 space-y-3">
                {project.problemPoints.map((pt) => (
                  <StaggerItem key={pt}>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ background: `${t.primary}22`, color: t.primary }}
                      >
                        <CircleAlert size={12} />
                      </span>
                      <p className="text-sm leading-relaxed text-white/65">{pt}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SOLUÇÃO / MÓDULOS ============== */}
      <section className="relative py-20">
        <GlowOrb className="-left-40 top-1/3" color={t.secondary} size={460} />
        <div className="container-page relative">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow color={t.primary}>
                <Layers size={12} /> A solução
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">
                {project.modules.length} módulos com IA & LLM
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
                {project.solutionLead}
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.modules.map((m, i) => {
              const MIcon = m.icon;
              return (
                <StaggerItem key={m.title}>
                  <GlowCard glow={t.primary} className="h-full">
                    <div className="flex h-full flex-col p-6">
                      <div className="flex items-center justify-between">
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-xl"
                          style={{ background: `${t.primary}1c`, color: t.primary }}
                        >
                          <MIcon size={20} />
                        </span>
                        <span className="font-display text-xs font-bold text-white/20">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h4 className="mt-4 font-semibold text-white">{m.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">{m.desc}</p>
                    </div>
                  </GlowCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ============== POR QUE É UMA ETEC ============== */}
      <section className="relative py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow color={t.primary}>
                <ShieldCheck size={12} /> Risco tecnológico
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">Por que é uma ETEC</SectionHeading>
            </Reveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
            {project.whyEtec.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div
                  className="relative h-full overflow-hidden rounded-2xl border bg-[#0a0c14]/70 p-6"
                  style={{ borderColor: `${t.primary}30` }}
                >
                  <span
                    className="font-display text-3xl font-extrabold"
                    style={{ color: t.primary, opacity: 0.4 }}
                  >
                    0{i + 1}
                  </span>
                  <h4 className="mt-3 font-semibold leading-snug text-white">{w.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ALINHAMENTO ============== */}
      <section className="relative py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Reveal>
                <Eyebrow color={t.primary}>Alinhamento</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <SectionHeading className="mt-5">Encaixe no ICTIM</SectionHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-base leading-relaxed text-white/55">
                  A proposta não nasce do zero — conecta-se a programas e ativos que o Instituto já
                  opera.
                </p>
              </Reveal>
            </div>

            <StaggerGroup className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
              {project.alignment.map((a) => (
                <StaggerItem key={a.program}>
                  <div className="flex items-center gap-4 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${t.primary}1c`, color: t.primary }}
                    >
                      <Check size={15} />
                    </span>
                    <div className="grid flex-1 gap-1 sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:gap-4">
                      <p className="text-sm font-semibold text-white">{a.program}</p>
                      <p className="text-sm text-white/50">{a.connection}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ============== STACK + CRONOGRAMA ============== */}
      <section className="relative py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          {/* Stack */}
          <div>
            <Reveal>
              <Eyebrow color={t.primary}>
                <Layers size={12} /> Stack
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">Tecnologia</SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {project.stack.map((s) => (
                  <Pill key={s} className="text-sm">{s}</Pill>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div
                className="mt-8 flex items-start gap-3 rounded-2xl border bg-white/[0.02] p-5"
                style={{ borderColor: `${t.primary}30` }}
              >
                <ShieldCheck size={20} style={{ color: t.primary }} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">Propriedade intelectual</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">{project.ip}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Cronograma */}
          <div>
            <Reveal>
              <Eyebrow color={t.primary}>
                <CalendarClock size={12} /> Cronograma
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">12 meses, 3 fases</SectionHeading>
            </Reveal>

            <div className="relative mt-8 pl-6">
              <div
                className="absolute bottom-2 left-[7px] top-2 w-px"
                style={{ background: `linear-gradient(${t.primary}, transparent)` }}
              />
              <StaggerGroup className="space-y-5">
                {project.timeline.map((ph) => (
                  <StaggerItem key={ph.phase}>
                    <div className="relative">
                      <span
                        className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-[#06070d]"
                        style={{ background: t.primary }}
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-bold text-white">{ph.phase}</p>
                          <span
                            className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                            style={{ background: `${t.primary}1c`, color: t.primary }}
                          >
                            {ph.duration}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/55">{ph.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ============== NAVEGAÇÃO ENTRE PROJETOS ============== */}
      <section className="relative py-16">
        <div className="container-page">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <div className="grid sm:grid-cols-2">
              <Link
                to={`/projeto/${prev.slug}`}
                className="group flex items-center gap-4 border-b border-white/10 p-6 transition-colors hover:bg-white/[0.03] sm:border-b-0 sm:border-r"
              >
                <ArrowLeft
                  size={18}
                  className="text-white/40 transition-transform group-hover:-translate-x-1"
                  style={{ color: prev.theme.primary }}
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/35">Anterior</p>
                  <p className="text-sm font-semibold text-white">{prev.shortTitle}</p>
                </div>
              </Link>
              <Link
                to={`/projeto/${next.slug}`}
                className="group flex items-center justify-end gap-4 p-6 text-right transition-colors hover:bg-white/[0.03]"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/35">Próxima</p>
                  <p className="text-sm font-semibold text-white">{next.shortTitle}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: next.theme.primary }}
                />
              </Link>
            </div>
          </div>

          <Reveal className="mt-10 text-center">
            <div
              className="relative inline-flex flex-col items-center gap-4 rounded-3xl border bg-white/[0.02] px-8 py-10 sm:px-16"
              style={{ borderColor: `${t.primary}30` }}
            >
              <BackgroundBeams className="opacity-25" color={t.primary} count={8} />
              <Lightbulb size={24} style={{ color: t.primary }} className="relative" />
              <h3 className="relative max-w-md font-display text-2xl font-bold text-white">
                Quer detalhar esta ETEC com a equipe do ICTIM?
              </h3>
              <a
                href="mailto:endrigo@vcorpsistem.com"
                className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#06070d] transition-transform hover:scale-[1.03]"
                style={{ background: t.primary }}
              >
                Falar com Endrigo Valente <ArrowRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
