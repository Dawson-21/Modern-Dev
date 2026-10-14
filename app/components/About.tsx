"use client";

import Carousel from "./Carousel";
import * as m from "framer-motion/m";
import type { Variants } from "framer-motion";
import SocialCard from "./SocialCard";
import { noMobileEntrance } from "./entrance";
import { cardHoverOutline, cardSpotlight, cardSurface, spotlightGlow } from "./cardStyles";
import { spotlightHandlers } from "./spotlight";
import { useScrollHover } from "./useScrollHover";

// Outline highlight shared with hover, and with the scroll-driven hover on touch.
const cardOutlineVariants: Variants = {
  rest: { borderColor: "rgba(255, 255, 255, 0.2)", transition: { duration: 0.3 } },
  hover: { borderColor: "rgba(56, 189, 248, 0.45)", transition: { duration: 0.3 } },
};

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
  const [profileRef, profileAnimate] = useScrollHover<HTMLDivElement>();
  const [testimonialsRef, testimonialsAnimate] = useScrollHover<HTMLDivElement>();
  const [techRef, techAnimate] = useScrollHover<HTMLDivElement>();

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="aboutSection" className="w-full h-fit">
      <div className="flex flex-col items-left justify-center max-w-275 mx-auto px-3.75 sm:px-7.5 md:px-10 lg:px-12.5">
        <div className="grid grid-cols-7 items-center">
          <h1 className="col-span-7 text-[min(8vw,50px)] font-bold text-white mt-[10vh]">
            Hey There! I&apos;m Dawson.
          </h1>
          <p className="col-span-7 md:col-span-4 text-[min(4.5vw,20px)] text-white/70 sm:mt-5">
            Texas based software engineer dedicated to helping small businesses
            build a stronger online presence and stand out in today&apos;s digital
            landscape.
          </p>
          <m.button
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
            <m.img
              src="/arrow-black.svg" width={24} height={24}
              alt=""
              aria-hidden="true"
              variants={buttonArrowVariants}
              className="w-6 sm:w-8 pl-1"
            />
          </m.button>
        </div>

        <div className="flex flex-row w-full items-center justify-left mt-10">
          <p className="text-sm sm:text-base text-white/70 w-24 sm:w-24">
            About Me
          </p>
          <hr className="w-full border-t border-white/20 mt-4 mb-3" />
        </div>

        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`grid grid-cols-2 sm:grid-cols-7 gap-4 mt-10 ${noMobileEntrance}`}
        >
          {/****************** PROFESSIONAL BACKGROUND ********************/}{" "}
          <m.div
            ref={profileRef}
            {...spotlightHandlers}
            className={`rounded-lg text-white col-span-7 lg:col-span-5 ${cardSurface}`}
            variants={cardOutlineVariants}
            initial="rest"
            whileHover="hover"
            animate={profileAnimate}
          >
            <div className="relative p-6">
              <m.div
                variants={aboutCardBgVariants}
                className={spotlightGlow}
              />
              <m.div
                variants={aboutImageVariants}
                className="relative float-left w-24 sm:w-[20%] md:w-34 lg:w-[23%] px-[3%] pt-[1%] mr-5 rounded-md overflow-hidden"
              >
                <m.div
                  variants={aboutImageBgVariants}
                  className="absolute inset-0 bg-linear-to-br from-sky-950 to-sky-900/50"
                />
                <img
                  src="/dawson.webp"
                  srcSet="/dawson-240.webp 240w, /dawson.webp 391w"
                  sizes="(min-width: 640px) 160px, 96px"
                  width={391}
                  height={515}
                  loading="lazy"
                  alt=""
                  className="relative z-10 w-full h-auto"
                />
              </m.div>
              <m.p
                variants={aboutTextVariants}
                className="relative z-10 text-[min(4.3vw,18px)] font-light leading-6 lg:leading-8 tracking-wide"
              >
                I&apos;m a Software Engineer passionate about building modern,
                user-focused, mobile-first websites and web applications. With a
                B.S. in Computer Science from Texas A&M University Corpus
                Christi and a strong foundation in both business and technology,
                I craft digital solutions that not only look great but drive
                results. I thrive on taking on new challenges and helping
                businesses level up their online presence.
              </m.p>
            </div>
          </m.div>
          {/****************** SOCIALS ********************/}
          <m.div {...spotlightHandlers}
            className={`rounded-lg text-white col-span-7 sm:col-span-3 lg:col-span-2 flex items-stretch ${cardSurface} ${cardHoverOutline} ${cardSpotlight}`}>
            <SocialCard />
          </m.div>
          {/****************** TESTIMONIALS ********************/}
          <m.div
            ref={testimonialsRef}
            {...spotlightHandlers}
            className={`relative rounded-lg text-white col-span-7 sm:col-span-4 lg:col-span-3 p-4 sm:pt-5 overflow-hidden ${cardSurface}`}
            variants={cardOutlineVariants}
            initial="rest"
            whileHover="hover"
            animate={testimonialsAnimate}
          >
            <m.div
              variants={cardHoverBgVariants}
              className={spotlightGlow}
            />
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-center">
                Real Feedback, Real Results
              </h2>
              <Carousel />
            </div>
          </m.div>
          {/****************** TECH SKILLS ********************/}
          <m.div
            ref={techRef}
            {...spotlightHandlers}
            className={`relative rounded-lg text-white col-span-7 lg:col-span-4 p-5 lg:text-[14px] text-base overflow-hidden ${cardSurface}`}
            variants={cardOutlineVariants}
            initial="rest"
            whileHover="hover"
            animate={techAnimate}
          >
            <m.div
              variants={cardHoverBgVariants}
              className={spotlightGlow}
            />
            <div className="relative z-10">
              <h2 className="text-center text-xl font-bold pb-5 sm:pb-8 pointer-events-none">
                Tech Skills
              </h2>
              <m.div
                variants={techRowRightVariants}
                className="h-fit flex flex-wrap justify-center items-center gap-2"
              >
                <div className="tech-item">
                  <img
                    src="/icon-react.svg" width={64} height={64}
                    alt="React"
                    className="h-8 -mx-1 w-auto"
                  />
                  React
                </div>
                <div className="tech-item">
                  <img src="/icon-next.svg" width={36} height={36} alt="Next.js" className="h-7 w-auto" />
                  Next.js
                </div>
                <div className="tech-item">
                  <img
                    src="/icon-typescript.svg" width={512} height={512}
                    alt="TypeScript"
                    className="h-6 w-auto"
                  />
                  TypeScript
                </div>
                <div className="tech-item">
                  <img src="/icon-js.svg" width={512} height={512} alt="JavaScript" className="h-6 w-auto" />
                  JavaScript
                </div>
                <div className="tech-item">
                  <img
                    src="/icon-tailwind.svg" width={32} height={32}
                    alt="Tailwind CSS"
                    className="h-7 w-auto"
                  />
                  Tailwind CSS
                </div>
              </m.div>
              <m.div
                variants={techRowLeftVariants}
                className="h-fit flex flex-wrap justify-center items-center gap-2 mt-2"
              >
                <div className="tech-item">
                  <img src="/icon-vite.svg" width={32} height={32} alt="Vite" className="h-7 w-auto" />
                  Vite
                </div>
                <div className="tech-item">
                  <img src="/icon-vercel.svg" width={16} height={16} alt="Vercel" className="h-7 w-auto" />
                  Vercel
                </div>
                <div className="tech-item">
                  <img src="/icon-netlify.svg" width={40} height={40} alt="Netlify" className="h-6 w-auto" />
                  Netlify
                </div>
                <div className="tech-item">
                  <img src="/icon-git.svg" width={32} height={32} alt="Git" className="h-7 w-auto" />
                  Git
                </div>
                <div className="tech-item">
                  <img src="/icon-node.svg" width={282} height={282} alt="Node.js" className="h-7 w-auto" />
                  Node.js
                </div>
                <div className="tech-item">
                  <img src="/icon-mongodb.svg" width={1024} height={1024} alt="MongoDB" className="h-6 w-auto" />
                  MongoDB
                </div>
              </m.div>
              <m.div
                variants={techRowRightVariants}
                className="h-fit flex flex-wrap justify-center items-center gap-2 mt-2"
              >
                <div className="tech-item">
                  <img
                    src="/icon-appwrite.svg" width={24} height={22}
                    alt="Appwrite"
                    className="h-5 w-auto"
                  />
                  Appwrite
                </div>
                <div className="tech-item">
                  <img src="/icon-deep.svg" width={26} height={30} alt="DeepSource" className="h-6 w-auto" />
                  DeepSource
                </div>
                <div className="tech-item">
                  <img
                    src="/icon-wordpress.svg" width={32} height={32}
                    alt="WordPress"
                    className="h-7 w-auto"
                  />
                  WordPress
                </div>
                <div className="tech-item">
                  <img src="/framer.webp" width={96} height={96} alt="Framer Motion" className="h-6 w-auto" />
                  Framer Motion
                </div>
              </m.div>
              <m.p
                variants={aboutTextVariants}
                className="text-sm text-center font-light pt-7 sm:pt-12 pointer-events-none"
              >
                I use this collection of tools and technologies to build
                exceptional digital experiences.
              </m.p>
            </div>
          </m.div>
        </m.div>
      </div>
    </div>
  );
}
