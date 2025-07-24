import Image from "next/image"
import { MapPin, Waves } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingButton } from "@/components/booking-button"

export default function KeralaPage() {
  const attractions = [
    {
      name: "Alleppey Backwaters",
      description: "Serene network of canals, rivers, and lakes with traditional houseboats",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800",
    },
    {
      name: "Munnar Tea Gardens",
      description: "Rolling hills covered with lush green tea plantations",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
    },
    {
      name: "Kochi Fort",
      description: "Historic port city with colonial architecture and Chinese fishing nets",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
    },
    {
      name: "Thekkady Wildlife",
      description: "Periyar National Park with elephants, tigers, and spice plantations",
      image: "https://images.unsplash.com/photo-1704021717759-15cf9ca938cf?q=80&w=800",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kerala Backwaters"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-green-500 text-white mb-4">Tropical Paradise</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kerala - God's Own Country</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Experience the tranquil backwaters, lush tea gardens, and rich cultural heritage of Kerala
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4" />
                <span>Backwaters & Beaches</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>South India</span>
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
                <h2 className="text-2xl font-bold mb-4">About Kerala</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kerala, known as "God's Own Country," is a tropical paradise on India's southwestern coast. Famous for
                  its serene backwaters, pristine beaches, lush hill stations, and rich cultural heritage, Kerala offers
                  a perfect blend of natural beauty and traditional charm.
                </p>
              </CardContent>
            </Card>

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
                      </div>
                      <h3 className="font-semibold mb-1">{attraction.name}</h3>
                      <p className="text-sm text-gray-600">{attraction.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Climate:</span>
                    <span className="font-medium">Tropical</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Oct - March</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">Malayalam</span>
                  </div>
                </div>

                <BookingButton tourName="Kerala Backwaters Tour" tourPrice="From ₹12,999" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
