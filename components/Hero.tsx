// components/Hero.tsx
import Link from 'next/link'
import TestimonialCard from '../components/TestimonialCard'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/75" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Hero Content */}
          <div className="space-y-6 lg:space-y-8 lg:mt-[120px]">
            
            {/* Neon Badge */}
            <div className="inline-block ">
              <span className="inline-flex items-center px-4 py-2 bg-brand-lime text-gray-900 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full shadow-lg">
                YOUR FITNESS JOURNEY STARTS HERE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-white font-black uppercase leading-tight tracking-tight">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                MORE THAN A GYM — IT'S A LIFESTYLE
              </span>
              
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-gray-100 text-base sm:text-lg lg:text-xl max-w-md leading-relaxed">
              Join a community that pushes limits and celebrates every victory big or small.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
              
              {/* Primary CTA Button */}
              <Link
                href="/free-trial"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white font-semibold text-sm sm:text-base tracking-wide uppercase rounded-sm shadow-lg transition-all duration-200 hover:bg-orange-600 hover:scale-105 hover:shadow-xl"
              >
                START YOUR JOURNEY TODAY
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Secondary Link */}
              <Link
                href="/locations"
                className="group inline-flex items-center gap-2 text-white font-medium text-sm sm:text-base tracking-wide uppercase border-b-2 border-white/40 pb-1 transition-all hover:border-white"
              >
                VISIT US
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Testimonial + Stats */}
          <div className="relative lg:pl-[20px] lg:top-[160px] lg:left-[130px]">
            
            {/* Testimonial Card */}
            <div className="relative z-10 ">
              <TestimonialCard />
            </div>

            {/* Avatar Group + Membership Stat */}
            <div className="mt-6 lg:left-4 flex items-center gap-4  backdrop-blur-sm rounded-md p-4 sm:p-5 w-fit">
              
              {/* Overlapping Avatars */}
              <div className="flex -space-x-3 bg-transparent lg:w-[230px] sm:w-[170px] ">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Member 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                  <img
                    src="https://i.pravatar.cc/150?img=2"
                    alt="Member 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Member 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Stat Text */}
              <div className="text-white">
                <p className="font-bold text-base sm:text-lg">1.5K+ Membership</p>
                <p className="text-sm text-gray-300">enjoy our programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}