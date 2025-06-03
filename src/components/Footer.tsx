import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

function Footer() {

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="w-full h-24 text-white/55 flex flex-col gap-4 items-center justify-center py-20">
      <div className="flex gap-4">
        <button onClick={() => handleClick('aboutSection')} className="text-sm">About</button>
        <button onClick={() => handleClick('projectsSection')} className="text-sm">Projects</button>
        <button onClick={() => handleClick('servicesSection')} className="text-sm">Services</button>
        <button onClick={() => handleClick('contactSection')} className="text-sm">Contact</button>
      </div>
      <div className="flex gap-4">
        <a href="#" target="_blank"><img src="/icon-github-white.svg" alt="" className="w-8" /></a>
        <a href="#" target="_blank"><img src="/icon-fb-white.svg" alt="" className="w-8" /></a>
        <a href="#" target="_blank"><img src="/icon-insta-white.svg" alt="" className="w-7.75" /></a>
        <a href="#" target="_blank"><img src="/icon-linkedin-white.svg" alt="" className="w-8" /></a>
      </div>
      <p className="text-sm">© 2025 Modern Dev. All rights reserved.</p>
    </div>
  )
}

export default Footer