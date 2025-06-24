import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProcessCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function ProcessCard({ title, description, icon }: ProcessCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg border border-white/20 backdrop-blur-md text-white p-9 shadow-md group`}
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
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          {icon && <div className="text-sky-400">{icon}</div>}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-white/80 group-hover:text-white">{description}</p>
      </div>
    </motion.div>
  );
}
