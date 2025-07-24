import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingButton } from "@/components/booking-button"

export const metadata: Metadata = {
  title: "Himachal Pradesh Tour Packages - Shimla, Manali, Dharamshala | Best Prices",
  description: "Explore the beautiful hills of Himachal Pradesh with our customized tour packages. Visit Shimla, Manali, Dharamshala, Spiti Valley, and more. Mountain adventures, honeymoon packages, and family tours starting from ₹15,999.",
  keywords: [
    "Himachal Pradesh tour packages",
    "Shimla Manali packages",
    "Dharamshala tours",
    "Spiti Valley expedition",
    "Himachal honeymoon packages",
    "Kullu Manali tour",
    "Himachal trekking packages",
    "Dalhousie tour packages",
    "McLeod Ganj tours",
    "Himachal family packages",
    "best Himachal packages",
    "mountain tours Himachal"
  ],
  openGraph: {
    title: "Himachal Pradesh Tour Packages - Mountain Paradise | Thrillshala",
    description: "Discover the scenic beauty of Himachal Pradesh with our expert-crafted tour packages. Shimla, Manali, Dharamshala and more starting from ₹15,999.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Beautiful Himachal Pradesh mountains and valleys",
      },
    ],
    url: "https://thrillshala.com/destinations/himachal",
  },
  twitter: {
    title: "Himachal Pradesh Tour Packages - Mountain Paradise | Thrillshala",
    description: "Discover the scenic beauty of Himachal Pradesh with our expert-crafted tour packages. Shimla, Manali, Dharamshala and more starting from ₹15,999.",
    images: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200"],
  },
  alternates: {
    canonical: "https://thrillshala.com/destinations/himachal",
  },
}

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
