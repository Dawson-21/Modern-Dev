export default function About() {
  return (
    <div className="mt-[26vh] w-full h-fit bg-black/70 backdrop-blur-lg">
      <div className="flex flex-col items-left justify-center px-4 sm:px-[10%] lg:px-[20%]">
        <div className="grid grid-cols-7 items-center">
          <h1 className="col-span-7 text-4xl md:text-5xl xl:text-6xl font-bold text-white mt-32">Welcome, I'm Dawson.</h1>
          <p className="col-span-7 md:col-span-4 text-lg md:text-xl text-white mt-5">Web developer dedicated to helping small businesses build a stronger online presence and stand out in today's digital landscape.</p>
          <button className="col-span-7 md:col-span-3 md:justify-self-end flex group w-fit h-fit bg-white/80 text-black px-4 py-2 mt-5 rounded-full text-md sm:text-lg font-bold hover:bg-white transform hover:scale-[1.15] transition duration-200 ease-in-out">
            Start a Project <img src="/arrow-black.svg" className="w-8 pl-1 transform group-hover:translate-x-3 transition duration-200 ease-in-out"/>
          </button>
        </div>

        <div className="flex flex-row w-full items-center justify-left mt-10">
          <p className="text-sm sm:text-lg text-white/55 w-24 md:w-28">About Me</p>
          <hr className="w-full border-t-1 border-white/15 mt-4 mb-3"/>
        </div>

        <div className="flex  flex-col md:flex-row space-x-10 pb-20">
          <div className="bg-gradient-to-b from-neutral-900 to-black/90 rounded-xl border-white/15 border-1 text-white p-5 mt-10 w-full md:w-1/2">
            <img src="/dawson.png" alt="" className="w-[40%] md:w-[40%] px-[5%] pt-[1%] rounded-lg bg-neutral-900" />
            <p className="text-lg mt-4">I am a passionate developer with a love for creating modern web applications. I specialize in React and Tailwind CSS.</p>
          </div>

          <div className="bg-gradient-to-b from-neutral-900 to-black/90 rounded-xl border-white/15 border-1 text-white p-5 mt-10 w-full md:w-1/2">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg mt-4">I am a passionate developer with a love for creating modern web applications. I specialize in React and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </div>
  )
}