import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ShimlaPackagePage() {
  const itinerary = [
    {
      day: 1,
      title: "Delhi to Shimla",
      description: "Journey from Delhi to Shimla. Check-in to hotel and evening at Mall Road.",
      highlights: ["Mall Road", "Ridge", "Christ Church"],
    },
    {
      day: 2,
      title: "Shimla Local Sightseeing",
      description: "Visit Jakhu Temple, Viceregal Lodge, and Summer Hill.",
      highlights: ["Jakhu Temple", "Viceregal Lodge", "Summer Hill"],
    },
    {
      day: 3,
      title: "Shimla to Manali",
      description: "Scenic drive to Manali via Kullu Valley.",
      highlights: ["Kullu Valley", "Beas River", "Mountain Views"],
    },
    {
      day: 4,
      title: "Manali Sightseeing",
      description: "Explore Hadimba Temple, Manu Temple, and Old Manali.",
      highlights: ["Hadimba Temple", "Manu Temple", "Old Manali"],
    },
    {
      day: 5,
      title: "Solang Valley Excursion",
      description: "Adventure activities at Solang Valley and Rohtang Pass (if accessible).",
      highlights: ["Solang Valley", "Adventure Sports", "Rohtang Pass"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shimla Hills"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-orange-500 text-white mb-4">5 Days Tour</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Shimla Manali Package</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Experience the queen of hills and adventure capital of Himachal Pradesh
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Discover the colonial charm of Shimla and the adventure spirit of Manali in this perfect 5-day
                  getaway. Walk through the historic Mall Road, experience the thrill of adventure sports, and create
                  memories amidst the stunning Himalayan landscapes.
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
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹14,999</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full mb-3">
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Customize Tour
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
