"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

/** Card with a soft radial highlight that follows the cursor. */
export function SpotlightCard({
  children,
  className,
  color = "139 123 255",
}: {
  children: React.ReactNode;
  className?: string;
  /** Space-separated RGB triplet for the glow. */
  color?: string;
}) {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const background = useMotionTemplate`radial-gradient(360px circle at ${x}px ${y}px, rgb(${color} / 0.12), transparent 70%)`;

  return (
    <div
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onPointerLeave={() => {
        x.set(-200);
        y.set(-200);
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-surface/60 transition-colors hover:border-line-strong",
        className,
      )}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background }} />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
