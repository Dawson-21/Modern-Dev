import {
  hexHeight,
  hexPoints,
  hexRow,
  latticeTileUrl,
  tileHeight,
} from "./hexLattice";

// Page background: near-black with the site's blue and amber glows and a faint
// hexagon lattice (the logo's shape) that fades toward the edges, with a few
// cells lit sky blue. Everything is anchored to the screen centre so cells line
// up at any screen size.

const HEX_W = 56;
const HEX_H = hexHeight(HEX_W);
const ROW = hexRow(HEX_W);

// Lit cells as [row, column, fill] counted from the centre cell. The hero logo
// scales with the screen, so they stay well outside it: at the sides on wide
// screens and above and below it on phones.
const litCells: [number, number, number][] = [
  [-6, -1, 0.06],
  [-6, 2, 0.09],
  [-8, 3, 0.05],
  [-2, 6, 0.08],
  [-3, -6, 0.06],
  [1, -6, 0.09],
  [3, 5, 0.06],
  [6, -2, 0.05],
  [6, 3, 0.09],
  [7, -1, 0.06],
  [8, 1, 0.05],
  [0, -7, 0.05],
];

const fade =
  "radial-gradient(85% 85% at 50% 45%, #000 30%, transparent 100%)";

export default function HexBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
      style={{
        backgroundColor: "#04060a",
        backgroundImage:
          "radial-gradient(70% 90% at 12% 0%, rgba(8,47,73,0.75), transparent 70%), radial-gradient(60% 80% at 100% 100%, rgba(120,70,12,0.32), transparent 70%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: latticeTileUrl(HEX_W, "rgba(255,255,255,0.1)"),
          backgroundPosition: "center",
          backgroundSize: `${HEX_W}px ${tileHeight(HEX_W).toFixed(2)}px`,
          maskImage: fade,
          WebkitMaskImage: fade,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
      >
        {litCells.map(([row, column, alpha]) => {
          // The centre cell sits a third of a row above the screen centre.
          const x = column * HEX_W + (Math.abs(row) % 2 ? HEX_W / 2 : 0);
          const y = -ROW / 3 + row * ROW;

          return (
            <svg
              key={`${row}:${column}`}
              width={HEX_W}
              height={HEX_H}
              viewBox={`0 0 ${HEX_W} ${HEX_H}`}
              className="absolute"
              style={{
                left: `calc(50% + ${(x - HEX_W / 2).toFixed(2)}px)`,
                top: `calc(50% + ${(y - HEX_H / 2).toFixed(2)}px)`,
              }}
            >
              <polygon
                points={hexPoints(HEX_W, HEX_W / 2, HEX_H / 2)}
                fill={`rgba(56,189,248,${alpha})`}
                stroke="rgba(56,189,248,0.4)"
                strokeWidth="1"
              />
            </svg>
          );
        })}
      </div>
    </div>
  );
}
