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
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ServicesSection() {
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

  return (
    <div id="servicesSection" className="w-full h-fit">
      <div className="flex flex-col items-left justify-center max-w-275 mx-auto px-3.75 sm:px-7.5 md:px-10 lg:px-12.5">
        <div className="flex flex-row w-full items-center justify-left mb-10 mt-20">
          <p className="text-sm sm:text-base text-white/55 w-18">Services</p>
          <hr className="w-full border-t border-white/15 mt-4 mb-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="h-full"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
