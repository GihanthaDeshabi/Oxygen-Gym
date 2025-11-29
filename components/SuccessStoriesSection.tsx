// components/SuccessStoriesSection.tsx
'use client'

import Image from 'next/image'

interface Testimonial {
  name: string
  summary: string
  quote?: string
  imageUrl: string
  imageAlt: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sakith Jay',
    summary: 'Lost 18 lbs and found discipline.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop',
    imageAlt: 'Jason T. fitness transformation',
  },
  {
    name: 'Chanuka J',
    summary: "I've never enjoyed workouts",
    quote: '"Cardio are my therapy. It\'s not just about fitness anymore — it\'s fun, energizing, and I look forward to every class."',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1420&auto=format&fit=crop',
    imageAlt: 'Emily S. enjoying group fitness classes',
  },
  {
    name: 'Kasun R',
    summary: 'I finally feel strong in my own skin.',
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Amanda R. strength training journey',
  },
  {
    name: 'Malith M',
    summary: 'OXYGEN helped me break plateaus.',
    imageUrl: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=1470&auto=format&fit=crop',
    imageAlt: 'Mark D. athletic performance improvement',
  },
]

// Duplicate testimonials for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials]

export default function SuccessStoriesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <header className="mb-10 lg:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.3fr] gap-6 lg:gap-16 items-start">
            
            {/* Left - Eyebrow + Heading */}
            <div className="space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">
                REAL PEOPLE. REAL RESULTS.
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Success Stories from the</span>
                <span className="block mt-1">OXYGEN GYM</span>
              </h2>
            </div>

            {/* Right - Intro Copy */}
            <div className="lg:pt-2">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At OXYGEN, transformation is more than physical it's about mindset, 
                confidence, and lifestyle. Meet a few of our members who turned 
                commitment into results.
              </p>
            </div>
          </div>
        </header>

        {/* Testimonial Cards Strip - Auto-scrolling Container */}
        <div className="relative mt-10 h-[800px] sm:h-[850px] lg:h-[480px] overflow-hidden group">
          
          {/* Scrolling Inner Container */}
          <div className="animate-testimonials-scroll group-hover:[animation-play-state:paused]">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Gradient Fade Overlays (Top & Bottom) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}

// Individual Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative h-96 rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      {/* Background Image */}
      {/* Note: Add 'images.unsplash.com' to next.config.js remotePatterns */}
      <Image
        src={testimonial.imageUrl}
        alt={testimonial.imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Quote Bubble (if exists) */}
      {testimonial.quote && (
        <div className="absolute inset-x-4 bottom-24 sm:bottom-28 bg-white rounded-2xl shadow-xl p-4 sm:p-5 z-10">
          <p className="text-gray-900 text-sm sm:text-base leading-relaxed italic">
            {testimonial.quote}
          </p>
        </div>
      )}

      {/* Name & Summary (Bottom) */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
        <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
          {testimonial.name}
        </h3>
        <p className="text-white/80 text-sm sm:text-base">
          {testimonial.summary}
        </p>
      </div>
    </article>
  )
}