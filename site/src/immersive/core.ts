import type { MutableRefObject } from "react";
import type { Project } from "@/data/projects";

/** Props compartilhadas por todas as cenas 3D imersivas. */
export type SceneProps = {
  /** progresso de scroll 0..1, atualizado fora do ciclo de render do React */
  progress: MutableRefObject<number>;
  project: Project;
};

export const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

/** normaliza v do intervalo [a,b] para [0,1] com clamp */
export const inv = (v: number, a: number, b: number) => clamp((v - a) / (b - a));

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** easeInOutQuad */
export const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/** suavização independente de framerate (damp exponencial) */
export const damp = (current: number, target: number, lambda: number, dt: number) =>
  lerp(current, target, 1 - Math.exp(-lambda * dt));
