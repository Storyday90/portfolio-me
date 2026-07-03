"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  ArrowRight,
  Mail,
  FileText,
  Moon,
  Sun,
  Home,
  User,
  Wrench,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { navItems, siteConfig, socialLinks } from "@/lib/data/site";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "#about": User,
  "#skills": Wrench,
  "#projects": Briefcase,
  "#experience": Briefcase,
  "#testimonials": MessageSquare,
  "#contact": Mail,
};

const socialIcons = { github: SiGithub, linkedin: FaLinkedin, mail: Mail, resume: FileText, twitter: SiX };

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  function go(href: string) {
    onOpenChange(false);
    router.push(href);
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-24 z-[90] w-full max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Command palette</DialogTitle>
          <DialogDescription className="sr-only">
            Search and jump to any section or link on {siteConfig.name}&apos;s portfolio.
          </DialogDescription>
          <Command label="Command palette" className="flex flex-col">
            <div className="flex items-center gap-2 border-b border-border px-4">
              <Command.Input
                autoFocus
                placeholder="Search sections, links…"
                className="h-14 w-full bg-transparent text-sm text-foreground placeholder:text-muted outline-none"
              />
            </div>
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="px-4 py-6 text-center text-sm text-muted">
                No results found.
              </Command.Empty>

              <Command.Group heading="Navigate" className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2">
                <Command.Item
                  onSelect={() => go("#hero")}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground data-[selected=true]:bg-surface-hover"
                >
                  <Home className="size-4 text-muted" />
                  Home
                  <ArrowRight className="ml-auto size-3.5 text-muted" />
                </Command.Item>
                {navItems.map((item) => {
                  const Icon = sectionIcons[item.href] ?? ArrowRight;
                  return (
                    <Command.Item
                      key={item.href}
                      onSelect={() => go(item.href)}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground data-[selected=true]:bg-surface-hover"
                    >
                      <Icon className="size-4 text-muted" />
                      {item.label}
                      <ArrowRight className="ml-auto size-3.5 text-muted" />
                    </Command.Item>
                  );
                })}
              </Command.Group>

              <Command.Group heading="Links" className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.icon];
                  return (
                    <Command.Item
                      key={link.label}
                      onSelect={() => {
                        onOpenChange(false);
                        window.open(link.href, link.href.startsWith("http") ? "_blank" : "_self");
                      }}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground data-[selected=true]:bg-surface-hover"
                    >
                      <Icon className="size-4 text-muted" />
                      {link.label}
                    </Command.Item>
                  );
                })}
              </Command.Group>

              <Command.Group heading="Preferences" className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2">
                <Command.Item
                  onSelect={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground data-[selected=true]:bg-surface-hover"
                >
                  {resolvedTheme === "dark" ? <Sun className="size-4 text-muted" /> : <Moon className="size-4 text-muted" />}
                  Toggle theme
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
