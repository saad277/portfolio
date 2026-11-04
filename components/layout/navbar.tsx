"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      // A thin band across the middle of the viewport decides which section is "current".
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !open);
    setScrolled(y > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.35, ease: easeOut }}
        className="fixed inset-x-0 top-0 z-50 pt-4"
      >
        <nav
          aria-label="Main"
          className={cn(
            "container-page flex items-center justify-between transition-all duration-300",
          )}
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-9 place-items-center rounded-xl bg-brand text-sm font-bold text-on-brand transition-transform group-hover:rotate-6">
              SS
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </Link>

          <ul
            className={cn(
              "hidden items-center gap-1 rounded-full border px-1.5 py-1.5 text-sm transition-colors duration-300 md:flex",
              scrolled ? "border-line bg-surface/70 backdrop-blur-xl" : "border-transparent",
            )}
          >
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                <Link
                  href={`/#${link.id}`}
                  className={cn(
                    "relative z-10 block rounded-full px-4 py-2 transition-colors",
                    active === link.id ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {link.label}
                </Link>
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-fg/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`mailto:${site.email}`}
              className="hidden h-10 items-center rounded-full bg-brand px-5 text-sm font-semibold text-on-brand transition-colors hover:bg-brand/90 md:inline-flex"
            >
              Let&apos;s talk
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid size-10 place-items-center rounded-full border border-line bg-surface/70 backdrop-blur md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="container-page flex h-full flex-col justify-center gap-2"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.5, ease: easeOut }}
                >
                  <Link
                    href={`/#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-5xl font-semibold tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
