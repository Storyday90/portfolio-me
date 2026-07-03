import type { IconType } from "react-icons";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "resume";
}

export interface Skill {
  name: string;
  /** Brand icon, when the skill is a real product with a recognizable mark (e.g. TypeScript, AWS). */
  Icon?: IconType;
}

export interface SkillCategory {
  category: string;
  icon: "code" | "server" | "layout" | "cloud" | "settings" | "database" | "wrench";
  skills: Skill[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
  year: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  stack: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}
