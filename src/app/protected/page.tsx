import { PasswordGate } from "@/components/password-gate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password protected",
  robots: { index: false, follow: false },
};

export default function ProtectedPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="paper-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-px relative flex justify-center py-20">
        <PasswordGate />
      </div>
    </section>
  );
}
