import { CtaSection } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return DATA.projects.map((p) => ({ slug: p.slug }));
}

function getProject(slug: string) {
  const index = DATA.projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const project = DATA.projects[index];
  const caseStudy =
    DATA.caseStudies[slug as keyof typeof DATA.caseStudies] ?? null;
  const prev = index > 0 ? DATA.projects[index - 1] : null;
  const next =
    index < DATA.projects.length - 1 ? DATA.projects[index + 1] : null;
  return { project, caseStudy, prev, next };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const data = getProject(slug);
  if (!data) return { title: "Project not found" };
  return {
    title: data.project.title,
    description: data.project.description,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const data = getProject(slug);
  if (!data) notFound();
  const { project, caseStudy, prev, next } = data;

  const meta = caseStudy
    ? [
        { label: "Type", value: caseStudy.type },
        { label: "Role", value: caseStudy.role },
        { label: "Timeline", value: caseStudy.timeline },
        { label: "Deliverables", value: caseStudy.deliverables.join(", ") },
      ]
    : [];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="paper-dots pointer-events-none absolute inset-0 opacity-50" />
        <div className="container-px relative py-12 md:py-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>
          <div className="mt-6 flex flex-col gap-5">
            <Badge variant="secondary" className="w-fit rounded-full">
              {project.category}
            </Badge>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              {caseStudy?.overview ?? project.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.map((link) => (
                <Button
                  key={link.href}
                  asChild
                  variant={link.type === "Website" ? "default" : "outline"}
                  className="rounded-full font-semibold"
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.type === "Website" ? "Visit site" : "View source"}
                    <ExternalLink className="size-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="container-px py-12 md:py-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-border bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </section>

      {/* Body */}
      <section className="container-px pb-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Main content */}
          <div className="flex flex-col gap-12 lg:col-span-2">
            {caseStudy && (
              <>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold sm:text-3xl">The challenge</h2>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>

                <div className="flex flex-col gap-5">
                  <h2 className="text-2xl font-bold sm:text-3xl">My approach</h2>
                  <ol className="flex flex-col gap-4">
                    {caseStudy.approach.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                          {i + 1}
                        </span>
                        <span className="pt-1 text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7">
                  <h2 className="text-2xl font-bold sm:text-3xl">The outcome</h2>
                  <p className="text-muted-foreground">{caseStudy.outcome}</p>
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-7 lg:sticky lg:top-24">
              {meta.length > 0 && (
                <dl className="flex flex-col gap-5">
                  {meta.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <dt className="text-sm font-medium text-muted-foreground">
                        {m.label}
                      </dt>
                      <dd className="font-semibold">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="flex flex-col gap-3 border-t border-border pt-5">
                <span className="text-sm font-medium text-muted-foreground">
                  Tech stack
                </span>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="container-px py-12 md:py-16">
        <div className="grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="group flex flex-col gap-1 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <ArrowLeft className="size-4" />
                Previous
              </span>
              <span className="font-bold transition-colors group-hover:text-primary">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/portfolio/${next.slug}`}
              className="group flex flex-col items-end gap-1 rounded-2xl border border-border bg-card p-6 text-right transition-colors hover:border-primary sm:col-start-2"
            >
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                Next
                <ArrowRight className="size-4" />
              </span>
              <span className="font-bold transition-colors group-hover:text-primary">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
