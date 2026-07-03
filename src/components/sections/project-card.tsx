"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/lib/motion";
import type { Project } from "@/types";

const GRADIENT_ANGLES = [140, 200, 60, 320, 100];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const angle = GRADIENT_ANGLES[index % GRADIENT_ANGLES.length];

  return (
    <motion.article
      layout
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(${angle}deg, color-mix(in srgb, var(--accent) 35%, var(--surface)) 0%, var(--surface) 70%)`,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden
        />
        <div className="relative flex h-full items-center justify-center">
          <span className="font-mono text-6xl font-semibold text-foreground/15 select-none">
            {project.title.charAt(0)}
          </span>
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted backdrop-blur-sm">
          {project.year}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-2 text-sm">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
            >
              <SiGithub className="size-4" />
              Code
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
            >
              <ArrowUpRight className="size-4" />
              Live Demo
            </Link>
          )}
          {project.caseStudy && (
            <Link
              href={project.caseStudy}
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
            >
              <FileText className="size-4" />
              Case Study
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
