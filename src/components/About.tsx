import Carousel from "./Carousel";

export default function About() {

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id='aboutSection' className="mt-[26vh] w-full h-fit bg-black/70 backdrop-blur-lg">
      <div className="flex flex-col items-left justify-center max-w-[1100px] mx-auto px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
        <div className="grid grid-cols-7 items-center">
          <div className="w-[60vw] 2xl:w-[40vw] h-62 -my-62 translate-y-40 -translate-x-[6vw] bg-radial from-neutral-500/30 from-1% to-neutral-400/1 to-70%"></div>
          <h1 className="col-span-7 text-[min(8vw,50px)] font-bold text-white mt-32">Welcome, I'm Dawson.</h1>
          <p className="col-span-7 md:col-span-4 text-[min(4.5vw,20px)] text-white/55 sm:mt-5">Software engineer dedicated to helping small businesses build a stronger online presence and stand out in today's digital landscape.</p>
          <button onClick={() => handleClick('contactSection')} className="col-span-7 md:col-span-3 md:justify-self-end flex group w-fit h-fit bg-white/80 text-black px-4 py-2 mt-5 rounded-full text-[min(4vw,18px)] font-bold hover:bg-white cursor-pointer transition duration-200 ease-in-out">
            Start a Project <img src="/arrow-black.svg" className="w-6 sm:w-8 pl-1 transform group-hover:translate-x-2 transition duration-200 ease-in-out"/>
          </button>
        </div>

        <div className="flex flex-row w-full items-center justify-left mt-10">
          <p className="text-sm sm:text-base text-white/55 w-24 sm:w-24">About Me</p>
          <hr className="w-full border-t-1 border-white/15 mt-4 mb-3"/>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 pb-20 mt-10">
          <div className="bg-gradient-to-b from-neutral-900 to-black/90 rounded-md border-white/15 border-1 text-white group col-span-7 lg:col-span-5">
            <div className="group-hover:bg-gradient-to-tl from-sky-950/40 from-65% to-yellow-700/20 transition duration-500 p-6">
              <img src="/dawson.png" alt="" className="float-left w-24 sm:w-[20%] md:w-34 lg:w-[23%] px-[3%] pt-[1%] mr-5 rounded-md bg-neutral-800 group-hover:bg-gradient-to-br from-sky-950 to-yellow-700/30 group-hover:scale-110 transition duration-500" />
              <p className="text-[min(4.3vw,18px)] font-light leading-6 lg:leading-8 tracking-wide text-white/55 group-hover:text-white transition duration-500">I'm a Software Engineer passionate about building modern, user-focused websites and web applications. With a B.S. in Computer Science from Texas A&M University–Corpus Christi and a strong foundation in both business and technology, I craft digital solutions that not only look great but drive results. I thrive on taking on new challenges and helping businesses level up their online presence.</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-neutral-900 to-black/90 rounded-md border-white/15 border-1 text-white col-span-7 sm:col-span-3 lg:col-span-2 group flex items-stretch overflow-hidden">
            <div className="bg-[url(/hex.png)] group-hover:bg-[url(/hex2.png)] transition duration-500 size-[100%] bg-cover bg-no-repeat bg-center">
              <div className="flex flex-col justify-center p-5 max-sm:pt-16 h-full">
                <div className="h-36 place-items-center">
                  <button className="-ml-[63%] max-sm:-ml-[51%] translate-y-10.5 hex-btn"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <a href="#" target="_blank"><img className="-rotate-30 w-12" src="/icon-fb.svg" /></a>
                  </button>
                  <button className="-mt-12 max-sm:-mt-16 max-sm:mb-4 hex-btn"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <a href="https://github.com/Dawson-21" target="_blank"><img className="-rotate-30 w-12" src="/icon-github.svg" /></a>
                  </button>
                  <button className="-mt-12 ml-[62%] max-sm:ml-[50%] translate-y-10.5 hex-btn"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <a href="#" target="_blank"><img className="-rotate-30 w-10" src="/icon-insta.svg" /></a>
                  </button>
                  <button className="-mt-1.75 translate-y-10.5 hex-btn"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <a href="https://www.linkedin.com/in/dawson-adams21/" target="_blank"><img className="-rotate-30 w-10" src="/icon-linkedin.svg" /></a>
                  </button>
                </div>
                <div className="group-hover:-translate-x-2 duration-500 max-sm:pt-11">
                  <h2 className="text-xl font-bold">Reach Out</h2>
                  <p className="text-[min(4.3vw,14px)] font-light tracking-wide text-white/55 group-hover:text-white transition duration-500">Connect with me through my favorite platforms.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-md border-white/15 border-1 text-white col-span-7 sm:col-span-4 lg:col-span-3 group hover:bg-gradient-to-br from-sky-950/40 from-25% to-yellow-700/15 transition duration-500 p-5">
            <h2 className="text-xl font-bold text-center">Real Feedback, Real Results</h2>
            <Carousel />
          </div>

          <div className="bg-black rounded-md border-white/15 border-1 text-white group col-span-7 lg:col-span-4">
            <div className="group-hover:bg-gradient-to-br from-sky-950/40 from-25% to-yellow-700/15 transition duration-500 p-5">
              <h2 className="text-center text-xl font-bold">Tech Skills</h2>
              <div className="h-40 flex flex-row justify-center items-center gap-2 mt-4 group-hover:translate-x-2 transition duration-500">
                <div className="bg-neutral-800 h-8 px-2 rounded-md flex flex-row items-center gap-1 text-sm">
                  <img src="/icon-react.svg" alt="React" className="h-8"/>
                  React
                </div>
                <div className="bg-neutral-800 h-8 px-2 rounded-md flex flex-row items-center gap-1 text-sm">
                  <img src="/icon-next.svg" alt="Next.js" className="h-7" />
                  Next.js
                </div>
                <div className="bg-neutral-800 h-8 px-2 rounded-md flex flex-row items-center gap-1 text-sm">
                  <img src="/icon-typescript.svg" alt="TypeScript" className="h-6" />
                  TypeScript
                </div>
                <div className="bg-neutral-800 h-8 px-2 rounded-md flex flex-row items-center gap-1 text-sm">
                  <img src="/icon-tailwind.svg" alt="Tailwind CSS" className="h-7" />
                  Tailwind CSS
                </div>
              </div>
              <p className="text-sm font-light text-white/55 group-hover:text-white transition duration-500">I use this collection of tools and technologies to build exceptional digital experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}