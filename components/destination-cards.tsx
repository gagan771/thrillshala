"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useRef } from "react"

const domesticDestinations = [
  {
    name: "Ladakh",
    subtitle: "Road Trip",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/destinations/ladakh",
    bgColor: "from-blue-900 to-blue-700",
  },
  {
    name: "Kerala",
    subtitle: "Backwaters",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/destinations/kerala",
    bgColor: "from-green-600 to-blue-500",
  },
  {
    name: "HIMACHAL",
    subtitle: "Hill Stations",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/destinations/himachal",
    bgColor: "from-gray-600 to-gray-800",
  },
  {
    name: "GOA",
    subtitle: "Beaches",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/destinations/goa",
    bgColor: "from-teal-600 to-green-600",
  },
  {
    name: "ANDAMAN NICOBAR",
    subtitle: "Islands",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/destinations/andaman",
    bgColor: "from-blue-800 to-blue-900",
  },
  {
    name: "Kashmir",
    subtitle: "Paradise",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/destinations/kashmir",
    bgColor: "from-blue-400 to-blue-600",
  },
]

const tourPackages = [
  {
    name: "SPITI VALLEY",
    subtitle: "7 Days Adventure",
    price: "₹24,999",
    duration: "7D/6N",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/tours/spiti-7-days",
    bgColor: "from-blue-900 to-blue-700",
  },
  {
    name: "KASHMIR PARADISE",
    subtitle: "Heaven on Earth",
    price: "₹18,999",
    duration: "6D/5N",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/tours/kashmir-trip",
    bgColor: "from-green-600 to-blue-500",
  },
  {
    name: "SHIMLA MANALI",
    subtitle: "Hill Station Special",
    price: "₹14,999",
    duration: "5D/4N",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/tours/shimla-package",
    bgColor: "from-gray-600 to-gray-800",
  },
  {
    name: "GIRLS ONLY TREK",
    subtitle: "Women Empowerment",
    price: "From ₹3,999",
    duration: "2-6 Days",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/tours/girls-only-trek",
    bgColor: "from-pink-600 to-purple-600",
  },
  {
    name: "HAMPTA PASS",
    subtitle: "Trekking Adventure",
    price: "₹12,999",
    duration: "5D/4N",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/tours/hampta-pass-trek",
    bgColor: "from-blue-800 to-blue-900",
  },
  {
    name: "GULMARG SONAMARG",
    subtitle: "Kashmir Meadows",
    price: "₹16,999",
    duration: "4D/3N",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/tours/gulmarg-sonamarg",
    bgColor: "from-blue-400 to-blue-600",
  },
]

function DestinationCard({ destination }: { destination: any }) {
  const CardContent = (
    <div
      className={`relative h-80 w-64 rounded-3xl overflow-hidden flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl`}
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${destination.image})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-6">
        {destination.duration && (
          <div className="absolute top-4 right-4 bg-orange-500/90 px-2 py-1 rounded-full text-xs font-medium">
            {destination.duration}
          </div>
        )}
        <h3 className="text-2xl font-bold text-center mb-2">{destination.name}</h3>
        {destination.subtitle && (
          <p className="text-lg opacity-90 bg-orange-500/80 px-3 py-1 rounded-full text-sm mb-2">
            {destination.subtitle}
          </p>
        )}
        {destination.price && <p className="text-lg font-bold text-orange-300">{destination.price}</p>}
      </div>
    </div>
  )

  if (destination.link) {
    return <Link href={destination.link}>{CardContent}</Link>
  }

  return CardContent
}

export function DestinationCards() {
  const tourPackagesRef = useRef<HTMLDivElement>(null)
  const domesticDestinationsRef = useRef<HTMLDivElement>(null)

  const slideLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: "smooth",
      })
    }
  }

  const slideRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Tour Packages */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Featured Tour Packages
            </h2>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-100 rounded-full"
                onClick={() => slideLeft(tourPackagesRef)}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-100 rounded-full"
                onClick={() => slideRight(tourPackagesRef)}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4" ref={tourPackagesRef}>
            {tourPackages.map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>
        </div>

        {/* Your Experience, Our Guarantee */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Your Experience, Our Guarantee
            </h2>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-100 rounded-full"
                onClick={() => slideLeft(domesticDestinationsRef)}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-100 rounded-full"
                onClick={() => slideRight(domesticDestinationsRef)}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4" ref={domesticDestinationsRef}>
            {domesticDestinations.map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}