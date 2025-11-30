// app/page.tsx
import Header from '@/components/Navbar'

import BlogHighlightsSection from '@/components/BlogHighlightsSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <div className="mt-[150px]">
        {/* Blog Highlights - just before footer */}
        <BlogHighlightsSection />
      </div>
      
      <Footer />
    </>
  )
}