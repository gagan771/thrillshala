import Image from "next/image"
import { Users, Heart, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingButton } from "@/components/booking-button"

export default function KashmirHoneymoonSpecialPage() {
  const itinerary = [
    {
      day: 1,
      title: "Romantic Arrival in Srinagar",
      description: "VIP airport pickup, welcome with flowers, check-in to luxury houseboat with romantic decoration.",
      highlights: ["VIP Pickup", "Flower Welcome", "Luxury Houseboat", "Romantic Setup"],
    },
    {
      day: 2,
      title: "Private Shikara & Mughal Gardens",
      description: "Private Shikara ride at sunrise, visit Mughal Gardens, candlelight dinner on houseboat.",
      highlights: ["Sunrise Shikara", "Mughal Gardens", "Private Guide", "Candlelight Dinner"],
    },
    {
      day: 3,
      title: "Gulmarg - Meadow of Flowers",
      description: "Drive to Gulmarg, Gondola ride, couple photography session, luxury hotel check-in.",
      highlights: ["Gulmarg Gondola", "Couple Photography", "Luxury Hotel", "Mountain Views"],
    },
    {
      day: 4,
      title: "Pahalgam - Valley of Shepherds",
      description: "Drive to Pahalgam, visit Betaab Valley, romantic picnic by Lidder River, spa session.",
      highlights: ["Betaab Valley", "Romantic Picnic", "Lidder River", "Couple Spa"],
    },
    {
      day: 5,
      title: "Farewell Kashmir",
      description: "Shopping for souvenirs, farewell lunch, airport transfer with memories to cherish forever.",
      highlights: ["Shopping", "Farewell Lunch", "Souvenirs", "Airport Transfer"],
    },
  ]

  const specialInclusions = [
    "Luxury houseboat with romantic decoration",
    "Private Shikara rides",
    "Candlelight dinner on houseboat",
    "Couple photography session",
    "Spa session for couple",
    "Welcome flowers and cake",
    "Romantic picnic setup",
    "VIP airport transfers",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kashmir Honeymoon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/60 to-purple-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-pink-500 text-white mb-4">Honeymoon Special</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kashmir Honeymoon Special</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Create magical memories in paradise with our exclusive honeymoon package designed for couples
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Romantic Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Luxury Treatment</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Couples Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Romantic Kashmir Experience</h2>
                <p className="text-gray-600 leading-relaxed">
                  Begin your journey of love in the paradise on earth. Our Kashmir Honeymoon Special is crafted
                  exclusively for couples, offering intimate experiences, luxury accommodations, and romantic moments
                  that will create memories to last a lifetime. From private Shikara rides to candlelight dinners, every
                  detail is designed to celebrate your love.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Romantic Itinerary</h2>
                <div className="space-y-6">
                  {itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-pink-500 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="bg-pink-50 text-pink-600 border-pink-200">
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

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-pink-600">Special Romantic Inclusions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specialInclusions.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-pink-600 mb-2">₹25,999</div>
                  <div className="text-sm text-gray-500">per couple</div>
                  <div className="text-xs text-gray-400 line-through">₹29,999</div>
                  <Badge className="bg-pink-100 text-pink-800 mt-2">Honeymoon Special</Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">5 Days / 4 Nights</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Accommodation:</span>
                    <span className="font-medium">Luxury Hotels</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Meals:</span>
                    <span className="font-medium">All Included</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">April - October</span>
                  </div>
                </div>

                <BookingButton tourName="Kashmir Honeymoon Special" tourPrice="₹25,999" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
