import Image from "next/image"
import { Calendar, Users, MapPin, Star, Check, Camera, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingButton } from "@/components/booking-button"

export default function SrinagarGulmargPahalgamPage() {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Srinagar",
      description: "Arrive at Srinagar Airport, transfer to houseboat on Dal Lake. Evening Shikara ride.",
      highlights: ["Airport Transfer", "Houseboat Check-in", "Shikara Ride", "Dal Lake"],
    },
    {
      day: 2,
      title: "Srinagar Sightseeing",
      description: "Visit Mughal Gardens - Nishat, Shalimar, Chashme Shahi. Explore Shankaracharya Temple.",
      highlights: ["Nishat Bagh", "Shalimar Bagh", "Chashme Shahi", "Shankaracharya Temple"],
    },
    {
      day: 3,
      title: "Srinagar to Gulmarg",
      description: "Drive to Gulmarg (52km). Enjoy Gondola ride to Apharwat Peak. Snow activities (seasonal).",
      highlights: ["Gulmarg Gondola", "Apharwat Peak", "Snow Activities", "Golf Course"],
    },
    {
      day: 4,
      title: "Gulmarg to Pahalgam",
      description: "Drive to Pahalgam via Awantipora ruins. Check-in and explore Betaab Valley.",
      highlights: ["Awantipora Ruins", "Betaab Valley", "Lidder River", "Local Market"],
    },
    {
      day: 5,
      title: "Pahalgam Exploration",
      description: "Visit Aru Valley, Baisaran meadows (Mini Switzerland), and Chandanwari.",
      highlights: ["Aru Valley", "Baisaran Meadows", "Chandanwari", "Pony Rides"],
    },
    {
      day: 6,
      title: "Pahalgam to Srinagar - Departure",
      description: "Return to Srinagar, shopping at Lal Chowk. Transfer to airport for departure.",
      highlights: ["Shopping", "Lal Chowk", "Local Handicrafts", "Airport Transfer"],
    },
  ]

  const inclusions = [
    "5 Nights accommodation (2N Houseboat + 3N Hotels)",
    "Daily breakfast and dinner",
    "All transfers and sightseeing by private vehicle",
    "Shikara ride on Dal Lake",
    "Gulmarg Gondola tickets (Phase 1)",
    "Professional guide",
    "All permits and taxes",
    "24/7 customer support",
  ]

  const exclusions = [
    "Airfare to/from Srinagar",
    "Lunch and personal expenses",
    "Gondola Phase 2 tickets",
    "Adventure activities charges",
    "Tips and gratuities",
    "Travel insurance",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Srinagar Gulmarg Pahalgam"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-orange-500 text-white mb-4">6 Days Package</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Srinagar Gulmarg Pahalgam</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Experience the classic Kashmir triangle - from the serene Dal Lake to the snow-capped peaks of Gulmarg and
              the pristine valleys of Pahalgam
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>6 Days / 5 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2-12 People</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kashmir Valley</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Package Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Discover the enchanting beauty of Kashmir with our classic triangle tour covering Srinagar, Gulmarg,
                  and Pahalgam. This 6-day journey takes you through the most iconic destinations of Kashmir, offering a
                  perfect blend of natural beauty, adventure, and cultural experiences.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Stay in traditional houseboats on Dal Lake, experience the thrill of Gulmarg's Gondola ride, and
                  explore the pristine valleys of Pahalgam. This package is perfect for families, couples, and groups
                  looking for a comprehensive Kashmir experience.
                </p>
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-orange-500 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                          Day {day.day}
                        </Badge>
                        <h3 className="text-lg font-semibold">{day.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-3">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-600">What's Included</h3>
                  <div className="space-y-2">
                    {inclusions.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-600">What's Not Included</h3>
                  <div className="space-y-2">
                    {exclusions.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">×</span>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Photo Gallery */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Camera className="w-6 h-6" />
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600",
                    "https://images.unsplash.com/photo-1704021717759-15cf9ca938cf?q=80&w=600",
                    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=600",
                    "https://images.unsplash.com/photo-1704114458458-aa6e39150f02?q=80&w=600",
                    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600",
                  ].map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Kashmir ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹18,999</div>
                  <div className="text-sm text-gray-500">per person</div>
                  <div className="text-xs text-gray-400 line-through">₹22,999</div>
                  <Badge className="bg-green-100 text-green-800 mt-2">Save ₹4,000</Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">6 Days / 5 Nights</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-medium">2-12 People</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">Easy</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">April - October</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.8/5</span>
                  <span className="text-xs text-gray-500">(156 reviews)</span>
                </div>

                <BookingButton tourName="Srinagar Gulmarg Pahalgam Package" tourPrice="₹18,999" />
                <Button
                  variant="outline"
                  className="w-full rounded-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent mt-3"
                >
                  Customize Package
                </Button>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Package Highlights</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>2 Nights Houseboat Stay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>Gulmarg Gondola Ride</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-orange-500" />
                    <span>Betaab Valley Visit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>Professional Guide</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
