// components/BlogHighlightsSection.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/constants/BlogData'

export default function BlogHighlightsSection() {
  // Only show the first 3 posts
  const featuredPosts = blogPosts.slice(0, 20)

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Row - Badge, Heading & Description */}
        <div className="mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1.5fr] gap-6 lg:gap-16 items-start">
            
            {/* Left - Badge & Heading */}
            <div>
              {/* Neon Pill Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-[#D7FF00] px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-900 uppercase tracking-wide shadow-sm">
                  OXYGEN GYM BLOG
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="block">Fitness Tips, Nutrition</span>
                <span className="block mt-1">Advice & Member Stories</span>
              </h2>
            </div>

            {/* Right - Description */}
            <div className="lg:pt-2">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Stay inspired and informed with the latest articles from our fitness experts 
                and community.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-sm overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Card Image */}
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              </Link>

              {/* Card Content */}
              <div className="p-5 sm:p-6">
                {/* Category & Date Row */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs uppercase tracking-[0.18em] text-gray-500 font-medium">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="mt-3 text-lg sm:text-xl font-semibold text-gray-900 leading-snug transition-colors group-hover:text-gray-700">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-gray-900 transition-colors hover:text-gray-600"
                >
                  READ MORE
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}