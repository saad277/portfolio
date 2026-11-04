"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import type { ProjectImage } from "@/types";
import { easeOut } from "@/lib/motion";
import { hexToRgb } from "@/lib/utils";

/** Large showcase image that settles in on load and gently scales with scroll. */
export function ProjectHeroImage({ image, accent }: { image: ProjectImage; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.02]);
  const rgb = hexToRgb(accent);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: easeOut, delay: 0.25 }}
      className="relative"
    >
      <div
        aria-hidden
        className="absolute inset-x-[10%] -top-10 bottom-10 rounded-full blur-[100px]"
        style={{ backgroundColor: `rgb(${rgb} / 0.3)` }}
      />
      <motion.div style={{ scale }} className="relative overflow-hidden rounded-3xl border border-line-strong shadow-2xl shadow-shade">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1152px) 1100px, 100vw"
          preload
          className="h-auto w-full"
        />
      </motion.div>
    </motion.div>
  );
}
