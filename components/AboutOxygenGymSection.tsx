// components/AboutOxygenGymSection.tsx
'use client'

import React from 'react'
import Image from 'next/image'

interface GymImage {
  src: string
  alt: string
}

// Note: Add 'images.unsplash.com' to next.config.js remotePatterns
const gymImages: GymImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
    alt: 'Modern strength training area with free weights at Oxygen Gym Matara',
  },
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop',
    alt: 'State-of-the-art cardio equipment and training facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
    alt: 'Group fitness training session at Oxygen Gym',
  },
]

export default function AboutOxygenGymSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Text Content Block */}
        <div className="text-center mb-12 lg:mb-16">
          
          {/* Eyebrow Text */}
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium mb-4">
            OXYGEN GYM MATARA • EMPOWERING FITNESS SINCE 2018
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <span className="block">Where Fitness Meets</span>
            <span className="block">Community in Matara</span>
          </h2>

          {/* Supporting Paragraphs */}
          <div className="mx-auto max-w-2xl space-y-4 font-dm-sans">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              Located in the heart of Matara, Sri Lanka, Oxygen Gym is the premier fitness 
              destination for individuals seeking transformation, strength, and a supportive 
              community. We combine world-class equipment with expert coaching to help you 
              achieve your health and fitness goals.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              From state-of-the-art cardio machines and Olympic-grade strength equipment to 
              personalized training programs and energizing group classes, we provide everything 
              you need to succeed. Whether you're a beginner or an experienced athlete, our 
              certified trainers are here to guide you every step of the way.
            </p>
          </div>

          {/* Optional Highlights */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm sm:text-base text-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Modern Equipment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Certified Trainers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Group Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Flexible Memberships</span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {gymImages.map((image, index) => (
            <figure
              key={index}
              className="group relative h-56 sm:h-64 md:h-72 rounded-sm lg:rounded-sm overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}