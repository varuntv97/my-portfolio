"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Lock, LockOpen } from "lucide-react";
import { useState } from "react";

// Demo-only gate (matches the template's password-protected page). The check
// runs client-side and is not real security — it's purely illustrative.
const DEMO_PASSWORD = "paperfolio";

export function PasswordGate() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value.trim().toLowerCase() === DEMO_PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (unlocked) {
    return (
      <div className="flex flex-col items-center gap-5 text-center">
        <span className="grid size-20 place-items-center rounded-3xl bg-primary/15 text-primary">
          <LockOpen className="size-10" />
        </span>
        <h1 className="text-3xl font-bold sm:text-4xl">You&apos;re in! 🎉</h1>
        <p className="max-w-md text-muted-foreground">
          This is the protected content. In a real build, anything behind the
          password would render here once unlocked.
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
      <span className="grid size-20 place-items-center rounded-3xl bg-primary/15 text-primary">
        <Lock className="size-10" />
      </span>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold sm:text-4xl">Password protected</h1>
        <p className="text-muted-foreground">
          This page is protected. Enter the password to continue.{" "}
          <span className="text-foreground">
            (Hint: <code className="font-mono">{DEMO_PASSWORD}</code>)
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
        <input
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Enter password"
          aria-invalid={error}
          className={cn(
            "w-full rounded-xl border bg-background px-4 py-3 text-center outline-none transition-colors focus:ring-2 focus:ring-primary/20",
            error
              ? "border-destructive focus:border-destructive"
              : "border-input focus:border-primary"
          )}
        />
        {error && (
          <p className="text-sm text-destructive">
            Incorrect password. Please try again.
          </p>
        )}
        <Button type="submit" size="lg" className="rounded-full font-semibold">
          Unlock
        </Button>
      </form>
    </div>
  );
}
