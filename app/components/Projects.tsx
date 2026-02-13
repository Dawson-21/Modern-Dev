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
              title="Texas Gutter Service"
              scope="Frontend Web Development"
              shortDescription="This project launched an online footprint for Texas Gutter Service, a new small business with limited digital presence. I designed a professional logo to establish their brand identity and built a clean, mobile-responsive site showcasing their gutter services. The work included setting up key pages, adding lead-generation forms, and making the site easy for the client to update. The new branding and website gave the business..."
              longDescription="This project launched an online footprint for Texas Gutter Service, a new small business with limited digital presence. I designed a professional logo to establish their brand identity and built a clean, mobile-responsive site showcasing their gutter services. The work included setting up key pages, adding lead-generation forms, and making the site easy for the client to update. The new branding and website gave the business credibility and helped attract local customers."
              problem="Texas Gutter Service was a new small business with no website, making it hard for customers to find or contact them."
              solution="I built a responsive WordPress site tailored to their services, with easy navigation, modern branding, and a lead-generation contact form. I also designed a professional logo to establish their brand identity and give them a more polished look."
              results="The new branding and website gave the business credibility and visibility, leading to an increase in inquiries and a steady stream of new local customers."
              technologies={["WordPress", "CSS3", "HTML5", "WPForms"]}
              imageUrl="/TGS.png"
              imageAlt="Texas Gutter Service Website Screenshot"
              siteUrl="https://texasgutterservice.com"
            />
          </motion.div>

          <motion.div
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard
              title="Details Carpet & Tile Care"
              scope="Frontend Web Development"
              shortDescription="This was the very first website I built for a real business, and while it doesn’t reflect the full range of my current abilities, it played an important role in my growth as a developer. I designed and developed a one-page responsive site for a Las Vegas carpet cleaning service to establish their online presence and make booking easy for their customers. Instead of a traditional contact form, I integrated a calendar scheduling tool so clients could directly set up..."
              longDescription="This was the very first website I built for a real business, and while it doesn’t reflect the full range of my current abilities, it played an important role in my growth as a developer. I designed and developed a one-page responsive site for a Las Vegas carpet cleaning service to establish their online presence and make booking easy for their customers. Instead of a traditional contact form, I integrated a calendar scheduling tool so clients could directly set up service appointments. Looking back, there are many improvements I would make today, but this early project taught me valuable lessons about working with real clients, launching live websites, and building practical user-focused solutions."
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
              shortDescription="I built a WordPress website for CNC Garage Doors, a brand-new company in need of a strong online presence. The site includes a clean gallery to showcase their work, a contact form powered by WPForms, and content optimized using the latest SEO strategies. I designed the layout to be mobile-responsive, easy to navigate, and simple for the client to update. This professional web presence helped the business make..."
              longDescription="I built a WordPress website for CNC Garage Doors, a brand-new company in need of a strong digital presence. The site includes a clean gallery to showcase their work, a contact form powered by WPForms, and content optimized using the latest SEO strategies. I designed the layout to be mobile-responsive, easy to navigate, and simple for the client to update. This professional web presence helped the business make a confident entrance into the local market."
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
