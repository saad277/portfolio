import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl md:mb-16", className)}>
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase">
        <span className="h-px w-8 bg-brand" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{description}</p>}
    </Reveal>
  );
}
