import { PageHeader } from "@/components/page-header";
import { PortfolioCard } from "@/components/portfolio-card";
import { CtaSection } from "@/components/sections/cta";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A selection of web applications, websites and products built by Varun TV.",
};

export default function PortfolioPage() {
  const projects = DATA.projects;

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work & case studies"
        description="A collection of projects I've designed and built — from AI-powered apps to custom client websites. Click any project to read the full case study."
      />

      <section className="container-px py-16 md:py-24">
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
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

      <CtaSection />
    </>
  );
}
