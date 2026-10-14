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
 * Touch screens never fire hover, so on those devices this reports whether the
 * element is crossing the vertical center of the screen instead. Returns
 * `[ref, lit]`. Mouse devices always get `false` and keep the real hover.
 */
export function useScrollLit<T extends Element>() {
  const ref = useRef<T>(null);
  const isTouch = useSyncExternalStore(subscribe, getIsTouch, getServerIsTouch);
  const atCenter = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return [ref, isTouch && atCenter] as const;
}

/**
 * Same trigger for framer-motion cards: plays the "hover" variant while the
 * element crosses the center of the screen. Returns `[ref, animate]`; attach
 * both to the motion element that owns the hover variants.
 */
export function useScrollHover<T extends Element>() {
  const [ref, lit] = useScrollLit<T>();
  return [ref, lit ? "hover" : "rest"] as const;
}
