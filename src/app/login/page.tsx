import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LoginForm } from "@/components/login/login-form";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Login",
  description: `Sign in to ${siteConfig.name}'s portfolio.`,
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <section className="bg-noise relative flex min-h-[calc(100vh-1px)] items-center justify-center overflow-hidden px-6 py-32">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 self-start text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Back to portfolio
        </Link>
        <LoginForm />
      </div>
    </section>
  );
}
