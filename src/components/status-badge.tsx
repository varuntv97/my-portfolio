"use client";

import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status?: "available" | "busy" | "open-to-opportunities";
  className?: string;
}

export function StatusBadge({
  status = "available",
  className,
}: StatusBadgeProps) {
  const statusConfig = {
    available: {
      text: "Available for Freelance",
      dotColor: "bg-emerald-500",
      bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
      textColor: "text-emerald-700 dark:text-emerald-400",
      ringColor: "ring-emerald-500/30",
    },
    busy: {
      text: "Currently busy",
      dotColor: "bg-amber-500",
      bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
      textColor: "text-amber-700 dark:text-amber-400",
      ringColor: "ring-amber-500/30",
    },
    "open-to-opportunities": {
      text: "Open to opportunities",
      dotColor: "bg-blue-500",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
      textColor: "text-blue-700 dark:text-blue-400",
      ringColor: "ring-blue-500/30",
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ring-1",
        config.bgColor,
        config.textColor,
        config.ringColor,
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            config.dotColor
          )}
        />
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            config.dotColor
          )}
        />
      </span>
      {config.text}
    </div>
  );
}

