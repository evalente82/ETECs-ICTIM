import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const t = project.theme;

  return (
    <CardContainer containerClassName="py-0 h-full" className="h-full w-full">
      <Link to={`/projeto/${project.slug}`} className="block h-full w-full">
        <CardBody className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a0c14]/80 p-6">
          <BorderBeam
            size={170}
            duration={10 + index * 2}
            delay={index * 3}
            colorFrom={t.primary}
            colorTo={t.secondary}
          />
          {/* brilho de marca no topo */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
            style={{ background: t.primary }}
          />

          <CardItem translateZ={50} className="relative flex items-center justify-between">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: `${t.primary}1f`, color: t.primary, border: `1px solid ${t.primary}40` }}
            >
              <Icon size={26} />
            </span>
            <span className="font-display text-5xl font-extrabold text-white/5">
              {project.number}
            </span>
          </CardItem>

          <CardItem translateZ={40} className="mt-5">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: t.primary }}
            >
              {project.area}
            </span>
            <h3 className="mt-2 font-display text-xl font-bold leading-snug text-white">
              {project.title}
            </h3>
          </CardItem>

          <CardItem translateZ={30} className="mt-3">
            <p className="text-sm leading-relaxed text-white/55">{project.tagline}</p>
          </CardItem>

          <CardItem translateZ={45} className="mt-6 flex items-center gap-5">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display text-2xl font-bold" style={{ color: t.primary }}>
                  <NumberTicker value={m.value} />
                </p>
                <p className="text-[10px] uppercase tracking-wide text-white/40">{m.label}</p>
              </div>
            ))}
          </CardItem>

          <CardItem
            translateZ={60}
            className="mt-6 flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors group-hover:text-white"
          >
            Ver proposta completa
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </CardItem>
        </CardBody>
      </Link>
    </CardContainer>
  );
}
