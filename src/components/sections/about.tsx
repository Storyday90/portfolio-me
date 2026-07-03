"use client";

import { Code2, Compass, Layers, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { philosophy, values, focusAreas } from "@/lib/data/about";
import { siteConfig } from "@/lib/data/site";
import { motion } from "framer-motion";

const valueIcons = [Compass, Layers, Sparkles, Code2];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36" aria-label="About me">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="I build things that hold up under real-world pressure."
          description="A quick look at who I am, how I think, and what I care about when I write software."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="flex flex-col gap-6">
            <p className="text-balance text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              {philosophy}
            </p>
            <p className="text-base leading-relaxed text-muted">
              I&apos;m {siteConfig.name}, a software engineer with {siteConfig.yearsLearning}+ years building
              backend systems, cloud infrastructure, and — more recently — applied AI. I work end-to-end:
              designing the data model, shipping the API, and polishing the interface that sits on top of it.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-1 rounded-2xl border border-border bg-surface p-2"
          >
            {values.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="flex items-start gap-3 rounded-xl px-4 py-3.5 transition-colors hover:bg-surface-hover"
                >
                  <Icon className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-sm font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
