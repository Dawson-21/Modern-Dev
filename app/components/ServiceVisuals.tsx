// Small illustrations used inside the larger Services tiles. All are
// decorative except the SEO ring, which carries its score as an image label.

const chipClass =
  "inline-flex h-7 items-center rounded-md bg-[#1b1f25] px-2.5 text-[0.8rem] text-white";

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={chipClass}>
          {item}
        </span>
      ))}
    </div>
  );
}

export function WebsiteVisual() {
  return (
    <div className="grid gap-3.5">
      <div
        aria-hidden="true"
        className="overflow-hidden border border-white/15 bg-black/35"
      >
        <div className="flex gap-1.5 border-b border-white/10 px-3 py-2.25">
          {[0, 1, 2].map((dot) => (
            <i key={dot} className="size-2 rounded-full bg-[#22272d]" />
          ))}
        </div>
        <div className="grid gap-3.5 p-5">
          <div className="h-28 bg-linear-to-br from-sky-800 via-sky-950 to-[#011728] sm:h-30" />
          <div className="grid grid-cols-3 gap-3.5">
            {[0, 1, 2].map((block) => (
              <b
                key={block}
                className="h-16 border border-white/10 bg-white/3 sm:h-21"
              />
            ))}
          </div>
          <div className="h-2 rounded bg-white/10" />
          <div className="h-2 w-[55%] rounded bg-white/10" />
        </div>
      </div>
      <Chips items={["React", "Next.js", "WordPress"]} />
    </div>
  );
}

const deviceClass =
  "relative border-[1.5px] border-current after:absolute after:inset-x-[20%] after:top-[14%] after:h-[3px] after:rounded-sm after:bg-current after:opacity-50 after:shadow-[0_8px_0_currentColor,0_16px_0_currentColor]";

export function DevicesVisual() {
  return (
    <div
      aria-hidden="true"
      className="flex items-end gap-3.5 text-white/70 transition-colors duration-300 group-hover:text-sky-400"
    >
      <div className={`${deviceClass} h-15.5 w-8.5 rounded-lg`} />
      <div className={`${deviceClass} h-19 w-14 rounded-lg`} />
      <div className={`${deviceClass} h-15 w-24 rounded-md`} />
    </div>
  );
}

export function PageWeightVisual() {
  return (
    <div>
      <div className="grid gap-3">
        <div className="grid gap-1.25">
          <div className="flex justify-between text-[0.8rem] tabular-nums text-white/70">
            <span>Before</span>
            <span>4,737 KiB</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/7">
            <span className="block h-full w-full rounded-full bg-sky-600/60" />
          </div>
        </div>
        <div className="grid gap-1.25">
          <div className="flex justify-between text-[0.8rem] tabular-nums text-white/70">
            <span>After</span>
            <span>476 KiB</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/7">
            <span className="block h-full w-[10.05%] rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
          </div>
        </div>
      </div>
      <p className="mt-2.5 text-xs text-white/70">
        Page weight on moderndev.pro, measured with Lighthouse.
      </p>
    </div>
  );
}

export function SeoScoreVisual() {
  return (
    <div className="flex items-center gap-3.5">
      <svg
        viewBox="0 0 80 80"
        role="img"
        aria-label="Lighthouse SEO score: 100"
        className="size-19 flex-none"
      >
        <circle
          cx="40"
          cy="40"
          r="32"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="7"
        />
        <circle
          cx="40"
          cy="40"
          r="32"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="201.06"
          strokeDashoffset="0"
          transform="rotate(-90 40 40)"
          style={{ filter: "drop-shadow(0 0 4px rgba(56,189,248,0.6))" }}
        />
        <text
          x="40"
          y="41"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#f5f7fa"
          fontSize="22"
          fontWeight="700"
        >
          100
        </text>
      </svg>
      <small className="text-[0.8rem] leading-snug text-white/70">
        Lighthouse SEO score on moderndev.pro
      </small>
    </div>
  );
}

export function TrendVisual() {
  return (
    <div>
      <svg
        viewBox="0 0 300 64"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-16 w-full"
      >
        <path
          d="M0 52 L40 46 L80 49 L120 36 L160 40 L200 24 L240 28 L300 8 L300 64 L0 64 Z"
          fill="rgba(56,189,248,0.12)"
        />
        <path
          d="M0 52 L40 46 L80 49 L120 36 L160 40 L200 24 L240 28 L300 8"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="297" cy="9" r="3.5" fill="#38bdf8" />
      </svg>
      <p className="mt-1.5 text-xs text-white/70">Illustration</p>
    </div>
  );
}

export function HostingVisual() {
  return (
    <Chips
      items={[
        "Vercel",
        "Netlify",
        "Traditional hosting",
        "Updates",
        "Fixes",
        "Enhancements",
      ]}
    />
  );
}
