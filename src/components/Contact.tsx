import ContactForm from "./ContactForm"

function Contact() {
  return (
    <div id='contactSection' className="w-full h-fit">
      <div className="flex flex-col items-left justify-center max-w-[1100px] mx-auto px-[10px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
          <div className="flex flex-row w-full items-center justify-left mt-20">
            <p className="text-sm sm:text-base text-white/55 w-18">Contact</p>
            <hr className="w-full border-t-1 border-white/15 mt-4 mb-3"/>
          </div>

        <section id="contactSection" className="py-10 mb-10">
          <ContactForm />
        </section>

      </div>
    </div>
  )
}

export default Contact