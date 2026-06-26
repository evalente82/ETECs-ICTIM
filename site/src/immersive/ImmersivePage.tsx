import { Suspense, useRef, type ComponentType } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PROJECTS_BY_SLUG } from "@/data/projects";
import { VersionToggle } from "@/components/VersionToggle";
import { ImmersiveOverlay } from "./ImmersiveOverlay";
import { type SceneProps } from "./core";
import { EpidemiologiaScene } from "./scenes/EpidemiologiaScene";
import { PassaporteScene } from "./scenes/PassaporteScene";
import { ParqueScene } from "./scenes/ParqueScene";

const SCENES: Record<string, ComponentType<SceneProps>> = {
  epidemiologia: EpidemiologiaScene,
  passaporte: PassaporteScene,
  parque: ParqueScene,
};

export default function ImmersivePage() {
  const { slug } = useParams();
  const project = slug ? PROJECTS_BY_SLUG[slug] : undefined;
  const Scene = slug ? SCENES[slug] : undefined;

  const wrapRef = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progress.current = v;
  });

  if (!project || !Scene) return <Navigate to="/" replace />;
  const c = project.theme.primary;

  return (
    <div className="relative">
      {/* ---------- cena 3D fixa ---------- */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 2.4, 8], fov: 50, near: 0.1, far: 220 }}
          dpr={[1, 1.8]}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <Scene progress={progress} project={project} />
          </Suspense>
        </Canvas>
        {/* vinheta para legibilidade do conteúdo */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 40%, transparent 40%, rgba(3,4,9,0.55) 100%)",
          }}
        />
      </div>

      {/* ---------- voltar ---------- */}
      <Link
        to="/#propostas"
        className="glass-strong fixed left-4 top-4 z-[60] inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:text-white sm:left-6 sm:top-6"
      >
        <ArrowLeft size={14} /> Propostas
      </Link>

      {/* ---------- conteúdo dirigido pelo scroll ---------- */}
      <div ref={wrapRef} className="relative z-10">
        <ImmersiveOverlay project={project} />
      </div>

      <VersionToggle mode="immersive" slug={project.slug} color={c} />
    </div>
  );
}
