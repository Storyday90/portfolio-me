"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 sm:py-36" aria-label="Testimonials">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people I've worked with say"
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeInUp}>
              <Card className="flex h-full flex-col gap-6 p-7">
                <Quote className="size-6 text-accent" aria-hidden />
                <p className="flex-1 text-sm leading-relaxed text-foreground/85">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-accent"
                    style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}
                    aria-hidden
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
