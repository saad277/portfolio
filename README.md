# Saad Sheikh — Portfolio

Personal portfolio built with **Next.js 16** (App Router, Cache Components), **Tailwind CSS v4** and **Motion** (Framer Motion).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — every page is prerendered
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://saadsheikh.dev`) in production so metadata, the sitemap and robots.txt use your domain.

## Project structure

```
app/                         Routes only — thin files that compose components
├── layout.tsx               Fonts, metadata, navbar, footer, motion provider
├── page.tsx                 Home: hero → about → experience → work → skills → contact
├── projects/[slug]/page.tsx Case-study page, statically generated per project
├── not-found.tsx
├── sitemap.ts / robots.ts
└── globals.css              Design tokens (@theme), utilities, grain overlay

components/
├── layout/                  Navbar (active-section pill, mobile menu), footer
├── sections/                One file per home-page section (hero/ has its own parts)
├── projects/                Project card (3D tilt), filterable grid, detail hero image
├── motion/                  Reusable animation primitives: Reveal, Stagger,
│                            Magnetic, Counter, ScrollProgress, MotionProvider
└── ui/                      Small presentational pieces: ButtonLink, Tag,
                             SectionHeading, SpotlightCard, CopyEmail, icons

data/                        ✏️ All content lives here — edit these, not components
├── site.ts                  Name, bio, links, stats, education
├── experience.ts            Work history
├── projects.ts              Case studies (features, stack, images, links)
└── skills.ts                Skill groups + marquee list

lib/                         cn(), hexToRgb(), shared motion easings/variants
types/                       Shared TypeScript types for the data layer
public/projects/             Project mockups (WebP)
public/saad-sheikh-resume.pdf
```

## Common edits

- **Add a project:** drop a WebP into `public/projects/`, add an entry to `data/projects.ts`. Its page at `/projects/<slug>` is generated automatically. Set `featured: true` to move it to the top of the grid.
- **Update the résumé:** replace `public/saad-sheikh-resume.pdf`.
- **Change colours:** edit the `--color-*` tokens at the top of `app/globals.css`.

## Motion notes

- All animations respect the OS “reduce motion” setting via `<MotionConfig reducedMotion="user">`.
- Sections stay Server Components; only the interactive pieces (`components/motion`, cards, navbar) are Client Components.
