"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  title: string;
  scope: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
  results: string;
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
  siteUrl?: string;
}

function ProjectCard({
  title,
  scope,
  shortDescription,
  longDescription,
  problem,
  solution,
  results,
  technologies,
  imageUrl,
  imageAlt,
  siteUrl,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollYRef = useRef(0);

  /*
    BODY SCROLL LOCK
  */
  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      const scrollY = scrollYRef.current;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  /*
    ESC CLOSE
  */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
    URL STATE
  */
  useEffect(() => {
    if (!isOpen) return;

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    window.history.pushState(null, "", `#${slug}`);

    return () => {
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search,
      );
    };
  }, [isOpen, title]);

  return (
    <>
      {/* CARD */}
      <motion.div
        layoutId={`card-container-${title}`}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 22,
        }}
        className="w-full bg-black border border-white/20 p-4 rounded-2xl overflow-hidden"
      >
        {/* HEADER */}
        <div className="lg:flex justify-between items-center">
          <motion.h3
            layoutId={`title-${title}`}
            className="text-lg font-semibold text-white"
          >
            {title}
          </motion.h3>

          <motion.p
            layoutId={`scope-${title}`}
            className="text-sm text-white/70"
          >
            {scope}
          </motion.p>
        </div>

        {/* TECH STACK */}
        <div className="flex gap-2 mt-2 flex-wrap">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="bg-neutral-700/40 border border-white/10 text-white text-[12px] px-2 py-1 rounded-md"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* IMAGE */}
        <motion.button
          onClick={() => setIsOpen(true)}
          layoutId={`image-container-${title}`}
          className="relative overflow-hidden rounded-2xl shadow-lg mt-4 cursor-pointer w-full text-left"
          whileHover={{ scale: 1.01 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 18,
          }}
        >
          <motion.img
            layoutId={`image-${title}`}
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="
              absolute inset-0
              bg-black/70
              backdrop-blur-sm
              flex items-center justify-center
              p-6
            "
          >
            <div className="text-center">
              <p className="text-sm text-white">{shortDescription}</p>
            </div>
          </motion.div>
        </motion.button>

        {/* FOOTER */}
        <div className="flex justify-between items-center mt-4">
          {siteUrl ? (
            <motion.a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm flex items-center gap-2"
              whileHover={{ x: 3 }}
            >
              Visit Live Site
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          ) : (
            <div />
          )}

          <motion.button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-sm text-white"
            whileHover={{ x: 6 }}
          >
            Read Case Study
            <motion.img src="/arrow-white.svg" alt="" className="w-6" />
          </motion.button>
        </div>
      </motion.div>

      {/* FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {isOpen &&
          createPortal(
            <ProjectOverlay
              title={title}
              scope={scope}
              shortDescription={shortDescription}
              longDescription={longDescription}
              problem={problem}
              solution={solution}
              results={results}
              technologies={technologies}
              imageUrl={imageUrl}
              imageAlt={imageAlt}
              siteUrl={siteUrl}
              onClose={() => setIsOpen(false)}
            />,
            document.body,
          )}
      </AnimatePresence>
    </>
  );
}

interface OverlayProps extends Props {
  onClose: () => void;
}

function ProjectOverlay({
  title,
  scope,
  longDescription,
  problem,
  solution,
  results,
  technologies,
  imageUrl,
  imageAlt,
  siteUrl,
  onClose,
}: OverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  /*
    SUBTLE PARALLAX
  */
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <motion.div
      className="fixed inset-0 z-[999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* BACKDROP */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* CLOSE BUTTON */}
      <motion.button
        onClick={onClose}
        className="
          fixed top-5 right-5 z-[1000]
          w-12 h-12
          rounded-full
          bg-white/10
          backdrop-blur-md
          border border-white/10
          flex items-center justify-center
          text-white
        "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{
          rotate: 90,
          scale: 1.05,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 16,
        }}
      >
        <X className="w-5 h-5" />
      </motion.button>

      {/* SCROLLABLE CONTENT */}
      <div
        ref={containerRef}
        className="
          absolute inset-0
          overflow-y-auto
          overscroll-contain
        "
      >
        <motion.div
          layoutId={`card-container-${title}`}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 22,
          }}
          className="
            min-h-screen
            bg-neutral-950
            rounded-none
            overflow-hidden
          "
        >
          {/* HERO IMAGE */}
          <motion.div
            layoutId={`image-container-${title}`}
            className="relative h-[60vh] overflow-hidden"
          >
            <motion.img
              layoutId={`image-${title}`}
              src={imageUrl}
              alt={imageAlt}
              style={{ scale: imageScale }}
              className="
                w-full h-full
                object-cover
                will-change-transform
              "
            />

            <div className="absolute inset-0 bg-black/40" />

            {/* HERO CONTENT */}
            <div
              className="
                absolute bottom-0 left-0
                p-6 sm:p-10
                max-w-4xl
              "
            >
              <motion.p
                layoutId={`scope-${title}`}
                className="text-white/70 text-sm mb-3"
              >
                {scope}
              </motion.p>

              <motion.h1
                layoutId={`title-${title}`}
                className="
                  text-4xl
                  sm:text-6xl
                  font-semibold
                  text-white
                "
              >
                {title}
              </motion.h1>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.15,
              },
            }}
            exit={{ opacity: 0 }}
            className="
              max-w-5xl
              mx-auto
              px-6
              py-16
            "
          >
            {/* DESCRIPTION */}
            <section className="mb-16">
              <p
                className="
                  text-white/70
                  text-lg
                  leading-relaxed
                "
              >
                {longDescription}
              </p>
            </section>

            {/* TECH STACK */}
            <section className="mb-16">
              <h2 className="text-white text-2xl mb-6">Technologies</h2>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-white/80
                      text-sm
                    "
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* CASE STUDY */}
            <div className="space-y-16">
              <CaseStudySection title="Problem" content={problem} />

              <CaseStudySection title="Solution" content={solution} />

              <CaseStudySection title="Results" content={results} />
            </div>

            {/* CTA */}
            {siteUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.35,
                  },
                }}
                className="pt-24"
              >
                <motion.a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-8 py-4
                    rounded-full
                    bg-white
                    text-black
                    font-medium
                  "
                >
                  Visit Live Website
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CaseStudySection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
      }}
    >
      <h2 className="text-3xl text-white mb-6">{title}</h2>

      <p
        className="
          text-white/70
          leading-relaxed
          text-lg
        "
      >
        {content}
      </p>
    </motion.section>
  );
}

export default ProjectCard;
