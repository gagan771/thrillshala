import Image from "next/image"
import { Calendar, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function KashmirTripPage() {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Srinagar",
      description: "Arrive in Srinagar, check-in to houseboat. Evening Shikara ride on Dal Lake.",
      highlights: ["Dal Lake", "Shikara Ride", "Houseboat Stay"],
    },
    {
      day: 2,
      title: "Srinagar Sightseeing",
      description: "Visit Mughal Gardens, Shankaracharya Temple, and explore local markets.",
      highlights: ["Nishat Bagh", "Shalimar Bagh", "Shankaracharya Temple"],
    },
    {
      day: 3,
      title: "Srinagar to Gulmarg",
      description: "Drive to Gulmarg, enjoy Gondola ride and snow activities (seasonal).",
      highlights: ["Gondola Ride", "Apharwat Peak", "Snow Activities"],
    },
    {
      day: 4,
      title: "Gulmarg to Pahalgam",
      description: "Journey to Pahalgam, visit Betaab Valley and Aru Valley.",
      highlights: ["Betaab Valley", "Aru Valley", "Lidder River"],
    },
    {
      day: 5,
      title: "Pahalgam Exploration",
      description: "Full day exploring Chandanwari and Baisaran meadows.",
      highlights: ["Chandanwari", "Baisaran", "Mini Switzerland"],
    },
    {
      day: 6,
      title: "Pahalgam to Srinagar",
      description: "Return to Srinagar, shopping at Lal Chowk and local handicrafts.",
      highlights: ["Shopping", "Local Cuisine", "Handicrafts"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kashmir Valley"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-orange-500 text-white mb-4">6 Days Tour</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kashmir Paradise</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Discover the heaven on earth with pristine lakes, snow-capped mountains, and Mughal gardens
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
                <span>Jammu & Kashmir</span>
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
                <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Experience the breathtaking beauty of Kashmir, rightfully called "Paradise on Earth". This carefully
                  crafted 6-day journey takes you through the most scenic locations including the famous Dal Lake,
                  snow-covered peaks of Gulmarg, and the pristine valleys of Pahalgam. Enjoy traditional houseboat
                  stays, Shikara rides, and immerse yourself in the rich Kashmiri culture and hospitality.
                </p>
              </CardContent>
            </Card>

            {/* Itinerary */}
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

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹18,999</div>
                  <div className="text-sm text-gray-500">per person</div>
                  <div className="text-xs text-gray-400 line-through">₹22,999</div>
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
