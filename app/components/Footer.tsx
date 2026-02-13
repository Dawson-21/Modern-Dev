"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const pageVariants: Variants = {
  rest: { opacity: 0.5, scale: 1 },
  hover: {
    opacity: 1,
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const githubIconVariants: Variants = {
  rest: { color: "rgb(115, 115, 115)" },
  hover: {
    scale: 1.05,
    color: "rgb(255, 255, 255)",
    transition: { duration: 0.2 },
  },
};

const facebookIconVariants: Variants = {
  rest: { color: "rgb(115, 115, 115)" },
  hover: { scale: 1.05, color: "#165ECB", transition: { duration: 0.2 } },
};

const instagramIconVariants: Variants = {
  rest: { color: "rgb(115, 115, 115)" },
  hover: { scale: 1.05, color: "#C1355A", transition: { duration: 0.2 } },
};

const linkedinIconVariants: Variants = {
  rest: { color: "rgb(115, 115, 115)" },
  hover: { scale: 1.05, color: "#004182", transition: { duration: 0.2 } },
};

function Footer() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-24 text-white flex flex-col gap-4 items-center justify-center py-20">
      <div className="flex gap-4">
        <motion.button
          onClick={() => handleClick("homeSection")}
          className="text-sm"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={pageVariants}
        >
          Home
        </motion.button>
        <motion.button
          onClick={() => handleClick("aboutSection")}
          className="text-sm"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={pageVariants}
        >
          About
        </motion.button>
        <motion.button
          onClick={() => handleClick("projectsSection")}
          className="text-sm"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={pageVariants}
        >
          Projects
        </motion.button>
        <motion.button
          onClick={() => handleClick("servicesSection")}
          className="text-sm"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={pageVariants}
        >
          Services
        </motion.button>
        <motion.button
          onClick={() => handleClick("contactSection")}
          className="text-sm"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={pageVariants}
        >
          Contact
        </motion.button>
      </div>
      <div className="flex gap-4">
        {/* GITHUB */}
        <motion.a
          href="https://github.com/Dawson-21"
          target="_blank"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={githubIconVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 .296C5.373.296 0 5.669 0 12.297c0 5.288 3.438 9.776 8.205 11.364.6.111.82-.26.82-.577 0-.285-.01-1.041-.016-2.045-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.238 1.839 1.238 1.07 1.833 2.809 1.303 3.495.997.107-.775.42-1.303.763-1.602-2.665-.304-5.467-1.334-5.467-5.932 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.047.137 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.244 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.479 5.921.43.37.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.216.694.825.576C20.565 22.07 24 17.582 24 12.297 24 5.669 18.627.296 12 .296Z"
            />
          </svg>
        </motion.a>
        {/* FACEBOOK */}
        <motion.a
          href="#"
          target="_blank"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={facebookIconVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 rounded-sm"
          >
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.767v2.317h3.594l-.468 3.622h-3.126V24h6.127C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
          </svg>
        </motion.a>
        {/* INSTAGRAM */}
        <motion.a
          href="#"
          target="_blank"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={instagramIconVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.356 3.608 1.332.976.975 1.27 2.242 1.332 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.356 2.633-1.332 3.608-.975.976-2.242 1.27-3.608 1.332-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.356-3.608-1.332-.976-.975-1.27-2.242-1.332-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.356-2.633 1.332-3.608.975-.976 2.242-1.27 3.608-1.332C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.73.13 4.387.417 3.3 1.504 2.213 2.591 1.926 3.934 1.868 5.256.809 6.535.796 6.945.796 12c0 5.055.013 5.465.072 6.744.058 1.322.345 2.665 1.432 3.752 1.087 1.087 2.43 1.374 3.752 1.432 1.279.059 1.689.072 6.744.072s5.465-.013 6.744-.072c1.322-.058 2.665-.345 3.752-1.432 1.087-1.087 1.374-2.43 1.432-3.752.059-1.279.072-1.689.072-6.744s-.013-5.465-.072-6.744c-.058-1.322-.345-2.665-1.432-3.752C20.665.417 19.322.13 18 .072 16.721.013 16.311 0 12 0z" />
            <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
            <circle cx="18.406" cy="5.594" r="1.44" />
          </svg>
        </motion.a>
        {/* LINKEDIN */}
        <motion.a
          href="https://www.linkedin.com/in/dawson-adams21/"
          target="_blank"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={linkedinIconVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.025-3.039-1.852-3.039-1.854 0-2.137 1.447-2.137 2.943v5.665H9.354V9h3.413v1.561h.048c.476-.898 1.637-1.846 3.367-1.846 3.598 0 4.262 2.368 4.262 5.448v6.289zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.911 20.452H3.762V9h3.149v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </motion.a>
      </div>
      <p className="text-sm opacity-55">
        © 2025 Modern Dev. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
