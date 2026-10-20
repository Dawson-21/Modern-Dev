"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cardAccentLabel } from "./cardStyles";

// Logos are trimmed to their edges and saved as small WebP files (about 320px
// across, enough for the largest pane on a 2x screen). Width and height are the
// file's own, so the browser can reserve space before they load. Images are
// cached for a year, so an edited logo needs a new file name (e.g. -v2).
//
// Optional fine-tuning for logos that look off in the pane: `scale` grows the
// logo past its standard box, and `shift` nudges it vertically as a percentage
// of the box height (negative moves it up).
type Logo = {
  name: string;
  src: string;
  width: number;
  height: number;
  scale?: number;
  shift?: number;
};

const logos: Logo[] = [
  {
    name: "Pinnacle Construction",
    src: "/logos/pinnacle.webp",
    width: 314,
    height: 260,
    shift: -9,
  },
  { name: "Flovo", src: "/logos/flovo.webp", width: 320, height: 104 },
  {
    name: "Atlantis Pool and Spa Care",
    src: "/logos/atlantis-v2.webp",
    width: 226,
    height: 260,
    scale: 1.2,
  },
  {
    name: "Lowlander Shortbread Co.",
    src: "/logos/lowlander.webp",
    width: 320,
    height: 148,
    scale: 1.2,
  },
  {
    name: "Clayton Demolition",
    src: "/logos/clayton-demolition.webp",
    width: 320,
    height: 175,
  },
  {
    name: "JK Cleaning & Home Care",
    src: "/logos/jk-cleaning-v2.webp",
    width: 320,
    height: 190,
    scale: 1.2,
    shift: -8,
  },
  {
    name: "Snake Charmer",
    src: "/logos/snake-charmer.webp",
    width: 320,
    height: 191,
    scale: 1.15,
  },
  {
    name: "Texas Gutter Service",
    src: "/logos/tgs.webp",
    width: 278,
    height: 260,
    scale: 1.1,
  },
];

/** Degrees between neighbouring logos on the ring. */
const STEP = 360 / logos.length;
/** Seconds for the ring to move one logo along. */
const SECONDS_PER_STEP = 4.5;

// Pointy-top hexagon in a 100 x 115.47 box, inset half a unit so the edge
// isn't clipped.
const HEX = "50,0.5 99.5,29.1 99.5,86.4 50,115 0.5,86.4 0.5,29.1";

/**
 * Logos ride a ring that turns around the vertical axis. Each one appears at
 * the left, swings forward to the centre, where it is largest, clearest and
 * glows brightest, then recedes to the right and fades out. The back half of
 * the ring is hidden.
 */
