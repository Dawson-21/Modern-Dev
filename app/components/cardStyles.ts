// Shared look for cards, matching the Services tiles: a light glass surface,
// a sky-blue outline on hover, and small uppercase sky-blue labels.
export const cardSurface = "border border-white/20 bg-white/[0.035]";
export const cardHoverOutline =
  "transition-colors duration-300 hover:border-sky-400/45 data-[lit=true]:border-sky-400/45";
export const cardAccentLabel =
  "text-xs font-semibold uppercase tracking-[0.14em] text-sky-400";

// Spotlight hover: a soft sky-blue glow that follows the pointer. The pointer
// position comes from --mx/--my (see spotlight.ts), from the mouse or a finger;
// until one moves over the card, the glow rests at the top centre.
//
// Cards also take `data-lit` from useScrollLit, so touch screens get the same
// state while a card is at the center of the screen.
// `cardSpotlight` is for cards that glow on CSS hover. `spotlightGlow` is for a
// separate overlay element whose opacity is driven by framer-motion variants.
export const cardSpotlight =
  "relative isolate overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-400 before:bg-[radial-gradient(260px_circle_at_var(--mx,50%)_var(--my,-10%),rgba(56,189,248,0.16),transparent_70%)] hover:before:opacity-100 data-[lit=true]:before:opacity-100";
export const spotlightGlow =
  "absolute inset-0 bg-[radial-gradient(260px_circle_at_var(--mx,50%)_var(--my,-10%),rgba(56,189,248,0.16),transparent_70%)]";

// Form fields: the same glass as the cards, with a sky-blue outline on focus.
export const fieldSurface =
  "border border-white/20 bg-white/[0.04] text-white placeholder:text-white/50 transition-colors duration-300 hover:border-white/35 focus-visible:border-sky-400/60 focus-visible:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400/40";
