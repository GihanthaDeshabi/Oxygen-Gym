// components/MembershipCard.tsx
import Image from 'next/image'

type CardVariant = 'image-overlay' | 'image-simple' | 'text-only'

interface MembershipCardProps {
  variant: CardVariant
  image?: string
  overlayText?: string
  overlayGradient?: string
  backgroundColor?: string
  textContent?: string
  textColor?: string
  className?: string
}

export default function MembershipCard({
  variant,
  image,
  overlayText,
  overlayGradient = 'from-black/60 to-black/90',
  backgroundColor = 'bg-gray-200',
  textContent,
  textColor = 'text-gray-900',
  className = '',
}: MembershipCardProps) {
  
  // Image card with text overlay
  if (variant === 'image-overlay' && image) {
    return (
      <div 
        className={`
          relative overflow-hidden rounded-xl lg:rounded-2xl shadow-card 
          transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover
          min-h-[280px] sm:min-h-[320px] group
          ${className}
        `}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={overlayText || 'Gym facility'}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${overlayGradient}`} />
        
        {/* Text Overlay */}
        {overlayText && (
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              {overlayText}
            </h3>
          </div>
        )}
      </div>
    )
  }

  // Simple image card without text
  if (variant === 'image-simple' && image) {
    return (
      <div 
        className={`
          relative overflow-hidden rounded-xl lg:rounded-2xl shadow-card 
          transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover
          min-h-[280px] sm:min-h-[320px] group
          ${className}
        `}
      >
        <Image
          src={image}
          alt="Gym training"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    )
  }

  // Text-only card
  if (variant === 'text-only' && textContent) {
    return (
      <div 
        className={`
          ${backgroundColor} rounded-sm lg:rounded-sm shadow-card 
          transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover
          min-h-[180px] sm:min-h-[200px] p-6 lg:p-8
          flex items-center justify-center text-center
          ${className}
        `}
      >
        <h3 className={`${textColor} text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight`}>
          {textContent}
        </h3>
      </div>
    )
  }

  // Fallback
  return (
    <div className={`bg-gray-200 rounded-xl min-h-[200px] ${className}`} />
  )
}