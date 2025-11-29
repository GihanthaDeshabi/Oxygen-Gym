"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ArrowLeft, MapPin, Clock, DollarSign, Calendar, Info, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import featuredPlaces from "@/constants/TravelPlaces";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const PlaceDetails = () => {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Create slug function
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  // Find the place based on the slug from params
  const place = featuredPlaces.find(
    (p) => createSlug(p.title) === params.slug
  );

  if (!place) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 border-2 border-black flex items-center justify-center mx-auto mb-6">
            <Info className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-3xl font-light text-black mb-4 tracking-tight">
            Place Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The place you're looking for doesn't exist or has been removed.
          </p>
          <button 
            onClick={() => router.push('/places')}
            className="inline-flex items-center bg-black text-white px-8 py-4 hover:bg-gray-900 transition-colors tracking-widest text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-3" />
            BACK TO PLACES
          </button>
        </div>
      </div>
    );
  }

  const openGallery = (index: number) => {
    setSelectedImage(true);
    setImageIndex(index);
  };

  const closeGallery = () => {
    setSelectedImage(false);
  };

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === place.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? place.gallery.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") previousImage();
        if (e.key === "Escape") closeGallery();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] mt-[140px]">
        <Image
          src={place.image}
          alt={place.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {/* Back Button */}
              <Link 
                href="/places/#Gallery"
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm tracking-wide">BACK TO PLACES</span>
              </Link>

              <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight leading-tight">
                {place.title}
              </h1>
              
              <div className="flex items-center text-white/90 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{place.location}</span>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-16">
            {/* Quick Info Cards */}
            {/* <div className="grid grid-cols-2 rounded-md md:grid-cols-4 gap-px bg-gray-200 border border-gray-300">
              <div className="bg-white p-6 text-center hover:bg-gray-50 transition-colors">
                <MapPin className="w-6 h-6 text-black mx-auto mb-3" />
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Location</p>
                <p className="font-medium text-black text-sm">{place.location}</p>
              </div>
              
              <div className="bg-white p-6 text-center hover:bg-gray-50 transition-colors">
                <Calendar className="w-6 h-6 text-black mx-auto mb-3" />
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Best Time</p>
                <p className="font-medium text-black text-sm">{place.bestTimeToVisit}</p>
              </div>
              
              <div className="bg-white p-6 text-center hover:bg-gray-50 transition-colors">
                <DollarSign className="w-6 h-6 text-black mx-auto mb-3" />
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Entry Fee</p>
                <p className="font-medium text-black text-sm">{place.entryFee}</p>
              </div>

              <div className="bg-white p-6 text-center hover:bg-gray-50 transition-colors">
                <Clock className="w-6 h-6 text-black mx-auto mb-3" />
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Duration</p>
                <p className="font-medium text-black text-sm">{place.visitDuration}</p>
              </div>
            </div> */}

            {/* About Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-light text-black mb-3 tracking-tight">
                  About {place.title}
                </h2>
                
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-md">
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto px-4 leading-relaxed whitespace-pre-line font-dm-sans">
                  {place.fullDescription}
                </p>
              </div>
            </div>

            {/* Gallery Section */}
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <ImageIcon className="w-6 h-6 text-black mr-3" />
                  <h2 className="text-3xl font-light text-black tracking-tight">
                    Photo Gallery
                  </h2>
                </div>
                <div className="w-16 h-px bg-black"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-300 border border-gray-300">
                {place.gallery.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative aspect-square cursor-pointer overflow-hidden group bg-white"
                    onClick={() => openGallery(index)}
                  >
                    <Image
                      src={image.url}
                      alt={image.caption}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-500" />
                    
                    {/* Image Number Overlay */}
                    <div className="absolute top-4 left-4 w-10 h-10 border border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white text-sm font-medium">{index + 1}</span>
                    </div>

                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-xs">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1 mt-[70px]">
            <div className="sticky top-32 space-y-6">
              {/* Visit Planning */}
              <div className="bg-black text-white p-8">
                <h3 className="text-sm font-medium mb-6 tracking-widest uppercase">
                  Plan Your Visit
                </h3>
                <div className="space-y-4">
                  <Link href="/#book">
                    <button className="w-full bg-white text-black py-4 hover:bg-gray-100 transition-colors tracking-widest text-sm font-medium">
                      BOOK A TOUR
                    </button>
                  </Link>
                  <Link href="/Contact/#Contact">
                    <button className="w-full border border-white text-white py-4 hover:bg-white hover:text-black transition-colors tracking-widest text-sm font-medium">
                      ASK A QUESTION
                    </button>
                  </Link>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white border border-gray-200 p-6 rounded-md">
                <h3 className="text-sm font-medium text-black mb-6 tracking-widest uppercase">
                  Visitor Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-black mr-2" />
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Best Time</h4>
                    </div>
                    <p className="text-sm text-gray-700 pl-6">{place.bestTimeToVisit}</p>
                  </div>
                  
                  <div className="h-px bg-gray-200"></div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-black mr-2" />
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</h4>
                    </div>
                    <p className="text-sm text-gray-700 pl-6">{place.visitDuration}</p>
                  </div>
                  
                  <div className="h-px bg-gray-200"></div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-4 h-4 text-black mr-2" />
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Entry Fee</h4>
                    </div>
                    <p className="text-sm text-gray-700 pl-6">{place.entryFee}</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border p-6 rounded-md">
                <div className="flex items-center mb-6">
                  <Info className="w-5 h-5 text-black mr-2" />
                  <h3 className="text-sm font-medium text-black tracking-widest uppercase">
                    Need Help?
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+94777288286"
                    className="flex items-center text-gray-700 hover:text-black transition-colors group text-sm"
                  >
                    <span className="group-hover:underline">+94 77 728 8286</span>
                  </a>
                  
                  <a 
                    href="mailto:info@mihithlankatours.com"
                    className="flex items-center text-gray-700 hover:text-black transition-colors group text-sm"
                  >
                    <span className="group-hover:underline break-all">info@mihithlankatours.com</span>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href="https://wa.me/94777288286"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-[#25D366] text-white py-3 hover:bg-[#128C7E] transition-colors tracking-widest text-xs font-medium"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2" />
                    WHATSAPP
                  </a>
                </div>
              </div>

              {/* Explore More */}
              <div className="bg-white border border-gray-200 p-6 rounded-md">
                <h3 className="text-sm font-medium text-black mb-4 tracking-widest uppercase">
                  Explore More
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/places/#Gallery"
                    className="block text-sm text-gray-700 hover:text-black transition-colors border-l-2 border-transparent hover:border-black pl-3"
                  >
                    All Places
                  </Link>
                  <Link 
                    href="/packages"
                    className="block text-sm text-gray-700 hover:text-black transition-colors border-l-2 border-transparent hover:border-black pl-3"
                  >
                    Tour Packages
                  </Link>
                  <Link 
                    href="/#About"
                    className="block text-sm text-gray-700 hover:text-black transition-colors border-l-2 border-transparent hover:border-black pl-3"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-16 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Ready to Visit {place.title}?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Include this amazing destination in your Sri Lankan adventure. Contact us to customize your perfect itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Contact/#Contact">
              <button className="bg-white text-black px-10 py-4 hover:bg-gray-100 transition-colors tracking-widest text-sm font-medium">
                CONTACT US
              </button>
            </Link>
            <Link href="/#book">
              <button className="border border-white text-white px-10 py-4 hover:bg-white hover:text-black transition-colors tracking-widest text-sm font-medium">
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-2 border border-white/30 hover:bg-white/10"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Previous Button */}
          <button
            onClick={previousImage}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors p-2 border border-white/30 hover:bg-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors p-2 border border-white/30 hover:bg-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div className="w-full max-w-6xl mx-4">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={place.gallery[imageIndex].url}
                alt={place.gallery[imageIndex].caption}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-white text-lg mb-2">
                {place.gallery[imageIndex].caption}
              </p>
              <p className="text-white/60 text-sm tracking-wider">
                {imageIndex + 1} / {place.gallery.length}
              </p>
            </div>

            {/* Keyboard Hint */}
            <div className="mt-8 text-center">
              <p className="text-white/40 text-xs tracking-wider">
                USE ARROW KEYS TO NAVIGATE • ESC TO CLOSE
              </p>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default PlaceDetails;
