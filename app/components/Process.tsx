"use client";

import { useEffect, useRef, useState } from "react";
import { Bug, Code2, LineChart, PenTool, Rocket, Users, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import HexIcon from "./HexIcon";

interface Step {
  phase: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    phase: "Discover",
    title: "Stakeholder Consultation",
    description:
      "Engaging with key stakeholders to understand their vision, goals, and requirements for the project.",
    icon: Users,
  },
  {
    phase: "Discover",
    title: "Market Analysis",
    description:
      "Conducting thorough market research to identify trends, opportunities, and potential challenges that may impact the project.",
    icon: LineChart,
  },
  {
    phase: "Design and build",
    title: "Design and Prototyping",
    description:
      "Creating wireframes and prototypes to visualize the user experience and gather feedback from stakeholders.",
    icon: PenTool,
  },
  {
    phase: "Design and build",
    title: "Development",
    description:
      "Building the actual product based on the approved designs and prototypes.",
    icon: Code2,
  },
  {
    phase: "Design and build",
    title: "Testing and Quality Assurance",
    description:
      "Rigorously testing the product to ensure it meets quality standards and functions as intended.",
    icon: Bug,
  },
  {
    phase: "Launch and support",
    title: "Deployment",
    description:
      "Deploying the product to the production environment and ensuring it is ready for use by end-users.",
    icon: Rocket,
  },
  {
    phase: "Launch and support",
    title: "Post-Launch Support",
    description:
      "Providing ongoing support and maintenance to ensure the product continues to meet user needs and adapts to any changes in the market.",
    icon: Wrench,
  },
];

function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [litCount, setLitCount] = useState(1);

  // A step lights up once its hexagon passes a reading line 60% down the
  // screen, and the line fills down to that point. The fill is written
  // straight to CSS variables so scrolling doesn't re-render the section.
  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const nodes = Array.from(
      timeline.querySelectorAll<HTMLElement>("[data-node]"),
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      const readLine = window.innerHeight * 0.6;
      const centers = nodes.map((node) => {
        const rect = node.getBoundingClientRect();
        return rect.top + rect.height / 2;
      });

      setLitCount(centers.filter((y, i) => i === 0 || y <= readLine).length);

      const first = centers[0];
      const last = centers[centers.length - 1];
      timeline.style.setProperty(
        "--fill-top",
        `${first - timeline.getBoundingClientRect().top}px`,
      );
      timeline.style.setProperty(
        "--fill-height",
        `${Math.max(0, Math.min(readLine, last) - first)}px`,
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="processSection"
      aria-labelledby="process-heading"
      className="w-full h-fit"
    >
      <div className="flex flex-col items-left justify-center max-w-275 mx-auto px-3.75 sm:px-7.5 md:px-10 lg:px-12.5">
        <div className="flex flex-row w-full items-center justify-left mb-10 mt-20">
          <h2
            id="process-heading"
            className="text-sm sm:text-base text-white/70 w-26"
          >
            The Process
          </h2>
          <hr className="w-full border-t border-white/15 mt-4 mb-3" />
        </div>

        <div
          ref={timelineRef}
          className="relative mx-auto w-full max-w-2xl text-white [--fill-height:0px] [--fill-top:0px] [--node:3.625rem]"
        >
          {/* Track and the sky-blue fill that follows the reading line */}
          <div
            aria-hidden="true"
            className="absolute top-[calc(var(--node)*0.55)] bottom-[calc(var(--node)*0.55)] left-[calc(var(--node)/2_-_1px)] w-0.5 bg-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute top-(--fill-top) left-[calc(var(--node)/2_-_1px)] h-(--fill-height) w-0.5 bg-linear-to-b from-sky-400 to-sky-400/35 shadow-[0_0_10px_rgba(56,189,248,0.55)]"
          />

          <ol className="relative">
            {steps.map((step, index) => {
              const lit = index < litCount;

              return (
                <li
                  key={step.title}
                  className="grid grid-cols-[var(--node)_minmax(0,1fr)] gap-4 pb-12 last:pb-0 sm:gap-7"
                >
                  <div data-node>
                    <HexIcon
                      icon={step.icon}
                      active={lit}
                      className="w-(--node)"
                      iconClassName="size-[44%]"
                    />
                  </div>
                  <div className="grid content-start gap-2 pt-1.5">
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                        lit ? "text-sky-400" : "text-white/60"
                      }`}
                    >
                      Step {index + 1} · {step.phase}
                    </p>
                    <h3 className="text-[clamp(1.15rem,2.6vw,1.4rem)] font-semibold leading-tight">
                      {step.title}
                    </h3>
                    <p
                      className={`transition-colors duration-300 ${
                        lit ? "text-white" : "text-white/70"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Process;
