// app/blog/[slug]/page.tsx
import React from 'react'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/constants/BlogData'
import Header from '@/components/Navbar'
import BlogPostLayout from '@/components/BlogPostLayout'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // Await params before accessing properties
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | WARAS Blog',
    }
  }

  return {
    title: `${post.title} | WARAS Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
      type: 'article',
    },
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Make component async and await params
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await params before accessing properties
  const { slug } = await params
  
  // Find the current post
  const post = blogPosts.find((p) => p.slug === slug)

  // If post not found, show 404
  if (!post) {
    notFound()
  }

  // Get recent posts (excluding current post, limit to 4)
  const recentPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 4)

  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <div className="mt-[150px]">
          <BlogPostLayout post={post} recentPosts={recentPosts} />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
}