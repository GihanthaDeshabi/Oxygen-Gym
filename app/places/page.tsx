"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import featuredPlaces from "@/constants/TravelPlaces";

const PlacesPage = () => {
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-[120px]" id="Gallery">
      {/* Cover Image */}
      <div className="relative w-full h-96 mb-12 mt-[80px]">
        <Image
          src="/25.jpg"
          alt="Explore Sri Lanka"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light  text-white text-center mb-6 mt-12">Explore Sri Lanka</h1>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light  text-gray-800 text-center mb-6 mt-12">
        Top Destinations in Sri Lanka
      </h2>
      <p className="text-[#4A4A4A] font-dm-sans max-w-2xl mx-auto text-center mb-16">Discover the enchanting beauty of Sri Lanka, a land of diverse experiences that captivate every traveler.</p>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPlaces.map((place) => (
          <div
            key={place.title}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden h-[300px] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image Container */}
            <div className="absolute inset-0">
              <Image
                src={place.image}
                alt={place.title}
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content Section */}
            <div className="relative h-full p-6 flex flex-col justify-end text-white font-dm-sans">
              <h3 className="text-xl font-bold mb-2">{place.title}</h3>
              <p className="text-sm mb-4 text-gray-200">{place.description}</p>
              <Link
                href={`/places/${createSlug(place.title)}`}
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white w-fit"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;