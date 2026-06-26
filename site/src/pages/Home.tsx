import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CircuitBoard,
  Gavel,
  MapPin,
  Scale,
  Sparkles,
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import { SplitText, ShinyText, GradientText } from "@/components/ui/text-effects";
import { Marquee } from "@/components/ui/marquee";
import { GlowCard } from "@/components/ui/glow-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Eyebrow, SectionHeading, Pill } from "@/components/Bits";
import { Ecosystem } from "@/components/Ecosystem";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

const laws = [
  { code: "Lei 10.973/2004", label: "Lei de Inovação · Art. 20" },
  { code: "Lei 13.243/2016", label: "Marco Legal de CT&I" },
  { code: "Decreto 9.283/2018", label: "Regulamentação da ETEC" },
  { code: "Lei 14.133/2021", label: "Dispensa de licitação" },
];

const products = [
  { name: "AtendIA", desc: "Atendimento via WhatsApp com IA e LLM. Empresa verificada Meta." },
  { name: "Escala Trabalho", desc: "Gestão de escalas, permutas e folgas de colaboradores." },
  { name: "Sistema Lotus", desc: "PDV e retaguarda para varejo." },
];

const stack = [
  ".NET 8", "PostgreSQL", "Redis", "Qdrant", "React 18",
  "Gemini 2.0-flash", "RAG", "SignalR", "Vertex AI", "Hangfire",
];

