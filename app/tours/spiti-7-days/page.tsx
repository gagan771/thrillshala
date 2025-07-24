import Image from "next/image"
import { Calendar, Users, MapPin, Star, Check, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingButton } from "@/components/booking-button"

export default function Spiti7DaysPage() {
  const itinerary = [
    {
      day: 1,
      title: "Delhi to Shimla",
      description: "Journey from Delhi to Shimla via Chandigarh. Check-in to hotel and explore Mall Road.",
      highlights: ["Mall Road", "Christ Church", "Ridge Ground"],
    },
    {
      day: 2,
      title: "Shimla to Kalpa",
      description: "Drive through scenic Kinnaur valley to reach Kalpa with stunning Kailash range views.",
      highlights: ["Kinnaur Valley", "Kailash Range", "Apple Orchards"],
    },
    {
      day: 3,
      title: "Kalpa to Tabo",
      description: "Enter Spiti Valley and visit the ancient Tabo Monastery, known as 'Ajanta of Himalayas'.",
      highlights: ["Tabo Monastery", "Spiti River", "Ancient Caves"],
    },
    {
      day: 4,
      title: "Tabo to Kaza",
      description: "Explore Key Monastery and Kibber Village, one of the highest motorable villages.",
      highlights: ["Key Monastery", "Kibber Village", "Spiti Valley Views"],
    },
    {
      day: 5,
      title: "Kaza Exploration",
      description: "Visit Chandratal Lake, the 'Moon Lake' of Spiti with crystal clear waters.",
      highlights: ["Chandratal Lake", "Kunzum Pass", "Photography"],
    },
    {
      day: 6,
      title: "Kaza to Manali",
      description: "Cross Rohtang Pass and descend to Manali through Lahaul Valley.",
      highlights: ["Rohtang Pass", "Lahaul Valley", "Manali"],
    },
    {
      day: 7,
      title: "Manali to Delhi",
      description: "Departure from Manali to Delhi with beautiful memories of Spiti.",
      highlights: ["Shopping", "Local Cuisine", "Departure"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Spiti Valley"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-orange-500 text-white mb-4">7 Days Tour</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Spiti Valley Adventure</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Experience the mystical beauty of the Himalayas in the cold desert of Spiti Valley
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>7 Days / 6 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2-15 People</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Himachal Pradesh</span>
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
                  Embark on an unforgettable journey through the mystical Spiti Valley, often called the "Middle Land"
                  between India and Tibet. This 7-day adventure takes you through ancient monasteries, pristine lakes,
                  and some of the world's highest motorable villages. Experience the raw beauty of the Himalayas,
                  interact with warm local communities, and witness landscapes that seem from another planet.
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

            {/* Photo Gallery */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Camera className="w-6 h-6" />
                  Spiti Valley Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600",
                    "https://images.unsplash.com/photo-1704021717759-15cf9ca938cf?q=80&w=600",
                    "https://images.unsplash.com/photo-1704114458458-aa6e39150f02?q=80&w=600",
                    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=600",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600",
                    "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600",
                  ].map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Spiti Valley ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inclusions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Accommodation in hotels/camps",
                    "All meals (Breakfast, Lunch, Dinner)",
                    "Transportation in Tempo Traveller",
                    "Professional guide",
                    "All permits and entry fees",
                    "First aid kit",
                    "Oxygen cylinder (emergency)",
                    "Photography assistance",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* More Reviews */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Recent Reviews</h2>
                <div className="space-y-6">
                  {[
                    {
                      name: "Ankit Verma",
                      rating: 5,
                      comment:
                        "Spiti Valley is absolutely magical! The monasteries, landscapes, and local culture create an unforgettable experience. Highly recommend this tour!",
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
                      location: "Delhi",
                      date: "December 2024",
                    },
                    {
                      name: "Shreya Gupta",
                      rating: 5,
                      comment:
                        "Best adventure trip ever! The cold desert landscapes and crystal clear lakes are breathtaking. Perfect organization by Thrillshala team.",
                      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100",
                      location: "Mumbai",
                      date: "November 2024",
                    },
                    {
                      name: "Rajesh Kumar",
                      rating: 5,
                      comment:
                        "Spiti exceeded all expectations. The high altitude monasteries and friendly locals made this trip truly special. Will definitely book again!",
                      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
                      location: "Bangalore",
                      date: "October 2024",
                    },
                  ].map((review, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={review.image || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{review.name}</h4>
                          <span className="text-sm text-gray-500">from {review.location}</span>
                          <span className="text-xs text-gray-400">• {review.date}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹24,999</div>
                  <div className="text-sm text-gray-500">per person</div>
                  <div className="text-xs text-gray-400 line-through">₹29,999</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">7 Days / 6 Nights</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-medium">2-15 People</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">Moderate</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">May - October</span>
                  </div>
                </div>

                <BookingButton tourName="Spiti Valley 7 Days Adventure" tourPrice="₹24,999" />
                <Button
                  variant="outline"
                  className="w-full rounded-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Customize Tour
                </Button>
              </CardContent>
            </Card>

            {/* Rating */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Customer Reviews</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.8/5</span>
                  <span className="text-xs text-gray-500">(124 reviews)</span>
                </div>
                <p className="text-sm text-gray-600">
                  "Amazing experience! The landscapes were breathtaking and the guide was very knowledgeable."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
