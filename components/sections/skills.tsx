import { Blocks, Code2, LayoutTemplate, Plug, Rocket, Server, Smartphone, Sparkles } from "lucide-react";
import type { SkillGroup } from "@/types";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

const icons: Record<SkillGroup["icon"], React.ComponentType<{ className?: string }>> = {
  code: Code2,
  layout: LayoutTemplate,
  smartphone: Smartphone,
  server: Server,
  blocks: Blocks,
  plug: Plug,
  rocket: Rocket,
  sparkles: Sparkles,
};

const WIDE = new Set([1, 3, 6, 7]);

export function Skills() {
  return (
    <section id="skills" className="container-page py-24 md:py-32">
      <SectionHeading
        index="04"
        eyebrow="Toolbox"
        title="The stack behind the work."
        description="Tools I reach for to take a product from idea to App Store, and from staging to production."
      />

      <Stagger gap={0.06} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          // Groups with the most items span two columns on large screens (bento layout).
          const wide = WIDE.has(i) ? "lg:col-span-2" : "";
          return (
            <StaggerItem key={group.title} className={wide}>
              <SpotlightCard className="h-full p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-line bg-white/[0.04] text-accent-2">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
