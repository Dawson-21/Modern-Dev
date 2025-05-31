import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";


type Testimonial = {
  name: string;
  role?: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jordan M.",
    role: "Small Business Owner",
    quote:
      "Working with Dawson was seamless from start to finish. He brought our vision to life with a modern, responsive website that exceeded our expectations.",
  },
  {
    name: "Taylor R.",
    role: "Marketing Director",
    quote:
      "The professionalism and attention to detail were outstanding. Our site looks and performs better than ever!",
  },
  {
    name: "Alex G.",
    role: "Startup Founder",
    quote:
      "Dawson understood our needs right away and delivered exactly what we wanted — on time and beyond expectations.",
  },
  {
    name: "Morgan S.",
    role: "E-commerce Business Owner",
    quote:
      "The website Dawson built for my shop has completely transformed how I engage with customers. He understood my goals and built a solution that works perfectly.",
  },
  {
    name: "Casey L.",
    role: "Freelance Photographer",
    quote:
      "Dawson delivered a sleek, responsive portfolio site that perfectly captured my style. The whole process was smooth, and I couldn’t be happier.",
  },
  {
    name: "Sam T.",
    role: "Nonprofit Coordinator",
    quote:
      "From the initial consult to launch, Dawson was professional, attentive, and full of great ideas. Our new site is modern, easy to use, and exactly what we needed.",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;
  const [isHovering, setIsHovering] = useState(false);


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Autoplay: advance every 5 seconds
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, total]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });



  return (
    <div className="w-full">
      <div className="relative px-6 py-3 transition duration-500 h-52 sm:h-52 lg:h-52 justify-center items-center" 
      {...handlers}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex flex-col justify-between">
          <p className="text-lg text-white/55 group-hover:text-white transition duration-500 italic">
            “{testimonials[currentIndex].quote}”
          </p>
          
          <div className="text-right">
            <p className="font-semibold text-white">
              — {testimonials[currentIndex].name}
            </p>
            {testimonials[currentIndex].role && (
              <p className="text-sm text-white/55">{testimonials[currentIndex].role}</p>
            )}
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevSlide}
            className="text-white/55 text-3xl h-full rounded-sm hover:text-white hover:bg-white/10 px-1 transition"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextSlide}
            className="text-white/55 text-3xl h-full rounded-sm hover:text-white hover:bg-white/10 px-1 transition"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full transition ${
              idx === currentIndex ? "bg-white" : "bg-white/35"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
