import {
  SiDocker,
  SiGit,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiGo,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "code",
    skills: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Python", Icon: SiPython },
      { name: "Go", Icon: SiGo },
      { name: "SQL" },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Django / FastAPI" },
      { name: "REST & GraphQL APIs" },
      { name: "Microservices" },
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TailwindCSS", Icon: SiTailwindcss },
      { name: "Framer Motion" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "AWS", Icon: FaAws },
      { name: "Docker", Icon: SiDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "CI/CD (GitHub Actions)" },
    ],
  },
  {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Redis", Icon: SiRedis },
      { name: "MongoDB", Icon: SiMongodb },
    ],
  },
  {
    category: "Tools & AI",
    icon: "wrench",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "LLM / RAG Systems" },
      { name: "System Design" },
    ],
  },
];
