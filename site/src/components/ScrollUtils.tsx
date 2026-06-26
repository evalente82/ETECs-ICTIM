import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

/** Rola para o topo a cada troca de rota. */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

/** Barra de progresso de leitura no topo da página. */
export function ScrollProgress({ color = "#6366f1" }: { color?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left"
      style={{
        scaleX,
        background: `linear-gradient(90deg, transparent, ${color}, #fff)`,
      }}
    />
  );
}
