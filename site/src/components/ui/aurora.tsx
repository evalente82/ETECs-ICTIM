import { cn } from "@/lib/utils";

/**
 * Fundo aurora suave (inspirado na Aceternity AuroraBackground).
 * Recebe a cor da marca do projeto para tingir o brilho.
 */
export function Aurora({
  className,
  color = "#6366f1",
  secondary = "#10b981",
}: {
  className?: string;
  color?: string;
  secondary?: string;
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute -inset-[20%] opacity-[0.22] blur-3xl animate-aurora"
        style={{
          backgroundImage: `
            radial-gradient(40% 50% at 20% 30%, ${color} 0%, transparent 60%),
            radial-gradient(35% 45% at 80% 25%, ${secondary} 0%, transparent 55%),
            radial-gradient(45% 55% at 60% 80%, ${color} 0%, transparent 60%)`,
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
}

/** Brilho radial estático posicionável. */
export function GlowOrb({
  className,
  color = "#6366f1",
  size = 600,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute rounded-full blur-[120px]", className)}
      style={{
        width: size,
        height: size,
        background: color,
        opacity: 0.18,
      }}
    />
  );
}
