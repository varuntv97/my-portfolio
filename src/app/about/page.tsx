import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/sections/cta";
import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: DATA.about.intro,
};

export default function AboutPage() {
  const resume = [
    ...DATA.work.map((w) => ({
      title: w.title,
      subtitle: w.company,
      href: w.href,
      logoUrl: w.logoUrl,
      period: `${w.start} — ${w.end}`,
      location: w.location,
      description: w.description,
    })),
    ...DATA.education.map((e) => ({
      title: e.degree,
      subtitle: e.school,
      href: e.href,
      logoUrl: e.logoUrl,
      period: "Education",
      description: undefined,
    })),
  ];

  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="Hello, I'm Varun TV"
        description={DATA.about.intro}
      />

      {/* My story */}
      <section className="container-px py-16 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-secondary">
              <Image
                src={DATA.avatarUrl}
                alt={DATA.name}
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:-right-5">
              <p className="font-heading text-3xl font-bold text-primary">
                {DATA.stats[0].value}
              </p>
              <p className="text-xs text-muted-foreground">
                {DATA.stats[0].label}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="My story" title="My story as a developer" />
            {DATA.about.story.map((para, i) => (
              <p key={i} className="text-muted-foreground">
                {para}
              </p>
            ))}
            <Button asChild className="w-fit rounded-full font-semibold">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="container-px py-16 md:py-24">
        <div className="grid items-center gap-12 rounded-[2.5rem] border border-border bg-card p-8 md:grid-cols-2 md:p-14">
          <SectionHeading eyebrow="My journey" title={DATA.about.journeyTitle} />
          <ul className="flex flex-col gap-4">
            {DATA.about.journey.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Resume */}
      <section className="container-px py-16 md:py-24">
        <SectionHeading
          eyebrow="Resume"
          title="Take a look at my resume"
          description="My professional experience and education."
        />
        <div className="mt-12 max-w-3xl">
          <Timeline items={resume} />
        </div>
      </section>

      {/* Skills */}
      <section className="container-px py-16 md:py-24">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & technologies"
          description="The languages, frameworks and tools I reach for most often."
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {DATA.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Core values */}
      <section className="container-px py-16 md:py-24">
        <SectionHeading
          eyebrow="What I stand for"
          title="The core values that drive my work"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DATA.coreValues.map((value) => (
            <div
              key={value.title}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-primary/15 text-primary">
                <value.icon className="size-7" />
              </span>
              <h3 className="text-lg font-bold">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
