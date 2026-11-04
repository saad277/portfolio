import { marqueeTech } from "@/data/skills";

/** Infinite horizontal scroll of tech names. Pure CSS, pauses on hover. */
export function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="relative overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul className="animate-marquee flex w-max gap-12 hover:[animation-play-state:paused]" aria-label="Technologies I work with">
        {items.map((t, i) => (
          <li
            key={`${t}-${i}`}
            aria-hidden={i >= marqueeTech.length}
            className="flex items-center gap-12 font-display text-2xl font-medium whitespace-nowrap text-subtle transition-colors hover:text-fg"
          >
            {t}
            <span className="size-1.5 rounded-full bg-accent/60" />
          </li>
        ))}
      </ul>
    </div>
  );
}
