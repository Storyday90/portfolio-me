"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data/projects";

export function Projects() {
  const filters = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.stack.forEach((t) => tags.add(t)));
    return ["All", "Featured", ...Array.from(tags).sort()];
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    if (activeFilter === "Featured") return projects.filter((p) => p.featured);
    return projects.filter((p) => p.stack.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="relative py-28 sm:py-36" aria-label="Featured projects">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Work"
            title="Featured projects"
            description="A selection of products I've designed, built, and shipped — from billing infrastructure to AI-powered tools."
            className="sm:max-w-xl"
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                activeFilter === filter
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted hover:border-accent/30 hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted">No projects match this filter yet.</p>
        )}
      </div>
    </section>
  );
}
