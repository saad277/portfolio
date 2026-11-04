import type { Transition, Variants } from "motion/react";

/** Shared easing so every animation on the site feels like one system. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const spring: Transition = { type: "spring", stiffness: 260, damping: 26 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: easeOut } },
};


export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});
