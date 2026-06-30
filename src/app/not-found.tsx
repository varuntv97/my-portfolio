import { Button } from "@/components/ui/button";
import { ArrowLeft, Compass } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page not found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="paper-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-px relative flex flex-col items-center gap-6 py-20 text-center">
        <span className="grid size-20 place-items-center rounded-3xl bg-primary/15 text-primary">
          <Compass className="size-10" />
        </span>
        <p className="font-heading text-7xl font-bold sm:text-8xl">404</p>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Oops! This page wandered off.
        </h1>
        <p className="max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full font-semibold">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Go to homepage
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full font-semibold"
          >
            <Link href="/portfolio">View portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
