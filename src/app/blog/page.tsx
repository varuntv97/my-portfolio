import { BlogGrid } from "@/components/blog-grid";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/sections/cta";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software development, tools, and things I've learned.",
  alternates: {
    canonical: `${DATA.url}/blog`,
  },
};

export default async function BlogPage() {
  const posts = (await getBlogPosts())
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .map((post) => ({
      slug: post.slug,
      title: post.metadata.title,
      summary: post.metadata.summary,
      publishedAt: post.metadata.publishedAt,
      category: post.metadata.category ?? "Article",
      readingTime: post.metadata.readingTime,
      image: post.metadata.image || undefined,
    }));

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Articles & resources"
        description="Notes on development, tools and lessons learned while building software."
      />

      <section className="container-px py-16 md:py-24">
        <BlogGrid posts={posts} categories={DATA.blogCategories} />
      </section>

      <CtaSection
        title="Enjoyed the read? Let's talk."
        description="If something here resonated or you'd like to collaborate, I'd love to hear from you."
      />
    </>
  );
}
