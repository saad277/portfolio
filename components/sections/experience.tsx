"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="container-page py-24 md:py-32">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've been building."
        description="Six years across product companies, startups and agencies — leading teams, shipping apps and owning releases."
      />

      <div ref={ref} className="relative ml-2 md:ml-0">
        {/* Track + scroll-linked fill */}
        <div aria-hidden className="absolute top-2 bottom-2 left-0 w-px bg-line md:left-[calc(14rem+2.5rem)]" />
        <motion.div
          aria-hidden
          style={{ scaleY }}
          className="absolute top-2 bottom-2 left-0 w-px origin-top bg-linear-to-b from-accent via-violet-300 to-accent-2 md:left-[calc(14rem+2.5rem)]"
        />

        <ol>
        {experience.map((job) => (
          <li key={job.company} className="relative grid gap-4 pb-14 pl-8 last:pb-0 md:grid-cols-[14rem_1fr] md:gap-20 md:pl-0">
            <Reveal className="md:pt-0.5 md:text-right">
              <h3 className="font-display text-xl font-semibold">{job.company}</h3>
              <p className="mt-1 text-sm text-subtle">{job.location}</p>
            </Reveal>

            <span
              aria-hidden
              className="absolute top-2 left-0 size-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg shadow-[0_0_0_4px_var(--color-bg),0_0_16px_var(--color-accent)] md:left-[calc(14rem+2.5rem)]"
            />

            <div className="space-y-8">
              {job.roles.map((role) => (
                <Reveal key={role.title + role.period}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="text-lg font-medium text-fg">{role.title}</h4>
                    <span className="font-mono text-xs tracking-wide text-muted">{role.period}</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-muted">
                    {role.points.map((p) => (
                      <li key={p} className="relative pl-5 before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-subtle">
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </li>
        ))}
        </ol>
      </div>
    </section>
  );
}
