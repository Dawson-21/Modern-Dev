import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Modal from "./Modal";

interface Props {
  title: string
  scope: string
  description: string
  problem: string
  solution: string
  results: string
  technologies: string[]
  imageUrl: string
  imageAlt: string
  siteUrl?: string
}

function ProjectCard({ title, scope, description, problem, solution, results, technologies, imageUrl, imageAlt, siteUrl }: Props) {

  const [selectedProject, setSelectedProject] = useState(false);

  return (
    <div className="w-full bg-black border-white/15 border p-4 rounded-lg">

      <div className="lg:flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{scope}</p>
      </div>

      <div className="flex gap-2 mt-2">
        {technologies.map((tech) => (
          <div key={tech} className="bg-neutral-600/40 text-white text-[min(3vw,14px)] px-2 rounded-sm">
            {tech}
          </div>
        ))}
      </div>

      <div className="group relative overflow-hidden rounded-xl shadow-lg mt-4">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-4">
          <div className="text-center">
            <p className="text-sm mt-2">{description}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <a 
        href={siteUrl} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-[min(4vw,14px)] hover:underline">
          Visit Live Site <ExternalLink className="w-4 h-4 mb-1 inline" />
        </a>

        <button 
        className="col-span-7 md:col-span-3 md:justify-self-end flex group text-white text-[min(4vw,14px)] font-light cursor-pointer transition duration-200 ease-in-out"
        onClick={() => setSelectedProject(true)}>
          Read More
          <img src="/arrow-white.svg" className="w-6 sm:w-7 pl-1 transform group-hover:translate-x-2 transition duration-200 ease-in-out" />
        </button>
      </div>

      <Modal
        isOpen={selectedProject}
        onClose={() => setSelectedProject(false)}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
        <p className="text-white/60 text-sm">{description}</p>

        <h3 className="font-semibold text-sky-300 py-3">Problem</h3>
        <p className="text-white/60 text-sm">{problem}</p>

        <h3 className="font-semibold text-sky-300 py-3">Solution</h3>
        <p className="text-white/60 text-sm">{solution}</p>

        <h3 className="font-semibold text-sky-300 py-3">Results</h3>
        <p className="text-white/60 text-sm">{results}</p>
      </Modal>

    </div>
  )
}

export default ProjectCard