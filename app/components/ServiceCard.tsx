"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <motion.div
      className="group relative h-full overflow-hidden rounded-lg border border-white/20 p-6 text-white shadow-md backdrop-blur-md"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Background Slide-Up Effect */}
      <motion.div
        variants={{
          rest: { top: "100%" },
          hover: { top: "0%" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute left-0 w-full h-full bg-sky-950 z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center gap-3 mb-3">
          {icon && <div className="text-sky-400">{icon}</div>}
          <h3 className="text-[16px] font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-white/80 group-hover:text-white group-focus-within:text-white group-active:text-white">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
