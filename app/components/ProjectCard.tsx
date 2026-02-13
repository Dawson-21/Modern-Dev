"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Modal from "./Modal";

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
  const [selectedProject, setSelectedProject] = useState(false);
  const modalTitleId = `project-modal-title-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="w-full bg-black border-white/20 border p-4 rounded-lg">
      <div className="lg:flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{scope}</p>
      </div>

      <div className="flex gap-2 mt-2">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="bg-neutral-600/40 text-white text-[min(3vw,14px)] px-2 rounded-sm"
          >
            {tech}
          </div>
        ))}
      </div>

      <motion.div
        className="relative overflow-hidden rounded-xl shadow-lg mt-4"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.3 } },
          }}
          className="absolute inset-0 bg-neutral-900/95 flex items-center justify-center text-white p-4 max-sm:px-1"
        >
          <div className="text-center">
            <p className="text-[13px] sm:text-sm mt-2">{shortDescription}</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex justify-between items-center mt-3">
        <motion.a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[min(4vw,14px)]"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: { textDecoration: "none" },
            hover: { textDecoration: "underline" },
          }}
          aria-label={`Visit live site for ${title}`}
        >
          Visit Live Site <ExternalLink className="w-4 h-4 mb-1 inline" />
        </motion.a>

        <motion.button
          className="col-span-7 md:col-span-3 md:justify-self-end flex text-white text-[min(4vw,14px)] font-light cursor-pointer"
          onClick={() => setSelectedProject(true)}
          type="button"
          initial="rest"
          whileHover="hover"
          animate="rest"
          aria-label={`Read more details about ${title}`}
        >
          Read More
          <motion.img
            src="/arrow-white.svg"
            alt=""
            aria-hidden="true"
            className="w-6 sm:w-7 pl-1"
            variants={{
              rest: { x: 0 },
              hover: { x: 8, transition: { duration: 0.2, ease: "easeInOut" } },
            }}
          />
        </motion.button>
      </div>

      <Modal
        isOpen={selectedProject}
        onClose={() => setSelectedProject(false)}
        titleId={modalTitleId}
      >
        <h2 id={modalTitleId} className="text-2xl font-semibold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/60 text-sm">{longDescription}</p>

        <h3 className="font-semibold text-xl text-sky-300 py-2 sm:py-3">
          Problem
        </h3>
        <p className="text-white/60 text-sm">{problem}</p>

        <h3 className="font-semibold text-xl text-sky-300 py-2 sm:py-3">
          Solution
        </h3>
        <p className="text-white/60 text-sm">{solution}</p>

        <h3 className="font-semibold text-xl text-sky-300 py-2 sm:py-3">
          Results
        </h3>
        <p className="text-white/60 text-sm">{results}</p>
      </Modal>
    </div>
  );
}

export default ProjectCard;
