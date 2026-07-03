"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** Guards client-only rendering (e.g. theme-dependent UI) until after hydration. */
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
