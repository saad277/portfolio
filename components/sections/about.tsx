import { Code2, GraduationCap, Layers, Smartphone, Users, Workflow } from "lucide-react";
import { accomplishments, education, languages, site } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

const focus = [
  {
    icon: Smartphone,
    title: "Cross-platform mobile",
    body: "5+ years of React Native on iOS and Android — from first commit to App Store and Google Play releases.",
  },
  {
    icon: Layers,
    title: "Full-stack web",
    body: "React, Next.js and Vue on the front; Django, Node.js and PostgreSQL behind them.",
  },
  {
    icon: Workflow,
    title: "Integrations & AI",
    body: "Salesforce, PandaDoc, Stripe, Plaid and LLM APIs wired into products people rely on.",
  },
  {
    icon: Users,
    title: "Leadership",
    body: "Front-end architecture, release ownership, code reviews and mentoring junior engineers.",
  },
];

export function About() {
  return (
    <section id="about" className="container-page py-24 md:py-32">
      <SectionHeading
        index="01"
        eyebrow="About"
        title={
          <>
            Engineering that holds up in <span className="text-gradient">production</span>.
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal className="space-y-6 text-lg leading-relaxed text-pretty text-muted">
          <p>{site.summary}</p>
          <p>
            I care about the details users feel — fast screens, clear feedback on every action, interfaces that work for
            everyone — and the details teams feel: clean architecture, reusable components and releases that don&apos;t
            keep anyone up at night.
          </p>

          <div className="grid gap-6 border-t border-line pt-8 text-base sm:grid-cols-2">
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-subtle uppercase">
                <GraduationCap className="size-4" /> Education
              </h3>
              <ul className="space-y-2">
                {education.map((e) => (
                  <li key={e.degree}>
                    <span className="text-fg">{e.degree}</span>
                    <span className="block text-sm">
                      {e.school}
                      {e.period && ` · ${e.period}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-subtle uppercase">
                <Code2 className="size-4" /> Recognition
              </h3>
              <ul className="space-y-2">
                {accomplishments.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm">Languages: {languages.join(", ")}</p>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {focus.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <SpotlightCard className="h-full p-6">
                <span className="mb-5 grid size-11 place-items-center rounded-xl border border-line bg-fg/[0.04] text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
