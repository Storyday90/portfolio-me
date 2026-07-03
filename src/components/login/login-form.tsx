"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2, LogIn } from "lucide-react";
import { SiGithub, SiGoogle } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema, type LoginFormValues } from "@/lib/schemas/login";

export function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit() {
    startTransition(async () => {
      // Frontend-only demo — no auth backend is wired up yet. Swap this for
      // a real sign-in call (NextAuth, Clerk, your own API, etc.) when ready.
      await new Promise((resolve) => setTimeout(resolve, 900));
      toast.success("This is a frontend-only demo — no account was actually signed in.");
    });
  }

  function handleOAuthClick(provider: string) {
    toast.info(`${provider} sign-in isn't wired up yet — frontend demo only.`);
  }

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-border bg-surface p-8 shadow-xl">
      <div className="flex flex-col gap-2 text-center">
        <span className="mx-auto flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <LogIn className="size-5" />
        </span>
        <h1 className="text-xl font-semibold text-foreground">Welcome back</h1>
        <p className="text-sm text-muted">Sign in to continue.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => handleOAuthClick("GitHub")}
          className="gap-2"
        >
          <SiGithub className="size-4" /> GitHub
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => handleOAuthClick("Google")}
          className="gap-2"
        >
          <SiGoogle className="size-4" /> Google
        </Button>
      </div>

      <div className="flex items-center gap-3 text-xs text-muted">
        <span className="h-px flex-1 bg-border" aria-hidden />
        or continue with email
        <span className="h-px flex-1 bg-border" aria-hidden />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@company.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p role="alert" className="text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/login" className="text-xs text-muted transition-colors hover:text-accent">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="current-password"
              aria-invalid={!!errors.password}
              className="pr-11"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-foreground"
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
          {errors.password && (
            <p role="alert" className="text-xs text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm text-muted">
          <input
            type="checkbox"
            style={{ accentColor: "var(--accent)" }}
            className="size-4 rounded border-border"
            {...register("remember")}
          />
          Remember me
        </label>

        <Button type="submit" size="lg" disabled={isPending} className="w-full">
          {isPending ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Signing in…
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-muted">
        Need access?{" "}
        <Link href="/#contact" className="font-medium text-foreground hover:text-accent">
          Get in touch
        </Link>
      </p>
    </div>
  );
}
