"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong bg-fg/[0.03] px-5 text-sm font-medium text-fg backdrop-blur transition-colors hover:bg-fg/[0.07]"
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "done" : "copy"}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.15 }}
        >
          {copied ? <Check className="size-4 text-accent-2" /> : <Copy className="size-4" />}
        </motion.span>
      </AnimatePresence>
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
