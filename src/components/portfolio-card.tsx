import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type PortfolioCardProps = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies?: readonly string[];
  /** Stack image above text (default) or place it beside the text. */
  layout?: "stacked" | "split";
  /** Reverse the split layout (image on the right). */
  reverse?: boolean;
};

export function PortfolioCard({
  slug,
  title,
  category,
  description,
  image,
  technologies = [],
  layout = "stacked",
  reverse = false,
}: PortfolioCardProps) {
  const href = `/portfolio/${slug}`;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)]",
        layout === "split" &&
          "grid items-center gap-0 md:grid-cols-2"
      )}
    >
      {/* Media */}
      <Link
        href={href}
        className={cn(
          "relative block overflow-hidden bg-secondary",
          layout === "stacked" ? "aspect-[16/10]" : "aspect-[4/3] h-full md:order-none",
          layout === "split" && reverse && "md:order-last"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      {/* Body */}
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="rounded-full">
            {category}
          </Badge>
        </div>
        <h3 className="text-2xl font-bold leading-snug">
          <Link href={href} className="transition-colors hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="text-muted-foreground">{description}</p>

        {technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {technologies.slice(0, 5).map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={href}
          className="mt-2 inline-flex w-fit items-center gap-1.5 font-semibold text-foreground transition-colors hover:text-primary"
        >
          View case study
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
