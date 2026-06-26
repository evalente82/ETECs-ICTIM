import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * Card com inclinação 3D que segue o mouse (inspirado no 3D Card da Aceternity).
 * CardContainer cria a perspectiva; CardItem flutua em profundidade (translateZ).
 */
const MouseEnterContext = createContext<boolean>(false);

export function CardContainer({
  children,
  className,
  containerClassName,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 22;
    const y = (e.clientY - top - height / 2) / 22;
    ref.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const onLeave = () => {
    setHovered(false);
    if (ref.current) ref.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MouseEnterContext.Provider value={hovered}>
      <div
        className={cn("perspective-1000 flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={ref}
          onMouseEnter={() => setHovered(true)}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className={cn(
            "preserve-3d relative flex items-center justify-center transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("preserve-3d [transform-style:preserve-3d]", className)}>{children}</div>
  );
}

export function CardItem({
  children,
  className,
  translateZ = 0,
}: {
  children: ReactNode;
  className?: string;
  translateZ?: number;
}) {
  const hovered = useContext(MouseEnterContext);
  return (
    <div
      className={cn("transition-transform duration-200 ease-linear", className)}
      style={{ transform: hovered ? `translateZ(${translateZ}px)` : "translateZ(0px)" }}
    >
      {children}
    </div>
  );
}
