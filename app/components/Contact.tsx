"use client";

import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contactSection" aria-labelledby="contact-heading" className="w-full h-fit">
      <div className="flex flex-col items-left justify-center max-w-[1100px] mx-auto px-[10px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
        <div className="flex flex-row w-full items-center justify-left mt-20">
          <h2 id="contact-heading" className="text-sm sm:text-base text-white/70 w-18">
            Contact
          </h2>
          <hr className="w-full border-t-1 border-white/15 mt-4 mb-3" />
        </div>

        <div className="py-10 mb-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
