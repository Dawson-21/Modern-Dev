import Carousel from "./Carousel";
import { motion } from "framer-motion";

export default function About() {

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  let bgPosition = "center_14%"; // Default for mobile

  let width = window.innerWidth;
  if (width >= 428) {
    bgPosition = "center_31%";
  } else if (width >= 414) {
    bgPosition = "center_29%";
  } else if (width >= 390) {
    bgPosition = "center_23%";
  } else if (width >= 375) {
    bgPosition = "center_18%";
  }

  return (
    <div id='aboutSection' className="w-full h-fit">
      <div className="flex flex-col items-left justify-center max-w-[1100px] mx-auto px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
        <div className="grid grid-cols-7 items-center">
          <h1 className="col-span-7 text-[min(8vw,50px)] font-bold text-white mt-[10vh]">
            Hey There! I'm Dawson.
          </h1>
          <p className="col-span-7 md:col-span-4 text-[min(4.5vw,20px)] text-white/55 sm:mt-5">
            Texas based software engineer dedicated to helping small businesses build a stronger online presence and stand out in today's digital landscape.
          </p>
          <button onClick={() => handleClick('contactSection')} className="col-span-7 md:col-span-3 md:justify-self-end flex group w-fit h-fit bg-white/80 text-black px-4 py-2 mt-5 rounded-full text-[min(4vw,18px)] font-bold hover:bg-white cursor-pointer transition duration-200 ease-in-out">
            Start a Project 
            <img src="/arrow-black.svg" className="w-6 sm:w-8 pl-1 transform group-hover:translate-x-2 transition duration-200 ease-in-out"/>
          </button>
        </div>

        <div className="flex flex-row w-full items-center justify-left mt-10">
          <p className="text-sm sm:text-base text-white/55 w-24 sm:w-24">About Me</p>
          <hr className="w-full border-t-1 border-white/20 mt-4 mb-3"/>
        </div>

      
        {/****************** PROFESSIONAL BACKGROUND ********************/}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-7 gap-4 mt-10"
        >
          <div className="bg-gradient-to-b from-neutral-900 to-black/90 rounded-md border-white/20 border text-white group col-span-7 lg:col-span-5">
            <div className="group-hover:bg-gradient-to-tl from-sky-950/40 from-65% to-yellow-700/20 transition duration-500 p-6">
              <img src="/dawson.png" alt="" className="float-left w-24 sm:w-[20%] md:w-34 lg:w-[23%] px-[3%] pt-[1%] mr-5 rounded-md bg-neutral-800 group-hover:bg-gradient-to-br from-sky-950 to-yellow-700/30 group-hover:scale-110 transition duration-500" />
              <p className="text-[min(4.3vw,18px)] font-light leading-6 lg:leading-8 tracking-wide text-white/55 group-hover:text-white transition duration-500">I'm a Software Engineer passionate about building modern, user-focused websites and web applications. With a B.S. in Computer Science from Texas A&M University–Corpus Christi and a strong foundation in both business and technology, I craft digital solutions that not only look great but drive results. I thrive on taking on new challenges and helping businesses level up their online presence.</p>
            </div>
          </div>

          {/****************** SOCIALS ********************/}

          <div className="bg-gradient-to-b from-neutral-900 to-black/90 rounded-md border-white/20 border text-white col-span-7 sm:col-span-3 lg:col-span-2 group flex items-stretch overflow-hidden">
            <div className={`bg-[url(/hex.png)] group-hover:bg-[url(/hex2.png)] transition duration-500 size-[100%] bg-[120%_auto] sm:bg-cover bg-no-repeat sm:bg-center bg-[${bgPosition}]`}>
              <div className="flex flex-col justify-center p-5 max-sm:pt-20 h-full">
                <div className="h-48 sm:h-36 place-items-center">
                  {/* Facebook */}
                  <button className="-ml-[40%] sm:-ml-[63%] translate-y-5.75 sm:translate-y-10.5 hex-btn"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <a href="#" target="_blank"><img className="-rotate-30 w-12" src="/icon-fb.svg" /></a>
                  </button>
                  {/* GitHub */}
                  <button className="-mt-12 max-sm:-translate-y-11 max-sm:-mt-16 max-sm:mb-4 hex-btn"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <a href="https://github.com/Dawson-21" target="_blank"><img className="-rotate-30 w-12" src="/icon-github.svg" /></a>
                  </button> 
                  {/* Instagram */}
                  <button className="-mt-15 sm:-mt-12 ml-[40%] sm:ml-[62%] translate-y-0.5 sm:translate-y-10.5 hex-btn"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <a href="#" target="_blank"><img className="-rotate-30 w-10" src="/icon-insta.svg" /></a>
                  </button> 
                  {/* LinkedIn */}
                  <button className="-mt-1.75 translate-y-3 sm:translate-y-10.5 hex-btn"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <a href="https://www.linkedin.com/in/dawson-adams21/" target="_blank"><img className="-rotate-30 w-10" src="/icon-linkedin.svg" /></a>
                  </button>   
                </div>
                <div className="group-hover:-translate-x-2 duration-500 max-sm:pt-0">
                  <h2 className="text-xl font-bold">Reach Out</h2>
                  <p className="text-[min(4.3vw,14px)] font-light tracking-wide text-white/55 group-hover:text-white transition duration-500">Connect with me through my favorite platforms.</p>
                </div>
              </div>
            </div>
          </div>

          {/****************** TESTIMONIALS ********************/}

          <div className="bg-black rounded-md border-white/20 border text-white col-span-7 sm:col-span-4 lg:col-span-3 group hover:bg-gradient-to-br from-sky-950/40 from-25% to-yellow-700/15 transition duration-500 p-4 sm:pt-5">
            <h2 className="text-xl font-bold text-center">Real Feedback, Real Results</h2>
            <Carousel />
          </div>

          {/****************** TECH SKILLS ********************/}

          <div className="bg-black hover:bg-gradient-to-br from-sky-950/40 from-25% to-yellow-700/15 transition duration-500 rounded-md border-white/20 border text-white group col-span-7 lg:col-span-4 p-5 lg:text-[14px] text-base">
            <h2 className="text-center text-xl font-bold pb-5 sm:pb-8">Tech Skills</h2>
            <div className="h-fit flex flex-wrap justify-center items-center gap-2 group-hover:translate-x-4 transition duration-500">
              <div className="tech-item">
                <img src="/icon-react.svg" alt="React" className="h-8 -mx-1"/>
                React
              </div>
              <div className="tech-item">
                <img src="/icon-next.svg" alt="Next.js" className="h-7" />
                Next.js
              </div>
              <div className="tech-item">
                <img src="/icon-typescript.svg" alt="TypeScript" className="h-6" />
                TypeScript
              </div>
              <div className="tech-item">
                <img src="/icon-js.svg" alt="JavaScript" className="h-6" />
                JavaScript
              </div>
              <div className="tech-item">
                <img src="/icon-tailwind.svg" alt="Tailwind CSS" className="h-7" />
                Tailwind CSS
              </div>
            </div>
            <div className="h-fit flex flex-wrap justify-center items-center gap-2 mt-2 group-hover:-translate-x-4 transition duration-500">
              <div className="tech-item">
                <img src="/icon-vite.svg" alt="Vite" className="h-7"/>
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
            </div>
            <div className="h-fit flex flex-wrap justify-center items-center gap-2 mt-2 group-hover:translate-x-4 transition duration-500">
              <div className="tech-item">
                <img src="/icon-appwrite.svg" alt="Appwrite" className="h-5"/>
                Appwrite
              </div>
              <div className="tech-item">
                <img src="/icon-deep.svg" alt="DeepSource" className="h-6" />
                DeepSource
              </div>
              <div className="tech-item">
                <img src="/icon-wordpress.svg" alt="WordPress" className="h-7" />
                WordPress
              </div>
              <div className="tech-item">
                <img src="/framer.png" alt="Framer Motion" className="h-6" />
                Framer Motion
              </div>
            </div>
            <p className="text-sm text-center font-light pt-7 sm:pt-12 text-white/55 group-hover:text-white transition duration-500">I use this collection of tools and technologies to build exceptional digital experiences.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}