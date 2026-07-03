"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Database, Layout, Server, Settings, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/lib/data/skills";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import type { SkillCategory } from "@/types";

const iconMap: Record<SkillCategory["icon"], typeof Code2> = {
  code: Code2,
  server: Server,
  layout: Layout,
  cloud: Cloud,
  settings: Settings,
  database: Database,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36" aria-label="Skills">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for shipping production systems."
          description="Languages, frameworks, and infrastructure I reach for daily — sharpened through real projects, not tutorials."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div key={category.category} variants={fadeInUp}>
                <Card className="flex h-full flex-col gap-6 p-6 transition-colors hover:border-accent/30">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="size-4.5" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{category.category}</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    {category.skills.map((skill, i) => (
                      <ProgressBar
                        key={skill.name}
                        label={skill.name}
                        value={skill.level}
                        delay={i * 0.08}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
