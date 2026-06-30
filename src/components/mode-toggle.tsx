"use client";

import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsClient } from "@/lib/use-is-client";
import { useTheme } from "next-themes";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  return (
    <AnimatedThemeToggler
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "size-12 [&_svg]:size-4",
        className
      )}
      theme={isClient && resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
    />
  );
}
