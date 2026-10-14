"use client";

import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";
import * as m from "framer-motion/m";

// Base hex shape
const getHexPoints = (hexW: number, hexH: number) => `
  ${hexW / 2},0
  ${hexW},${hexH * 0.25}
  ${hexW},${hexH * 0.75}
  ${hexW / 2},${hexH}
  0,${hexH * 0.75}
  0,${hexH * 0.25}
`;

const getSocialHexPoints = (socialHexW: number, socialHexH: number) => `
  ${socialHexW / 2},0
  ${socialHexW},${socialHexH * 0.25}
  ${socialHexW},${socialHexH * 0.75}
  ${socialHexW / 2},${socialHexH}
  0,${socialHexH * 0.75}
  0,${socialHexH * 0.25}
`;

const socials = [
  {
    row: 2,
    col: 3,
    icon: "/icon-github.svg",
    label: "GitHub",
    color: "#024A70",
    link: "https://github.com/Dawson-21",
  },
  { row: 3, col: 1, icon: "/icon-fb.svg", label: "Facebook", color: "#024A70", link: "https://www.facebook.com/moderndev.pro/" },
  { row: 3, col: 4, icon: "/icon-insta.svg", label: "Instagram", color: "#024A70", link: "https://www.instagram.com/moderndev.pro/" },
  {
    row: 4,
    col: 3,
    icon: "/icon-linkedin.svg",
    label: "LinkedIn",
    color: "#024A70",
    link: "https://www.linkedin.com/in/dawson-adams21/",
  },
];

const socialsShiftVariants: Variants = {
  rest: { x: 0 },
  hover: { x: -8, transition: { duration: 0.5, ease: "easeInOut" } },
};

const socialsTextVariants: Variants = {
  rest: { color: "rgba(255, 255, 255, 0.7)" },
  hover: { color: "rgba(255, 255, 255, 1)" },
};

export default function SocialHexGrid() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 668px)");
    const updateBreakpoint = () => setIsMdUp(mediaQuery.matches);

    updateBreakpoint();
    mediaQuery.addEventListener("change", updateBreakpoint);

    return () => mediaQuery.removeEventListener("change", updateBreakpoint);
  }, []);

  const HEX_W = isMdUp ? 60 : 68;
  const HEX_H = HEX_W * 1.1;
  const SOCIAL_SCALE = 0.85;
  const SOCIAL_HEX_W = HEX_W * SOCIAL_SCALE;
  const SOCIAL_HEX_H = SOCIAL_HEX_W * 1.1;

  const rows = 10;
  const cols = 9;

  const minX = isMdUp ? -23 : 0;
  const minY = 0;
  const gridWidth = 320;
  const gridHeight = 312;

  return (
    <div className="relative w-full pb-[68%] sm:pb-0 [container-type:inline-size]">
      <m.svg
        className="absolute inset-0 w-full h-full"
        viewBox={`${minX} ${minY} ${gridWidth} ${gridHeight}`}
        preserveAspectRatio={isMdUp ? "xMidYMid slice" : undefined}
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        animate="rest"
      >
        {/* ---- Background Grid ---- */}
        {[...Array(rows)].map((_, row) =>
          [...Array(cols)].map((_, col) => {
            const x = col * HEX_W + (row % 2 ? HEX_W / 2 : 0) - HEX_W - 13;
            const y = row * (HEX_H * 0.75) - HEX_H - 13;

            return (
              <m.polygon
                key={`bg-${row}-${col}`}
                points={getHexPoints(HEX_W, HEX_H)}
                transform={`translate(${x},${y})`}
                fill="none"
                variants={{
                  rest: { stroke: "#22272d" },
                  hover: { stroke: "#024A70" },
                }}
                transition={{ duration: 0.3 }}
              />
            );
          }),
        )}

        {/* ---- Social Icons Layer ---- */}
        {socials.map(({ row, col, icon, color, link, label }) => {
          const x = col * HEX_W + (row % 2 ? HEX_W / 2 : 0) - HEX_W - 13;
          const y = row * (HEX_H * 0.75) - HEX_H - 13;
          const offsetX = (HEX_W - SOCIAL_HEX_W) / 2;
          const offsetY = (HEX_H - SOCIAL_HEX_H) / 2;

          return (
            <g
              key={`social-${row}-${col}`}
              transform={`translate(${x + offsetX},${y + offsetY})`}
              role="link"
              tabIndex={0}
              aria-label={`${label} (opens in a new tab)`}
              onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open(link, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <m.g
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="cursor-pointer group"
              >
                <m.polygon
                  points={getSocialHexPoints(SOCIAL_HEX_W, SOCIAL_HEX_H)}
                  initial={{
                    fill: "#525252",
                    filter: "drop-shadow(0 0 0px #024A70)",
                  }}
                  whileHover={{
                    fill: color,
                    filter: "drop-shadow(0 0 4px #fff)",
                  }}
                  transition={{ duration: 0.2 }}
                />

                <image
                  href={icon}
                  x={SOCIAL_HEX_W / 2 - 25 * SOCIAL_SCALE + 1.5}
                  y={SOCIAL_HEX_H / 2 - 25 * SOCIAL_SCALE + 1.5}
                  width={50 * SOCIAL_SCALE - 3}
                  height={50 * SOCIAL_SCALE - 3}
                  style={{ pointerEvents: "none" }}
                />
              </m.g>
            </g>
          );
        })}
        {isMdUp && (
          <foreignObject x={-20} y={190} width={gridWidth + 20} height={120}>
            <div className="flex items-end h-full px-4 pb-4 md:ml-10 lg:ml-2">
              <m.div
                variants={socialsShiftVariants}
                className="w-full text-left pointer-events-none z-10"
              >
                <h2 className="text-lg md:text-xl font-bold">Reach Out</h2>

                <m.p
                  variants={socialsTextVariants}
                  className="text-[14px] lg:text-[min(4.3vw,16px)] font-light tracking-wide md:pr-12 lg:pr-5"
                >
                  Connect with me through my favorite platforms.
                </m.p>
              </m.div>
            </div>
          </foreignObject>
        )}
      </m.svg>

      {/* Below md the text is a plain HTML overlay instead of a <foreignObject>:
          Safari positions foreignObject content wrongly inside a scaled SVG
          (the text ended up below the visible area on iPhones). Sizes use
          container-width units so it matches the SVG's scale. */}
      {!isMdUp && (
        <div className="pointer-events-none absolute bottom-[4.4cqw] left-[9.8cqw] right-[3cqw]">
          <h2 className="text-[3.92cqw] leading-[1.556] font-bold">Reach Out</h2>
          <p className="text-[3.71cqw] leading-normal font-light tracking-wide text-white/70">
            Connect with me through my favorite platforms.
          </p>
        </div>
      )}
    </div>
  );
}
