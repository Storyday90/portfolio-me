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
  level: number; // 0-100
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
  caseStudy?: string;
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

export interface TechStackItem {
  name: string;
  icon: string;
  category: "language" | "framework" | "tool" | "cloud" | "database";
}
