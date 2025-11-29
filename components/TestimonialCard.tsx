// components/TestimonialCard.tsx
export default function TestimonialCard() {
  return (
    <div className="bg-white rounded-sm shadow-card p-6 sm:p-8 max-w-sm lg:max-w-md">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg 
          className="w-8 h-8 text-gray-300" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Testimonial Text */}
      <blockquote className="mb-6">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          I came in just looking to get in shape, but I found a community that pushes me to be better every day — physically and mentally.
        </p>
      </blockquote>

      {/* Attribution */}
      <cite className="not-italic">
        <p className="text-gray-500 text-sm font-medium">
          — Chanuka J, Member since 2025
        </p>
      </cite>
    </div>
  )
}