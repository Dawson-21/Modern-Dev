import type { PointerEvent } from "react";

/**
 * Spread onto a card to feed the Spotlight hover: it records where the mouse
 * is inside the card as --mx/--my, which the glow gradient reads. Touch
 * pointers are ignored so the glow stays at its resting position.
 */
export const spotlightHandlers = {
  onPointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    element.style.setProperty("--my", `${event.clientY - rect.top}px`);
  },
  onPointerLeave(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.removeProperty("--mx");
    event.currentTarget.style.removeProperty("--my");
  },
};
