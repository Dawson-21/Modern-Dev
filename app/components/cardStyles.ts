// Shared look for cards, matching the Services tiles: a light glass surface,
// a sky-blue outline on hover, and small uppercase sky-blue labels.
export const cardSurface = "border border-white/20 bg-white/[0.035]";
export const cardHoverOutline =
  "transition-colors duration-300 hover:border-sky-400/45";
export const cardAccentLabel =
  "text-xs font-semibold uppercase tracking-[0.14em] text-sky-400";

// Spotlight hover: a soft sky-blue glow that follows the pointer. The pointer
// position comes from --mx/--my (see spotlight.ts); without a pointer, such as
// on touch screens, the glow rests at the top centre of the card.
//
// `cardSpotlight` is for cards that glow on CSS hover. `spotlightGlow` is for a
// separate overlay element whose opacity is driven by framer-motion variants.
export const cardSpotlight =
  "relative isolate overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-400 before:bg-[radial-gradient(260px_circle_at_var(--mx,50%)_var(--my,-10%),rgba(56,189,248,0.16),transparent_70%)] hover:before:opacity-100";
export const spotlightGlow =
  "absolute inset-0 bg-[radial-gradient(260px_circle_at_var(--mx,50%)_var(--my,-10%),rgba(56,189,248,0.16),transparent_70%)]";
