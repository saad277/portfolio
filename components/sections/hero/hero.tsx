"use client";

import { motion } from "motion/react";
import { ArrowDownRight, Download } from "lucide-react";
import { site, stats } from "@/data/site";
import { easeOut, fadeUp, stagger } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/button-link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Magnetic } from "@/components/motion/magnetic";
import { Counter } from "@/components/motion/counter";
import { HeroBackground } from "./hero-background";
import { RotatingWord } from "./rotating-word";

const headline = ["I", "build", "scalable"];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-32 pb-16">
      <HeroBackground />

      <motion.div initial="hidden" animate="show" variants={stagger(0.09, 0.15)} className="container-page relative">
        <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pr-4 pl-2 text-sm text-muted backdrop-blur">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-2 opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-accent-2" />
          </span>
          {site.currentRole}
        </motion.div>

        <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.035em]">
          <span className="sr-only">
            {site.name}, {site.title}.{" "}
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            {headline.map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.25em] inline-block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.2 + i * 0.08 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.5 }}
          >
            <RotatingWord words={["mobile apps.", "web platforms.", "AI products.", "desktop apps."]} />
          </motion.span>
        </h1>

        <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted md:text-xl">
          I&apos;m <span className="font-medium text-fg">{site.name}</span>, a senior software engineer with 6+ years shipping
          cross-platform products with React Native, React, Next.js and Django — from AI-powered SaaS to apps on the App Store.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <ButtonLink href="#projects">
              View my work
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </ButtonLink>
          </Magnetic>
          <Magnetic>
            <ButtonLink href={site.resume} variant="ghost" external download>
              <Download className="size-4" />
              Download résumé
            </ButtonLink>
          </Magnetic>
          <div className="ml-1 flex items-center gap-1">
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid size-12 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg">
              <GithubIcon className="size-5" />
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-12 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg">
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </motion.div>

        <motion.dl variants={fadeUp} className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-bg/80 p-6 backdrop-blur">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="mt-2 font-display text-4xl font-semibold tracking-tight">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
