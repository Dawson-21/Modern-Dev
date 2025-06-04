import ProjectCard from "./ProjectCard"
function Projects() {
  return (
    <div id='projectsSection' className="w-full h-fit pb-10">
      <div className="flex flex-col items-left justify-center max-w-[1100px] mx-auto px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
        <div className="flex flex-row w-full items-center justify-left mt-10">
          <p className="text-sm sm:text-base text-white/55 w-44 sm:w-40">Featured Projects</p>
          <hr className="w-full border-t-1 border-white/15 mt-4 mb-3"/>
        </div>

        <div className="grid md:grid-cols-2 pt-10 gap-6 sm:gap-6 items-start justify-start">
          <ProjectCard
            title="Texas Gutter Service"
            scope="Website Design and Development"
            description="This project launched an online footprint for Texas Gutter Service, a newly established small business with previously limited digital presence. I designed a fresh, professional logo to establish their brand identity, then built a clean, mobile-responsive site that effectively showcases their gutter installation and maintenance services. The project included setting up essential pages, integrating contact forms for lead generation, and ensuring the site could be easily updated by the client. Together, the new branding and website provided a strong digital foundation, which gave the business credibility and helped attract new customers in their local service area."
            problem="Texas Gutter Service was a new small business with no digital presence, making it hard for customers to find or contact them."
            solution="I built a responsive WordPress site from scratch tailored to their services, with easy navigation, modern branding, and a lead-generation contact form. I also designed a professional logo to establish their brand identity and give them a more polished look."
            results="The new branding and website gave the business credibility and visibility, leading to an increase in inquiries and a steady stream of new local customers."
            technologies={["WordPress", "CSS3", "HTML5", "WPForms"]}
            imageUrl="/TGS.png"
            imageAlt="Texas Gutter Service Website Screenshot"
            siteUrl="https://texasgutterservice.com"
          />

          <ProjectCard
            title="Project Name"
            scope="Description of project"
            description="Short description of the project goes here. It can be a brief overview of the project's purpose, features, and technologies used."
            problem="Briefly describe the problem this project addresses."
            solution="Briefly describe the solution implemented in this project."
            results="Briefly describe the results achieved by this project."
            technologies={["React", "Tailwind CSS", "JavaScript"]}
            imageUrl="/project-image.jpg"
            imageAlt="Project Screenshot"
          />

          <ProjectCard
            title="Details Carpet & Tile care"
            scope="Website Design and Development"
            description="This was the very first website I built for a real business, and while it doesn’t reflect the full range of my current abilities, it played an important role in my growth as a developer. I designed and developed a one-page responsive site for a Las Vegas carpet cleaning service to establish their online presence and make booking easy for their customers. Instead of a traditional contact form, I integrated a calendar scheduling tool so clients could directly set up service appointments. Looking back, there are many improvements I would make today, but this early project taught me valuable lessons about working with real clients, launching live websites, and building practical user-focused solutions."
            problem="Details Carpet & Tile Care needed a professional online presence to attract new customers and facilitate easy booking."
            solution="I created a simple, user-friendly website that showcased their services and included a calendar for scheduling appointments."
            results="The website helped increase customer inquiries and made it easier for clients to book services."
            technologies={["WordPress", "Elementor", "CSS3"]}
            imageUrl="/DCTC.png"
            imageAlt="Project Screenshot"
            siteUrl="https://detailscarpetandtilecare.com"
          />

          <ProjectCard
            title="Project Name"
            scope="Description of project"
            description="Short description of the project goes here. It can be a brief overview of the project's purpose, features, and technologies used."
            problem="Briefly describe the problem this project addresses."
            solution="Briefly describe the solution implemented in this project."
            results="Briefly describe the results achieved by this project."
            technologies={["React", "Tailwind CSS", "JavaScript"]}
            imageUrl="/project-image.jpg"
            imageAlt="Project Screenshot"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects