import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

/**
 * Conta o número até o valor ao entrar na tela (inspirado no NumberTicker da Magic UI).
 * Suporta valores não numéricos (ex.: "24/7", "1º", "6.207") — nesses casos
 * preserva os símbolos e anima apenas a parte numérica.
 */
export function NumberTicker({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Extrai a parte numérica (mantém separador de milhar com ponto).
  const numeric = parseFloat(value.replace(/\./g, "").replace(",", "."));
  const prefix = value.match(/^[^\d]*/)?.[0] ?? "";
  const suffix = value.match(/[^\d]*$/)?.[0] ?? "";
  const hasThousand = value.includes(".") && /\d\.\d{3}/.test(value);
  const animatable = !Number.isNaN(numeric) && !value.includes("/");

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (!animatable) {
      ref.current.textContent = value;
      return;
    }
    const node = ref.current;
    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate(latest) {
        const rounded = Math.round(latest);
        const formatted = hasThousand ? rounded.toLocaleString("pt-BR") : String(rounded);
        node.textContent = `${prefix}${formatted}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, animatable, numeric, prefix, suffix, hasThousand, value]);

  return (
    <span ref={ref} className={className}>
      {animatable ? `${prefix}0${suffix}` : value}
    </span>
  );
}
