"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Project, ProjectCategory } from "@/types";
import { categoryLabels } from "@/data/projects";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";

type Filter = ProjectCategory | "all";
const filters: Filter[] = ["all", "web", "mobile", "ai", "web3"];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter, projects],
  );

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f === "all" ? projects.length : projects.filter((p) => p.categories.includes(f)).length;
          const selected = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(f)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                selected ? "text-bg" : "text-muted hover:text-fg",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-fg"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">
                {categoryLabels[f]}
                <span className={cn("ml-1.5 font-mono text-xs", selected ? "text-bg/60" : "text-subtle")}>{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
              transition={{ duration: 0.6, ease: easeOut, delay: (i % 3) * 0.06 }}
            >
              <ProjectCard project={project} priority={i < 3} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
