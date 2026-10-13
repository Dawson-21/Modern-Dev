"use client";

import { LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

// Loads framer-motion's animation features after the page renders instead of
// bundling them into the initial JavaScript. Components use `m.*` elements.
const loadFeatures = () =>
  import("./motionFeatures").then((mod) => mod.default);

export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
