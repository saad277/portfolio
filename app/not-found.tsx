import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80svh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-7xl">Page not found.</h1>
      <p className="mt-4 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <ButtonLink href="/" className="mt-10">
        <ArrowLeft className="size-4" /> Back home
      </ButtonLink>
    </section>
  );
}
