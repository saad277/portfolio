import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";

export function Projects() {
  // Featured work leads; the rest keep their authored order.
  const ordered = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)];

  return (
    <section id="projects" className="container-page py-24 md:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Products I&apos;ve <span className="text-accent">shipped</span>.
          </>
        }
        description="AI-powered SaaS, DeFi, marketplaces and consumer apps across web, iOS and Android. Open any project for the full case study."
      />
      <ProjectGrid projects={ordered} />
    </section>
  );
}
