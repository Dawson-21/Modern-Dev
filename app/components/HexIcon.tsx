import type { LucideIcon } from "lucide-react";

interface HexIconProps {
  icon: LucideIcon;
  active?: boolean;
  /** Width/sizing classes for the hexagon; its height follows the aspect ratio. */
  className?: string;
  /** Icon size relative to the hexagon. */
  iconClassName?: string;
}

/**
 * A hexagon with an icon. Inactive hexagons are dark with a hairline edge;
 * active ones glow sky blue. When a parent has the `group` class (like the
 * buttons in the services map), hover and keyboard focus also react.
 */
export default function HexIcon({
  icon: Icon,
  active = false,
  className = "",
  iconClassName = "size-[36%]",
}: HexIconProps) {
  return (
    <span
      className={`relative block aspect-[1/1.1] transition-[filter] duration-300 group-focus-visible:drop-shadow-[0_0_7px_#fff] ${
        active ? "drop-shadow-[0_0_9px_rgba(56,189,248,0.4)]" : ""
      } ${className}`}
    >
      <span
        className={`hex-shape absolute inset-[3%] grid place-items-center transition-colors duration-300 ${
          active
            ? "bg-sky-400 text-sky-400"
            : "bg-[#22272d] text-white/70 group-hover:bg-sky-900 group-hover:text-white group-focus-visible:bg-white"
        }`}
      >
        <span
          className={`hex-shape absolute inset-[1.5px] transition-colors duration-300 ${
            active ? "bg-linear-to-br from-sky-950 to-[#05121c]" : "bg-[#0b0e13]"
          }`}
        />
        <Icon
          className={`relative ${iconClassName}`}
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </span>
    </span>
  );
}
