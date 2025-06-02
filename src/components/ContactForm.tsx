'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form logic or call an API here
    console.log(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10"
    >
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">Let's work together</h2>
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm text-white mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-white mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm text-white mb-1">Message</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-white/90 text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition duration-200 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  )
}
