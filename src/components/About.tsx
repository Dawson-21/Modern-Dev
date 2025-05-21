export default function About() {
  return (
    <div className="mt-[26vh] w-full h-fit bg-black/70 backdrop-blur-lg">
      <div className="flex flex-col items-left justify-center max-w-[1100px] mx-auto px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
        <div className="grid grid-cols-7 items-center">
          <div className="w-[60vw] 2xl:w-[40vw] h-62 -my-62 translate-y-40 -translate-x-[6vw] bg-radial from-neutral-500/30 from-1% to-neutral-400/1 to-70%"></div>
          <h1 className="col-span-7 text-[min(7vw,50px)] font-bold text-white mt-32">Welcome, I'm Dawson.</h1>
          <p className="col-span-7 md:col-span-4 text-[min(3.5vw,20px)] text-white/55 mt-5">Web developer dedicated to helping small businesses build a stronger online presence and stand out in today's digital landscape.</p>
          <button className="col-span-7 md:col-span-3 md:justify-self-end flex group w-fit h-fit bg-white/80 text-black px-4 py-2 mt-5 rounded-full text-[min(2.75vw,18px)] font-bold hover:bg-white transform hover:scale-[1.15] transition duration-200 ease-in-out">
            Start a Project <img src="/arrow-black.svg" className="w-5 sm:w-8 pl-1 transform group-hover:translate-x-3 transition duration-200 ease-in-out"/>
          </button>
        </div>

        <div className="flex flex-row w-full items-center justify-left mt-10">
          <p className="text-sm sm:text-base text-white/55 w-20 sm:w-24">About Me</p>
          <hr className="w-full border-t-1 border-white/15 mt-4 mb-3"/>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 pb-20 mt-10">
          <div className="bg-gradient-to-b from-neutral-900 to-black/90 rounded-md border-white/15 border-1 text-white group col-span-7 lg:col-span-5">
            <div className="group-hover:bg-gradient-to-tl from-sky-950/40 from-65% to-yellow-700/20 transition duration-500 p-6">
              <img src="/dawson.png" alt="" className="float-left w-24 sm:w-[20%] md:w-34 lg:w-[23%] px-[3%] pt-[1%] mr-5 rounded-md bg-neutral-800 group-hover:bg-gradient-to-br from-sky-950 to-yellow-700/30 group-hover:scale-110 transition duration-500" />
              <p className="text-[min(2.75vw,18px)] leading-5 sm:leading-6 lg:leading-8 tracking-wide text-white/55 group-hover:text-white transition duration-500">I'm a software developer passionate about building modern, user-focused websites and web applications. With a B.S. in Computer Science from Texas A&M University–Corpus Christi and a strong foundation in both business and technology, I craft digital solutions that not only look great but drive results. I thrive on taking on new challenges and helping businesses level up their online presence.</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-neutral-900 to-black/90 rounded-md border-white/15 border-1 text-white col-span-7 sm:col-span-3 lg:col-span-2 group">
            <div className="group-hover:bg-gradient-to-br from-sky-950/40 from-25% to-yellow-700/20 transition duration-500 p-5">  
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-[min(2.75vw,18px)] leading-5 sm:leading-6 lg:leading-8 tracking-wide text-white/55 group-hover:text-white transition duration-500">I am a passionate developer with a love for creating modern web applications. I specialize in React and Tailwind CSS.</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-neutral-900 to-black/90 rounded-md border-white/15 border-1 text-white col-span-7 sm:col-span-4 lg:col-span-2 group">
            <div className="group-hover:bg-gradient-to-br from-sky-950/40 from-25% to-yellow-700/15 transition duration-500 p-5">  
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-[min(2.75vw,18px)] leading-5 sm:leading-6 lg:leading-8 tracking-wide text-white/55 group-hover:text-white transition duration-500">I am a passionate developer with a love for creating modern web applications. I specialize in React and Tailwind CSS.</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-neutral-900 to-black/90 rounded-md border-white/15 border-1 text-white group col-span-7 lg:col-span-5">
            <div className="group-hover:bg-gradient-to-br from-sky-950/40 from-25% to-yellow-700/15 transition duration-500 p-6 h-[101%]">
              <h2 className="text-center text-xl font-bold">Tech Skills</h2>
              <p className="text-[min(2.75vw,18px)] leading-5 sm:leading-6 lg:leading-8 tracking-wide text-white/55 group-hover:text-white transition duration-500">I'm a software developer with a passion for creating modern websites and web applications, specializing in development of user-centric products and solutions. Equipped with business knowledge, as well as technical expertise, I excel at taking on new challeges quickly and effectively, exceeding expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}