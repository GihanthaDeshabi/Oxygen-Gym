// components/FaqSection.tsx
'use client'

import React, { useState } from 'react'

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'What is Oxygen Gym Matara?',
    answer:
      'Oxygen Gym Matara is a fitness center located at 1811 Akurassa Road, Hiththatiya, Matara. It offers modern gym equipment, group-workouts, and certified coaching to help you achieve your fitness goals. :contentReference[oaicite:1]{index=1}',
  },
  {
    id: 2,
    question: 'How do I become a member?',
    answer:
      'You can become a member by visiting the Matara branch directly or contacting via phone (712 126 969). Sign up, choose your membership plan, and you’ll get full access to the gym facilities. :contentReference[oaicite:2]{index=2}',
  },
  {
    id: 3,
    question: 'Can I use my membership at other branches?',
    answer:
      'Facilities vary by membership plan. Please check with the branch staff at signing — some memberships may allow multi-club access. (Contact branch for details.)',
  },
  {
    id: 4,
    question: 'Does Oxygen Gym Matara offer personal training?',
    answer:
      'Yes — Oxygen Gym Matara provides personal training by qualified trainers, who guide you based on your fitness level, goals, and schedule. Coaches help you with form, routines and consistent progress tracking.',
  },
  {
    id: 5,
    question: 'Do you offer classes for beginners?',
    answer:
      'Absolutely. The gym welcomes beginners and offers beginner-friendly programs. Trainers ensure safety, proper form, and gradual progress for new members.',
  },
  {
    id: 6,
    question: 'What facilities are available at Oxygen Gym Matara?',
    answer:
      'Oxygen Gym Matara includes free weights, strength-training machines, cardio equipment, and space for group classes — providing a full gym experience for strength, conditioning, and fitness. :contentReference[oaicite:3]{index=3}',
  },
  {
    id: 7,
    question: 'What are the gym’s operating hours / contact info?',
    answer:
      'You can reach the Matara branch on phone: 712 126 969. Address: 1811 Akurassa Road, Hiththatiya, Matara. Please contact directly to confirm the latest operating hours. :contentReference[oaicite:4]{index=4}',
  },
  {
    id: 8,
    question: 'Is the gym suitable for all fitness levels?',
    answer:
      'Yes — whether you’re a beginner, mid-level, or advanced gym-goer, Oxygen Gym Matara caters to different fitness levels with tailored training and flexible workout options.',
  },
];



export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="text-center mb-12 lg:mb-16">
          
          {/* Eyebrow Label */}
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium mb-4">
            FREQUENTLY ASKED QUESTIONS
          </p>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            <span className="block">Get Quick Answers</span>
            <span className="block">About Oxygen Gym</span>
          </h2>

          {/* Intro Paragraph */}
          <p className="mx-auto max-w-2xl mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-dm-sans">
            Oxygen Gym Matara provides top-tier training, modern equipment, and certified coaches to help you stay fit and strong with confidence.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index
            const questionId = `faq-question-${faq.id}`
            const answerId = `faq-answer-${faq.id}`

            return (
              <div key={faq.id} className="py-5 sm:py-6">
                
                {/* Question Button */}
                <button
                  id={questionId}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full flex items-center justify-between text-left group"
                >
                  {/* Question Text with Number */}
                  <span className="flex items-start gap-3 sm:gap-4 flex-1 pr-4">
                    <span className="text-sm sm:text-base font-medium text-gray-400 flex-shrink-0">
                      {String(faq.id).padStart(2, '0')}.
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 group-hover:text-black transition-colors font-dm-sans">
                      {faq.question}
                    </span>
                  </span>
                  
                  {/* Toggle Icon */}
                  <span 
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-500 text-2xl font-light transition-transform"
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Answer Panel */}
                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="mt-3 pl-9 sm:pl-11 lg:pl-12 pr-10 animate-fadeIn"
                  >
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl font-dm-sans">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}