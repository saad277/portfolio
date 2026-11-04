"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function ThemeToggle({ className }: { className?: string }) {
  // Strict Mode's dev remount resets <html> attributes; re-apply the saved theme. No-op in production.
  useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === "dark" || saved === "light") document.documentElement.setAttribute("data-theme", saved);
    } catch {}
  }, []);

  function toggle() {
    const next = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className={cn(
        "grid size-10 place-items-center rounded-full border border-line bg-surface/70 text-muted backdrop-blur transition-colors hover:text-fg",
        className,
      )}
    >
      {/* Icons swap purely via CSS, so server and client markup always match. */}
      <Moon className="size-[1.1rem] dark:hidden" />
      <Sun className="hidden size-[1.1rem] dark:block" />
    </button>
  );
}
