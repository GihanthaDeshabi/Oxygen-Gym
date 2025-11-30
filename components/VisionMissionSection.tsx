// components/VisionMissionSection.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function VisionMissionSection() {
  return (
    <section 
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="vision-mission-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column - Image */}
          <div className="relative h-64 sm:h-80 lg:h-[500px] xl:h-[550px] w-full overflow-hidden rounded-sm shadow-lg group">
            {/* Note: Add 'images.unsplash.com' to next.config.js remotePatterns */}
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
              alt="People training together at Oxygen Gym Matara"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right Column - Text & CTA */}
          <div className="flex flex-col justify-center">
            
            {/* Heading */}
            <h2 
              id="vision-mission-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Our Vision and Mission
            </h2>

            {/* Body Copy */}
            <div className="max-w-xl space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-dm-sans">
                At OXYGEM GYM, our mission is to empower individuals to lead stronger, healthier 
                lives through accessible, innovative, and community‑driven fitness experiences.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-dm-sans">
                Our vision is to be the most trusted fitness brand across the nation — where 
                every person, regardless of background or fitness level, feels supported in 
                their journey toward lifelong well‑being.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#FF6A2A] text-white text-sm sm:text-base font-semibold uppercase tracking-wide rounded-sm shadow-lg transition-all duration-200 hover:bg-[#FF6A2A] hover:shadow-xl hover:scale-[1.02] group"
              >
                CONTACT US
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}