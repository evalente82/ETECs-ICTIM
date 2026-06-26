import { ArrowRight, CircleAlert, ShieldCheck } from "lucide-react";
import type { Project } from "@/data/projects";
import { Eyebrow, Pill } from "@/components/Bits";
import { NumberTicker } from "@/components/ui/number-ticker";
import { DepthBeat, GlassPanel } from "./DepthBeat";

/**
 * Conteúdo textual da experiência imersiva — os mesmos dados da versão rápida,
 * porém apresentados em blocos que emergem da profundidade sobre a cena 3D.
 */
export function ImmersiveOverlay({ project }: { project: Project }) {
  const t = project.theme;
  const c = t.primary;
  const Icon = project.icon;

  return (
    <div className="relative z-10">
      {/* ---------- 1 · HERO ---------- */}
      <DepthBeat>
        <div className="text-center">
          <span
            className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl"
            style={{ background: `${c}1f`, color: c, border: `1px solid ${c}55` }}
          >
            <Icon size={38} />
          </span>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/45">
            ETEC {project.number} · {project.area}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.07] tracking-tight text-white sm:text-6xl">
            {project.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            {project.tagline}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display text-4xl font-extrabold" style={{ color: c }}>
                  <NumberTicker value={m.value} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/40">{m.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 animate-pulse text-xs uppercase tracking-[0.3em] text-white/35">
            Role para mergulhar ↓
          </p>
        </div>
      </DepthBeat>

      {/* ---------- 2 · PROBLEMA ---------- */}
      <DepthBeat>
        <GlassPanel color={c}>
          <Eyebrow color={c}>
            <CircleAlert size={12} /> O problema
          </Eyebrow>
          <p className="mt-6 text-lg leading-relaxed text-white/75">{project.problemLead}</p>
          <div className="mt-7 space-y-3">
            {project.problemPoints.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: `${c}22`, color: c }}
                >
                  <CircleAlert size={12} />
                </span>
                <p className="text-sm leading-relaxed text-white/70">{p}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </DepthBeat>

      {/* ---------- 3 · SOLUÇÃO / MÓDULOS ---------- */}
      <DepthBeat className="max-w-5xl">
        <GlassPanel color={c} className="!max-w-none">
          <div className="text-center">
            <Eyebrow color={c}>A solução · {project.modules.length} módulos</Eyebrow>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
              {project.solutionLead}
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.modules.map((m, i) => {
              const MIcon = m.icon;
              return (
                <div
                  key={m.title}
                  className="rounded-2xl border bg-white/[0.03] p-5"
                  style={{ borderColor: `${c}26` }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: `${c}1c`, color: c }}
                    >
                      <MIcon size={18} />
                    </span>
                    <span className="font-display text-xs font-bold text-white/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-white">{m.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </GlassPanel>
      </DepthBeat>

      {/* ---------- 4 · POR QUE É UMA ETEC ---------- */}
      <DepthBeat>
        <GlassPanel color={c}>
          <Eyebrow color={c}>
            <ShieldCheck size={12} /> Risco tecnológico · por que é uma ETEC
          </Eyebrow>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {project.whyEtec.map((w, i) => (
              <div
                key={w.title}
                className="rounded-2xl border bg-white/[0.03] p-5"
                style={{ borderColor: `${c}26` }}
              >
                <span className="font-display text-3xl font-extrabold" style={{ color: c, opacity: 0.45 }}>
                  0{i + 1}
                </span>
                <h4 className="mt-2 text-sm font-semibold leading-snug text-white">{w.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-white/55">{w.desc}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </DepthBeat>

      {/* ---------- 5 · ALINHAMENTO ---------- */}
      <DepthBeat>
        <GlassPanel color={c}>
          <Eyebrow color={c}>Alinhamento · encaixe no ICTIM</Eyebrow>
          <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
            {project.alignment.map((a) => (
              <div
                key={a.program}
                className="grid gap-1 bg-white/[0.02] p-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:gap-4"
              >
                <p className="text-sm font-semibold" style={{ color: c }}>
                  {a.program}
                </p>
                <p className="text-sm text-white/60">{a.connection}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </DepthBeat>

      {/* ---------- 6 · STACK + CRONOGRAMA ---------- */}
      <DepthBeat className="max-w-5xl">
        <GlassPanel color={c} className="!max-w-none">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Eyebrow color={c}>Tecnologia</Eyebrow>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div
                className="mt-6 flex items-start gap-3 rounded-2xl border bg-white/[0.02] p-4"
                style={{ borderColor: `${c}30` }}
              >
                <ShieldCheck size={18} style={{ color: c }} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white">Propriedade intelectual</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{project.ip}</p>
                </div>
              </div>
            </div>
            <div>
              <Eyebrow color={c}>Cronograma · 12 meses</Eyebrow>
              <div className="relative mt-6 space-y-4 pl-5">
                <div
                  className="absolute bottom-2 left-[6px] top-2 w-px"
                  style={{ background: `linear-gradient(${c},transparent)` }}
                />
                {project.timeline.map((ph) => (
                  <div key={ph.phase} className="relative">
                    <span
                      className="absolute -left-5 top-1.5 h-3 w-3 rounded-full ring-4 ring-[#06070d]"
                      style={{ background: c }}
                    />
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-white">{ph.phase}</p>
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                          style={{ background: `${c}1c`, color: c }}
                        >
                          {ph.duration}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-white/55">{ph.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>
      </DepthBeat>

      {/* ---------- 7 · CTA ---------- */}
      <DepthBeat>
        <div className="text-center">
          <GlassPanel color={c} className="inline-block">
            <h3 className="mx-auto max-w-md font-display text-2xl font-bold text-white sm:text-3xl">
              Quer detalhar esta ETEC com a equipe do ICTIM?
            </h3>
            <a
              href="mailto:endrigo@vcorpsistem.com"
              className="mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-[#06070d] transition-transform hover:scale-[1.03]"
              style={{ background: c }}
            >
              Falar com Endrigo Valente <ArrowRight size={15} />
            </a>
          </GlassPanel>
        </div>
      </DepthBeat>
    </div>
  );
}
