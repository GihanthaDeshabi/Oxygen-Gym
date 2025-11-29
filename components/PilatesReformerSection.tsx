// components/PilatesReformerSection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Benefit {
  text: string
}

const benefits: Benefit[] = [
  { text: 'Suitable for all fitness levels' },
  { text: 'Improves posture, flexibility & muscle control' },
  
]

export default function PilatesReformerSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* LEFT PANEL - Neon Offer Card */}
          <div className="bg-[#D7FF00] rounded-sm lg:w-[500px] p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4 lg:space-y-8">
            
            {/* New Class Badge */}
            <div>
              <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[11px] sm:text-xs font-medium tracking-[0.15em] text-gray-900 uppercase shadow-sm">
                NEW OFFERS LAUNCH
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Exclusive</span>
              <span className="block">Launch Offer</span>
              {/* <span className="block">OXYGEN</span> */}
              <span className="block mt-2">Starting</span>
              <span className="block text-black">1st DEC</span>
            </h2>


            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-900/80 leading-relaxed max-w-md font-dm-sans">
               Transform your body with our expert-led Pilates Reformer sessions perfect for strength and mobility.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/pilates-reformer"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-black text-white text-sm sm:text-base font-semibold uppercase tracking-wide rounded-sm shadow-lg transition-all duration-200 hover:bg-gray-900 hover:scale-[1.02] hover:shadow-xl group"
              >
                RESERVE YOUR SPOT TODAY
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

          {/* RIGHT PANEL - Image + Overlays */}
          <div className="relative lg:w-[700px] md:w-[790px] lg:left-[85px] rounded-sm overflow-hidden min-h-[500px] lg:min-h-[600px] shadow-xl">
            
            {/* Main Pilates Reformer Image */}
            {/* Note: Add 'images.pexels.com' to next.config.js remotePatterns */}
            <Image
              src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Woman training on Pilates reformer machine"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Subtle Gradient Overlay for Better Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />

            {/* Top-Right Logo Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-md px-4 py-2 shadow-lg">
                {/* Orange K Logo */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-base sm:text-lg italic">O</span>
                </div>
                {/* Brand Name */}
                <span className="text-gray-900 font-semibold text-sm sm:text-base tracking-wide">
                  OXYGEN
                </span>
              </div>
            </div>

            {/* Bottom-Right Info Card */}
            <div className="absolute bottom-3 right-4  sm:bottom-6 sm:right-6 left-4 sm:left-auto bg-white rounded-sm shadow-2xl sm:max-w-sm p-2 sm:p-6 z-10">
              
              {/* Card Heading */}
              <h3 className="text-gray-900 text-base sm:text-lg font-semibold leading-snug mb-2">
                Whether you're chasing better posture, core strength — this is your move.
              </h3>

              {/* Benefits List with Checkmarks */}
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Green Checkmark Circle */}
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-lime-100 flex items-center justify-center mt-0.5">
                      <svg 
                        className="w-3 h-3 text-lime-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={3} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </div>
                    {/* Benefit Text */}
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}