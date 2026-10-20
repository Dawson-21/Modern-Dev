import type { PointerEvent } from "react";

function track(event: PointerEvent<HTMLElement>) {
  // Touch pointers are ignored so the glow stays at its resting position.
  // if (event.pointerType === "touch") return;
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  element.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

/**
 * Spread onto a card to feed the Spotlight hover: it records where the mouse
 * is inside the card as --mx/--my, which the glow gradient reads. The position
 * is deliberately kept when the pointer leaves, so the glow fades out where it
 * was instead of jumping to its resting spot.
 */
export const spotlightHandlers = {
  onPointerEnter: track,
  onPointerMove: track,
};