export default function Home() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="overflow-hidden">
      {/* ============== HERO ============== */}
      <section className="relative flex min-h-[100svh] items-center justify-center pb-16 pt-28">
        <div className="absolute inset-0 bg-grid mask-radial opacity-70" />
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#6366f1" />
        <BackgroundBeams className="opacity-50" color="#6366f1" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

        <div className="container-page relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur">
              <MapPin size={13} className="text-emerald-400" />
              VCorp Sistem · Maricá, Rio de Janeiro
            </span>
          </motion.div>

          <h1 className="mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            <SplitText text="Inteligência Artificial" />
            <br />
            <span className="text-balance">
              <SplitText text="e LLM para o ecossistema de" delay={0.3} />{" "}
              <GradientText
                className="font-extrabold"
                gradient="linear-gradient(135deg,#34d399 0%,#818cf8 50%,#fbbf24 100%)"
              >
                <SplitText text="Maricá" delay={0.75} />
              </GradientText>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Três propostas de <span className="text-white/90">Encomendas Tecnológicas (ETECs)</span>{" "}
            em IA Generativa para o ICTIM — saúde pública, pesquisa científica e gestão de inovação,
            com <ShinyText className="font-semibold">risco tecnológico</ShinyText> e dispensa de
            licitação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <button
              onClick={() => scrollTo("propostas")}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#06070d] transition-transform hover:scale-[1.03]"
            >
              Conhecer as propostas
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <Link
              to="/marco-legal"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur transition-colors hover:border-white/30 hover:text-white"
            >
              <Scale size={16} /> Entender o marco legal
            </Link>
          </motion.div>

          {/* faixa de leis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-2 sm:grid-cols-4"
          >
            {laws.map((l) => (
              <div
                key={l.code}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 text-left"
              >
                <p className="text-xs font-semibold text-white">{l.code}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-white/45">{l.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={() => scrollTo("ecossistema")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-white"
          aria-label="Rolar"
        >
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="block"
          >
            <ChevronDown size={22} />
          </motion.span>
        </button>
      </section>

      {/* ============== ECOSSISTEMA ============== */}
      <section id="ecossistema" className="relative py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow color="#34d399">O Ecossistema</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">
                Tudo orbita o <GradientText gradient="linear-gradient(135deg,#34d399,#818cf8,#fbbf24)">ICTIM</GradientText>
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
                As três propostas não são isoladas: cada uma se conecta a programas, laboratórios e
                espaços que o Instituto já opera. Clique nas propostas para explorar.
              </p>
            </Reveal>
          </div>

          <div className="mt-14">
            <Ecosystem />
          </div>
        </div>
      </section>

      {/* ============== PROPOSTAS ============== */}
      <section id="propostas" className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-dot mask-radial opacity-40" />
        <div className="container-page relative">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow color="#818cf8">As Propostas</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">
                Três Encomendas Tecnológicas
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
                Cada projeto tem identidade própria, mas compartilha a mesma base: IA generativa
                aplicada a um problema real de Maricá, com P&D de risco tecnológico.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1} className="h-full">
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== O QUE É UMA ETEC ============== */}
      <section className="relative py-24">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <Eyebrow color="#fbbf24">
                  <Gavel size={12} /> O instrumento
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <SectionHeading className="mt-5">
                  Adquire-se o <GradientText gradient="linear-gradient(135deg,#fbbf24,#f97316)">esforço</GradientText>, não o resultado
                </SectionHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-base leading-relaxed text-white/55">
                  A ETEC permite ao poder público contratar diretamente empresas para atividades de
                  PD&I com risco tecnológico — com dispensa de licitação. O risco pode vir da{" "}
                  <span className="text-white/85">integração inédita de tecnologias já existentes</span>,
                  exatamente o caso da IA/LLM aplicada ao setor público municipal.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <Link
                  to="/marco-legal"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-semibold text-amber-200 transition-colors hover:bg-amber-400/20"
                >
                  Ver base legal completa <ArrowRight size={15} />
                </Link>
              </Reveal>
            </div>

            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Scale, t: "Dispensa de licitação", d: "Contratação direta prevista no Art. 20 da Lei 10.973/2004." },
                { icon: CircuitBoard, t: "Risco tecnológico", d: "Solução não existe pronta para o contexto de Maricá." },
                { icon: Sparkles, t: "IA & LLM", d: "Gemini 2.0-flash + RAG calibrados ao município." },
                { icon: Gavel, t: "Precedente nacional", d: "Assert.IA (TCU) já validou ETEC com LLM em 2023." },
              ].map((c) => (
                <StaggerItem key={c.t}>
                  <GlowCard glow="#f59e0b" className="h-full">
                    <div className="p-5">
                      <c.icon size={22} className="text-amber-300" />
                      <h4 className="mt-3 font-semibold text-white">{c.t}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/50">{c.d}</p>
                    </div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ============== VCORP ============== */}
      <section className="relative overflow-hidden py-24">
        <Meteors number={14} className="opacity-60" />
        <div className="container-page relative">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow color="#818cf8">A Proponente</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">VCorp Sistem</SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
                Fábrica de software e empresa de IA sediada em Maricá. O fundador é natural de
                Itaipuaçu e egresso do Programa Passaporte Universitário do município.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {products.map((p) => (
              <StaggerItem key={p.name}>
                <GlowCard glow="#6366f1" className="h-full">
                  <div className="p-6">
                    <h4 className="font-display text-lg font-bold text-white">{p.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">{p.desc}</p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1} className="mt-12">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-white/35">
              Stack de tecnologia
            </p>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#06070d] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#06070d] to-transparent" />
              <Marquee duration="28s">
                {stack.map((s) => (
                  <Pill key={s} className="text-sm">{s}</Pill>
                ))}
              </Marquee>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== CTA FINAL ============== */}
      <section className="relative py-20">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 text-center sm:p-16">
              <BackgroundBeams className="opacity-30" color="#34d399" count={10} />
              <div className="pointer-events-none absolute -bottom-20 left-1/2 h-60 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 via-indigo-500/20 to-amber-500/20 blur-3xl" />
              <div className="relative">
                <h3 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Pronto para levar IA generativa ao setor público de Maricá
                </h3>
                <p className="mx-auto mt-4 max-w-lg text-white/55">
                  Vamos conversar sobre como estruturar a primeira ETEC de IA do Instituto.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="mailto:endrigo@vcorpsistem.com"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#06070d] transition-transform hover:scale-[1.03]"
                  >
                    endrigo@vcorpsistem.com
                  </a>
                  <a
                    href="tel:+5521993593760"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
                  >
                    (21) 99359-3760
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
