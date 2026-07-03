"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, [role='button'], [data-cursor-hover]";

function subscribeToPointerSupport(callback: () => void) {
  const finePointer = window.matchMedia("(pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  finePointer.addEventListener("change", callback);
  reducedMotion.addEventListener("change", callback);
  return () => {
    finePointer.removeEventListener("change", callback);
    reducedMotion.removeEventListener("change", callback);
  };
}

function getPointerSupportSnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getPointerSupportServerSnapshot() {
  return false;
}

export function CustomCursor() {
  const isSupported = useSyncExternalStore(
    subscribeToPointerSupport,
    getPointerSupportSnapshot,
    getPointerSupportServerSnapshot,
  );
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    document.documentElement.classList.toggle("custom-cursor-active", isSupported);
    return () => document.documentElement.classList.remove("custom-cursor-active");
  }, [isSupported]);

  useEffect(() => {
    if (!isSupported) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [isSupported, isVisible, cursorX, cursorY]);

  if (!isSupported) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x, y, opacity: isVisible ? 1 : 0 }}
      aria-hidden
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        animate={{
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </motion.div>
  );
}
