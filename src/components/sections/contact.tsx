"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Mail, MapPin, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/app/actions";
import { contactSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { siteConfig, socialLinks } from "@/lib/data/site";

export function Contact() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(values: ContactFormValues) {
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        toast.success("Message sent — I'll get back to you soon.");
        reset();
      } else {
        toast.error(result.error ?? "Something went wrong. Please try again.");
      }
    });
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36" aria-label="Contact">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a role, a project, or just want to talk shop? My inbox is open."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-accent">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-xs text-muted">Location</p>
                  <p className="text-sm font-medium text-foreground">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Elsewhere</p>
              <div className="flex items-center gap-2">
                {socialLinks
                  .filter((l) => l.icon === "github" || l.icon === "linkedin")
                  .map((link) => {
                    const Icon = link.icon === "github" ? SiGithub : FaLinkedin;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        <Icon className="size-4" />
                      </a>
                    );
                  })}
              </div>
              <Button variant="outline" asChild className="self-start">
                <a href={siteConfig.resumeUrl} download>
                  Download Resume
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Jane Doe" aria-invalid={!!errors.name} {...register("name")} />
                  {errors.name && (
                    <p role="alert" className="text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p role="alert" className="text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me a little about the opportunity or project…"
                  aria-invalid={!!errors.message}
                  {...register("message")}
                />
                {errors.message && (
                  <p role="alert" className="text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" disabled={isPending} className="self-start">
                {isPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send className="size-4" />
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
