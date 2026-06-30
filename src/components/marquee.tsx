import { cn } from "@/lib/utils";

/**
 * Infinite horizontal marquee. Renders its children twice so the loop is
 * seamless. Pure CSS animation (see globals.css `.animate-marquee`).
 */
export function Marquee({
  children,
  className,
  durationSeconds = 30,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  durationSeconds?: number;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        pauseOnHover && "marquee-paused",
        className
      )}
      style={
        { "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties
      }
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className="flex shrink-0 items-center gap-10 pr-10 animate-marquee"
        >
          {children}
        </div>
      ))}
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
