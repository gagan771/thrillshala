"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const trendingPackages = [
  {
    title: "Thailand Full Moon Party",
    subtitle: "with Phuket, Krabi & Ko Samui",
    duration: "7 Days 6 Nights",
    originalPrice: "₹ 49,850",
    discountedPrice: "₹ 42,850",
    savings: "Save ₹ 7,000",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-orange-600 to-red-700",
  },
  {
    title: "Vietnam Group Trip",
    subtitle: "Ho Chi Minh, Da Nang, Hoi An, Hanoi",
    duration: "8 Days 7 Nights",
    originalPrice: "₹ 56,850",
    discountedPrice: "₹ 45,850",
    savings: "Save ₹ 11,000",
    image:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-blue-500 to-blue-700",
  },
  {
    title: "Bali Group Trip",
    subtitle: "With ATV & Gili Island",
    duration: "6 Days 7 Nights",
    originalPrice: "₹ 50,100",
    discountedPrice: "₹ 45,900",
    savings: "Save ₹ 4,200",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-green-500 to-blue-600",
  },
  {
    title: "Spiti Valley Road Trip",
    subtitle: "with Chandratal Lake",
    duration: "11 Days 10 Nights",
    originalPrice: "₹ 23,950",
    discountedPrice: "₹ 21,950",
    savings: "Save ₹ 2,000",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-orange-500 to-red-600",
  },
  {
    title: "Leh Ladakh Bike Trip with Turtuk",
    subtitle: "Leh - Nubra - Pangong - Leh",
    duration: "6 Days 5 Nights",
    originalPrice: "₹ 22,950",
    discountedPrice: "₹ 18,700",
    savings: "Save ₹ 4,250",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "from-gray-600 to-gray-800",
  },
]

function TrendingCard({ package: pkg }: { package: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-80 group hover:shadow-xl transition-all duration-300 border border-orange-100">
      <div className={`h-48 relative`}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${pkg.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-2">
            {pkg.savings}
          </Badge>
        </div>
        <h3 className="font-bold text-lg mb-1">{pkg.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{pkg.subtitle}</p>
        <p className="text-gray-500 text-sm mb-4">{pkg.duration}</p>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-orange-600">{pkg.discountedPrice}</span>
          <span className="text-gray-400 line-through text-sm">{pkg.originalPrice}</span>
        </div>
      </div>
    </div>
  )
}

export function TrendingSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
            Trending
          </h2>
          <Button
            variant="ghost"
            size="sm"
            className="text-orange-600 hover:text-orange-700 hover:bg-orange-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
          {trendingPackages.map((pkg, index) => (
            <TrendingCard key={index} package={pkg} />
          ))}
        </div>

        {/* Featured Banner */}
        <div className="mt-16 relative h-64 rounded-3xl overflow-hidden bg-gradient-to-r from-orange-600 to-orange-800">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1704114458458-aa6e39150f02?q=80&w=857&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-orange-800/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-4xl font-bold mb-4">Travel Like</h3>
              <h2 className="text-5xl font-bold mb-4">Aditi Raval</h2>
              <Button className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-6 py-2">
                ✈️ Winter Spiti Itinerary
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
