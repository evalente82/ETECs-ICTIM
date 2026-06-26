import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Faixa rolante (inspirado no Marquee da Magic UI). */
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  duration = "32s",
  gap = "1.5rem",
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: string;
  gap?: string;
}) {
  return (
    <div
      className={cn("group flex overflow-hidden", className)}
      style={{ "--duration": duration, "--gap": gap, gap } as React.CSSProperties}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 animate-marquee flex-row items-center justify-around",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{ gap }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
