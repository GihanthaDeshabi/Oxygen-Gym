// components/GymGallerySection.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface GalleryImage {
  id: number
  src: string
  alt: string
  span: 'single' | 'wide' | 'tall' | 'large'
}

interface GalleryVideo {
  id: number
  src: string
  poster: string
  title: string
  duration: string
  category: string
  featured?: boolean
}

// Note: Add 'images.unsplash.com' and 'images.pexels.com' to next.config.js remotePatterns
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
    alt: 'Athlete training with cable machine in modern gym',
    span: 'large',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop',
    alt: 'Woman training on gym equipment',
    span: 'tall',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
    alt: 'Group fitness class in action',
    span: 'single',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop',
    alt: 'Personal training session',
    span: 'single',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop',
    alt: 'Modern gym interior with equipment',
    span: 'wide',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1470&auto=format&fit=crop',
    alt: 'Weight training zone',
    span: 'single',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1593476123561-9516f2097158?q=80&w=1470&auto=format&fit=crop',
    alt: 'Functional training space',
    span: 'tall',
  },
]

const galleryVideos: GalleryVideo[] = [
  {
    id: 1,
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    title: 'Full Body Strength Training Workshop',
    duration: '12:45',
    category: 'Strength Training',
    featured: true,
  },
  {
    id: 2,
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop',
    title: 'High Intensity Interval Training',
    duration: '8:30',
    category: 'HIIT',
  },
  {
    id: 3,
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop',
    title: 'Mobility & Flexibility Flow',
    duration: '15:20',
    category: 'Mobility',
  },
  {
    id: 4,
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop',
    title: 'Community Group Training',
    duration: '6:15',
    category: 'Group Class',
  },
]

export default function GymGallerySection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const getImageClasses = (span: GalleryImage['span']) => {
    const baseClasses = 'group relative overflow-hidden rounded-lg lg:rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl cursor-pointer'
    
    switch (span) {
      case 'large':
        // Mobile: 2 cols, Tablet: 2 cols 2 rows, Desktop: 2 cols 2 rows
        return `${baseClasses} col-span-2 row-span-1 h-[220px] sm:row-span-2 sm:h-[460px] md:h-[500px]`
      case 'wide':
        // Mobile: 2 cols, Tablet+: 2 cols
        return `${baseClasses} col-span-2 h-[180px] sm:h-[220px] md:h-[240px]`
      case 'tall':
        // Mobile: 1 col, Tablet+: spans 2 rows
        return `${baseClasses} col-span-1 row-span-1 h-[220px] sm:row-span-2 sm:h-[460px] md:h-[500px]`
      case 'single':
      default:
        // Mobile: 1 col, Tablet+: 1 col
        return `${baseClasses} col-span-1 h-[180px] sm:h-[220px] md:h-[240px]`
    }
  }

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* IMAGE GALLERY SECTION */}
        <div>
          {/* Top Text Row */}
          <div className="mb-8 lg:mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-16 items-end">
              
              {/* Left - Label & Heading */}
              <div>
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="h-px w-8 sm:w-12 bg-[#FF6A2A]"></div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold">
                    GYM GALLERY
                  </p>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Where Strength
                  <span className="block mt-1">Meets Style</span>
                </h2>
              </div>

              {/* Right - Description + Stats */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Explore our world-class facilities designed to inspire your fitness journey.
                </p>
                <div className="flex gap-4 sm:gap-6 text-sm">
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-[#FF6A2A]"></p>
                    <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wide"></p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-[#FF6A2A]"></p>
                    <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wide"></p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-[#FF6A2A]"></p>
                    <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wide"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Masonry Grid - Mobile Optimized */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-3 sm:gap-4 lg:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className={getImageClasses(image.span)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Info - Hidden on mobile, visible on hover for desktop */}
                <div className="absolute inset-0 flex items-end p-3 sm:p-4 lg:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <p className="text-xs sm:text-sm font-medium line-clamp-2">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button for Mobile */}
          
        </div>

        {/* VIDEO GALLERY SECTION - FEATURED LAYOUT */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          
          {/* Video Section Header */}
          <div className="mb-8 sm:mb-10 lg:mb-14 text-center">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="h-px w-8 sm:w-12 bg-[#FF6A2A]"></div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold">
                VIDEO LIBRARY
              </p>
              <div className="h-px w-8 sm:w-12 bg-[#FF6A2A]"></div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Experience OXYGEN in Action
            </h3>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
              From intense training sessions to community wellness events see what makes our gym family special.
            </p>
          </div>

          {/* Featured Video Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Large Featured Video (Left) */}
            {galleryVideos.filter(v => v.featured).map((video) => (
              <div
                key={video.id}
                className="lg:col-span-2 group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl bg-black transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                {/* Video Container */}
                <div className="relative aspect-video lg:aspect-[16/10]">
                  {activeVideo === video.id ? (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      poster={video.poster}
                      aria-label={video.title}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <Image
                        src={video.poster}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                      
                      {/* Play Button Overlay */}
                      <button
                        onClick={() => setActiveVideo(video.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF6A2A] group-hover:text-white">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    </>
                  )}
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#FF6A2A] text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
                      {video.category}
                    </span>
                    <span className="text-white/80 text-xs sm:text-sm font-medium">
                      {video.duration}
                    </span>
                  </div>
                  <h4 className="text-white text-base sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight">
                    {video.title}
                  </h4>
                </div>
              </div>
            ))}

            {/* Smaller Videos (Right Column) */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {galleryVideos.filter(v => !v.featured).map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg bg-black transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                >
                  {/* Video Container */}
                  <div className="relative aspect-video">
                    {activeVideo === video.id ? (
                      <video
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        poster={video.poster}
                        aria-label={video.title}
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <Image
                          src={video.poster}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        
                        {/* Play Button Overlay */}
                        <button
                          onClick={() => setActiveVideo(video.id)}
                          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors"
                        >
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF6A2A] group-hover:text-white">
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium uppercase tracking-wide">
                        {video.category}
                      </span>
                      <span className="text-white/90 text-[10px] sm:text-xs font-medium">
                        {video.duration}
                      </span>
                    </div>
                    <h5 className="text-white text-xs sm:text-sm lg:text-base font-semibold leading-tight line-clamp-2">
                      {video.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}