// /page.tsx
import Header from '@/components/Navbar'

import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ContactCtaSection from '@/components/ContactCtaSection'
import FaqSection from '@/components/FaqSection'

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        
        <div className="mt-[150px]">
        <ContactSection />
        </div>
        <FaqSection />
        <ContactCtaSection />
               <Footer/>
      </main>
      
      
    </>
  )
}