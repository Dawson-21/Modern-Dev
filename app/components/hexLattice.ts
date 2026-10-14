// Shared geometry for the hexagon lattice used by the page background and the
// website service tile. Hexagons are pointy-top, like the logo.

export const hexHeight = (width: number) => width * 1.1547;
/** Vertical distance between rows of hexagons. */
export const hexRow = (width: number) => hexHeight(width) * 0.75;
/** Height of one repeating lattice tile. */
export const tileHeight = (width: number) => 2 * hexRow(width);

export const hexPoints = (width: number, cx: number, cy: number) => {
  const height = hexHeight(width);
  return [
    [cx, cy - height / 2],
    [cx + width / 2, cy - height / 4],
    [cx + width / 2, cy + height / 4],
    [cx, cy + height / 2],
    [cx - width / 2, cy + height / 4],
    [cx - width / 2, cy - height / 4],
  ]
    .map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");
};

/**
 * One repeating tile of the lattice as a CSS `url(...)` value: a full hexagon
 * plus the two half-hexagons beside the row below. Size the background to
 * `width` by `tileHeight(width)` and centre it to anchor cells to the middle.
 */
export const latticeTileUrl = (width: number, stroke: string) => {
  const height = hexHeight(width);
  const row = hexRow(width);
  const polygons = [
    hexPoints(width, width / 2, height / 2),
    hexPoints(width, 0, height / 2 + row),
    hexPoints(width, width, height / 2 + row),
  ]
    .map((points) => `<polygon points="${points}"/>`)
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${tileHeight(width).toFixed(2)}"><g fill="none" stroke="${stroke}" stroke-width="1">${polygons}</g></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};
