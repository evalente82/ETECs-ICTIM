import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gauge, Sparkles } from "lucide-react";

/**
 * Botão flutuante para alternar entre a versão rápida (/projeto/:slug) e a
 * versão imersiva 3D (/imersivo/:slug) de um projeto.
 */
export function VersionToggle({
  mode,
  slug,
  color = "#6366f1",
}: {
  mode: "fast" | "immersive";
  slug: string;
  color?: string;
}) {
  const goImmersive = mode === "fast";
  const to = goImmersive ? `/imersivo/${slug}` : `/projeto/${slug}`;
  const label = goImmersive ? "Modo imersivo" : "Versão rápida";
  const Icon = goImmersive ? Sparkles : Gauge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="fixed bottom-5 right-4 z-[60] sm:bottom-6 sm:right-6"
    >
      <Link
        to={to}
        className="glass-strong group flex items-center gap-2.5 rounded-full py-2.5 pl-3 pr-4 text-sm font-semibold text-white shadow-xl shadow-black/40 transition-transform hover:scale-[1.04]"
        style={{ border: `1px solid ${color}55` }}
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full"
          style={{ background: `${color}26`, color }}
        >
          <Icon size={15} />
        </span>
        <span className="hidden sm:inline">{label}</span>
        <span className="sm:hidden">{goImmersive ? "3D" : "Rápida"}</span>
      </Link>
    </motion.div>
  );
}
