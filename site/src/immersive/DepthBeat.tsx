import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Bloco de conteúdo que "vem do fundo": ao entrar na viewport cresce e ganha
 * opacidade; ao sair, continua crescendo e some — como se a câmera o
 * atravessasse. O efeito é dirigido pelo scroll do próprio elemento.
 */
export function DepthBeat({
  children,
  className,
  align = "center",
}: {
  children: ReactNode;
  className?: string;
  align?: "center" | "start";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.42, 0.6, 1], [0.62, 1, 1, 1.22]);
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.45, 0.72, 1], [0, 1, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, -70]);
  const blur = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [10, 0, 0, 10]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <section
      ref={ref}
      className={cn(
        "relative flex min-h-screen w-full items-center px-5 py-24 sm:px-8",
        align === "center" ? "justify-center" : "justify-start",
        className
      )}
    >
      <motion.div
        style={{ scale, opacity, y, filter }}
        className="w-full max-w-3xl will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
}

/** Painel de vidro padrão usado dentro dos beats imersivos. */
export function GlassPanel({
  children,
  color,
  className,
}: {
  children: ReactNode;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-strong relative overflow-hidden rounded-3xl p-7 sm:p-10",
        className
      )}
      style={{
        borderColor: `${color}40`,
        boxShadow: `0 30px 80px -40px ${color}66, inset 0 1px 0 0 rgba(255,255,255,0.06)`,
      }}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }}
      />
      {children}
    </div>
  );
}
