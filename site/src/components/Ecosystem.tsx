import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Landmark,
  Lightbulb,
  Microscope,
  Rocket,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Node = {
  id: string;
  label: string;
  sub: string;
  angle: number; // graus, horário a partir do topo
  r: number; // raio em % do container
  icon: LucideIcon;
  kind: "proposal" | "asset";
  color: string;
  to?: string;
};

// Coordenada polar → percentual (container quadrado, centro em 50,50).
const pos = (angle: number, r: number) => {
  const a = (angle * Math.PI) / 180;
  return { x: 50 + r * Math.sin(a), y: 50 - r * Math.cos(a) };
};

const NODES: Node[] = [
  // As 3 propostas (anel interno, clicáveis, coloridas pela marca)
  { id: "p1", label: "Epidemiologia IA", sub: "ETEC 01", angle: 0, r: 26, icon: HeartPulse, kind: "proposal", color: "#10b981", to: "/projeto/epidemiologia" },
  { id: "p2", label: "Passaporte & PIC IA", sub: "ETEC 02", angle: 130, r: 26, icon: GraduationCap, kind: "proposal", color: "#6366f1", to: "/projeto/passaporte" },
  { id: "p3", label: "Parque Tec. IA", sub: "ETEC 03", angle: 230, r: 26, icon: Building2, kind: "proposal", color: "#f59e0b", to: "/projeto/parque" },
  // Ativos do ecossistema (anel externo)
  { id: "a1", label: "LACEN", sub: "Laboratório Central", angle: 33, r: 44, icon: Microscope, kind: "asset", color: "#34d399" },
  { id: "a2", label: "PIC 2025/26", sub: "Iniciação Científica", angle: 72, r: 45, icon: FlaskConical, kind: "asset", color: "#818cf8" },
  { id: "a3", label: "Passaporte Univ.", sub: "Bolsas de estudo", angle: 104, r: 44, icon: GraduationCap, kind: "asset", color: "#a78bfa" },
  { id: "a4", label: "UFRJ / IFF", sub: "Parceiros acadêmicos", angle: 160, r: 45, icon: Landmark, kind: "asset", color: "#7c3aed" },
  { id: "a5", label: "Parque (Ubatiba)", sub: "6.207 m²", angle: 198, r: 44, icon: Building2, kind: "asset", color: "#fbbf24" },
  { id: "a6", label: "Galpão (Inoã)", sub: "Ambiente de piloto", angle: 263, r: 45, icon: Warehouse, kind: "asset", color: "#f59e0b" },
  { id: "a7", label: "Incubadora", sub: "Pipeline de startups", angle: 300, r: 44, icon: Rocket, kind: "asset", color: "#fdba74" },
  { id: "a8", label: "Qualifica Maricá", sub: "Capacitação", angle: 330, r: 45, icon: Lightbulb, kind: "asset", color: "#2dd4bf" },
];

export function Ecosystem() {
  const navigate = useNavigate();
  const center = { x: 50, y: 50 };

  return (
    <div className="relative">
      {/* ---------- Versão orbital (telas médias+) ---------- */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-2xl md:block">
        {/* anéis decorativos girando */}
        <div className="absolute inset-[6%] rounded-full border border-white/[0.06]" />
        <motion.div
          className="absolute inset-[6%] rounded-full border border-dashed border-white/[0.07]"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-[24%] rounded-full border border-white/[0.05]" />
        <motion.div
          className="absolute inset-[24%] rounded-full border border-dashed border-white/[0.08]"
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />

        {/* linhas de conexão */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          {NODES.map((n, i) => {
            const p = pos(n.angle, n.r);
            return (
              <motion.line
                key={n.id}
                x1={center.x}
                y1={center.y}
                x2={p.x}
                y2={p.y}
                stroke={n.color}
                strokeWidth={n.kind === "proposal" ? 0.4 : 0.18}
                strokeOpacity={n.kind === "proposal" ? 0.7 : 0.32}
                strokeDasharray={n.kind === "asset" ? "1 1.4" : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.07, ease: "easeOut" }}
              />
            );
          })}
        </svg>

        {/* núcleo: ICTIM */}
        <CenterNode />

        {/* nós */}
        {NODES.map((n, i) => {
          const p = pos(n.angle, n.r);
          return (
            <OrbitNode
              key={n.id}
              node={n}
              x={p.x}
              y={p.y}
              index={i}
              onClick={n.to ? () => navigate(n.to!) : undefined}
            />
          );
        })}
      </div>

      {/* ---------- Versão empilhada (mobile) ---------- */}
      <div className="md:hidden">
        <div className="mx-auto mb-6 flex max-w-xs flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
          <span className="font-display text-lg font-bold text-white">ICTIM</span>
          <span className="text-xs text-white/45">Núcleo do ecossistema de inovação</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {NODES.map((n) => {
            const Icon = n.icon;
            const inner = (
              <div className="flex h-full items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `${n.color}1f`, color: n.color }}
                >
                  <Icon size={16} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white">{n.label}</p>
                  <p className="truncate text-[10px] text-white/40">{n.sub}</p>
                </div>
              </div>
            );
            return n.to ? (
              <button key={n.id} onClick={() => navigate(n.to!)} className="text-left">
                {inner}
              </button>
            ) : (
              <div key={n.id}>{inner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CenterNode() {
  return (
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
        className="relative flex h-28 w-28 items-center justify-center rounded-full"
      >
        {/* pulsos */}
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-indigo-500/20" />
        <span
          className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400/20"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 via-indigo-500 to-amber-400 opacity-90 blur-[2px]" />
        <div className="absolute inset-[3px] rounded-full bg-[#080a12]" />
        <div className="relative text-center">
          <p className="font-display text-xl font-extrabold tracking-tight text-white">ICTIM</p>
          <p className="mx-auto mt-0.5 w-20 text-[9px] leading-tight text-white/55">
            Ciência, Tecnologia e Inovação
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function OrbitNode({
  node,
  x,
  y,
  index,
  onClick,
}: {
  node: Node;
  x: number;
  y: number;
  index: number;
  onClick?: () => void;
}) {
  const Icon = node.icon;
  const isProposal = node.kind === "proposal";

  return (
    <motion.div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 + index * 0.06 }}
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.97 }}
        disabled={!onClick}
        className={cn(
          "group flex flex-col items-center gap-1.5 rounded-2xl border bg-[#0a0c14]/90 px-3 py-2.5 backdrop-blur-sm transition-colors",
          isProposal ? "cursor-pointer shadow-lg" : "cursor-default",
          onClick ? "hover:border-white/30" : ""
        )}
        style={{
          borderColor: isProposal ? `${node.color}66` : "rgba(255,255,255,0.08)",
          boxShadow: isProposal ? `0 0 30px -10px ${node.color}aa` : undefined,
          width: isProposal ? 132 : 116,
        }}
      >
        <span
          className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
          style={{ background: `${node.color}1f`, color: node.color }}
        >
          <Icon size={18} />
        </span>
        <span className="text-center">
          <span className="block text-[11px] font-semibold leading-tight text-white">
            {node.label}
          </span>
          <span
            className="block text-[9px] font-medium uppercase tracking-wide"
            style={{ color: isProposal ? node.color : "rgba(255,255,255,0.4)" }}
          >
            {node.sub}
          </span>
        </span>
      </motion.button>
    </motion.div>
  );
}
