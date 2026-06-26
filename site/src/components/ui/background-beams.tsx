import { motion } from "framer-motion";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

/**
 * Feixes de luz que correm no fundo (inspirado no BackgroundBeams da Aceternity).
 * Caminhos SVG com gradiente animado de cima para baixo.
 */
export function BackgroundBeams({
  className,
  color = "#6366f1",
  count = 14,
}: {
  className?: string;
  color?: string;
  count?: number;
}) {
  const beams = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const x = 60 + i * 70;
        return {
          d: `M${x} -200 C ${x} 100 ${x - 120} 250 ${x - 120} 520 C ${x - 120} 760 ${x} 880 ${x} 1100`,
          delay: (i % 7) * 0.9,
          dur: 4 + (i % 5),
        };
      }),
    [count]
  );

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="beam-grad" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor={color} stopOpacity="0" />
            <stop offset="0.5" stopColor={color} stopOpacity="0.9" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {beams.map((b, i) => (
          <g key={i}>
            <path d={b.d} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <motion.path
              d={b.d}
              stroke="url(#beam-grad)"
              strokeWidth="1.6"
              strokeLinecap="round"
              initial={{ pathLength: 0.08, pathOffset: -0.1 }}
              animate={{ pathOffset: [-0.1, 1.1] }}
              transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "linear" }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
