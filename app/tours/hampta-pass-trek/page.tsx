import Image from "next/image"
import { Calendar, Users, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HamptaPassTrekPage() {
  const itinerary = [
    {
      day: 1,
      title: "Manali to Chika",
      description: "Drive from Manali to Chika (10,100 ft) and set up base camp.",
      highlights: ["Base Camp Setup", "Acclimatization", "Equipment Check"],
    },
    {
      day: 2,
      title: "Chika to Balu ka Ghera",
      description: "Trek through lush green valleys to Balu ka Ghera (11,900 ft).",
      highlights: ["Green Valleys", "River Crossings", "Alpine Meadows"],
    },
    {
      day: 3,
      title: "Balu ka Ghera to Siagoru via Hampta Pass",
      description: "Cross the challenging Hampta Pass (14,100 ft) and descend to Siagoru.",
      highlights: ["Hampta Pass", "Desert Landscape", "Dramatic Views"],
    },
    {
      day: 4,
      title: "Siagoru to Chatru",
      description: "Trek to Chatru and visit the stunning Chandratal Lake.",
      highlights: ["Chandratal Lake", "Moon Lake", "Photography"],
    },
    {
      day: 5,
      title: "Chatru to Manali",
      description: "Drive back to Manali via Rohtang Pass with memories to cherish.",
      highlights: ["Rohtang Pass", "Scenic Drive", "Completion"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hampta Pass Trek"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-orange-500 text-white mb-4">5 Days Trek</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hampta Pass Trek</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Experience the dramatic transition from lush green valleys to barren desert landscapes
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mountain className="w-4 h-4" />
                <span>14,100 ft</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>5 Days / 4 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>6-15 People</span>
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
                <h2 className="text-2xl font-bold mb-4">Trek Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Hampta Pass Trek is one of the most spectacular treks in Himachal Pradesh, offering a unique
                  experience of crossing from the lush Kullu Valley to the barren Lahaul Valley. This moderate-level
                  trek takes you through diverse landscapes, from green meadows to rocky terrains, culminating at the
                  pristine Chandratal Lake.
                </p>
              </CardContent>
            </Card>

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
          </div>

          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹12,999</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">5 Days / 4 Nights</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">Moderate</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Max Altitude:</span>
                    <span className="font-medium">14,100 ft</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">June - September</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full mb-3">
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Customize Trek
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
