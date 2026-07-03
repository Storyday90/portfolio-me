import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "code",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "Go", level: 80 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Django / FastAPI", level: 88 },
      { name: "REST & GraphQL APIs", level: 92 },
      { name: "Microservices", level: 85 },
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "React / Next.js", level: 93 },
      { name: "TailwindCSS", level: 92 },
      { name: "Framer Motion", level: 82 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "AWS", level: 87 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD (GitHub Actions)", level: 85 },
    ],
  },
  {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    category: "Tools & AI",
    icon: "wrench",
    skills: [
      { name: "Git", level: 95 },
      { name: "LLM / RAG Systems", level: 85 },
      { name: "System Design", level: 88 },
    ],
  },
];
