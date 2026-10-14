"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

// Components use the lightweight `m.*` elements; the animation features come
// from here. They are loaded synchronously on purpose: deferring them with a
// dynamic import cost ~3x the total blocking time (one long task after load).
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
