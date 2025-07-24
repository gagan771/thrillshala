"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const destinations = [
  { name: "Bali", icon: "🏛️" },
  { name: "Vietnam", icon: "🏍️" },
  { name: "Thailand", icon: "🏰" },
  { name: "Ladakh", icon: "⛰️" },
  { name: "Spiti Valley", icon: "🏔️" },
  { name: "Maldives", icon: "🏝️" },
  { name: "Dubai", icon: "🏗️" },
  { name: "Kerala", icon: "🌴" },
  { name: "Manali", icon: "🏔️" },
  { name: "Goa", icon: "🏖️" },
]

export function DestinationSelector() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 py-8 border-b border-orange-100 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4 overflow-x-auto scrollbar-hide">
          {destinations.map((destination, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex flex-col items-center space-y-2 min-w-fit px-6 py-4 hover:bg-white hover:shadow-lg rounded-2xl transition-all duration-300 border border-transparent hover:border-orange-200 hover:scale-105"
            >
              <span className="text-3xl drop-shadow-sm">{destination.icon}</span>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{destination.name}</span>
            </Button>
          ))}
          <Button variant="ghost" size="sm" className="ml-2 rounded-full">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
