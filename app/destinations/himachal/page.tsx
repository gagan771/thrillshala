import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingButton } from "@/components/booking-button"

export default function HimachalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Himachal Pradesh"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-blue-500 text-white mb-4">Hill Station</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Himachal Pradesh</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Discover the beauty of the Himalayas with snow-capped peaks, apple orchards, and hill stations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About Himachal Pradesh</h2>
                <p className="text-gray-600 leading-relaxed">
                  Himachal Pradesh, nestled in the Western Himalayas, is renowned for its scenic beauty, adventure
                  sports, and hill stations like Shimla, Manali, and Dharamshala. Perfect for both relaxation and
                  adventure.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Available Tours</h3>
                <div className="space-y-2 text-sm">
                  <div>Shimla Manali Package - ₹14,999</div>
                  <div>Hampta Pass Trek - ₹12,999</div>
                </div>
                <BookingButton tourName="Himachal Adventure" tourPrice="From ₹12,999" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
