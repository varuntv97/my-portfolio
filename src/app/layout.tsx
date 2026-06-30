import Navbar from "@/components/navbar";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Varun TV",
    "Software Developer",
    "Senior Software Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Mysuru",
    "Karnataka",
    "India",
    "Full Stack Developer",
    "AI Integration",
  ],
  authors: [{ name: "Varun TV", url: DATA.url }],
  creator: "Varun TV",
  publisher: "Varun TV",
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    description: DATA.description,
    creator: "@varuntv97",
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/manifest.json",
  alternates: {
    canonical: DATA.url,
    languages: {
      "en-US": DATA.url,
      "es-ES": DATA.url,
    },
  },
  appleWebApp: {
    capable: true,
    title: DATA.name,
    statusBarStyle: "default",
    startupImage: [
      "/favicon/apple-touch-icon.png",
      "/favicon/apple-touch-icon-120x120.png",
      "/favicon/apple-touch-icon-152x152.png",
      "/favicon/apple-touch-icon-167x167.png",
      "/favicon/apple-touch-icon-180x180.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable
        )}
        suppressHydrationWarning
      >
        <StripedPattern className="fixed inset-0 z-0 stroke-[0.75] text-foreground/10 dark:text-foreground/15 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,white,transparent)]" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 sm:py-24">
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
