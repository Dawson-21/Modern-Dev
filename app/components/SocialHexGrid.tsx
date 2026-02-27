"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

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
    color: "#024A70",
    link: "https://github.com/Dawson-21",
  },
  { row: 3, col: 1, icon: "/icon-fb.svg", color: "#024A70", link: "#" },
  { row: 3, col: 4, icon: "/icon-insta.svg", color: "#024A70", link: "#" },
  {
    row: 4,
    col: 3,
    icon: "/icon-linkedin.svg",
    color: "#024A70",
    link: "https://www.linkedin.com/in/dawson-adams21/",
  },
];

const socialsShiftVariants: Variants = {
  rest: { x: 0 },
  hover: { x: -8, transition: { duration: 0.5, ease: "easeInOut" } },
};

const socialsTextVariants: Variants = {
  rest: { color: "rgba(255, 255, 255, 0.55)" },
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
    <div className="relative w-full pb-[68%] sm:pb-0">
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox={`${minX} ${minY} ${gridWidth} ${gridHeight}`}
        preserveAspectRatio={isMdUp ? "xMidYMid slice" : ""}
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
              <motion.polygon
                key={`bg-${row}-${col}`}
                points={getHexPoints(HEX_W, HEX_H)}
                transform={`translate(${x},${y})`}
                fill="none"
                variants={{
                  rest: { stroke: "#4b5563" },
                  hover: { stroke: "#024A70" },
                }}
                transition={{ duration: 0.3 }}
              />
            );
          }),
        )}

        {/* ---- Social Icons Layer ---- */}
        {socials.map(({ row, col, icon, color, link }) => {
          const x = col * HEX_W + (row % 2 ? HEX_W / 2 : 0) - HEX_W - 13;
          const y = row * (HEX_H * 0.75) - HEX_H - 13;
          const offsetX = (HEX_W - SOCIAL_HEX_W) / 2;
          const offsetY = (HEX_H - SOCIAL_HEX_H) / 2;

          return (
            <g
              key={`social-${row}-${col}`}
              transform={`translate(${x + offsetX},${y + offsetY})`}
              onClick={() => window.open(link, "_blank")}
            >
              <motion.g
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="cursor-pointer group"
              >
                <motion.polygon
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
                  x={SOCIAL_HEX_W / 2 - 25 * SOCIAL_SCALE}
                  y={SOCIAL_HEX_H / 2 - 25 * SOCIAL_SCALE}
                  width={50 * SOCIAL_SCALE}
                  height={50 * SOCIAL_SCALE}
                  style={{ pointerEvents: "none" }}
                />
              </motion.g>
            </g>
          );
        })}
        <foreignObject
          x="-20"
          y={isMdUp ? 190 : 150}
          width={gridWidth + 20}
          height={isMdUp ? 120 : 208}
        >
          <motion.div
            variants={socialsShiftVariants}
            className="absolute bottom-4 left-4 sm:left-8 lg:left-4 w-full text-left pointer-events-none z-10"
          >
            <h2 className="text-lg md:text-xl font-bold">Reach Out</h2>
            <motion.p
              variants={socialsTextVariants}
              className="text-[14px] sm:text-[14px] lg:text-[min(4.3vw,16px)] font-light tracking-wide pr-5 sm:pr-16 lg:pr-1"
            >
              Connect with me through my favorite platforms.
            </motion.p>
          </motion.div>
        </foreignObject>
      </motion.svg>
    </div>
  );
}
