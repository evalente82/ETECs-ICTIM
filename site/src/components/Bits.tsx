import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Etiqueta superior de seção (eyebrow). */
export function Eyebrow({
  children,
  color = "#6366f1",
  className,
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-widest",
        className
      )}
      style={{ borderColor: `${color}40`, color, background: `${color}12` }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70",
        className
      )}
    >
      {children}
    </span>
  );
}
