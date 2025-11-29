// components/MembershipSection.tsx
import Link from 'next/link'
import MembershipCard from '../components/MembershipCard'

export default function MembershipSection() {
  return (
    <section className="pt-20 lg:pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout on large screens */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* LEFT COLUMN - Sticky Text Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start pb-12 lg:pb-0">
            <div className="space-y-6 lg:space-y-8 max-w-xl">
              
              {/* Small label */}
              <div>
                <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-gray-500 font-medium">
                  NO HIDDEN FEES. CANCEL ANYTIME.
                </p>
              </div>

              {/* Main heading */}
              <h1 className="space-y-1">
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-none">
                  Flexible
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-none">
                  Memberships
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-none">
                  Starting at Just
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-brand-orange leading-none">
                  $20/Month
                </span>
              </h1>

              {/* Body paragraph */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md font-dm-sans">
                At OXYGEN GYM, we believe that fitness should be accessible, empowering, and tailored to you. 
                Whether you're just starting your journey or taking your performance to the next level, 
                we've got a plan that fits your goals and your schedule.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/memberships"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white font-semibold text-sm sm:text-base tracking-wide uppercase rounded-sm shadow-lg transition-all duration-200 hover:bg-orange-600 hover:scale-105 hover:shadow-xl group"
                >
                  ALL MEMBERSHIP PACKAGES
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Scrollable Card Grid */}
          <div className="lg:col-span-7">
            <div className="lg:h-[calc(100vh-120px)] lg:overflow-y-auto lg:pr-2 scrollbar-custom">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pb-12 lg:pb-8">
                
                {/* Card 1 - Dark gym photo with text overlay */}
                <MembershipCard
                  variant="image-overlay"
                  image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
                  overlayText="No.1 fitness club in Matara."
                  className="sm:row-span-2"
                />

                {/* Card 2 - Neon yellow text block */}
                <MembershipCard
                  variant="text-only"
                  backgroundColor="bg-brand-lime"
                  textContent="20+ Variations"
                  textColor="text-gray-900"
                />

                {/* Card 3 - Tall training image */}
                <MembershipCard
                  variant="image-simple"
                  image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop"
                  className="sm:row-span-2"
                />

                {/* Card 4 - App mockup with orange tint */}
                <MembershipCard
                  variant="image-overlay"
                  image="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1374&auto=format&fit=crop"
                  overlayGradient="from-orange-500/40 to-orange-900/60"
                />

                {/* Card 5 - Trainer portrait */}
                <MembershipCard
                  variant="image-simple"
                  image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
                />

                {/* Card 6 - Additional card for scroll demo */}
                <MembershipCard
                  variant="text-only"
                  backgroundColor="bg-brand-lime"
                  textContent="Expert Personal Training"
                  textColor="text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}