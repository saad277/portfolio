"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { fadeUp, stagger } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = HTMLMotionProps<"div"> & { gap?: number; delay?: number };

/** Container that reveals each <StaggerItem> child in sequence. */
export function Stagger({ gap = 0.08, delay = 0, children, ...props }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger(gap, delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={fadeUp} {...props}>
      {children}
    </motion.div>
  );
}
