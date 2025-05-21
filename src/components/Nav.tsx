export default function Nav() {
  return (
    <nav className="w-full h-fit fixed top-0 z-999">
      <div className="bg-black/70 backdrop-blur-lg text-white p-2 sm:p-4 lg:px-9 mx-auto flex justify-center items-center w-fit mt-5 border-2 border-sky-950 rounded-full">
        <div className="container mx-auto flex justify-center items-center">
          <img src="/Header-Logo.png" alt="Modern Dev Logo" className="h-8 sm:h-10 pr-1 sm:pr-7"/>
          <ul className="flex space-x-2 sm:space-x-4 text-lg font-[Helvetica] font-semibold items-center">
            <li>
              <div className="flex flex-col items-center group sm:-mr-4">   
                <a href="/"><img src="home-icon-white.svg" alt="Home" className="w-8 opacity-70 hover:opacity-100 transform hover:scale-[1.45] transition duration-200 ease-in-out"/></a>
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 hover:opacity-0 cursor-default rounded-md w-fit h-fit bg-sky-950 text-gray-200 text-sm translate-y-11 -mt-5 px-2">Home</div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center group sm:-mx-4">   
                <a href="/about"><img src="about-icon-white.svg" alt="About" className="w-6 opacity-70 hover:opacity-100 transform hover:scale-[1.45] transition duration-200 ease-in-out"/></a>
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 hover:opacity-0 cursor-default rounded-md w-fit h-fit bg-sky-950 text-gray-200 text-sm translate-y-12 -mt-5 px-2">About</div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center group sm:-mx-6">   
                <a href="/projects"><img src="projects-icon-white.svg" alt="Projects" className="w-6 opacity-70 hover:opacity-100 transform hover:scale-[1.45] transition duration-200 ease-in-out"/></a>
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 hover:opacity-0 cursor-default rounded-md w-fit h-fit bg-sky-950 text-gray-200 text-sm translate-y-12 -mt-5 px-2">Projects</div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center group sm:-mx-6">   
                <a href="/services"><img src="services-icon.svg" alt="Services" className="w-6 opacity-70 hover:opacity-100 transform hover:scale-[1.45] transition duration-200 ease-in-out"/></a>
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 hover:opacity-0 cursor-default rounded-md w-fit h-fit bg-sky-950 text-gray-200 text-sm translate-y-12 -mt-5 px-2">Services</div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center group sm:-ml-6">   
                <a href="/contact"><img src="contact-icon-white.svg" alt="Contact" className="w-6 opacity-70 hover:opacity-100 transform hover:scale-[1.45] transition duration-200 ease-in-out"/></a>
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 hover:opacity-0 cursor-default rounded-md w-fit h-fit bg-sky-950 text-gray-200 text-sm translate-y-12 -mt-5 px-2">Contact</div>
              </div>
            </li>
            <li>
              <button className="bg-white/80 text-black hidden sm:block ml-6 px-2 sm:px-5 py-2 rounded-full text-[12px] sm:text-sm hover:bg-white transform hover:scale-[1.15] transition duration-200 ease-in-out">Free Quote</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}