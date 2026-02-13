"use client";

import Carousel from "./Carousel";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";

const aboutCardBgVariants: Variants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const aboutImageVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const aboutImageBgVariants: Variants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const aboutTextVariants: Variants = {
  rest: { color: "rgba(255, 255, 255, 0.55)" },
  hover: { color: "rgba(255, 255, 255, 1)" },
};

const buttonArrowVariants: Variants = {
  rest: { x: 0 },
  hover: { x: 8, transition: { duration: 0.2, ease: "easeInOut" } },
};

const socialsBgVariants: Variants = {
  rest: { backgroundImage: "url(/hex.png)" },
  hover: {
    backgroundImage: "url(/hex2.png)",
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};

const socialsShiftVariants: Variants = {
  rest: { x: 0 },
  hover: { x: -8, transition: { duration: 0.5, ease: "easeInOut" } },
};

const socialsTextVariants: Variants = {
  rest: { color: "rgba(255, 255, 255, 0.55)" },
  hover: { color: "rgba(255, 255, 255, 1)" },
};

const socialButtonVariants: Variants = {
  rest: { scale: 1, backgroundColor: "rgb(82, 82, 82)" },
  hover: {
    scale: 1.1,
    backgroundColor: "rgb(255, 255, 255, 1)",
    transition: { duration: 0.001, ease: "easeInOut" },
  },
};

const cardHoverBgVariants: Variants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const techRowRightVariants: Variants = {
  rest: { x: 0 },
  hover: { x: 16, transition: { duration: 0.5, ease: "easeInOut" } },
};

const techRowLeftVariants: Variants = {
  rest: { x: 0 },
  hover: { x: -16, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function About() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [bgPosition, setBgPosition] = useState("center 14%");

  useEffect(() => {
    const width = window.innerWidth;

    if (width >= 428) {
      setBgPosition("center 31%");
    } else if (width >= 414) {
      setBgPosition("center 29%");
    } else if (width >= 390) {
      setBgPosition("center 23%");
    } else if (width >= 375) {
      setBgPosition("center 18%");
    }
  }, []);

  // let bgPosition = "center_14%"; // Default for mobile

  // let width = window.innerWidth;
  // if (width >= 428) {
  //   bgPosition = "center_31%";
  // } else if (width >= 414) {
  //   bgPosition = "center_29%";
  // } else if (width >= 390) {
  //   bgPosition = "center_23%";
  // } else if (width >= 375) {
  //   bgPosition = "center_18%";
  // }

  useEffect(() => {
    const updateBg = () => {
      const width = window.innerWidth;

      if (width >= 428) setBgPosition("center 31%");
      else if (width >= 414) setBgPosition("center 25%");
      else setBgPosition("center 14%");
    };

    updateBg();
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <div id="aboutSection" className="w-full h-fit">
      <div className="flex flex-col items-left justify-center max-w-275 mx-auto px-3.75 sm:px-7.5 md:px-10 lg:px-12.5">
        <div className="grid grid-cols-7 items-center">
          <h1 className="col-span-7 text-[min(8vw,50px)] font-bold text-white mt-[10vh]">
            Hey There! I'm Dawson.
          </h1>
          <p className="col-span-7 md:col-span-4 text-[min(4.5vw,20px)] text-white/55 sm:mt-5">
            Texas based software engineer dedicated to helping small businesses
            build a stronger online presence and stand out in today's digital
            landscape.
          </p>
          <motion.button
            onClick={() => handleClick("contactSection")}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.8)" },
              hover: {
                scale: 1.15,
                backgroundColor: "rgba(255, 255, 255, 1)",
                transition: { duration: 0.2, ease: "easeInOut" },
              },
            }}
            className="col-span-7 md:col-span-3 md:justify-self-end flex w-fit h-fit bg-white/80 text-black px-4 py-2 mt-5 rounded-full text-[min(4vw,18px)] font-bold cursor-pointer"
          >
            Start a Project
            <motion.img
              src="/arrow-black.svg"
              variants={buttonArrowVariants}
              className="w-6 sm:w-8 pl-1"
            />
          </motion.button>
        </div>

        <div className="flex flex-row w-full items-center justify-left mt-10">
          <p className="text-sm sm:text-base text-white/55 w-24 sm:w-24">
            About Me
          </p>
          <hr className="w-full border-t border-white/20 mt-4 mb-3" />
        </div>

        {/****************** PROFESSIONAL BACKGROUND ********************/}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-7 gap-4 mt-10"
        >
          {" "}
          <motion.div
            className="bg-linear-to-b from-neutral-900 to-black/90 rounded-md border-white/20 border text-white col-span-7 lg:col-span-5"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <div className="relative p-6">
              <motion.div
                variants={aboutCardBgVariants}
                className="absolute inset-0 bg-linear-to-tl from-sky-950/40 from-65% to-yellow-700/20"
              />
              <motion.div
                variants={aboutImageVariants}
                className="relative float-left w-24 sm:w-[20%] md:w-34 lg:w-[23%] px-[3%] pt-[1%] mr-5 rounded-md bg-neutral-800 overflow-hidden"
              >
                <motion.div
                  variants={aboutImageBgVariants}
                  className="absolute inset-0 bg-linear-to-br from-sky-950 to-yellow-700/30"
                />
                <img
                  src="/dawson.png"
                  alt=""
                  className="relative z-10 w-full h-auto"
                />
              </motion.div>
              <motion.p
                variants={aboutTextVariants}
                className="relative z-10 text-[min(4.3vw,18px)] font-light leading-6 lg:leading-8 tracking-wide"
              >
                I'm a Software Engineer passionate about building modern,
                user-focused websites and web applications. With a B.S. in
                Computer Science from Texas A&M University Corpus Christi and a
                strong foundation in both business and technology, I craft
                digital solutions that not only look great but drive results. I
                thrive on taking on new challenges and helping businesses level
                up their online presence.
              </motion.p>
            </div>
          </motion.div>
          {/****************** SOCIALS ********************/}
          <motion.div
            className="bg-linear-to-b from-neutral-900 to-black/90 rounded-md border-white/20 border text-white col-span-7 sm:col-span-3 lg:col-span-2 flex items-stretch overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div
              variants={socialsBgVariants}
              className={`size-full bg-size-[120%_auto] sm:bg-cover bg-no-repeat sm:bg-center bg-center`}
            >
              <div className="flex flex-col justify-center p-5 max-sm:pt-20 h-full">
                <div className="h-36 sm:h-36 place-items-center">
                  {/* Facebook */}
                  <motion.button
                    className="-ml-[40%] sm:-ml-[63%] translate-y-5.75 sm:translate-y-10.5 hex-btn"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                    variants={socialButtonVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <a href="#" target="_blank">
                      <img className="-rotate-30 w-12" src="/icon-fb.svg" />
                    </a>
                  </motion.button>
                  {/* GitHub */}
                  <motion.button
                    className="-mt-12 max-sm:-translate-y-11 max-sm:-mt-16 max-sm:mb-4 hex-btn"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                    variants={socialButtonVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <a href="https://github.com/Dawson-21" target="_blank">
                      <img className="-rotate-30 w-12" src="/icon-github.svg" />
                    </a>
                  </motion.button>
                  {/* Instagram */}
                  <motion.button
                    className="-mt-15 sm:-mt-12 ml-[40%] sm:ml-[62%] translate-y-0.5 sm:translate-y-10.5 hex-btn"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                    variants={socialButtonVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <a href="#" target="_blank">
                      <img className="-rotate-30 w-10" src="/icon-insta.svg" />
                    </a>
                  </motion.button>
                  {/* LinkedIn */}
                  <motion.button
                    className="-mt-1.75 translate-y-3 sm:translate-y-10.5 hex-btn"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                    variants={socialButtonVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <a
                      href="https://www.linkedin.com/in/dawson-adams21/"
                      target="_blank"
                    >
                      <img
                        className="-rotate-30 w-10"
                        src="/icon-linkedin.svg"
                      />
                    </a>
                  </motion.button>
                </div>
                <motion.div
                  variants={socialsShiftVariants}
                  className="max-sm:pt-0"
                >
                  <h2 className="text-xl font-bold">Reach Out</h2>
                  <motion.p
                    variants={socialsTextVariants}
                    className="text-[min(4.3vw,14px)] font-light tracking-wide"
                  >
                    Connect with me through my favorite platforms.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          {/****************** TESTIMONIALS ********************/}
          <motion.div
            className="relative bg-black rounded-md border-white/20 border text-white col-span-7 sm:col-span-4 lg:col-span-3 p-4 sm:pt-5 overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div
              variants={cardHoverBgVariants}
              className="absolute inset-0 bg-linear-to-br from-sky-950/40 from-25% to-yellow-600/20"
            />
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-center">
                Real Feedback, Real Results
              </h2>
              <Carousel />
            </div>
          </motion.div>
          {/****************** TECH SKILLS ********************/}
          <motion.div
            className="relative bg-black rounded-md border-white/20 border text-white col-span-7 lg:col-span-4 p-5 lg:text-[14px] text-base overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div
              variants={cardHoverBgVariants}
              className="absolute inset-0 bg-linear-to-br from-sky-950/40 from-25% to-yellow-600/20"
            />
            <div className="relative z-10">
              <h2 className="text-center text-xl font-bold pb-5 sm:pb-8">
                Tech Skills
              </h2>
              <motion.div
                variants={techRowRightVariants}
                className="h-fit flex flex-wrap justify-center items-center gap-2"
              >
                <div className="tech-item">
                  <img
                    src="/icon-react.svg"
                    alt="React"
                    className="h-8 -mx-1"
                  />
                  React
                </div>
                <div className="tech-item">
                  <img src="/icon-next.svg" alt="Next.js" className="h-7" />
                  Next.js
                </div>
                <div className="tech-item">
                  <img
                    src="/icon-typescript.svg"
                    alt="TypeScript"
                    className="h-6"
                  />
                  TypeScript
                </div>
                <div className="tech-item">
                  <img src="/icon-js.svg" alt="JavaScript" className="h-6" />
                  JavaScript
                </div>
                <div className="tech-item">
                  <img
                    src="/icon-tailwind.svg"
                    alt="Tailwind CSS"
                    className="h-7"
                  />
                  Tailwind CSS
                </div>
              </motion.div>
              <motion.div
                variants={techRowLeftVariants}
                className="h-fit flex flex-wrap justify-center items-center gap-2 mt-2"
              >
                <div className="tech-item">
                  <img src="/icon-vite.svg" alt="Vite" className="h-7" />
                  Vite
                </div>
                <div className="tech-item">
                  <img src="/icon-vercel.svg" alt="Vercel" className="h-7" />
                  Vercel
                </div>
                <div className="tech-item">
                  <img src="/icon-netlify.svg" alt="Netlify" className="h-6" />
                  Netlify
                </div>
                <div className="tech-item">
                  <img src="/icon-git.svg" alt="Git" className="h-7" />
                  Git
                </div>
                <div className="tech-item">
                  <img src="/icon-node.svg" alt="Node.js" className="h-7" />
                  Node.js
                </div>
                <div className="tech-item">
                  <img src="/icon-mongodb.svg" alt="MongoDB" className="h-6" />
                  MongoDB
                </div>
              </motion.div>
              <motion.div
                variants={techRowRightVariants}
                className="h-fit flex flex-wrap justify-center items-center gap-2 mt-2"
              >
                <div className="tech-item">
                  <img
                    src="/icon-appwrite.svg"
                    alt="Appwrite"
                    className="h-5"
                  />
                  Appwrite
                </div>
                <div className="tech-item">
                  <img src="/icon-deep.svg" alt="DeepSource" className="h-6" />
                  DeepSource
                </div>
                <div className="tech-item">
                  <img
                    src="/icon-wordpress.svg"
                    alt="WordPress"
                    className="h-7"
                  />
                  WordPress
                </div>
                <div className="tech-item">
                  <img src="/framer.png" alt="Framer Motion" className="h-6" />
                  Framer Motion
                </div>
              </motion.div>
              <motion.p
                variants={aboutTextVariants}
                className="text-sm text-center font-light pt-7 sm:pt-12"
              >
                I use this collection of tools and technologies to build
                exceptional digital experiences.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
