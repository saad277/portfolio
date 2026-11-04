import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";
import { ProjectHeroImage } from "@/components/projects/project-hero-image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.summary,
      images: [{ url: project.image.src, width: project.image.width, height: project.image.height }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="pt-32 pb-24">
      <header className="container-page">
        <Reveal>
          <Link
            href="/#projects"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            All projects
          </Link>
        </Reveal>

        <Stagger gap={0.08} className="max-w-4xl">
          <StaggerItem className="flex flex-wrap gap-2">
            {project.platforms.map((p) => (
              <Tag key={p}>{p}</Tag>
            ))}
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.035em]">
              {project.title}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-5 text-xl text-pretty text-muted md:text-2xl">{project.tagline}</p>
          </StaggerItem>
        </Stagger>
      </header>

      <div className="container-page mt-14 md:mt-20">
        <ProjectHeroImage image={project.image} accent={project.accent} />
      </div>

      <div className="container-page mt-20 grid gap-14 md:mt-28 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <div className="space-y-20">
          <Reveal>
            <h2 className="mb-6 font-mono text-xs tracking-[0.2em] text-subtle uppercase">Overview</h2>
            <div className="space-y-5 text-lg leading-relaxed text-pretty text-muted">
              {project.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <section>
            <Reveal>
              <h2 className="mb-8 font-mono text-xs tracking-[0.2em] text-subtle uppercase">Key features</h2>
            </Reveal>
            <Stagger gap={0.06} className="grid gap-4 sm:grid-cols-2">
              {project.features.map((f) => (
                <StaggerItem key={f.title} className="rounded-2xl border border-line bg-surface/60 p-6">
                  <span className="mb-4 block h-1 w-8 rounded-full" style={{ backgroundColor: project.accent }} />
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {project.highlights && (
            <Reveal>
              <h2 className="mb-6 font-mono text-xs tracking-[0.2em] text-subtle uppercase">Also included</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-muted">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0" style={{ color: project.accent }} />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="space-y-8 rounded-2xl border border-line bg-surface/60 p-6">
            <div>
              <h2 className="mb-2 font-mono text-xs tracking-[0.2em] text-subtle uppercase">My role</h2>
              <p className="text-fg">{project.role}</p>
            </div>
            {project.stack.map((group) => (
              <div key={group.label}>
                <h2 className="mb-3 font-mono text-xs tracking-[0.2em] text-subtle uppercase">{group.label}</h2>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
            {project.url && (
              <ButtonLink href={project.url} external className="w-full">
                Visit live site
                <ArrowUpRight className="size-4" />
              </ButtonLink>
            )}
          </Reveal>
        </aside>
      </div>

      <nav aria-label="More projects" className="container-page mt-28 grid gap-4 border-t border-line pt-12 sm:grid-cols-2">
        {[
          { p: prev, label: "Previous", Icon: ArrowLeft, align: "" },
          { p: next, label: "Next", Icon: ArrowRight, align: "sm:text-right sm:flex-row-reverse" },
        ].map(({ p, label, Icon, align }) => (
          <Link
            key={label}
            href={`/projects/${p.slug}`}
            className={`group flex items-center gap-5 rounded-2xl border border-line bg-surface/40 p-4 transition-colors hover:border-line-strong hover:bg-surface ${align}`}
          >
            <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-xl">
              <Image src={p.image.src} alt="" fill sizes="112px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div>
              <span className={`flex items-center gap-1.5 text-xs text-subtle ${align ? "sm:justify-end" : ""}`}>
                <Icon className="size-3.5" /> {label}
              </span>
              <span className="mt-1 block font-display text-xl font-semibold">{p.title}</span>
            </div>
          </Link>
        ))}
      </nav>
    </article>
  );
}
