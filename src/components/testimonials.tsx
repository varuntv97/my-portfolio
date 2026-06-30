import { Quote, Star } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  isPlaceholder?: boolean;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials({ items }: { items: readonly Testimonial[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t, i) => (
        <figure
          key={i}
          className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-7"
        >
          <Quote className="size-8 text-primary" />
          <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="size-4 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="flex-1 text-muted-foreground">
            “{t.quote}”
          </blockquote>
          <figcaption className="flex items-center gap-3 border-t border-border pt-5">
            <span className="grid size-11 place-items-center rounded-full bg-secondary font-heading text-sm font-bold">
              {initials(t.name)}
            </span>
            <span className="flex flex-col">
              <span className="font-semibold">{t.name}</span>
              <span className="text-sm text-muted-foreground">{t.title}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
