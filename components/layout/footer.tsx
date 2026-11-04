import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 text-sm text-subtle sm:flex-row">
        <p>
          Designed &amp; built by <span className="text-muted">{site.name}</span> with Next.js and Motion.
        </p>
        <div className="flex items-center gap-4">
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-fg">
            <GithubIcon className="size-5" />
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-fg">
            <LinkedinIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
