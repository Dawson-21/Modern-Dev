export default function Nav() {

  const home = document.getElementById('home');
  const about = document.getElementById('about');
  const projects = document.getElementById('projects');
  const services = document.getElementById('services');
  const contact = document.getElementById('contact');

  let startAbout = 0;
  if (window.innerWidth < 450)
    startAbout = 600;
  else 
    startAbout = 700;

  window.onscroll = () => {
    if (window.scrollY < startAbout)
      home?.classList.add('opacity-100');
    else
      home?.classList.remove('opacity-100');

    if (window.scrollY >= startAbout && window.scrollY < 1400)
      about?.classList.add('opacity-100');
    else
      about?.classList.remove('opacity-100');
    
    if (window.scrollY > 1400 && window.scrollY < 2100)
      projects?.classList.add('opacity-100');
    else
      projects?.classList.remove('opacity-100');
    
    if (window.scrollY > 2100 && window.scrollY < 2800)
      services?.classList.add('opacity-100');
    else
      services?.classList.remove('opacity-100');
    
    if (window.scrollY > 2800 && window.scrollY < 3500)
      contact?.classList.add('opacity-100');
    else
      contact?.classList.remove('opacity-100');
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="w-full h-fit fixed top-0 z-999">
      <div className="bg-black/70 backdrop-blur-lg text-white p-2 max-sm:px-4 sm:p-4 lg:px-9 mx-auto flex justify-center items-center w-fit mt-5 border-2 border-sky-950 rounded-full">
        <div className="container mx-auto flex justify-center items-center">
          <img src="/Header-Logo.png" alt="Modern Dev Logo" className="hidden sm:block sm:h-10 pr-1 sm:pr-7 cursor-pointer"/>
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