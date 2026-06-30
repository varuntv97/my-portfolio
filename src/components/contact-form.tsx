"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "Optional" },
  { name: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
] as const;

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // UI-only for now: no backend wired up yet. We surface a success state and
  // also build a mailto so the message isn't lost.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card p-8 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="text-xl font-bold">Thank you!</h3>
        <p className="max-w-sm text-muted-foreground">
          Your message has been submitted. I&apos;ll get back to you within
          24–48 hours.
        </p>
        <Button
          variant="outline"
          className="rounded-full font-semibold"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div
            key={field.name}
            className={cn(
              "flex flex-col gap-2",
              field.name === "subject" && "sm:col-span-2"
            )}
          >
            <label
              htmlFor={field.name}
              className="text-sm font-medium text-foreground"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.name === "name" || field.name === "email"}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project…"
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <Button type="submit" size="lg" className="rounded-full font-semibold">
        Send message
        <Send className="size-4" />
      </Button>
    </form>
  );
}
