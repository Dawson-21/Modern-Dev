"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

const iconVariants: Variants = {
  rest: { opacity: 0.6, scale: 1 },
  hover: {
    opacity: 1,
    scale: 1.1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const labelVariants: Variants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } },
};

const navItems = [
  {
    id: "homeSection",
    key: "home",
    label: "Home",
    icon: "/home-icon-white.svg",
    iconClass: "w-8 -mt-1",
    itemClass: "sm:-mr-4",
    labelClass: "translate-y-8 -mt-6 max-sm:-mx-5",
  },
  {
    id: "aboutSection",
    key: "about",
    label: "About",
    icon: "/about-icon-white.svg",
    iconClass: "w-6",
    itemClass: "sm:-mx-4",
    labelClass: "translate-y-8 -mt-5 max-sm:-mx-5",
  },
  {
    id: "projectsSection",
    key: "projects",
    label: "Projects",
    icon: "/projects-icon-white.svg",
    iconClass: "w-6",
    itemClass: "sm:-mx-6",
    labelClass: "translate-y-8 -mt-5 max-sm:-mx-5",
  },
  {
    id: "servicesSection",
    key: "services",
    label: "Services",
    icon: "/services-icon.svg",
    iconClass: "w-6",
    itemClass: "sm:-mx-6",
    labelClass: "translate-y-8 -mt-5 max-sm:-mx-5",
  },
  {
    id: "contactSection",
    key: "contact",
    label: "Contact",
    icon: "/contact-icon-white.svg",
    iconClass: "w-6",
    itemClass: "sm:-ml-6",
    labelClass: "translate-y-8 -mt-5 max-sm:-mx-5",
  },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveNav = () => {
      const y = window.scrollY;
      let startAbout = 645;
      let startProjects = 1640;
      let startServices = 2700;
      let startContact = 4760;

      if (window.innerWidth < 440) {
        startAbout = 600;
        startProjects = 2600;
        startServices = 4300;
        startContact = 8000;
      }

      if (y < startAbout) setActiveSection("home");
      else if (y < startProjects) setActiveSection("about");
      else if (y < startServices) setActiveSection("projects");
      else if (y < startContact) setActiveSection("services");
      else setActiveSection("contact");
    };

    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveNav);
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 z-999 h-fit w-full" aria-label="Primary">
      <div className="mx-auto mt-5 flex w-fit items-center justify-center rounded-full border-2 border-sky-950 bg-black/70 p-2 text-white backdrop-blur-lg max-sm:px-4 sm:p-2 lg:px-5">
        <div className="container mx-auto flex items-center justify-center">
          <button
            type="button"
            onClick={() => handleClick("homeSection")}
            className="hidden cursor-pointer rounded-md pr-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:block sm:pr-7"
            aria-label="Go to home section"
          >
            <img src="/Header-Logo.png" alt="Modern Dev" className="sm:h-10" />
          </button>

          <ul className="flex items-center space-x-2 text-lg font-[Helvetica] font-semibold sm:space-x-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.key;

              return (
                <li key={item.key}>
                  <motion.div
                    className={`flex flex-col items-center ${item.itemClass}`}
                    initial="rest"
                    whileHover="hover"
                    whileFocus="hover"
                    animate="rest"
                  >
                    <motion.button
                      type="button"
                      onClick={() => handleClick(item.id)}
                      variants={iconVariants}
                      className={`cursor-pointer rounded-md p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${isActive ? "opacity-100" : "opacity-55"}`}
                      aria-label={`Go to ${item.label} section`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        className={`${item.iconClass}`}
                      />
                    </motion.button>
                    <motion.div
                      variants={labelVariants}
                      className={`pointer-events-none block w-fit rounded-md bg-black px-2 text-sm text-gray-200 ${item.labelClass}`}
                    >
                      {item.label}
                    </motion.div>
                  </motion.div>
                </li>
              );
            })}

            <li>
              <motion.button
                type="button"
                onClick={() => handleClick("contactSection")}
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="ml-6 hidden cursor-pointer rounded-full bg-white/80 px-2 py-2 text-[12px] text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:block sm:px-5 sm:text-sm"
              >
                Free Quote
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
