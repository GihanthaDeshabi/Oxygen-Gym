// components/ContactCtaSection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ContactCtaSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image */}
      {/* Note: Add 'images.unsplash.com' to next.config.js remotePatterns */}
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        alt="Modern gym with equipment and training area"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Headline & Subtext */}
          <div className="space-y-6 lg:space-y-8">
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight uppercase lg:mt-8">
              <span className="block">Take the first step</span>
              <span className="block">toward a</span>
              <span className="block">stronger you</span>
            </h2>

            {/* Divider Line + Subtext */}
            <div className="flex items-start gap-4">
              <div className="h-px w-16 bg-white mt-3 flex-shrink-0" />
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md font-dm-sans">
                Start Your Transformation With OXYGEN - Your Trusted Fitness Partner.
              </p>
            </div>
          </div>

          {/* Right Column - CTA & Contact Info */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10 lg:top-10">
            
            {/* Vertical Divider (Desktop only) */}
            <div className="hidden lg:block w-px h-32 bg-white/30 flex-shrink-0" />

            {/* CTA & Office Info */}
            <div className="space-y-6 lg:space-y-8 ">
              
              {/* CTA Button */}
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[#FF6A2A] text-white text-sm sm:text-base font-semibold uppercase tracking-wide rounded-sm shadow-lg transition-all duration-200 hover:bg-[#FF6A2A] hover:scale-[1.02] hover:shadow-xl group"
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

              {/* Office Information */}
              <div>
                <p className="text-xs sm:text-sm text-white/70 tracking-[0.2em] uppercase mb-2 font-medium">
                  OUR LOCATION
                </p>
                <address className="not-italic text-sm sm:text-base text-white/90 leading-relaxed">
                  <span className="block">Godagama, Matara</span>
                  <span className="block">Sri Lanka</span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}