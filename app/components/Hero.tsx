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
    <>
      <div className="fixed top-0 -z-999 w-full h-dvh bg-[url(/hero-bg2.jpg)] sm:bg-[url(/hero-bg.jpg)] bg-center bg-no-repeat sm:bg-cover">
        <div className="w-full h-dvh bg-linear-to-tr from-blue-950/60 via-black/60 to-yellow-900/60"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full h-screen mr-auto place-self-center items-center flex flex-col justify-center"
        id="homeSection"
      >
        <img
          src="Hero-logo2.png"
          alt="Modern Dev Logo"
          className="w-[75vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw]"
        />

        <div className="flex flex-row pt-8 space-x-2 sm:space-x-5 md:space-x-10">
          <motion.button
            onClick={() => handleClick("aboutSection")}
            whileHover={{
              scale: 1.15,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{
              scale: 1.15,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-black/70 border-2 border-sky-900 text-white px-3 sm:px-5 py-2 rounded-full text-[min(3vw,16px)] font-bold cursor-pointer"
          >
            Learn More
          </motion.button>

          <motion.button
            onClick={() => handleClick("projectsSection")}
            whileHover={{
              scale: 1.15,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{
              scale: 1.15,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-black/70 border-2 border-sky-900 text-white px-3 sm:px-5 py-2 rounded-full text-[min(3vw,16px)] font-bold cursor-pointer"
          >
            View Featured Projects
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
