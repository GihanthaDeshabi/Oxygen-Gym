import AboutOxygenGymSection from '@/components/AboutOxygenGymSection'
import ContactCtaSection from '@/components/ContactCtaSection'
import Footer from '@/components/Footer'
import Header from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <>
      <Header />
      <div className="mt-[150px]">
      <AboutOxygenGymSection />
      </div>
      <ContactCtaSection />
             <Footer/>
      </>
    </div>
  )
}

