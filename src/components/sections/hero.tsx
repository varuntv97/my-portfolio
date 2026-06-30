import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="paper-dots pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-px relative grid items-center gap-12 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          {DATA.hero.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Available for new projects
            </span>
          )}

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            I&apos;m Varun TV, a{" "}
            <span className="relative whitespace-nowrap text-primary">
              Software Developer
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-1 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C70 3 230 3 298 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            from Mysuru, India
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            {DATA.hero.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full font-semibold">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="size-4" />
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

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-secondary">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              priority
              sizes="(max-width: 768px) 80vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Floating stat chips */}
          <div className="absolute -left-3 top-8 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-left-6">
            <p className="font-heading text-2xl font-bold text-primary">
              {DATA.stats[0].value}
            </p>
            <p className="text-xs text-muted-foreground">
              {DATA.stats[0].label}
            </p>
          </div>
          <div className="absolute -right-3 bottom-8 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-right-6">
            <p className="font-heading text-2xl font-bold text-primary">
              {DATA.stats[1].value}
            </p>
            <p className="text-xs text-muted-foreground">
              {DATA.stats[1].label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
