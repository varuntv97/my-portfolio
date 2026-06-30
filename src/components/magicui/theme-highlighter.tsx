"use client";

import { Highlighter } from "@/components/magicui/highlighter";
import { useIsClient } from "@/lib/use-is-client";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";

const DEFAULT_LIGHT_COLOR = "#FDE68A";
const DEFAULT_DARK_COLOR = "#92400E";

type ThemeHighlighterProps = Omit<ComponentProps<typeof Highlighter>, "color"> & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemeHighlighter({
  children,
  lightColor = DEFAULT_LIGHT_COLOR,
  darkColor = DEFAULT_DARK_COLOR,
  ...props
}: ThemeHighlighterProps) {
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();

  const color =
    isClient && resolvedTheme === "dark" ? darkColor : lightColor;

  return (
    <Highlighter action="highlight" color={color} {...props}>
      {children}
    </Highlighter>
  );
}
