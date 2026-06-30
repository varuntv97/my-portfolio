import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const ACCENTS = [
  "bg-brand-yellow/15 text-brand-yellow",
  "bg-brand-blue/15 text-brand-blue",
  "bg-brand-purple/15 text-brand-purple",
  "bg-brand-red/15 text-brand-red",
  "bg-brand-orange/15 text-brand-orange",
] as const;

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  index = 0,
}: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)] sm:p-8">
      <span
        className={cn(
          "grid size-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
          ACCENTS[index % ACCENTS.length]
        )}
      >
        <Icon className="size-7" />
      </span>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
