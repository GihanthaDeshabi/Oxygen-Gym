// components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavLink {
  label: string
  href: string
  active?: boolean
}

const navLinks: NavLink[] = [
  { label: 'HOME', href: '/', active: true },
  { label: 'ABOUT', href: '/about' },
  { label: 'PROGRAMS', href: '/programs' },
  { label: 'TRAINERS', href: '/trainers' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-30 w-full bg-gradient-to-b from-black/60 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group z-40">
              {/* Logo Mark - Orange Angular "K" */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-orange rounded-md flex items-center justify-center transition-transform group-hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600" />
                <span className="relative text-white font-bold text-xl sm:text-2xl italic">O</span>
              </div>
              {/* Brand Text */}
              <span className="text-white font-semibold text-lg sm:text-xl lg:text-2xl tracking-wide">
                OXYGEN
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              {/* Main Nav Pill */}
              <nav className="bg-white rounded-md shadow-nav px-4 py-4">
                <ul className="flex items-center gap-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      {link.active ? (
                        <Link
                          href={link.href}
                          className="px-5 py-2.5 bg-black text-white rounded-md text-sm font-medium tracking-wide uppercase transition-all hover:bg-gray-900"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <Link
                          href={link.href}
                          className="px-5 py-2.5 text-gray-900 rounded-md gap-2 text-sm font-medium tracking-wide uppercase transition-all hover:bg-gray-10 hover:text-gray-700"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button - White pill frame with black button inside */}
              {/* <div className="bg-white rounded-full shadow-nav p-1.5">
                <Link
                  href="/free-trial"
                  className="block px-6 py-2.5 bg-black text-white rounded-full text-sm font-semibold tracking-wide uppercase transition-all hover:bg-gray-900 hover:scale-[1.02] hover:shadow-nav-hover"
                >
                  CLAIM FREE TRIAL
                </Link>
              </div> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center bg-white/10 backdrop-blur-sm rounded-md transition-all hover:bg-white/20 z-40"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span 
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-neutral-900 transition-all duration-300 z-20 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="px-6 pt-24 pb-8">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full px-6 py-4 rounded-sm text-base font-semibold tracking-wide uppercase transition-all ${
                    link.active
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Button */}
          {/* <div className="mt-8">
            <Link
              href="/free-trial"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-6 py-5 bg-brand-orange text-white text-center rounded-xl text-base font-bold tracking-wide uppercase transition-all hover:bg-orange-600 active:scale-[0.98]"
            >
              CLAIM FREE TRIAL
            </Link>
          </div> */}
        </nav>
      </div>
    </>
  )
}