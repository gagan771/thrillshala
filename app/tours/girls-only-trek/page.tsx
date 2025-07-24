import Image from "next/image"
import { Users, Star, Check, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function GirlsOnlyTrekPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Girls Trekking"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/60 to-purple-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-pink-500 text-white mb-4">Girls Only Trek</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Women's Adventure Trek</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Empowering women through safe, supportive, and adventurous trekking experiences
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Safe Environment</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Female Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Women Only Groups</span>
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
                <h2 className="text-2xl font-bold mb-4">Why Choose Our Girls Only Trek?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-pink-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Safe Environment</h3>
                      <p className="text-sm text-gray-600">
                        Carefully curated safe spaces with experienced female guides and support staff.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-pink-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Supportive Community</h3>
                      <p className="text-sm text-gray-600">
                        Build lasting friendships with like-minded adventurous women.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-pink-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Expert Female Guides</h3>
                      <p className="text-sm text-gray-600">
                        Led by certified female mountaineers and trekking experts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-pink-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Empowerment Focus</h3>
                      <p className="text-sm text-gray-600">
                        Build confidence, strength, and leadership skills through adventure.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Available Trek Options</h2>
                <div className="space-y-4">
                  {[
                    { name: "Triund Trek", difficulty: "Easy", duration: "2 Days", price: "₹3,999" },
                    { name: "Hampta Pass Trek", difficulty: "Moderate", duration: "5 Days", price: "₹12,999" },
                    { name: "Valley of Flowers", difficulty: "Moderate", duration: "6 Days", price: "₹15,999" },
                    { name: "Kedarkantha Trek", difficulty: "Moderate", duration: "6 Days", price: "₹13,999" },
                  ].map((trek, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-pink-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{trek.name}</h3>
                          <div className="flex gap-4 text-sm text-gray-600 mt-1">
                            <span>Difficulty: {trek.difficulty}</span>
                            <span>Duration: {trek.duration}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-pink-600">{trek.price}</div>
                          <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full mt-2">
                            Book Now
                          </Button>
                        </div>
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
                <h3 className="font-semibold mb-4 text-pink-600">Special Features</h3>
                <div className="space-y-3">
                  {[
                    "Female trek leaders",
                    "Women-only accommodation",
                    "Safety workshops",
                    "Photography sessions",
                    "Wellness activities",
                    "Confidence building exercises",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full mt-6">
                  Join Our Community
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
