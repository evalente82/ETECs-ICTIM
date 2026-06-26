import { useMemo } from "react";
import { cn } from "@/lib/utils";

/** Chuva de meteoros (inspirado na Aceternity). */
export function Meteors({ number = 18, className }: { number?: number; className?: string }) {
  const meteors = useMemo(
    () =>
      Array.from({ length: number }).map((_, i) => ({
        left: `${Math.floor((i / number) * 100)}%`,
        delay: `${(i % 7) * 0.6}s`,
        duration: `${4 + (i % 6)}s`,
      })),
    [number]
  );

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {meteors.map((m, i) => (
        <span
          key={i}
          className="absolute top-0 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-300 shadow-[0_0_0_1px_#ffffff22] before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-slate-300 before:to-transparent before:content-['']"
          style={{ left: m.left, animationDelay: m.delay, animationDuration: m.duration }}
        />
      ))}
    </div>
  );
}
