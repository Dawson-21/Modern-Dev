"use client";

import {
  Users,
  LineChart,
  PenTool,
  Code2,
  Bug,
  Rocket,
  Wrench,
} from "lucide-react";
import ProcessCard from "./ProcessCard";
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

function Process() {
  const steps = [
    {
      title: "Stakeholder Consultation",
      description:
        "Engaging with key stakeholders to understand their vision, goals, and requirements for the project.",
      icon: <Users size={24} />,
    },
    {
      title: "Market Analysis",
      description:
        "Conducting thorough market research to identify trends, opportunities, and potential challenges that may impact the project.",
      icon: <LineChart size={24} />,
    },
    {
      title: "Design and Prototyping",
      description:
        "Creating wireframes and prototypes to visualize the user experience and gather feedback from stakeholders.",
      icon: <PenTool size={24} />,
    },
    {
      title: "Development",
      description:
        "Building the actual product based on the approved designs and prototypes.",
      icon: <Code2 size={24} />,
    },
    {
      title: "Testing and Quality Assurance",
      description:
        "Rigorously testing the product to ensure it meets quality standards and functions as intended.",
      icon: <Bug size={24} />,
    },
    {
      title: "Deployment",
      description:
        "Deploying the product to the production environment and ensuring it is ready for use by end-users.",
      icon: <Rocket size={24} />,
    },
    {
      title: "Post-Launch Support",
      description:
        "Providing ongoing support and maintenance to ensure the product continues to meet user needs and adapts to any changes in the market.",
      icon: <Wrench size={24} />,
    },
  ];

  return (
    <section id="processSection" aria-labelledby="process-heading" className="w-full h-fit">
      <div className="flex flex-col items-left justify-center max-w-275 mx-auto px-3.75 sm:px-7.5 md:px-10 lg:px-12.5">
        <div className="flex flex-row w-full items-center justify-left mb-10 mt-20">
          <h2 id="process-heading" className="text-sm sm:text-base text-white/70 w-26">
            The Process
          </h2>
          <hr className="w-full border-t border-white/15 mt-4 mb-3" />
        </div>

        <div className="flex flex-col items-left justify-center text-white gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <ProcessCard {...step} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
