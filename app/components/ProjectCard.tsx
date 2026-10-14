"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Modal from "./Modal";
import {
  cardAccentLabel,
  cardHoverOutline,
  cardSpotlight,
  cardSurface,
} from "./cardStyles";
import { spotlightHandlers } from "./spotlight";

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
  imageSrcSet?: string;
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
  imageSrcSet,
  imageAlt,
  siteUrl,
}: Props) {
  const [selectedProject, setSelectedProject] = useState(false);
  const modalTitleId = `project-modal-title-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;
  const address = siteUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div
      {...spotlightHandlers}
      className={`group grid w-full gap-3.5 rounded-lg p-4 ${cardSurface} ${cardHoverOutline} ${cardSpotlight}`}
    >
      {/* The screenshot in a small browser window, cut at two corners. The
          outer wrapper carries the glow, since a filter on the clipped frame
          itself would be cut off. */}
      <div className="transition-[filter] duration-300 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]">
        <div className="cut-frame bg-[#04060a]">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-2.5 py-2">
            {[0, 1, 2].map((dot) => (
              <i
                key={dot}
                aria-hidden="true"
                className="size-2 rounded-full bg-[#2a3038]"
              />
            ))}
            <span
              aria-hidden="true"
              className="ml-2 min-w-0 flex-1 truncate rounded-full bg-white/5 px-2.5 py-0.5 text-[0.68rem] text-white/70"
            >
              {address}
            </span>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <img
              src={imageUrl}
              srcSet={imageSrcSet}
              sizes="(min-width: 1100px) 456px, (min-width: 768px) 40vw, 100vw"
              alt={imageAlt}
              loading="lazy"
              className="size-full object-cover object-top transition-transform duration-[600ms] group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#04060a]/55 to-transparent to-35%" />
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        <p className={cardAccentLabel}>{scope}</p>
        <h3 className="text-xl font-semibold leading-tight text-white">
          {title}
        </h3>
        <p className="line-clamp-3 min-h-[4.5em] text-sm leading-normal text-white/70">
          {shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-sm bg-neutral-600/40 px-2 py-0.5 text-xs text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 text-sm">
        {siteUrl ? (
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-sky-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            aria-label={`Visit site for ${title} (opens in a new tab)`}
          >
            Visit site <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        ) : (
          <span />
        )}

        <button
          type="button"
          onClick={() => setSelectedProject(true)}
          className="group/case inline-flex cursor-pointer items-center gap-1.5 text-white transition-colors hover:text-sky-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
          aria-label={`Case study: ${title}`}
        >
          Case study{" "}
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover/case:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>

      <Modal
        isOpen={selectedProject}
        onClose={() => setSelectedProject(false)}
        titleId={modalTitleId}
      >
        <h2
          id={modalTitleId}
          className="mb-4 pr-8 text-xl font-semibold text-white sm:text-2xl"
        >
          {title}
        </h2>
        <p className="text-white/60 text-[12px] sm:text-sm">
          {longDescription}
        </p>

        <h3 className="font-semibold text-xl text-sky-400 pt-2 sm:py-3">
          Problem
        </h3>
        <p className="text-white/60 text-[12px] sm:text-sm">{problem}</p>

        <h3 className="font-semibold text-xl text-sky-400 pt-2 sm:py-3">
          Solution
        </h3>
        <p className="text-white/60 text-[12px] sm:text-sm">{solution}</p>

        <h3 className="font-semibold text-xl text-sky-400 pt-2 sm:py-3">
          Results
        </h3>
        <p className="text-white/60 text-[12px] sm:text-sm">{results}</p>
      </Modal>
    </div>
  );
}

export default ProjectCard;
