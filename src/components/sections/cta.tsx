import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection({
  title = "Have a project in mind? Let's build it.",
  description = "I'm currently available for freelance work and new collaborations. Tell me about your idea and I'll get back to you within 24–48 hours.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-px py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-6 py-14 text-center text-background sm:px-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="text-base text-background/70 sm:text-lg">{description}</p>
          <Button
            asChild
            size="lg"
            className="rounded-full font-semibold"
          >
            <Link href="/contact">
              Get in touch
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
