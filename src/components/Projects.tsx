function Projects() {
  return (
    <div id='projectsSection' className="w-full h-screen bg-black/70 backdrop-blur-lg">
      <div className="flex flex-col items-left justify-center max-w-[1100px] mx-auto px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
        <div className="flex flex-row w-full items-center justify-left mt-10">
          <p className="text-sm sm:text-base text-white/55 w-44 sm:w-40">Featured Projects</p>
          <hr className="w-full border-t-1 border-white/15 mt-4 mb-3"/>
        </div>

        <div className="flex flex-col sm:flex-row pt-10 gap-6 sm:gap-10 items-start justify-start">
          <div className="w-full sm:w-1/2 bg-white/5 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Project Name</h3>
              <p className="text-sm text-white/70 mt-2">Description of project</p>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="bg-neutral-600/40 text-white px-2 rounded-sm">React</div>
              <div className="bg-neutral-600/40 text-white px-2 rounded-sm">Tailwind CSS</div>
              <div className="bg-neutral-600/40 text-white px-2 rounded-sm">JavaScript</div>
            </div>
            <div className="mt-4 group">
              <img src="/project-image.jpg" alt="Project Screenshot" />
              <div className="w-full h-74 -translate-y-74 -mb-74 bg-black/80 hidden group-hover:block">hi</div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 bg-white/5 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Project Name</h3>
              <p className="text-sm text-white/70 mt-2">Description of project</p>
            </div>
            <div className="mt-4 group">
              <img src="/project-image.jpg" alt="Project Screenshot" />
              <div className="w-full h-74 -translate-y-74 -mb-74 bg-black/80 hidden group-hover:block">hi</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row pt-10 gap-6 sm:gap-10 items-start justify-start">
          <div className="w-full sm:w-1/2 bg-white/5 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Project Name</h3>
              <p className="text-sm text-white/70 mt-2">Description of project</p>
            </div>
            <div className="mt-4 group">
              <img src="/project-image.jpg" alt="Project Screenshot" />
              <div className="w-full h-74 -translate-y-74 -mb-74 bg-black/80 hidden group-hover:block">hi</div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 bg-white/5 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Project Name</h3>
              <p className="text-sm text-white/70 mt-2">Description of project</p>
            </div>
            <div className="mt-4 group">
              <img src="/project-image.jpg" alt="Project Screenshot" />
              <div className="w-full h-74 -translate-y-74 -mb-74 bg-black/80 hidden group-hover:block">hi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects