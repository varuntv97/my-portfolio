import { BlogCard } from "@/components/blog-card";
import { Marquee } from "@/components/marquee";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { ServiceCard } from "@/components/service-card";
import { Testimonials } from "@/components/testimonials";
import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/button";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const posts = (await getBlogPosts())
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 3);

  const featured = DATA.featuredProjects
    .map((slug) => DATA.projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof DATA.projects)[number] => Boolean(p))
    .slice(0, 2);

  const workTimeline = DATA.work.map((w) => ({
    title: w.title,
    subtitle: w.company,
    href: w.href,
    logoUrl: w.logoUrl,
    period: `${w.start} — ${w.end}`,
    location: w.location,
    description: w.description,
  }));

  return (
    <>
      <Hero />

      {/* Tech marquee */}
      <section className="border-y border-border bg-card py-8">
        <p className="container-px mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Technologies I work with
        </p>
        <Marquee durationSeconds={40}>
          {DATA.skills.map((skill) => (
            <span
              key={skill}
              className="font-heading text-xl font-semibold text-muted-foreground/70 sm:text-2xl"
            >
              {skill}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Services */}
      <section className="container-px py-16 md:py-24">
        <SectionHeading
          eyebrow="What I do"
          title="Services I offer"
          description="From idea to deployment — I help teams and founders ship modern, scalable software."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.services.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* About teaser + stats */}
      <section className="container-px py-16 md:py-24">
        <div className="grid items-center gap-12 rounded-[2.5rem] border border-border bg-card p-8 md:grid-cols-2 md:p-14">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="A bit about me"
              title="Years of turning ideas into shipped products"
            />
            <p className="text-muted-foreground">{DATA.about.intro}</p>
            <Button asChild className="w-fit rounded-full font-semibold">
              <Link href="/about">
                More about me
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {DATA.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-secondary p-5 text-center"
              >
                <span className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-px py-16 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="A few projects I'm proud of. Each one is a real product solving a real problem."
          />
          <Button asChild variant="outline" className="rounded-full font-semibold">
            <Link href="/portfolio">
              Browse all
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 flex flex-col gap-8">
          {featured.map((project, i) => (
            <PortfolioCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              layout="split"
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Work timeline */}
      <section className="container-px py-16 md:py-24">
        <SectionHeading
          eyebrow="Experience"
          title="My work experience"
          description="Where I've worked and what I've been building along the way."
        />
        <div className="mt-12 max-w-3xl">
          <Timeline items={workTimeline} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-px py-16 md:py-24">
        <SectionHeading
          eyebrow="Kind words"
          title="What people say"
          description="Feedback from people I've worked with."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12">
          <Testimonials items={DATA.testimonials} />
        </div>
      </section>

      {/* Latest posts */}
      {posts.length > 0 && (
        <section className="container-px py-16 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="From the blog"
              title="Latest articles"
              description="Notes on development, tools and things I've learned."
            />
            <Button
              asChild
              variant="outline"
              className="rounded-full font-semibold"
            >
              <Link href="/blog">
                Browse all
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.metadata.title}
                summary={post.metadata.summary}
                publishedAt={post.metadata.publishedAt}
                category={post.metadata.category}
                readingTime={post.metadata.readingTime}
                image={post.metadata.image || undefined}
              />
            ))}
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
