import Image from "next/image"
import { MapPin, Camera, Mountain, Star, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingButton } from "@/components/booking-button"

export default function LadakhPage() {
  const attractions = [
    {
      name: "Pangong Tso Lake",
      description: "Crystal clear high-altitude lake stretching across India and China",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
    },
    {
      name: "Nubra Valley",
      description: "Cold desert with sand dunes and double-humped camels",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
    },
    {
      name: "Magnetic Hill",
      description: "Mysterious hill where vehicles appear to roll uphill",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
    },
    {
      name: "Leh Palace",
      description: "Ancient royal palace overlooking Leh city",
      image: "https://images.unsplash.com/photo-1704021717759-15cf9ca938cf?q=80&w=800",
    },
  ]

  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      comment: "Absolutely breathtaking! The landscapes are out of this world. Best road trip of my life!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
      location: "Mumbai",
    },
    {
      name: "Priya Patel",
      rating: 5,
      comment: "Ladakh is magical! The monasteries, lakes, and mountains create an unforgettable experience.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100",
      location: "Delhi",
    },
    {
      name: "Arjun Singh",
      rating: 5,
      comment: "Perfect for adventure lovers. The high-altitude desert and crystal clear lakes are mesmerizing.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
      location: "Bangalore",
    },
  ]

  const galleryImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600",
    "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600",
    "https://images.unsplash.com/photo-1704021717759-15cf9ca938cf?q=80&w=600",
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=600",
    "https://images.unsplash.com/photo-1704114458458-aa6e39150f02?q=80&w=600",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ladakh Landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-orange-500 text-white mb-4">Adventure Destination</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ladakh - Land of High Passes</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Experience the mystical beauty of the Himalayas in the cold desert of Ladakh, where ancient monasteries
              meet pristine lakes and snow-capped peaks
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mountain className="w-4 h-4" />
                <span>High Altitude: 11,500+ ft</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jammu & Kashmir</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Best Time: May - September</span>
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
                <h2 className="text-2xl font-bold mb-4">About Ladakh</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ladakh, often called "Little Tibet," is a high-altitude desert in the northernmost region of India.
                  This mystical land offers a unique blend of Buddhist culture, dramatic landscapes, and adventure
                  opportunities that attract travelers from around the world.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From the pristine waters of Pangong Tso to the sand dunes of Nubra Valley, Ladakh presents a landscape
                  so diverse and beautiful that it seems almost otherworldly. The region is dotted with ancient
                  monasteries, colorful prayer flags, and warm, welcoming people who have preserved their culture for
                  centuries.
                </p>
              </CardContent>
            </Card>

            {/* Top Attractions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Top Attractions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {attractions.map((attraction, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                        <Image
                          src={attraction.image || "/placeholder.svg"}
                          alt={attraction.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-3 left-3 text-white">
                          <h3 className="font-semibold">{attraction.name}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{attraction.description}</p>
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
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Ladakh ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Traveler Reviews</h2>
                <div className="space-y-6">
                  {reviews.map((review, index) => (
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
            {/* Quick Facts */}
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Altitude:</span>
                    <span className="font-medium">11,500+ ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">May - September</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temperature:</span>
                    <span className="font-medium">-20°C to 30°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">Ladakhi, Hindi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Currency:</span>
                    <span className="font-medium">Indian Rupee</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Available Tours</h4>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <div className="font-medium">Leh Ladakh Road Trip</div>
                      <div className="text-gray-600">6 Days - From ₹18,999</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Ladakh Bike Expedition</div>
                      <div className="text-gray-600">8 Days - From ₹25,999</div>
                    </div>
                  </div>
                </div>

                <BookingButton tourName="Ladakh Adventure" tourPrice="From ₹18,999" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
