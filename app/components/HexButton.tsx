import type { ButtonHTMLAttributes } from "react";

interface HexButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Primary has a sky-blue edge; secondary a gray one that turns sky on hover. */
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  /** Classes for the outer wrapper, for layout (margins, grid placement, visibility). */
  wrapperClassName?: string;
}

/** The site's button: an elongated hexagon with a thin edge. See globals.css. */
export default function HexButton({
  variant = "primary",
  size = "md",
  wrapperClassName = "",
  className = "",
  type = "button",
  children,
  ...props
}: HexButtonProps) {
  return (
    <span
      className={`hex-btn-wrap hex-btn-wrap-${variant} ${wrapperClassName}`}
    >
      <button
        type={type}
        className={`hex-btn hex-btn-${variant} ${size === "sm" ? "hex-btn-sm" : ""} ${className}`}
        {...props}
      >
        {children}
      </button>
    </span>
  );
}
