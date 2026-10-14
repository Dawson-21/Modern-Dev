"use client";

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

type Testimonial = {
  name: string;
  role?: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Canyon P.",
    role: "Small Business Owner",
    quote:
      "I recently hired Dawson to build my website, and he did an outstanding job. His professionalism, creativity, and technical skills resulted in a sleek, user-friendly site that perfectly captures my brand. He communicated clearly throughout the process and delivered on time. I highly recommend Dawson for anyone needing a top-notch web developer!",
  },
  {
    name: "Cameron R.",
    role: "Small Business Owner",
    quote:
      "Working with Dawson was a seamless experience from start to finish. He transformed our vague ideas into a fast, visually stunning website that perfectly represents our business. His attention to detail and technical skill are truly next-level.",
  },
  {
    name: "Troy K.",
    role: "Small Business Owner",
    quote:
      "Dawson exceeded every expectation. Our new website not only looks incredible but performs flawlessly on every device. He was responsive, knowledgeable, and clearly passionate about his craft, an absolute professional who genuinely cares about the end result.",
  },
  {
    name: "Brian A.",
    role: "Small Business Owner",
    quote:
      "Dawson designed our company logo here in Washington, and it completely elevated our brand. He captured our pool and spa aesthetic with a clean, modern look that customers instantly recognize. The result was professional, timeless, and exactly what we envisioned.",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;
  const [isHovering, setIsHovering] = useState(false);

  const quoteSize = (quote: string) => {
    const length = quote.length;
    if (length < 120) return "text-[20px]";
    if (length < 200) return "text-[19px]";
    if (length < 240) return "text-[17px]";
    if (length < 280) return "text-[16px]";
    if (length < 320) return "text-[14px]";
    return "text-[15px]";
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, total]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      className="w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div
        className="relative items-center justify-center px-6 py-3"
        {...handlers}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Every slide shares one grid cell, so the container is always as tall
            as the longest testimonial and swapping slides never shifts the page. */}
        <div className="grid" aria-live="polite">
          {testimonials.map((testimonial, idx) => {
            const isActive = idx === currentIndex;

            return (
              <div
                key={testimonial.name}
                className={`col-start-1 row-start-1 flex flex-col justify-center transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "invisible opacity-0"
                }`}
              >
                <p className={`${quoteSize(testimonial.quote)} italic text-white/70`}>
                  {`"${testimonial.quote}"`}
                </p>

                <div className="text-right">
                  <p className="font-semibold text-white">- {testimonial.name}</p>
                  {testimonial.role && (
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            type="button"
            onClick={prevSlide}
            className="h-full rounded-sm px-1 text-3xl text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            aria-label="Previous testimonial"
          >
            {"‹"}
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="button"
            onClick={nextSlide}
            className="h-full rounded-sm px-1 text-3xl text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            aria-label="Next testimonial"
          >
            {"›"}
          </button>
        </div>
      </div>

      <div
        className="flex justify-center"
        role="group"
        aria-label="Testimonial slides"
      >
        {testimonials.map((testimonial, idx) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className="group flex h-6 w-6 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            aria-label={`Go to testimonial ${idx + 1}`}
            aria-current={idx === currentIndex ? "true" : undefined}
          >
            <span
              className={`h-2 w-2 rounded-full transition group-hover:bg-white ${
                idx === currentIndex ? "bg-white" : "bg-white/35"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
