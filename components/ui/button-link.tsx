import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand text-on-brand hover:bg-brand/90 shadow-lg shadow-brand/25",
  ghost: "border border-line-strong bg-fg/[0.03] text-fg hover:bg-fg/[0.07] backdrop-blur",
};

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  external?: boolean;
}

export function ButtonLink({ href, variant = "primary", external, className, children, ...props }: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    styles[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
