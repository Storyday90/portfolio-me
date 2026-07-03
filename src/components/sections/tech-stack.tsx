"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { techStack } from "@/lib/data/techstack";

export function TechStack() {
  return (
    <section className="relative py-28 sm:py-36" aria-label="Tech stack">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tools"
          title="Technologies I work with"
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5"
        >
          {techStack.map(({ name, Icon }) => (
            <motion.div
              key={name}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface px-4 py-8 transition-colors hover:border-accent/40"
            >
              <Icon className="size-8 text-muted transition-colors duration-300 group-hover:text-accent" />
              <span className="text-xs text-muted transition-colors group-hover:text-foreground">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
