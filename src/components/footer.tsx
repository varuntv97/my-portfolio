import { Logo } from "@/components/logo";
import { DATA } from "@/data/resume";
import Link from "next/link";

const PAGE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const MORE_LINKS = [
  { href: "/portfolio", label: "Case Studies" },
  { href: "/blog", label: "Articles" },
  { href: "/protected", label: "Protected Page" },
  { href: "/this-page-does-not-exist", label: "404 Page" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(DATA.contact.social).filter(
    ([, s]) => s.navbar
  );

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-px py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-muted-foreground">
              {DATA.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid size-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Pages
            </h3>
            <ul className="mt-4 space-y-3">
              {PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              More
            </h3>
            <ul className="mt-4 space-y-3">
              {MORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="text-muted-foreground transition-colors hover:text-foreground break-words"
                >
                  {DATA.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${DATA.contact.tel}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {DATA.contact.tel}
                </a>
              </li>
              <li className="text-muted-foreground">{DATA.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {DATA.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js &amp; Tailwind CSS, designed in the spirit of
            Paperfolio.
          </p>
        </div>
      </div>
    </footer>
  );
}
