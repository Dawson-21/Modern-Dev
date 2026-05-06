"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div id="projectsSection" className="w-full h-fit">
      <div className="flex flex-col items-left justify-center max-w-275 mx-auto px-3.75 sm:px-7.5 md:px-10 lg:px-12.5">
        <div className="flex flex-row w-full items-center justify-left mt-20">
          <p className="text-sm sm:text-base text-white/55 w-44 sm:w-40">
            Featured Projects
          </p>
          <hr className="w-full border-t border-white/15 mt-4 mb-3" />
        </div>

        <div className="grid md:grid-cols-2 pt-10 gap-6 sm:gap-6 items-start justify-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard
              title="Waldrops Furniture"
              scope="Frontend Web Development"
              shortDescription="A complete redesign of a fragmented furniture website into a cohesive, modern experience focused on simplicity, clarity, and conversion. The result is a polished, intuitive platform that enhances brand credibility and guides users seamlessly from browsing to inquiry."
              longDescription="A fully reimagined furniture retail website built to replace an incomplete, fragmented online presence with a cohesive, high-converting experience. The site emphasizes clean visual hierarchy, intuitive navigation, and a refined modern-rustic aesthetic aligned with the brand. Custom layouts, optimized galleries, and thoughtful micro-interactions were implemented to guide users effortlessly from browsing to inquiry, while maintaining performance, responsiveness, and scalability across devices."
              problem="An unfinished, inconsistent website created confusion, weakened brand credibility, and disrupted the customer journey."
              solution="Redesigned the site from the ground up with a simplified UX, cohesive styling, optimized media handling, and clear conversion pathways."
              results="A polished, user-friendly website that strengthens brand trust, improves engagement, and delivers a seamless browsing experience that supports real business growth."
              technologies={[
                "WordPress",
                "Spectra",
                "CSS3",
                "HTML5",
                "WPForms",
              ]}
              imageUrl="/WF1.png"
              imageAlt="Waldrops Furniture Website Screenshot"
              siteUrl="https://waldropsfurniture.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard
              title="Texas Gutter Service"
              scope="Frontend Web Development"
              shortDescription="A cohesive brand and website system built to establish credibility and attract local customers. Designed for clarity, lead generation, and ease of use."
              longDescription="A complete digital foundation created for a growing service-based business with minimal online presence. The project included logo design to establish brand identity and a clean, responsive website to showcase services and capture leads. Thoughtful layout structure, intuitive navigation, and easy-to-manage content were prioritized to ensure both credibility and long-term usability."
              problem="Texas Gutter Service was a new small business with no website, making it hard for customers to find or contact them."
              solution="I built a responsive WordPress site tailored to their services, with easy navigation, modern branding, and a lead-generation contact form. I also designed a professional logo to establish their brand identity and give them a more polished look."
              results="The new branding and website gave the business credibility and visibility, leading to an increase in inquiries and a steady stream of new local customers."
              technologies={["WordPress", "CSS3", "HTML5", "WPForms"]}
              imageUrl="/TGS.png"
              imageAlt="Texas Gutter Service Website Screenshot"
              siteUrl="https://texasgutterservice.com"
            />
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard
              title="Clayton Demolition"
              scope="Frontend Web Development"
              shortDescription="This project involved creating a modern, responsive website for Clayton Demolition, a small business specializing in demolition services. The site was designed to be user-friendly and visually appealing, with a focus on showcasing their services and past projects. I implemented a clean layout, integrated a contact form for inquiries, and optimized the site for..."
              longDescription="This project involved creating a modern, responsive website for Clayton Demolition, a small business specializing in demolition services. The site was designed to be user-friendly and visually appealing, with a focus on showcasing their services and past projects. I implemented a clean layout, integrated a contact form for inquiries, and optimized the site for search engines to help them reach more potential clients."
              problem="Clayton Demolition needed a professional online presence to attract new clients and showcase their services."
              solution="I built a modern, responsive website that highlights their services and past projects, making it easy for potential clients to get in touch."
              results="The new website helped Clayton Demolition attract more clients and establish a strong online presence."
              technologies={["WordPress", "CSS3", "HTML5", "WPForms"]}
              imageUrl="/CD.png"
              imageAlt="Project Screenshot"
              siteUrl="https://claytondemolition.com"
            />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard
              title="Details Carpet & Tile Care"
              scope="Frontend Web Development"
              shortDescription="A streamlined one-page site built to simplify scheduling and establish an online presence. A practical, user-focused solution that laid the groundwork for future development growth."
              longDescription="A foundational project focused on creating a simple, effective online presence for a local carpet cleaning service. The one-page responsive site was designed to streamline the booking process through direct calendar scheduling, reducing friction for users. While minimal in scope, the project emphasized practical functionality and real-world application, serving as an early step in developing user-focused design and client-based problem solving."
              problem="Details Carpet & Tile Care needed a professional online presence to attract new customers and facilitate easy booking."
              solution="I created a simple, user-friendly website that showcased their services and included a calendar for scheduling appointments."
              results="The website helped increase customer inquiries and made it easier for clients to book services."
              technologies={["WordPress", "Elementor", "CSS3"]}
              imageUrl="/DCTC.png"
              imageAlt="Project Screenshot"
              siteUrl="https://detailscarpetandtilecare.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard
              title="CNC Garage Doors"
              scope="Frontend Web Development"
              shortDescription="A clean, mobile-responsive WordPress site designed to establish a strong first impression and drive customer inquiries. Built for simplicity, visibility, and long-term usability."
              longDescription="A custom WordPress website developed for a new garage door company seeking a strong, professional entry into the market. The site features a clean, image-focused gallery, streamlined navigation, and a user-friendly contact system powered by WPForms. Built with mobile responsiveness and SEO best practices in mind, the structure allows for easy client-side updates while maintaining a polished, conversion-focused experience."
              problem="CNC Garage Doors needed a professional website to establish their brand and attract customers."
              solution="I created a visually appealing and user-friendly website that effectively showcased their services and included a contact form for inquiries."
              results="The website helped CNC Garage Doors gain visibility and attract new clients in their local area."
              technologies={["WordPress", "CSS3", "HTML5", "WPForms"]}
              imageUrl="/CNC1.png"
              imageAlt="Project Screenshot"
              siteUrl="https://cncgaragedoors.com"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
