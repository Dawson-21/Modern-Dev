"use client";

import * as m from "framer-motion/m";
import { noMobileEntrance } from "./entrance";
import {
  cardHoverOutline,
  cardSpotlight,
  cardSurface,
  fieldSurface,
} from "./cardStyles";
import { spotlightHandlers } from "./spotlight";
import HexButton from "./HexButton";
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
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`mx-auto w-full max-w-2xl p-6 backdrop-blur-md focus-within:border-sky-400/45 ${cardSurface} ${cardHoverOutline} ${cardSpotlight} ${noMobileEntrance}`}
      {...spotlightHandlers}
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
            className={`w-full p-3 ${fieldSurface}`}
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
            className={`w-full p-3 ${fieldSurface}`}
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
                  className={`relative cursor-pointer border p-4 transition-colors duration-300 focus-within:ring-1 focus-within:ring-sky-400/50 ${
                    isSelected
                      ? "border-sky-400/70 bg-sky-400/10 shadow-[0_0_18px_-6px_rgba(56,189,248,0.5)]"
                      : "border-white/20 bg-white/[0.04] hover:border-sky-400/45"
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
                        className="h-3 w-3 rounded-full bg-sky-400"
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
            className={`w-full resize-none p-3 ${fieldSurface}`}
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
          <HexButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Project Inquiry"}
          </HexButton>
        </div>
      </form>
    </m.div>
  );
}
