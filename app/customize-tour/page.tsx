"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Users, MapPin, Plus, Minus, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CustomizeTourPage() {
  const [peopleCount, setPeopleCount] = useState(2)
  const [duration, setDuration] = useState(5)
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([])
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])

  const destinations = [
    {
      id: "spiti",
      name: "Spiti Valley",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=400",
    },
    {
      id: "kashmir",
      name: "Kashmir",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=400",
    },
    { id: "shimla", name: "Shimla", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=400" },
    { id: "manali", name: "Manali", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=400" },
    { id: "ladakh", name: "Ladakh", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400" },
    {
      id: "gulmarg",
      name: "Gulmarg",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=400",
    },
    {
      id: "dharamshala",
      name: "Dharamshala",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=400",
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=400",
    },
  ]

  const activities = [
    "Trekking",
    "River Rafting",
    "Paragliding",
    "Skiing",
    "Mountain Biking",
    "Rock Climbing",
    "Camping",
    "Photography",
    "Wildlife Safari",
    "Cultural Tours",
  ]

  const handleDestinationToggle = (destinationId: string) => {
    setSelectedDestinations((prev) =>
      prev.includes(destinationId) ? prev.filter((id) => id !== destinationId) : [...prev, destinationId],
    )
  }

  const handleActivityToggle = (activity: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activity) ? prev.filter((a) => a !== activity) : [...prev, activity],
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Customize Your Adventure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Customize Your Adventure</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Create your perfect trip tailored to your preferences, group size, and budget
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Details */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Basic Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget (₹10,000 - ₹20,000)</SelectItem>
                        <SelectItem value="mid">Mid-range (₹20,000 - ₹40,000)</SelectItem>
                        <SelectItem value="luxury">Luxury (₹40,000+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trip Configuration */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Trip Configuration</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <Label className="text-sm font-medium">Number of People</Label>
                    <div className="flex items-center gap-3 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                        className="rounded-full"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-lg font-semibold w-8 text-center">{peopleCount}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPeopleCount(peopleCount + 1)}
                        className="rounded-full"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Duration (Days)</Label>
                    <div className="flex items-center gap-3 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDuration(Math.max(1, duration - 1))}
                        className="rounded-full"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-lg font-semibold w-8 text-center">{duration}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDuration(duration + 1)}
                        className="rounded-full"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="travel-date">Preferred Travel Date</Label>
                    <Input id="travel-date" type="date" className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Destination Selection */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Select Destinations</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {destinations.map((destination) => (
                    <div
                      key={destination.id}
                      className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                        selectedDestinations.includes(destination.id)
                          ? "ring-4 ring-orange-500 scale-105"
                          : "hover:scale-105"
                      }`}
                      onClick={() => handleDestinationToggle(destination.id)}
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <h3 className="text-white font-semibold text-sm">{destination.name}</h3>
                        </div>
                        {selectedDestinations.includes(destination.id) && (
                          <div className="absolute top-2 right-2 bg-orange-500 rounded-full p-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activities Selection */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Preferred Activities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {activities.map((activity) => (
                    <div key={activity} className="flex items-center space-x-2">
                      <Checkbox
                        id={activity}
                        checked={selectedActivities.includes(activity)}
                        onCheckedChange={() => handleActivityToggle(activity)}
                      />
                      <Label htmlFor={activity} className="text-sm font-medium cursor-pointer">
                        {activity}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Requirements */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Special Requirements</h2>
                <Textarea
                  placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific preferences..."
                  className="min-h-[120px]"
                />
              </CardContent>
            </Card>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Trip Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">People:</span>
                    <span className="font-medium">
                      {peopleCount} {peopleCount === 1 ? "Person" : "People"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{duration} Days</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Destinations:</span>
                    <span className="font-medium">{selectedDestinations.length} Selected</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Activities:</span>
                    <span className="font-medium">{selectedActivities.length} Selected</span>
                  </div>
                </div>

                {selectedDestinations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Selected Destinations:</h4>
                    <div className="space-y-1">
                      {selectedDestinations.map((id) => {
                        const destination = destinations.find((d) => d.id === id)
                        return (
                          <div key={id} className="text-sm text-gray-600">
                            • {destination?.name}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-orange-600 mb-2">Estimated Cost</div>
                  <div className="text-sm text-gray-500">
                    ₹{(duration * peopleCount * 3000).toLocaleString()} - ₹
                    {(duration * peopleCount * 5000).toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">*Final cost may vary based on selections</div>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full">
                  <Send className="w-4 h-4 mr-2" />
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Need Help?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>Expert trip planners available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>24/7 customer support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>Flexible booking options</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 rounded-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Call +91 98765 43210
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
