"use client";

import {
  Code2,
  MonitorSmartphone,
  Paintbrush,
  ShoppingCart,
  Settings2,
  Search,
  CloudUpload,
  Wrench,
  BarChart2,
  TrendingUp,
  LayoutTemplate,
  PenTool,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const services = [
    {
      title: "Custom Website Development",
      description:
        "Bespoke websites built using React, Next.js, or WordPress—tailored to your brand and business goals.",
      icon: <Code2 size={24} />,
    },
    {
      title: "Responsive Design",
      description:
        "Ensure your website looks and performs great on all devices—mobile, tablet, and desktop.",
      icon: <MonitorSmartphone size={24} />,
    },
    {
      title: "UI/UX Design Implementation",
      description:
        "Pixel-perfect implementation of your Figma or Adobe XD designs using modern web technologies.",
      icon: <Paintbrush size={24} />,
    },
    {
      title: "Performance Optimization",
      description:
        "Faster load times with image compression, lazy loading, and code-splitting for a better user experience.",
      icon: <Settings2 size={24} />,
    },
    {
      title: "E-Commerce Integration",
      description:
        "Setup simple stores or product showcases with Shopify, WooCommerce, or custom solutions.",
      icon: <ShoppingCart size={24} />,
    },
    {
      title: "SEO Best Practices",
      description:
        "Improve your site's visibility with clean semantic code, metadata, and performance-focused architecture.",
      icon: <Search size={24} />,
    },
    {
      title: "Hosting & Deployment",
      description:
        "Launch your site with modern platforms like Vercel, Netlify, or traditional hosting—secure and scalable.",
      icon: <CloudUpload size={24} />,
    },
    {
      title: "Website Maintenance",
      description:
        "Ongoing updates, fixes, and enhancements to keep your website secure, fast, and functional.",
      icon: <Wrench size={24} />,
    },
    {
      title: "Analytics Integration",
      description:
        "Track user behavior and conversions with Google Analytics, Hotjar, and other performance tools.",
      icon: <BarChart2 size={24} />,
    },
    {
      title: "Conversion Optimization",
      description:
        "Refine layouts, CTAs, and page flows to turn visitors into customers using proven UX techniques.",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Landing Page Design",
      description:
        "High-converting single-page websites for product launches, lead generation, or marketing campaigns.",
      icon: <LayoutTemplate size={24} />,
    },
    {
      title: "Custom Logo Design",
      description:
        "Unique, professional logos crafted to reflect your brand's personality, vision, and values.",
      icon: <PenTool size={24} />,
    },
  ];

  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3); // lg
      } else if (window.innerWidth >= 640) {
        setColumns(2); // sm
      } else {
        setColumns(1); // mobile
      }

      ScrollTrigger.refresh();
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const rows = [];
  for (let i = 0; i < services.length; i += columns) {
    rows.push(services.slice(i, i + columns));
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const rows = gsap.utils.toArray<HTMLElement>(".service-row");

    rows.forEach((row) => {
      gsap.fromTo(
        row,
        {
          rotateX: -110,
          filter: "brightness(0.6)",
          transformPerspective: 1200,
          transformOrigin: "top center",
        },
        {
          rotateX: 0,
          filter: "brightness(1)",
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "top 50%",
            scrub: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [columns]);

  return (
    <div
      id="servicesSection"
      ref={containerRef}
      className="w-full h-fit"
      style={{ perspective: 1200 }}
    >
      <div className="flex flex-col items-left justify-center max-w-275 mx-auto px-3.75 sm:px-7.5 md:px-10 lg:px-12.5">
        <div className="flex flex-row w-full items-center justify-left mb-10 mt-20">
          <p className="text-sm sm:text-base text-white/55 w-18">Services</p>
          <hr className="w-full border-t border-white/15 mt-4 mb-3" />
        </div>

        <div className="flex flex-col gap-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="service-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 will-change-transform"
            >
              {row.map((service) => (
                <div key={service.title} className="h-full">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
