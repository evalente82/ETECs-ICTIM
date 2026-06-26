import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card com brilho radial que segue o mouse (efeito spotlight de hover,
 * comum na Aceternity / Magic UI). A cor do brilho vem da marca do projeto.
 *
 * A posição do mouse é escrita diretamente em variáveis CSS (--x/--y) via ref,
 * evitando re-renderizar o React a cada frame — animação fluida e sem jank.
 */
export function GlowCard({
  children,
  className,
  glow = "#6366f1",
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-px transition-colors duration-300",
        className
      )}
    >
      {/* halo que segue o mouse */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(420px circle at var(--x, -200px) var(--y, -200px), ${glow}22, transparent 45%)`,
        }}
      />
      {/* borda iluminada que segue o mouse */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(220px circle at var(--x, -200px) var(--y, -200px), ${glow}66, transparent 40%)`,
          maskImage: "linear-gradient(#000, #000)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <div className="relative h-full rounded-2xl bg-[#0a0c14]/80">{children}</div>
    </div>
  );
}
