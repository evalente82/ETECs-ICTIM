import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Revela o texto palavra por palavra (inspirado no SplitText / TextGenerateEffect).
 */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={cn("inline", className)} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * Texto com brilho passando por cima (inspirado no AnimatedShinyText da Magic UI).
 */
export function ShinyText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "animate-shiny-text bg-clip-text text-transparent",
        "bg-[linear-gradient(110deg,#9ca3af,35%,#fff,50%,#9ca3af,65%)] bg-[length:200%_100%]",
        className
      )}
      style={{ "--shiny-width": "120px" } as React.CSSProperties}
    >
      {children}
    </span>
  );
}

/** Texto com gradiente fixo de marca. */
export function GradientText({
  children,
  className,
  gradient = "linear-gradient(135deg,#34d399,#6366f1,#f59e0b)",
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}) {
  return (
    <span
      className={cn("bg-clip-text text-transparent", className)}
      style={{ backgroundImage: gradient }}
    >
      {children}
    </span>
  );
}
