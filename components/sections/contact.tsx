import { ArrowUpRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { ButtonLink } from "@/components/ui/button-link";
import { CopyEmail } from "@/components/ui/copy-email";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contact" className="container-page py-24 md:py-32">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-20 text-center md:px-16 md:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_100%,black,transparent)]" />
          <div className="absolute -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/30 blur-[120px]" />
        </div>

        <div className="relative">
          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-muted uppercase">
            <span className="text-accent">05</span> — Contact
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1] font-semibold tracking-[-0.03em] text-balance">
            Have a product in mind? <span className="text-gradient">Let&apos;s build it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-pretty text-muted">
            Whether it&apos;s a new product, a role on your team or a collaboration, I&apos;d love to hear about it.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <ButtonLink href={`mailto:${site.email}`}>
                {site.email}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </ButtonLink>
            </Magnetic>
            <CopyEmail email={site.email} />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <GithubIcon className="size-4" /> GitHub
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" /> {site.location}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
