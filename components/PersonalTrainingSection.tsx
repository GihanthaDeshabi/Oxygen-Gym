// components/PersonalTrainingSection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

interface TrainingCard {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

const trainingCards: TrainingCard[] = [
  {
    title: 'Shape Your Dream Body',
    description: 'Sculpt, tone, and define with tailored training plans.',
    imageSrc: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop',
    imageAlt: 'Personal trainer working with client on strength training',
  },
  {
    title: 'Recover & Move Pain‑Free',
    description: 'Regain strength and mobility — safely and effectively.',
    imageSrc: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop',
    imageAlt: 'Client training on cardio equipment',
  },
  {
    title: 'Increase Muscle Strength',
    description: 'Train harder, lift smarter, and grow stronger every week.',
    imageSrc: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Man performing strength training exercises',
  },
  {
    title: 'Lose Fat — Sustainably',
    description: 'Burn calories, drop fat, and boost energy — the right way.',
    imageSrc: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260',
    imageAlt: 'Woman training with battle ropes',
  },
]

export default function PersonalTrainingSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Area - Heading & Description */}
        <div className="mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left - Heading */}
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-gray-500 font-medium mb-4">
                REAL COACHES. REAL RESULTS.
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Certified Personal Training Sessions</span>
                
              </h2>
            </div>

            {/* Right - Description & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-dm-sans">
                At OXYGEN GYM, expert coaching is within reach. Our nationally certified 
                personal trainers are here to guide, challenge, and support you 
                every rep, every step.
              </p>
              
              <div>
                <Link
                  href="/personal-training"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-[#FF6A2A] text-white text-sm sm:text-base font-semibold uppercase tracking-wide rounded-sm shadow-lg transition-all duration-200 hover:bg-orange-600 hover:scale-[1.02] hover:shadow-xl group"
                >
                  ABOUT PERSONAL TRAINER
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

        {/* Bottom Area - 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-6 lg:gap-4 ">
          {trainingCards.map((card, index) => (
            <article
              key={index}
              className="group bg-gray-100 rounded-sm overflow-hidden shadow-sm lg:mt-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-dm-sans leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}