"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { hexToRgb } from "@/lib/utils";

/** Project tile with a subtle 3D tilt toward the cursor and an accent glow. */
export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-5, 5]), { stiffness: 200, damping: 20 });
  const rgb = hexToRgb(project.accent);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      className="group h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 transition-colors duration-300 hover:border-line-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(600px circle at 50% 0%, rgb(${rgb} / 0.18), transparent 60%)` }}
        />

        <div className="relative m-2 aspect-[16/11] overflow-hidden rounded-[1.25rem]" style={{ backgroundColor: `rgb(${rgb} / 0.12)` }}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            preload={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <span className="absolute top-3 right-3 grid size-10 translate-y-1 place-items-center rounded-full bg-bg/70 text-fg opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <div className="relative flex flex-1 flex-col p-5 pt-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full" style={{ backgroundColor: project.accent }} />
            <h3 className="font-display text-xl font-semibold tracking-tight">{project.title}</h3>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.tagline}</p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {project.platforms.map((p) => (
              <span key={p} className="rounded-md bg-fg/[0.05] px-2 py-0.5 font-mono text-[0.7rem] text-subtle">
                {p}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
