"use client";

import type { ReactNode } from "react";
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
import {
  DevicesVisual,
  HostingVisual,
  PageWeightVisual,
  SeoScoreVisual,
  TrendVisual,
  WebsiteVisual,
} from "./ServiceVisuals";

interface Service {
  group: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Grid placement for larger tiles, plus where it sits on tablet. */
  className: string;
  visual?: ReactNode;
  large?: boolean;
}

// Listed in desktop reading order (4 columns). On tablet (2 columns) the
// `sm:max-lg:order-*` classes move Custom Logo Design next to SEO, so neither
// is left alone on a row beside a two-column tile.
const services: Service[] = [
  {
    group: "Build",
    title: "Custom Website Development",
    description:
      "Bespoke websites built using React, Next.js, or WordPress, tailored to your brand and business goals.",
    icon: Code2,
    className: "sm:max-lg:order-1 sm:col-span-2 lg:row-span-2",
    visual: <WebsiteVisual />,
    large: true,
  },
  {
    group: "Build",
    title: "Responsive Design",
    description:
      "Ensure your website looks and performs great on all devices: mobile, tablet, and desktop.",
    icon: MonitorSmartphone,
    className: "sm:max-lg:order-2",
    visual: <DevicesVisual />,
  },
  {
    group: "Build",
    title: "UI/UX Design Implementation",
    description:
      "Pixel-perfect implementation of your Figma or Adobe XD designs using modern web technologies.",
    icon: Paintbrush,
    className: "sm:max-lg:order-3",
  },
  {
    group: "Launch and run",
    title: "Performance Optimization",
    description:
      "Faster load times with image compression, lazy loading, and code-splitting for a better user experience.",
    icon: Settings2,
    className: "sm:max-lg:order-4 sm:col-span-2",
    visual: <PageWeightVisual />,
  },
  {
    group: "Grow",
    title: "SEO & Search Visibility",
    description:
      "Improve your site's visibility with clean semantic code, metadata, and performance-focused architecture.",
    icon: Search,
    className: "sm:max-lg:order-5",
    visual: <SeoScoreVisual />,
  },
  {
    group: "Grow",
    title: "Analytics & Conversion Optimization",
    description:
      "Track user behavior with Google Analytics, Hotjar, and other performance tools, then refine layouts, CTAs, and page flows to turn visitors into customers.",
    icon: BarChart2,
    className: "sm:max-lg:order-7 sm:col-span-2",
    visual: <TrendVisual />,
  },
  {
    group: "Grow",
    title: "Landing Page Design",
    description:
      "High-converting single-page websites for product launches, lead generation, or marketing campaigns.",
    icon: LayoutTemplate,
    className: "sm:max-lg:order-8",
  },
  {
    group: "Launch and run",
    title: "E-Commerce Integration",
    description:
      "Setup simple stores or product showcases with Shopify, WooCommerce, or custom solutions.",
    icon: ShoppingCart,
    className: "sm:max-lg:order-9",
  },
  {
    group: "Build",
    title: "Custom Logo Design",
    description:
      "Unique, professional logos crafted to reflect your brand's personality, vision, and values.",
    icon: PenTool,
    className: "sm:max-lg:order-6",
  },
  {
    group: "Launch and run",
    title: "Hosting & Maintenance",
    description:
      "Launch on modern platforms like Vercel, Netlify, or traditional hosting, then keep your website secure, fast, and functional with ongoing updates, fixes, and enhancements.",
    icon: CloudUpload,
    className: "sm:max-lg:order-10 sm:col-span-2",
    visual: <HostingVisual />,
  },
];

export default function ServicesSection() {
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
          viewport={{ once: true, amount: 0.1 }}
          className={`grid auto-rows-[minmax(210px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ${noMobileEntrance}`}
        >
          {services.map((service) => (
            <article
              key={service.title}
              className={`group relative flex flex-col gap-2.5 overflow-hidden rounded-lg border border-white/20 bg-white/[0.035] p-5.5 text-white transition-colors duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-br before:from-sky-950/55 before:from-20% before:to-yellow-700/20 before:opacity-0 before:transition-opacity before:duration-400 hover:border-sky-400/45 hover:before:opacity-100 ${service.className}`}
            >
              <div className="relative mb-1.5 flex items-center justify-between gap-3">
                <HexIcon
                  icon={service.icon}
                  className="w-11.5"
                  iconClassName="size-[44%]"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-400">
                  {service.group}
                </span>
              </div>
              <h3
                className={`relative font-semibold leading-tight ${
                  service.large ? "text-2xl" : "text-[1.15rem]"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`relative text-white/70 ${
                  service.large ? "max-w-[44ch]" : "text-[0.92rem]"
                }`}
              >
                {service.description}
              </p>
              {service.visual && (
                <div className="relative mt-auto pt-3.5">{service.visual}</div>
              )}
            </article>
          ))}
        </m.div>
      </div>
    </div>
  );
}
