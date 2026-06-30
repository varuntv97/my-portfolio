import Image from "next/image";
import Link from "next/link";

export type TimelineItem = {
  title: string;
  subtitle: string;
  href?: string;
  logoUrl?: string;
  period?: string;
  location?: string;
  description?: string;
};

export function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <ol className="relative flex flex-col">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={`${item.title}-${i}`} className="relative flex gap-5 sm:gap-6">
            {/* Rail + node */}
            <div className="flex flex-col items-center">
              <span className="relative z-10 grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-border bg-card">
                {item.logoUrl ? (
                  <Image
                    src={item.logoUrl}
                    alt={item.subtitle}
                    width={56}
                    height={56}
                    className="size-full object-contain p-2"
                  />
                ) : (
                  <span className="font-heading text-lg font-bold text-muted-foreground">
                    {item.subtitle.charAt(0)}
                  </span>
                )}
              </span>
              {!isLast && (
                <span className="my-2 w-px flex-1 bg-border" aria-hidden />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-10">
              {item.period && (
                <span className="text-sm font-medium text-muted-foreground">
                  {item.period}
                </span>
              )}
              <h3 className="mt-1 text-lg font-bold sm:text-xl">{item.title}</h3>
              <p className="font-medium text-muted-foreground">
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    {item.subtitle}
                  </Link>
                ) : (
                  item.subtitle
                )}
                {item.location && (
                  <span className="text-muted-foreground/70">
                    {" "}
                    · {item.location}
                  </span>
                )}
              </p>
              {item.description && (
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
