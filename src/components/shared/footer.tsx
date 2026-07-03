import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { siteConfig, socialLinks } from "@/lib/data/site";

const iconMap = { github: SiGithub, linkedin: FaLinkedin, mail: Mail, resume: FileText, twitter: SiX };

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {siteConfig.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon className="size-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
