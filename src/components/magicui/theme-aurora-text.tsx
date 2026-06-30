"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { useIsClient } from "@/lib/use-is-client";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";

const LIGHT_AURORA_COLORS = ["#9333ea", "#2563eb", "#0891b2", "#db2777"];
const DARK_AURORA_COLORS = ["#f472b6", "#c084fc", "#60a5fa", "#22d3ee"];

type ThemeAuroraTextProps = Omit<ComponentProps<typeof AuroraText>, "colors"> & {
  lightColors?: string[];
  darkColors?: string[];
};

export function ThemeAuroraText({
  children,
  lightColors = LIGHT_AURORA_COLORS,
  darkColors = DARK_AURORA_COLORS,
  ...props
}: ThemeAuroraTextProps) {
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();

  const colors =
    isClient && resolvedTheme === "dark" ? darkColors : lightColors;

  return (
    <AuroraText colors={colors} {...props}>
      {children}
    </AuroraText>
  );
}
