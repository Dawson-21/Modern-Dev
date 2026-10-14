"use client";

import { useState } from "react";
import {
  BarChart2,
  CloudUpload,
  Code2,
  LayoutTemplate,
  MonitorSmartphone,
  Paintbrush,
  PenTool,
  Search,
  Settings2,
  ShoppingCart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import * as m from "framer-motion/m";
import HexIcon from "./HexIcon";
import { noMobileEntrance } from "./entrance";

interface Service {
  group: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  // Build
  {
    group: "Build",
    title: "Custom Website Development",
    description:
      "Bespoke websites built using React, Next.js, or WordPress, tailored to your brand and business goals.",
    icon: Code2,
  },
  {
    group: "Build",
    title: "Responsive Design",
    description:
      "Ensure your website looks and performs great on all devices: mobile, tablet, and desktop.",
    icon: MonitorSmartphone,
  },
  {
    group: "Build",
    title: "UI/UX Design Implementation",
    description:
      "Pixel-perfect implementation of your Figma or Adobe XD designs using modern web technologies.",
    icon: Paintbrush,
  },
  {
    group: "Build",
    title: "Custom Logo Design",
    description:
      "Unique, professional logos crafted to reflect your brand's personality, vision, and values.",
    icon: PenTool,
  },
  // Grow
  {
    group: "Grow",
    title: "Landing Page Design",
    description:
      "High-converting single-page websites for product launches, lead generation, or marketing campaigns.",
    icon: LayoutTemplate,
  },
  {
    group: "Grow",
    title: "SEO Best Practices",
    description:
      "Improve your site's visibility with clean semantic code, metadata, and performance-focused architecture.",
    icon: Search,
  },
  {
    group: "Grow",
    title: "Analytics & Conversion Optimization",
    description:
      "Track user behavior with Google Analytics, Hotjar, and other performance tools, then refine layouts, CTAs, and page flows to turn visitors into customers.",
    icon: BarChart2,
  },
  // Launch and run
  {
    group: "Launch and run",
    title: "E-Commerce Integration",
    description:
      "Setup simple stores or product showcases with Shopify, WooCommerce, or custom solutions.",
    icon: ShoppingCart,
  },
  {
    group: "Launch and run",
    title: "Performance Optimization",
    description:
      "Faster load times with image compression, lazy loading, and code-splitting for a better user experience.",
    icon: Settings2,
  },
  {
    group: "Launch and run",
    title: "Hosting & Maintenance",
    description:
      "Launch on modern platforms like Vercel, Netlify, or traditional hosting, then keep your website secure, fast, and functional with ongoing updates, fixes, and enhancements.",
    icon: CloudUpload,
  },
];

// Hexagons per row, top to bottom: Build, Grow, Launch and run.
const rowSizes = [4, 3, 3];
const rows = rowSizes.map((size, row) => {
  const start = rowSizes.slice(0, row).reduce((sum, n) => sum + n, 0);
  return services.slice(start, start + size);
});

export default function ServicesSection() {
  const [selected, setSelected] = useState(0);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="servicesSection" className="w-full h-fit">
      <div className="flex flex-col items-left justify-center max-w-275 mx-auto px-3.75 sm:px-7.5 md:px-10 lg:px-12.5">
        <div className="flex flex-row w-full items-center justify-left mb-10 mt-20">
          <p className="text-sm sm:text-base text-white/70 w-18">Services</p>
          <hr className="w-full border-t border-white/15 mt-4 mb-3" />
        </div>

        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className={`grid items-center gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-12 lg:gap-16 ${noMobileEntrance}`}
        >
          <div className="mx-auto w-full max-w-135 md:mx-0">
            {/* Honeycomb: width of one hexagon is 1/4.5 of the container. */}
            <div className="[container-type:inline-size]">
              <div
                role="group"
                aria-label="Services"
                className="flex flex-col [--hw:calc(100cqw/4.5)]"
              >
                {rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex even:ml-[calc(var(--hw)/2)] not-first:-mt-[calc(var(--hw)*0.275)]"
                  >
                    {row.map((service) => {
                      const index = services.indexOf(service);
                      const active = index === selected;

                      return (
                        <button
                          key={service.title}
                          type="button"
                          onClick={() => setSelected(index)}
                          aria-pressed={active}
                          aria-controls="service-panel"
                          aria-label={service.title}
                          title={service.title}
                          className="group block w-(--hw) shrink-0 cursor-pointer focus-visible:outline-none"
                        >
                          <HexIcon
                            icon={service.icon}
                            active={active}
                            className="w-full"
                          />
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Select a hexagon to read about each service.
            </p>
          </div>

          {/* Every panel shares one grid cell, so the box is always as tall as
              the longest description and switching never shifts the page. */}
          <div
            id="service-panel"
            aria-live="polite"
            className="grid rounded-lg border border-white/20 bg-linear-to-br from-sky-950/40 from-25% to-yellow-700/20 p-6 sm:p-8"
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`col-start-1 row-start-1 grid content-start gap-3.5 transition-opacity duration-300 ${
                  index === selected ? "opacity-100" : "invisible opacity-0"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-400">
                  {service.group}
                </p>
                <h3 className="text-[clamp(1.35rem,3vw,1.75rem)] font-semibold leading-tight text-white">
                  {service.title}
                </h3>
                <p className="max-w-[52ch] text-white/70">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={() => handleClick("contactSection")}
                  className="mt-1.5 w-fit cursor-pointer rounded-full bg-white/85 px-4.5 py-2.25 text-sm font-bold text-black transition duration-200 hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  Start a Project
                </button>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </div>
  );
}
