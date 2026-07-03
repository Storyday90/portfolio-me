import type { ExperienceItem } from "@/types";

/** Placeholder work history — replace with your real roles and achievements. */
export const experience: ExperienceItem[] = [
  {
    company: "Vertex Labs",
    role: "Senior Software Engineer",
    duration: "2023 — Present",
    location: "Remote",
    achievements: [
      "Led migration of a monolithic API to a microservices architecture, cutting p95 latency by 42%.",
      "Designed the core billing engine now processing over $2M in monthly transactions.",
      "Mentored 4 engineers and established the team's system-design review process.",
    ],
    stack: ["TypeScript", "Node.js", "AWS", "PostgreSQL", "Kubernetes"],
  },
  {
    company: "Northwind Systems",
    role: "Backend Engineer",
    duration: "2021 — 2023",
    location: "Remote",
    achievements: [
      "Built an event-driven data pipeline processing 5M+ daily events with Kafka and Go.",
      "Reduced infrastructure costs by 30% through query optimization and caching strategy.",
      "Shipped a public REST API adopted by 200+ external developers within 6 months.",
    ],
    stack: ["Go", "Kafka", "Docker", "Redis"],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "2019 — 2021",
    location: "Remote",
    achievements: [
      "Delivered 10+ production web applications for startups across fintech and healthtech.",
      "Built a component library and design system adopted across 3 client teams.",
    ],
    stack: ["React", "Next.js", "TailwindCSS", "Firebase"],
  },
];
