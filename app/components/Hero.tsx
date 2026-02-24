"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="homeSection"
      className="relative min-h-[100svh] min-h-dvh w-full flex flex-col justify-center items-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <img
          src="Hero-logo2.png"
          alt="Modern Dev Logo"
          className="w-[75vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw]"
        />

        <div className="flex justify-center pt-8 space-x-2 sm:space-x-5 md:space-x-10">
          <motion.button
            onClick={() => handleClick("aboutSection")}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-black/70 border-2 border-sky-900 text-white px-3 sm:px-5 py-2 rounded-full text-[min(3vw,16px)] font-bold"
          >
            Learn More
          </motion.button>

          <motion.button
            onClick={() => handleClick("projectsSection")}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-black/70 border-2 border-sky-900 text-white px-3 sm:px-5 py-2 rounded-full text-[min(3vw,16px)] font-bold"
          >
            View Featured Projects
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
