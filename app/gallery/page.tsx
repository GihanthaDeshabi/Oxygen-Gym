
import ContactCtaSection from '@/components/ContactCtaSection'
import Footer from '@/components/Footer'
import GymGallerySection from '@/components/GymGallerySection'
import Header from '@/components/Navbar'

import React from 'react'

export default function page() {
  return (
    <div>
      <>
      <Header />
      <div className="mt-[150px]">
      
      
      <GymGallerySection />
      </div>
      <ContactCtaSection />
             <Footer/>
      </>
    </div>
  )
}

