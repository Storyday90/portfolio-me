"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const headlineWords = siteConfig.headline.split(" ");

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const glowBackground = useMotionTemplate`radial-gradient(600px circle at ${useTransform(
    mouseX,
    (v) => `${v * 100}%`,
  )} ${useTransform(mouseY, (v) => `${v * 100}%`)}, color-mix(in srgb, var(--accent) 15%, transparent), transparent 70%)`;

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="bg-noise relative flex min-h-screen items-center overflow-hidden pt-28"
      aria-label="Introduction"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBackground }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        aria-hidden
      />

      <motion.div style={{ y, opacity }} className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="visible" className="flex flex-col gap-8">
          <motion.div variants={fadeInUp} className="flex items-center gap-2 self-start rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-sm">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={fadeInUp}
                className={`inline-block ${
                  ["scalable", "meaningful", "digital"].some((k) => word.toLowerCase().includes(k))
                    ? "text-gradient"
                    : ""
                }`}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>

          <motion.p variants={fadeInUp} className="max-w-xl text-balance text-lg text-muted">
            {siteConfig.intro}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">
                View Projects <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                Contact Me <Mail className="size-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.dl variants={fadeInUp} className="flex flex-wrap gap-x-10 gap-y-4 pt-4">
            {[
              { label: "Years learning & building", value: `${siteConfig.yearsLearning}+` },
              { label: "Production projects shipped", value: "20+" },
              { label: "Focus", value: "Backend · AI · Cloud" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="text-xs text-muted">{stat.label}</dt>
                <dd className="text-xl font-semibold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 120% at 20% 0%, color-mix(in srgb, var(--accent) 30%, transparent), transparent 55%)",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-10 -top-10 size-56 rounded-full opacity-50 blur-3xl"
              style={{ background: "var(--accent)" }}
              aria-hidden
            />
            <div className="relative flex h-full items-center justify-center">
              <span className="bg-gradient-to-b from-foreground/25 to-foreground/5 bg-clip-text font-mono text-9xl font-semibold text-transparent select-none">
                {siteConfig.name.charAt(0)}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 border-t border-border bg-background/50 p-4 backdrop-blur-md">
              <span className="text-sm font-medium text-foreground">{siteConfig.name}</span>
              <span className="text-xs text-muted">{siteConfig.title}</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glass absolute -left-6 top-8 flex items-center gap-2 rounded-2xl border border-border px-3 py-2 shadow-lg"
          >
            <Sparkles className="size-3.5 text-accent" />
            <span className="text-xs font-medium text-foreground">AI &amp; System Design</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="glass absolute -right-4 bottom-20 flex items-center gap-2 rounded-2xl border border-border px-3 py-2 shadow-lg"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium text-foreground">Building in public</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