export default function LogoShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const userPausedRef = useRef(false);
  const [front, setFront] = useState(0);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let width = stage.clientWidth;
    let angle = 0;
    let speed = 1;
    let hovered = false;
    let frontIndex = 0;
    let last = 0;
    let frame = 0;
    let running = false;

    const place = () => {
      const radius = Math.min(width * 0.4, 420);
      const lift = Math.min(width * 0.03, 22);
      let best = 0;
      let bestDepth = -2;

      itemRefs.current.forEach((item, i) => {
        if (!item) return;
        // 0° is the front of the ring. Angles grow over time, so logos travel
        // from the left side, through the centre, to the right side.
        const theta = ((((angle - i * STEP) % 360) + 540) % 360) - 180;
        const rad = (theta * Math.PI) / 180;
        const depth = Math.cos(rad); // 1 at the front, 0 at the sides, -1 behind
        const near = Math.max(0, depth);

        const x = Math.sin(rad) * radius;
        // The ring is seen from slightly above, so the sides sit a little higher.
        const y = -(1 - near) * lift;
        const scale = 0.42 + 0.58 * near;
        // Panes turn with the ring, facing the viewer only at the front.
        const turn = theta * 0.4;

        item.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotateY(${turn.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        item.style.opacity = (near ** 1.6).toFixed(3);
        item.style.zIndex = String(Math.round(near * 100));
        item.style.visibility = depth > 0.005 ? "visible" : "hidden";
        item.style.setProperty("--lit", (near ** 4).toFixed(3));

        if (depth > bestDepth) {
          bestDepth = depth;
          best = i;
        }
      });

      if (best !== frontIndex) {
        frontIndex = best;
        setFront(best);
      }
    };

    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 64) : 0;
      last = now;
      // Ease to a stop on hover or pause, and back up to speed after.
      const target = hovered || userPausedRef.current ? 0 : 1;
      speed += (target - speed) * Math.min(1, dt / 300);
      angle = (angle + (dt / 1000) * (STEP / SECONDS_PER_STEP) * speed) % 360;
      place();
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      last = 0;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    place();

    // Only animate while the ring is on screen.
    const visibility = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop(),
    );
    visibility.observe(stage);

    const resize = new ResizeObserver(() => {
      width = stage.clientWidth;
      place();
    });
    resize.observe(stage);

    const onEnter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") hovered = true;
    };
    const onLeave = () => {
      hovered = false;
    };
    stage.addEventListener("pointerenter", onEnter);
    stage.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      visibility.disconnect();
      resize.disconnect();
      stage.removeEventListener("pointerenter", onEnter);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const togglePause = () => {
    userPausedRef.current = !userPausedRef.current;
    setUserPaused(userPausedRef.current);
  };

  return (
    <div id="logosSection" className="w-full h-fit overflow-x-clip">
      <div className="flex flex-col items-left justify-center max-w-275 mx-auto px-3.75 sm:px-7.5 md:px-10 lg:px-12.5">
        <div className="flex flex-row w-full items-center justify-left mt-20">
          <p className={`shrink-0 whitespace-nowrap pr-4 ${cardAccentLabel}`}>
            Logo Design
          </p>
          <hr className="w-full border-t border-sky-400 mt-3.5 mb-3.5" />
        </div>

        {/* No vertical clipping here, so the glow fades out above and below
            the ring. The section clips sideways instead. */}
        <div
          ref={stageRef}
          className="relative mt-6 h-[clamp(176px,32vw,330px)]"
        >
          {/* A soft pool of light under the centre spot. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[min(70%,520px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(56,189,248,0.1),transparent)]"
          />

          <ul
            aria-label="Logos I've designed"
            className="absolute inset-0 [perspective:1100px]"
          >
            {logos.map((logo, i) => (
              <li
                key={logo.name}
                ref={(node) => {
                  itemRefs.current[i] = node;
                }}
                className="absolute inset-0 m-auto aspect-[100/115.47] w-[clamp(112px,19vw,200px)] will-change-transform"
              >
                {/* Glow behind the pane, strongest at the front of the ring. */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-[38%] bg-[radial-gradient(closest-side,rgba(56,189,248,0.5),rgba(56,189,248,0.14)_55%,transparent)]"
                  style={{ opacity: "var(--lit, 0)" }}
                />

                <svg
                  viewBox="0 0 100 115.47"
                  aria-hidden="true"
                  className="absolute inset-0 size-full"
                >
                  <defs>
                    <linearGradient
                      id={`logo-glass-${i}`}
                      x1="0"
                      y1="0"
                      x2="0.35"
                      y2="1"
                    >
                      <stop offset="0" stopColor="#fff" stopOpacity="0.1" />
                      <stop offset="0.5" stopColor="#fff" stopOpacity="0.035" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  {/* Dark base so the glow tints the glass instead of washing out the logo. */}
                  <polygon points={HEX} fill="#04060a" fillOpacity="0.62" />
                  <polygon points={HEX} fill={`url(#logo-glass-${i})`} />
                  <polygon
                    points={HEX}
                    fill="rgba(56,189,248,0.07)"
                    style={{ opacity: "var(--lit, 0)" }}
                  />
                  <polygon
                    points={HEX}
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.7"
                  />
                  <polygon
                    points={HEX}
                    fill="none"
                    stroke="rgba(56,189,248,0.75)"
                    strokeWidth="0.7"
                    style={{ opacity: "var(--lit, 0)" }}
                  />
                </svg>

                <img
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  decoding="async"
                  alt={`${logo.name} logo`}
                  draggable={false}
                  className="absolute inset-0 m-auto h-1/2 w-[70%] object-contain select-none"
                  style={
                    logo.scale || logo.shift
                      ? {
                          transform: `translateY(${logo.shift ?? 0}%) scale(${logo.scale ?? 1})`,
                        }
                      : undefined
                  }
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-3 flex min-h-12 flex-col items-center justify-center text-center">
          <p
            key={front}
            aria-live="off"
            className="text-lg font-semibold text-white motion-safe:animate-caption-in"
          >
            {logos[front].name}
          </p>
          <p className={`${cardAccentLabel} mt-1`}>Custom Logo design</p>

          {/* Hidden until reached with the keyboard, so it stays available for
              accessibility without cluttering the section. */}
          <button
            type="button"
            onClick={togglePause}
            aria-label={
              userPaused ? "Play logo carousel" : "Pause logo carousel"
            }
            className="pointer-events-none absolute right-0 top-1/2 grid size-9 -translate-y-1/2 cursor-pointer place-items-center opacity-0 focus-visible:pointer-events-auto focus-visible:opacity-100 border border-white/20 bg-white/[0.035] text-white/70 transition-colors duration-200 hover:border-sky-400/45 hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 motion-reduce:hidden"
          >
            {userPaused ? (
              <Play className="size-4" aria-hidden="true" />
            ) : (
              <Pause className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
