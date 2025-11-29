// components/LegalLayout.tsx
'use client'

import React from 'react'
import Link from 'next/link'

interface LegalSection {
  id: string
  heading: string
  content: React.ReactNode
}

interface LegalLayoutProps {
  eyebrow: string
  title: string
  intro: string
  sections: LegalSection[]
  updatedAt?: string
}

export default function LegalLayout({
  eyebrow,
  title,
  intro,
  sections,
  updatedAt,
}: LegalLayoutProps) {
  return (
    <div className="w-full bg-white">
      {/* Header Area */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
          
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium mb-3">
            {eyebrow}
          </p>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {title}
          </h1>

          {/* Intro Paragraph */}
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
            {intro}
          </p>

          {/* Last Updated */}
          {updatedAt && (
            <p className="mt-6 text-xs sm:text-sm text-gray-500">
              Last Updated: {updatedAt}
            </p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,1.2fr)] lg:gap-10">
          
          {/* Left Column - Main Content */}
          <div className="order-2 lg:order-1">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-10 mb-4 first:mt-0">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {section.content}
                </div>
              </section>
            ))}

            {/* Help Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-200 pt-8 mt-12">
              <div>
                <p className="font-medium text-gray-900 mb-1">Need help?</p>
                <p className="text-sm text-gray-600">
                  Questions about this policy? Our team is here to help.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6A2A] text-white text-sm font-medium rounded-md transition-all hover:bg-orange-600 hover:scale-[1.02] whitespace-nowrap"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - On This Page Navigation */}
          <div className="order-1 lg:order-2 mb-8 lg:mb-0">
            <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-5 lg:sticky lg:top-24">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                On This Page
              </h3>
              <ul className="space-y-2.5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors block"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}