import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
}

// Enhanced SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://oxygengym.com'), // Replace with your actual domain
  
  title: {
    default: "OXYGEN - More Than A Gym, It's A Lifestyle | Premium Fitness Center",
    template: "%s | OXYGEN Gym"
  },
  
  description: "Join OXYGEN, Sri Lanka's premier fitness center. A community that pushes limits and celebrates every victory — big or small. State-of-the-art equipment, expert trainers, and personalized fitness programs.",
  
  keywords: [
    "gym Sri Lanka",
    "fitness center",
    "OXYGEN gym",
    "personal training",
    "weight training",
    "cardio workout",
    "fitness lifestyle",
    "gym membership",
    "strength training",
    "body building",
    "fitness classes",
    "health club",
    "workout center",
    "premium gym",
    "fitness community"
  ],
  
  authors: [{ name: "OXYGEN Gym" }],
  creator: "OXYGEN Gym",
  publisher: "OXYGEN Gym",
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oxygengym.com",
    siteName: "OXYGEN Gym",
    title: "OXYGEN - More Than A Gym, It's A Lifestyle",
    description: "Join a community that pushes limits and celebrates every victory — big or small. State-of-the-art fitness center with expert trainers.",
    images: [
      {
        url: "/og-image.jpg", // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "OXYGEN Gym - Premium Fitness Center",
      }
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "OXYGEN - More Than A Gym, It's A Lifestyle",
    description: "Join a community that pushes limits and celebrates every victory — big or small.",
    creator: "@oxygengym", // Replace with your actual Twitter handle
    images: ["/twitter-image.jpg"], // Create this image (1200x600px)
  },
  
  // Icons and favicons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Manifest for PWA
  manifest: '/site.webmanifest',
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification for search engines
  verification: {
    google: 'your-google-verification-code', // Get from Google Search Console
    // bing: 'your-bing-verification-code',
  },
  
  // Category
  category: 'health and fitness',
  
  // Additional metadata
  other: {
    'contact:phone_number': '+94777288286',
    'contact:email': 'info@oxygengym.com', // Replace with your email
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data (JSON-LD) for better SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': 'https://oxygengym.lk',
    name: 'OXYGEN Gym',
    alternateName: 'OXYGEN Fitness Center',
    description: "More Than A Gym, It's A Lifestyle. Join a community that pushes limits and celebrates every victory.",
    url: 'https://oxygengym.com',
    logo: 'https://oxygengym.com/logo.png',
    image: 'https://oxygengym.com/og-image.jpg',
    telephone: '+94777288286',
    email: 'info@oxygengym.com', // Replace with your email
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address', // Add your address
      addressLocality: 'Colombo', // Your city
      addressRegion: 'Western Province', // Your region
      postalCode: '00000', // Your postal code
      addressCountry: 'LK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.9271, // Replace with your coordinates
      longitude: 79.8612
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '05:00',
        closes: '22:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '06:00',
        closes: '20:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/oxygengym', // Add your social media links
      'https://www.instagram.com/oxygengym',
      'https://twitter.com/oxygengym',
      'https://www.youtube.com/@oxygengym',
      'https://www.tiktok.com/@oxygengym'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94777288286',
      contactType: 'Customer Service',
      availableLanguage: ['en', 'si'],
      areaServed: 'LK'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gym Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gym Membership',
            description: 'Full access to all gym facilities and equipment'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Personal Training',
            description: 'One-on-one sessions with certified personal trainers'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Group Classes',
            description: 'Various fitness classes including yoga, HIIT, and more'
          }
        }
      ]
    }
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="font-sans">
        {children}
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </body>
    </html>
  )
}