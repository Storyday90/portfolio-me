"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data/experience";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-28 sm:py-36" aria-label="Work experience">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've grown as an engineer."
          description="A timeline of roles that shaped how I design, build, and ship software."
        />

        <div ref={containerRef} className="relative mt-16">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-[19px]" aria-hidden />
          <motion.div
            className="absolute left-[15px] top-2 w-px bg-accent sm:left-[19px]"
            style={{ height: lineHeight }}
            aria-hidden
          />

          <ol className="flex flex-col gap-14">
            {experience.map((item) => (
              <li key={`${item.company}-${item.duration}`} className="relative pl-10 sm:pl-14">
                <span className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border border-border bg-surface text-accent sm:size-10">
                  <Briefcase className="size-3.5 sm:size-4" />
                </span>

                <Reveal
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.role} <span className="text-muted">· {item.company}</span>
                    </h3>
                    <span className="text-sm text-muted">{item.duration}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted">{item.location}</p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2.5 text-sm leading-relaxed text-foreground/80">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
