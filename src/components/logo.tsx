import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Varun TV — home"
      className={cn(
        "group inline-flex items-center gap-2 font-heading text-xl font-bold tracking-tight",
        className
      )}
    >
      <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
        V
      </span>
      <span>
        Varun<span className="text-primary">.</span>
      </span>
    </Link>
  );
}
