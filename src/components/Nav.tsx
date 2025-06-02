import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const services = document.getElementById("services");
    const contact = document.getElementById("contact");

    const updateActiveNav = () => {
      const y = window.scrollY;
      let startAbout = 700;
      let startProjects = 1800;
      let startServices = 2700;
      let startContact = 3700;

      if (window.innerWidth < 440) {
        startAbout = 600;
        startProjects = 2200;
        startServices = 3000;
        startContact = 3700;
      }

      home?.classList.toggle("opacity-100", y < startAbout);
      about?.classList.toggle("opacity-100", y >= startAbout && y < startProjects);
      projects?.classList.toggle("opacity-100", y >= startProjects && y < startServices);
      services?.classList.toggle("opacity-100", y >= startServices && y < startContact);
      contact?.classList.toggle("opacity-100", y >= startContact);
    };

    // Run once on mount
    updateActiveNav();

    // Attach scroll listener
    window.addEventListener("scroll", updateActiveNav);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", updateActiveNav);
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="w-full h-fit fixed top-0 z-999">
      <div className="bg-black/70 backdrop-blur-lg text-white p-2 max-sm:px-4 sm:p-4 lg:px-9 mx-auto flex justify-center items-center w-fit mt-5 border-2 border-sky-900 rounded-full">
        <div className="container mx-auto flex justify-center items-center">
          <img src="/Header-Logo.png" alt="Modern Dev Logo" onClick={() => handleClick('homeSection')} className="hidden sm:block sm:h-10 pr-1 sm:pr-7 cursor-pointer"/>
          <ul className="flex space-x-2 sm:space-x-4 text-lg font-[Helvetica] font-semibold items-center">
            <li>
              <div className="flex flex-col items-center group sm:-mr-4">   
                <img id='home' src="home-icon-white.svg" alt="Home" onClick={() => handleClick('homeSection')} className="w-8 nav-icon"/>
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 hover:opacity-0 cursor-default rounded-md w-fit h-fit bg-sky-950 text-gray-200 text-sm translate-y-11 -mt-5 px-2">Home</div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center group sm:-mx-4">   
                <img id='about' src="about-icon-white.svg" alt="About" onClick={() => handleClick('aboutSection')} className="w-6 nav-icon"/>
                <div className="nav-label">About</div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center group sm:-mx-6">   
                <img id='projects' src="projects-icon-white.svg" alt="Projects" onClick={() => handleClick('projectsSection')} className="w-6 nav-icon"/>
                <div className="nav-label">Projects</div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center group sm:-mx-6">   
                <img id='services' src="services-icon.svg" alt="Services" onClick={() => handleClick('servicesSection')} className="w-6 nav-icon"/>
                <div className="nav-label">Services</div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center group sm:-ml-6">   
                <img id='contact' src="contact-icon-white.svg" alt="Contact" onClick={() => handleClick('contactSection')} className="w-6 nav-icon"/>
                <div className="nav-label">Contact</div>
              </div>
            </li>
            <li>
              <button onClick={() => handleClick('contactSection')} className="bg-white/80 text-black hidden sm:block ml-6 px-2 sm:px-5 py-2 rounded-full text-[12px] sm:text-sm hover:bg-white cursor-pointer transform hover:scale-[1.15] transition duration-200 ease-in-out">Free Quote</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}