import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { Faq } from "@/components/faq";
import { SectionHeading } from "@/components/section-heading";
import { DATA } from "@/data/resume";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Varun TV for projects and collaborations.",
};

export default function ContactPage() {
  const socials = Object.entries(DATA.contact.social).filter(
    ([, s]) => s.navbar
  );

  const infoBlocks = [
    {
      icon: Mail,
      label: "Email",
      value: DATA.contact.email,
      href: `mailto:${DATA.contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: DATA.contact.tel,
      href: `tel:${DATA.contact.tel}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: DATA.location,
      href: DATA.locationLink,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project, a question, or just want to say hi? Drop me a message and I'll get back to you within 24–48 hours."
      />

      <section className="container-px py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {infoBlocks.map((block) => (
              <Link
                key={block.label}
                href={block.href}
                target={block.label === "Location" ? "_blank" : undefined}
                rel={block.label === "Location" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <block.icon className="size-6" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    {block.label}
                  </span>
                  <span className="font-semibold text-foreground transition-colors group-hover:text-primary break-words">
                    {block.value}
                  </span>
                </span>
              </Link>
            ))}

            <div className="rounded-3xl border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground">Find me online</p>
              <div className="mt-4 flex items-center gap-3">
                {socials.map(([name, social]) => (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="grid size-11 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <social.icon className="size-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            align="center"
            className="mx-auto mb-12"
          />
          <Faq items={DATA.faqs} />
        </div>
      </section>
    </>
  );
}
