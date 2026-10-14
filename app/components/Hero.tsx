"use client";

import HexButton from "./HexButton";

export default function Hero() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="homeSection"
      className="relative min-h-[100svh] min-h-dvh w-full flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative z-10 text-center motion-safe:animate-hero-in">
        <img
          src="/Hero-logo2.webp"
          srcSet="/Hero-logo2-640.webp 640w, /Hero-logo2.webp 1238w"
          sizes="(min-width: 1536px) 25vw, (min-width: 1280px) 30vw, (min-width: 1024px) 35vw, (min-width: 768px) 45vw, (min-width: 640px) 55vw, 75vw"
          width={1238}
          height={875}
          fetchPriority="high"
          alt="Modern Dev Logo"
          className="w-[75vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw]"
        />

        <div className="flex justify-center pt-8 space-x-2 sm:space-x-5 md:space-x-10">
          <HexButton
            variant="secondary"
            onClick={() => handleClick("aboutSection")}
            className="px-5 text-[min(3vw,16px)] sm:px-7"
          >
            Learn More
          </HexButton>

          <HexButton
            variant="secondary"
            onClick={() => handleClick("projectsSection")}
            className="px-5 text-[min(3vw,16px)] sm:px-7"
          >
            View Featured Projects
          </HexButton>
        </div>
      </div>
    </section>
  );
}
