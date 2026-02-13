"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type ServiceType = "newWebsite" | "redesign" | "logoBranding" | "notSure";

const serviceOptions: Array<{ label: string; value: ServiceType }> = [
  { label: "New Website", value: "newWebsite" },
  { label: "Redesign", value: "redesign" },
  { label: "Logo & Branding", value: "logoBranding" },
  { label: "Not Sure, Let's Chat!", value: "notSure" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "" as ServiceType | "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getServiceLabel = (value: ServiceType | "") => {
    return serviceOptions.find((option) => option.value === value)?.label || "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceType: getServiceLabel(formData.serviceType),
        }),
      });

      if (res.ok) {
        setStatusMessage("Message sent successfully.");
        setFormData({ name: "", email: "", serviceType: "", message: "" });
      } else {
        setStatusMessage("Failed to send message. Please try again later.");
      }
    } catch {
      setStatusMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto w-full max-w-2xl rounded-lg border border-white/20 bg-black p-6 backdrop-blur-md"
    >
      <h2 className="mb-4 text-center text-2xl font-semibold text-white">
        Let&apos;s Build Something Great
      </h2>
      <p className="mb-4 px-5 text-center text-white/70 md:px-10">
        Tell me about your project and what you are looking to achieve. I will
        review the details and get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-white">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            autoComplete="name"
            className="w-full rounded-lg bg-neutral-800 p-3 text-white placeholder:text-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-white">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full rounded-lg bg-neutral-800 p-3 text-white placeholder:text-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            required
          />
        </div>

        <fieldset className="text-sm">
          <legend className="mb-2 block text-sm text-white">
            What do you need help with?
          </legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {serviceOptions.map((option) => {
              const isSelected = formData.serviceType === option.value;

              return (
                <label
                  key={option.value}
                  htmlFor={option.value}
                  className={`relative cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                    isSelected
                      ? "border-sky-500 bg-neutral-700 shadow-md shadow-sky-500/30"
                      : "border-neutral-700 bg-neutral-800 hover:border-sky-400"
                  }`}
                >
                  <input
                    id={option.value}
                    type="radio"
                    name="serviceType"
                    value={option.value}
                    checked={isSelected}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">
                      {option.label}
                    </span>
                    {isSelected && (
                      <span
                        aria-hidden="true"
                        className="h-3 w-3 rounded-full bg-sky-500"
                      />
                    )}
                  </div>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm text-white">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your goals, timeline, and any relevant links."
            className="w-full resize-none rounded-lg bg-neutral-800 p-3 text-white placeholder:text-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            required
          />
        </div>

        <p
          className="min-h-6 -mt-4 mb-1 text-sm text-white/80 text-center"
          aria-live="polite"
        >
          {statusMessage}
        </p>

        <div className="text-center">
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 1)",
            }}
            transition={{ duration: 0.001, ease: "easeInOut" }}
            className="cursor-pointer rounded-full bg-white/90 px-6 py-2 font-semibold text-black transition duration-200 ease-in-out hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Project Inquiry"}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
