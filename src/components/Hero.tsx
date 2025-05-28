
export default function Hero() {

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="fixed top-0 -z-999 w-full h-screen bg-[url(/hero-bg.jpg)] bg-center bg-no-repeat bg-cover bg-fixed">
        <div className="w-full h-screen bg-gradient-to-tr from-blue-950/60 via-black/60 to-yellow-900/60"></div>
      </div>
      <div id='homeSection' className="mr-auto place-self-center items-center flex flex-col justify-center pt-44 md:pt-56">

        <img src="Hero-logo2.png" alt="Modern Dev Logo" className="w-[75vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw]"/>

        <div className="flex flex-row pt-8 space-x-2 sm:space-x-5 md:space-x-10">
          <button onClick={() => handleClick('aboutSection')} className="bg-white/80 text-black px-3 sm:px-5 py-2 rounded-full text-[min(2.75vw,16px)] font-bold hover:bg-white cursor-pointer transform hover:scale-[1.15] transition duration-200 ease-in-out">Learn More</button>
        
          <button onClick={() => handleClick('projectsSection')} className="bg-sky-950/90 border-2 border-white/80 text-white px-3 sm:px-5 py-2 rounded-full text-[min(2.75vw,16px)] font-bold hover:bg-white hover:text-black cursor-pointer transform hover:scale-[1.15] transition duration-200 ease-in-out">View Recent Projects</button>
        </div>
      </div>
    </>
  );
}