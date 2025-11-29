// components/ContactSection.tsx
'use client'

import React, { FormEvent, useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactTime: 'Anytime',
    message: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here (e.g., API call)
    alert('Thank you for contacting us! We will get back to you soon.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      contactTime: 'Anytime',
      message: '',
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN - Text & Contact Info */}
          <div className="max-w-xl">
            
            {/* Neon Pill Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-[#D7FF00] px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-900 uppercase tracking-wide shadow-sm">
                CONTACT US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              <span className="block">We're Here to</span>
              <span className="block">Help You Move</span>
              <span className="block">Better.</span>
            </h2>

            {/* Intro Paragraph */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Have questions about memberships, classes, or facilities? Our team is ready 
              to assist you! Get in touch and start your fitness journey with Waras today.
            </p>

            {/* Main Office Info */}
            <div className="mt-8 space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Main Office</h3>
              
              <div className="space-y-1">
                <p className="font-semibold text-gray-900">Oxygen Gym Matara</p>
                <p className="text-sm sm:text-base text-gray-600">
                  Godagama, Matara, Sri Lanka.
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="font-semibold text-gray-900">Phone:</span>
                  <span className="ml-1">+94 76 969 3351</span>
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="font-semibold text-gray-900">Email:</span>
                  <a 
                    href="mailto:contact@warasfit.com" 
                    className="ml-1 text-gray-600 hover:text-black hover:underline transition-colors"
                  >
                    contact@oxygengym.com
                  </a>
                </p>
              </div>
            </div>

            {/* Customer Service Hours */}
            <div className="mt-8 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">Customer Service Hours</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Monday – Friday: 9:00 AM – 6:00 PM
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Saturday – Sunday: 10:00 AM – 4:00 PM
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form Card */}
          <div className="bg-gray-100 rounded-sm p-6 sm:p-8 shadow-lg">
            
            {/* Form Heading */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h3>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 sm:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@email.com"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 sm:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 555 123 4567"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 sm:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                />
              </div>

              {/* Contact Time Preferences */}
              <div>
                <label 
                  htmlFor="contactTime" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Time Preferences
                </label>
                <select
                  id="contactTime"
                  name="contactTime"
                  value={formData.contactTime}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 sm:py-3 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem',
                  }}
                >
                  <option value="Anytime">Anytime</option>
                  <option value="Morning">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="Evening">Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 sm:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-sm bg-black py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white uppercase tracking-wide transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}