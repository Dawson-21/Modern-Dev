"use client";

import { useState } from "react";
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
    name: "GitHub",
    handle: "Dawson-21",
    url: "https://github.com/Dawson-21",
    Icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    handle: "in/dawson-adams21",
    url: "https://www.linkedin.com/in/dawson-adams21/",
    Icon: LinkedInIcon,
  },
  {
    name: "Instagram",
    handle: "@moderndev.pro",
    url: "https://www.instagram.com/moderndev.pro/",
    Icon: InstagramIcon,
  },
  {
    name: "Facebook",
    handle: "moderndev.pro",
    url: "https://www.facebook.com/moderndev.pro/",
    Icon: FacebookIcon,
  },
];

// The card is 4.5 hexagons wide (--cw below is 1/4.5 of its width), so the
// lattice fits it edge to edge and each social hexagon is exactly one lattice
// cell. Everything is positioned in cell units from the top-left corner.
const ICON_ROW = 2;
// A row of four cells is 4 wide in a card 4.5 wide, so everything shifts right
// by a quarter cell to centre the icons.
const SHIFT = 0.25;
const ROW_STEP = 0.75 * 1.1547; // vertical distance between rows, in cell widths
const CELL_HEIGHT = 1.1547; // cell height, in cell widths

const cellStyle = (row: number, column: number): CSSProperties => ({
  left: `calc(var(--cw) * ${column + SHIFT + (row % 2 ? 0.5 : 0)})`,
  top: `calc(var(--cw) * ${(row * ROW_STEP).toFixed(4)})`,
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
const labelTop = `calc(var(--cw) * ${(ICON_ROW * ROW_STEP + CELL_HEIGHT).toFixed(4)} + 12px)`;

export default function SocialCard() {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : socials[active];

  return (
    <div className="min-w-0 flex-1 [container-type:inline-size]">
      <div className="relative h-full min-h-[calc(100cqw*0.642+64px)] [--cw:calc(100cqw/4.5)]">
        {/* Lattice across the whole card */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: latticeTileUrl(56, "rgba(255,255,255,0.12)"),
            backgroundPosition: `calc(var(--cw) * ${SHIFT}) 0`,
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
          <p className="mt-1 text-sm text-white/70">
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
                <Icon className="size-[36%] text-white/70 transition-colors duration-300 group-hover:text-sky-400" />
              </span>
            </span>
          </a>
        ))}

        <p
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
            "Find me on GitHub, LinkedIn, Instagram and Facebook."
          )}
        </p>
      </div>
    </div>
  );
}
