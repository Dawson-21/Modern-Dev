"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ComponentType } from "react";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./SocialIcons";
import { hexHeight, hexPoints, latticeTileUrl } from "./hexLattice";

interface Social {
  name: string;
  handle: string;
  url: string;
  Icon: ComponentType<{ className?: string }>;
}

const socials: Social[] = [
  {
    name: "Facebook",
    handle: "moderndev.pro",
    url: "https://www.facebook.com/moderndev.pro/",
    Icon: FacebookIcon,
  },
  {
    name: "Instagram",
    handle: "@moderndev.pro",
    url: "https://www.instagram.com/moderndev.pro/",
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    handle: "in/dawson-adams21",
    url: "https://www.linkedin.com/in/dawson-adams21/",
    Icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    handle: "Dawson-21",
    url: "https://github.com/Dawson-21",
    Icon: GitHubIcon,
  },
];

// The card is 5 hexagons wide (--cw below is 1/5 of its width), so the lattice
// fits it edge to edge and each social hexagon is exactly one lattice cell.
// Everything is positioned in cell units from the top-left corner.
const ICON_ROW = 2;
// A row of four cells is 4 wide in a card 5 wide, so everything shifts right by
// half a cell to centre the icons.
const SHIFT = 0.5;
// The lattice also shifts vertically by --sy (set on the card below). In the
// narrow side-column card it shifts down a little so the icons clear the text
// above them. On phones the card spans the screen, so it is tall and wide; there
// the shift centres the icons and their label between the text and the bottom
// edge. CSS gives a close first guess, then the effect below measures where the
// text actually ends (it wraps differently on each phone) and centres exactly.
const SHIFT_Y = "var(--sy)";
const ROW_STEP = 0.75 * 1.1547; // vertical distance between rows, in cell widths
const CELL_HEIGHT = 1.1547; // cell height, in cell widths

const cellStyle = (row: number, column: number): CSSProperties => ({
  left: `calc(var(--cw) * ${column + SHIFT + (row % 2 ? 0.5 : 0)})`,
  top: `calc(var(--cw) * ${(row * ROW_STEP).toFixed(4)} + ${SHIFT_Y})`,
  width: "var(--cw)",
  height: `calc(var(--cw) * ${CELL_HEIGHT})`,
});

// Decorative cells lit like the hero, as [row, column].
const litCells: [number, number][] = [
  [0, 3],
  [5, 1],
];

// Just below the icon row. The label sits in a box of fixed height, so
// changing its text never moves anything else.
const labelTop = `calc(var(--cw) * ${(ICON_ROW * ROW_STEP + CELL_HEIGHT).toFixed(4)} + ${SHIFT_Y} + 12px)`;

export default function SocialCard() {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : socials[active];
  const cardRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const intro = introRef.current;
    const label = labelRef.current;
    if (!card || !intro || !label) return;

    const range = document.createRange();

    const centre = () => {
      // Phones: below the sm breakpoint, where the card spans the screen.
      if (window.innerWidth >= 640) {
        card.style.removeProperty("--sy");
        return;
      }
      const box = card.getBoundingClientRect();
      const cw = box.width / 5;
      range.selectNodeContents(intro);
      const textEnd = range.getBoundingClientRect().bottom - box.top;
      // From the top of the label box to the bottom of its text.
      range.selectNodeContents(label);
      const labelHeight =
        range.getBoundingClientRect().bottom - label.getBoundingClientRect().top;
      // Icons, the 12px gap and the label, centred in the space below the text.
      const group = cw * CELL_HEIGHT + 12 + labelHeight;
      const iconTop = textEnd + (box.height - textEnd - group) / 2;
      const shift = iconTop - cw * ICON_ROW * ROW_STEP;
      card.style.setProperty("--sy", `${shift.toFixed(1)}px`);
    };

    // The ResizeObserver reports right after the browser lays out the page, so
    // measuring there never forces an extra layout. Watching the intro text also
    // catches it re-wrapping once the web font loads.
    const resize = new ResizeObserver(centre);
    resize.observe(card);
    resize.observe(intro);
    return () => resize.disconnect();
  }, []);

  return (
    <div className="min-w-0 flex-1 [container-type:inline-size]">
      <div
        ref={cardRef}
        className="relative h-full min-h-[calc(100cqw*0.647+64px)] [--cw:calc(100cqw/5)] [--sy:calc(var(--cw)*0.35)] max-sm:[--sy:calc(47px-var(--cw)*0.692)]">
        {/* Lattice across the whole card */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: latticeTileUrl(56, "rgba(255,255,255,0.12)"),
            backgroundPosition: `calc(var(--cw) * ${SHIFT}) ${SHIFT_Y}`,
            backgroundSize: "var(--cw) calc(var(--cw) * 1.7320508)",
          }}
        />

        {litCells.map(([row, column]) => (
          <svg
            key={`${row}:${column}`}
            aria-hidden="true"
            viewBox={`0 0 56 ${hexHeight(56).toFixed(2)}`}
            className="pointer-events-none absolute"
            style={cellStyle(row, column)}
          >
            <polygon
              points={hexPoints(56, 28, hexHeight(56) / 2)}
              fill="rgba(56,189,248,0.07)"
              stroke="rgba(56,189,248,0.4)"
              strokeWidth="1"
            />
          </svg>
        ))}

        <div className="relative px-5 pb-5 pt-4">
          <h2 className="text-lg font-bold">Reach Out</h2>
          <p ref={introRef} className="mt-1 text-sm text-white/70">
            Connect with me through my favorite platforms.
          </p>
        </div>

        {socials.map(({ name, url, Icon }, index) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} (opens in a new tab)`}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(index)}
            onBlur={() => setActive(null)}
            className="group absolute block cursor-pointer transition-[filter] duration-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.45)] focus-visible:outline-none focus-visible:drop-shadow-[0_0_7px_#fff]"
            style={cellStyle(ICON_ROW, index)}
          >
            <span className="hex-shape absolute inset-0 bg-[#2a3038] transition-colors duration-300 group-hover:bg-sky-400 group-focus-visible:bg-white">
              <span className="hex-shape absolute inset-[1.5px] bg-[#0b0e13] transition-colors duration-300 group-hover:bg-[#06202f]" />
              <span className="absolute inset-0 grid place-items-center">
                <Icon className="size-[48%] text-white/70 transition-colors duration-300 group-hover:text-sky-400" />
              </span>
            </span>
          </a>
        ))}

        <p
          ref={labelRef}
          aria-hidden="true"
          className="absolute inset-x-5 h-[2.6em] text-sm leading-[1.3] text-white/70"
          style={{ top: labelTop }}
        >
          {selected ? (
            <>
              <b className="font-semibold text-sky-400">{selected.name}</b> ·{" "}
              {selected.handle}
            </>
          ) : (
            "Find me on Facebook, Instagram, LinkedIn and GitHub."
          )}
        </p>
      </div>
    </div>
  );
}
