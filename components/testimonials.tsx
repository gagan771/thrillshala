"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "The Ladakh trip was absolutely incredible! The team at Thrillshala made sure every detail was perfect. The landscapes were breathtaking and the experience was life-changing.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip: "Ladakh Road Trip",
  },
  {
    id: 2,
    name: "Rahul Gupta",
    location: "Delhi, India",
    rating: 5,
    text: "Amazing service and well-organized itinerary for our Bali group trip. The accommodations were excellent and our guide was very knowledgeable. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip: "Bali Group Trip",
  },
  {
    id: 3,
    name: "Sneha Patel",
    location: "Bangalore, India",
    rating: 5,
    text: "The Vietnam adventure exceeded all expectations. From the bustling streets of Ho Chi Minh to the serene beauty of Ha Long Bay, every moment was magical.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip: "Vietnam Explorer",
  },
  {
    id: 4,
    name: "Arjun Singh",
    location: "Pune, India",
    rating: 5,
    text: "Spiti Valley road trip was the adventure of a lifetime! The high-altitude landscapes and Buddhist monasteries created unforgettable memories.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip: "Spiti Valley Adventure",
  },
  {
    id: 5,
    name: "Kavya Reddy",
    location: "Hyderabad, India",
    rating: 5,
    text: "The Maldives honeymoon package was perfect. Crystal clear waters, overwater villas, and exceptional service made our trip truly special.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip: "Maldives Honeymoon",
  },
  {
    id: 6,
    name: "Vikram Mehta",
    location: "Chennai, India",
    rating: 5,
    text: "The Thailand group trip was fantastic! Great organization, amazing food, and wonderful people. The Full Moon Party was an unforgettable experience.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip: "Thailand Adventure",
  },
  {
    id: 7,
    name: "Anita Desai",
    location: "Kolkata, India",
    rating: 5,
    text: "Dubai trip was luxurious and well-planned. From the Burj Khalifa to the desert safari, every moment was perfectly orchestrated. Excellent value for money!",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip: "Dubai Luxury",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our adventurers have to say about their experiences with us.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Auto-play indicator */}
          <div className="flex justify-center mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoPlay}
              className="rounded-full bg-white/80 border-orange-200 text-orange-600 hover:bg-orange-50"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
            </Button>
          </div>

          <div
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-100 transition-all duration-500 hover:shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Quote className="w-12 h-12 text-orange-500 mb-6" />

            <div className="mb-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 min-h-[120px] flex items-center">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16 border-2 border-orange-200">
                  <AvatarImage src={testimonials[currentIndex].image || "/placeholder.svg"} />
                  <AvatarFallback className="bg-orange-500 text-white">
                    {testimonials[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                  <p className="text-orange-600 text-sm font-medium">{testimonials[currentIndex].trip}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-transparent border-orange-200 text-orange-600 hover:bg-orange-50"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-transparent border-orange-200 text-orange-600 hover:bg-orange-50"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 bg-orange-100 rounded-full h-1 overflow-hidden">
            <div
              className="bg-orange-500 h-full transition-all duration-100 ease-linear"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                animation: isAutoPlaying && !isPaused ? "progress 4s linear infinite" : "none",
              }}
            />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-orange-500 scale-125" : "bg-orange-200 hover:bg-orange-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Testimonial counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {testimonials.length}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: ${(1 / testimonials.length) * 100}%; }
        }
      `}</style>
    </div>
  )
}
