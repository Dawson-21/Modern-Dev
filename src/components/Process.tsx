import { Users, LineChart, PenTool, Code2, Bug, Rocket, Wrench } from 'lucide-react'

function Process() {
  return (
    <div id="servicesSection" className="w-full h-fit">
      <div className="flex flex-col items-left justify-center max-w-[1100px] mx-auto px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
        <div className="flex flex-row w-full items-center justify-left mb-10 mt-20">
          <p className="text-sm sm:text-base text-white/55 w-26">The Process</p>
          <hr className="w-full border-t-1 border-white/15 mt-4 mb-3" />
        </div>

        <div className="flex flex-col items-left justify-center text-white gap-5">
          <div className="w-full bg-black border-white/20 border p-4 rounded-lg">
            <div className="flex gap-3">
              <Users className="text-sky-400" size={24} />
              <p className="text-lg">Stakeholder Consultation</p>
            </div>
            <p className="text-white/55">Engaging with key stakeholders to understand their vision, goals, and requirements for the project.</p>
          </div>
          <div className="w-full bg-black border-white/20 border p-4 rounded-lg">
            <div className="flex gap-3">
              <LineChart className="text-sky-400" size={24} />
              <p className="text-lg">Market Analysis</p>
            </div>
            <p className="text-white/55">Conducting thorough market research to identify trends, opportunities, and potential challenges that may impact the project.</p>
          </div>
          <div className="w-full bg-black border-white/20 border p-4 rounded-lg">
            <div className="flex gap-3">
              <PenTool className="text-sky-400" size={24} />
              <p className="text-lg">Design and Prototyping</p>
            </div>
            <p className="text-white/55">Creating wireframes and prototypes to visualize the user experience and gather feedback from stakeholders.</p>
          </div>
          <div className="w-full bg-black border-white/20 border p-4 rounded-lg">
            <div className="flex gap-3">
              <Code2 className="text-sky-400" size={24} />
            <p className="text-lg">Development</p>
            </div>
            <p className="text-white/55">Building the actual product based on the approved designs and prototypes.</p>
          </div>
          <div className="w-full bg-black border-white/20 border p-4 rounded-lg">
            <div className="flex gap-3">
              <Bug className="text-sky-400" size={24} />
              <p className="text-lg">Testing and Quality Assurance</p>
            </div>
            <p className="text-white/55">Rigorously testing the product to ensure it meets quality standards and functions as intended.</p>
          </div>
          <div className="w-full bg-black border-white/20 border p-4 rounded-lg">
            <div className="flex gap-3">
              <Rocket className="text-sky-400" size={24} />
              <p className="text-lg">Deployment</p>
            </div>
            <p className="text-white/55">Deploying the product to the production environment and ensuring it is ready for use by end-users.</p>
          </div>
          <div className="w-full bg-black border-white/20 border p-4 rounded-lg">
            <div className="flex gap-3">
              <Wrench className="text-sky-400" size={24} />
              <p className="text-lg">Post-Launch Support</p>
            </div>
            <p className="text-white/55">Providing ongoing support and maintenance to ensure the product continues to meet user needs and adapts to any changes in the market.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process