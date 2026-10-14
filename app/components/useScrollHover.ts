"use client";

import { useInView } from "framer-motion";
import { useRef, useSyncExternalStore } from "react";

const touchQuery = "(hover: none)";

const subscribe = (onChange: () => void) => {
  const query = window.matchMedia(touchQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};
const getIsTouch = () => window.matchMedia(touchQuery).matches;
const getServerIsTouch = () => false;

/**
 * Touch screens never fire `whileHover`, so on those devices this plays the
 * "hover" variant while the element crosses the vertical center of the screen
 * instead. Returns `[ref, animate]`; attach both to the motion element that owns the
 * hover variants. Mouse devices are untouched and keep the real hover.
 */
export function useScrollHover<T extends Element>() {
  const ref = useRef<T>(null);
  const isTouch = useSyncExternalStore(subscribe, getIsTouch, getServerIsTouch);
  const atCenter = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const animate = isTouch && atCenter ? "hover" : "rest";
  return [ref, animate] as const;
}
