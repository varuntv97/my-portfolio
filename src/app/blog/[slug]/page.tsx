import { CtaSection } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { cn, formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = await getPost(slug);

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${DATA.url}/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const socials = Object.entries(DATA.contact.social).filter(
  ([, s]) => s.navbar
);

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { title, publishedAt, category, readingTime, image } = post.metadata;

  return (
    <article id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: post.metadata.summary,
            image: image
              ? `${DATA.url}${image}`
              : `${DATA.url}/og?title=${title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: { "@type": "Person", name: DATA.name },
          }),
        }}
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="paper-dots pointer-events-none absolute inset-0 opacity-50" />
        <div className="container-px relative py-12 md:py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to blog
          </Link>
          <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center gap-5 text-center">
            <Badge variant="secondary" className="rounded-full">
              {category ?? "Article"}
            </Badge>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Suspense fallback={<span className="h-5" />}>
                <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
              </Suspense>
              {readingTime && (
                <>
                  <span className="size-1 rounded-full bg-muted-foreground/50" />
                  <span>{readingTime}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {image && (
        <section className="container-px py-12">
          <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-secondary">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </section>
      )}

      {/* Body */}
      <section className="container-px py-12 md:py-16">
        <div
          className={cn(
            "prose prose-neutral mx-auto max-w-3xl dark:prose-invert",
            "prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight",
            "prose-a:text-primary prose-a:font-medium hover:prose-a:underline",
            "prose-img:rounded-2xl prose-img:border prose-img:border-border"
          )}
          dangerouslySetInnerHTML={{ __html: post.source }}
        />

        {/* Author card */}
        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-5 rounded-3xl border border-border bg-card p-7 text-center sm:flex-row sm:text-left">
          <Image
            src={DATA.avatarUrl}
            alt={DATA.name}
            width={72}
            height={72}
            className="size-[72px] rounded-full border border-border object-cover"
          />
          <div className="flex flex-col gap-2">
            <div>
              <p className="font-bold">{DATA.name}</p>
              <p className="text-sm text-muted-foreground">{DATA.description}</p>
            </div>
            <div className="flex justify-center gap-2 sm:justify-start">
              {socials.map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid size-9 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </article>
  );
}
