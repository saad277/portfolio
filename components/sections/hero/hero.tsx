"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDownRight, Download } from "lucide-react";
import { site, stats } from "@/data/site";
import { easeOut, fadeUp, stagger } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/button-link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Magnetic } from "@/components/motion/magnetic";
import { Counter } from "@/components/motion/counter";
import { Tag } from "@/components/ui/tag";
import { HeroBackground } from "./hero-background";
import portrait from "@/public/saad.jpg";
import { RotatingWord } from "./rotating-word";

const headline = ["I", "build", "scalable"];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-32 pb-16">
      <HeroBackground />

      <motion.div initial="hidden" animate="show" variants={stagger(0.09, 0.15)} className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div className="min-w-0">
            {/* Compact avatar on small screens; the full portrait sits beside the copy on large ones. */}
            <motion.div variants={fadeUp} className="mb-8 lg:hidden">
              <span className="relative block size-16 shrink-0 overflow-hidden rounded-2xl border border-line-strong shadow-lg shadow-shade">
                <Image src={portrait} alt="" fill sizes="64px" placeholder="blur" className="object-cover" />
              </span>
            </motion.div>

            <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.035em] lg:text-[clamp(4rem,6.2vw,5.75rem)]">
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
                <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid size-12 place-items-center rounded-full text-muted transition-colors hover:bg-fg/5 hover:text-fg">
                  <GithubIcon className="size-5" />
                </a>
                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-12 place-items-center rounded-full text-muted transition-colors hover:bg-fg/5 hover:text-fg">
                  <LinkedinIcon className="size-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.94, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.35 }}
            className="relative hidden w-[19rem] xl:w-[21rem] lg:block"
          >
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-brand" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface p-2 shadow-2xl shadow-shade">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
                <Image
                  src={portrait}
                  alt={`Portrait of ${site.name}`}
                  fill
                  preload
                  placeholder="blur"
                  sizes="(min-width: 1280px) 336px, 304px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.figure>
        </div>

        <motion.dl variants={fadeUp} className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-bg/80 p-6 backdrop-blur">
              <dt className="text-sm text-muted">{s.label}</dt>
              {"tags" in s ? (
                <dd className="mt-3 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <Tag key={t} className="px-3.5 py-1.5 text-sm text-fg">
                      {t}
                    </Tag>
                  ))}
                </dd>
              ) : (
                <dd className="mt-2 font-display text-4xl font-semibold tracking-tight">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              )}
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
