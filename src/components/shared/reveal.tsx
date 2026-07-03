"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const visible = variants.visible;
  const resolvedVariants: Variants =
    delay && typeof visible === "object"
      ? {
          ...variants,
          visible: {
            ...(visible as Record<string, unknown>),
            transition: { ...(visible as Record<string, unknown>).transition as object, delay },
          },
        }
      : variants;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={resolvedVariants}
    >
      {children}
    </motion.div>
  );
}
