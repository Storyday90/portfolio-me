import type { NavItem, SocialLink } from "@/types";

/**
 * Central site configuration. Edit these values with your real details —
 * everything else in the site reads from here.
 */
export const siteConfig = {
  name: "Suhail",
  title: "Software Engineer",
  headline: "Software engineer crafting scalable products & meaningful digital experiences.",
  intro:
    "I design and build backend systems, cloud infrastructure, and AI-driven products — obsessed with clean architecture and the small details that make software feel effortless.",
  location: "Remote / Worldwide",
  email: "faraelweds@gmail.com",
  url: "https://suhail.dev",
  resumeUrl: "/resume.pdf",
  yearsLearning: 5,
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/suhail", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/suhail", icon: "linkedin" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" },
  { label: "Resume", href: "/resume.pdf", icon: "resume" },
];
