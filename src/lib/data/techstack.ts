import type { IconType } from "react-icons";
import {
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGo,
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
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { TechStackItem } from "@/types";

export const techStack: (TechStackItem & { Icon: IconType })[] = [
  { name: "TypeScript", Icon: SiTypescript, icon: "typescript", category: "language" },
  { name: "Python", Icon: SiPython, icon: "python", category: "language" },
  { name: "Go", Icon: SiGo, icon: "go", category: "language" },
  { name: "React", Icon: SiReact, icon: "react", category: "framework" },
  { name: "Next.js", Icon: SiNextdotjs, icon: "nextjs", category: "framework" },
  { name: "Node.js", Icon: SiNodedotjs, icon: "nodejs", category: "framework" },
  { name: "TailwindCSS", Icon: SiTailwindcss, icon: "tailwind", category: "framework" },
  { name: "PostgreSQL", Icon: SiPostgresql, icon: "postgresql", category: "database" },
  { name: "MongoDB", Icon: SiMongodb, icon: "mongodb", category: "database" },
  { name: "Redis", Icon: SiRedis, icon: "redis", category: "database" },
  { name: "AWS", Icon: FaAws, icon: "aws", category: "cloud" },
  { name: "Docker", Icon: SiDocker, icon: "docker", category: "tool" },
  { name: "Kubernetes", Icon: SiKubernetes, icon: "kubernetes", category: "cloud" },
  { name: "Git", Icon: SiGit, icon: "git", category: "tool" },
  { name: "GitHub Actions", Icon: SiGithubactions, icon: "githubactions", category: "tool" },
];
