import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type BlogCardProps = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  category?: string;
  readingTime?: string;
  image?: string;
};

export function BlogCard({
  slug,
  title,
  summary,
  publishedAt,
  category = "Article",
  readingTime,
  image,
}: BlogCardProps) {
  const href = `/blog/${slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)]">
      <Link
        href={href}
        className="relative block aspect-[16/10] overflow-hidden bg-secondary"
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-accent">
            <span className="font-heading text-2xl font-bold text-muted-foreground/40">
              {category}
            </span>
          </div>
        )}
        <Badge
          variant="secondary"
          className="absolute left-4 top-4 rounded-full bg-background/90 backdrop-blur"
        >
          {category}
        </Badge>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          {readingTime && (
            <>
              <span className="size-1 rounded-full bg-muted-foreground/50" />
              <span>{readingTime}</span>
            </>
          )}
        </div>
        <h3 className="text-xl font-bold leading-snug">
          <Link href={href} className="transition-colors hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm text-muted-foreground">{summary}</p>
        <Link
          href={href}
          className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          Read article
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
