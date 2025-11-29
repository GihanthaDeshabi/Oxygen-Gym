// app/page.tsx
import Header from '@/components/Navbar'
import Hero from '@/components/Hero'
import MembershipSection from '@/components/MembershipSection'
import StatsStrip from '@/components/StatsStrip'
import PersonalTrainingSection from '@/components/PersonalTrainingSection'
import PilatesReformerSection from '@/components/PilatesReformerSection'
import SuccessStoriesSection from '@/components/SuccessStoriesSection'
import ContactCtaSection from '@/components/ContactCtaSection'
import Footer from '@/components/Footer'
import AboutOxygenGymSection from '@/components/AboutOxygenGymSection'
import FaqSection from '@/components/FaqSection'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
       <StatsStrip />
       <AboutOxygenGymSection />
      <MembershipSection />
      <PersonalTrainingSection />
       <PilatesReformerSection />
       <SuccessStoriesSection />
       <FaqSection />
       <ContactCtaSection />
       <Footer/>
    </main>
  )
}