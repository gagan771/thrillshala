import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Users, Star, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kashmir Tour Packages - Srinagar, Gulmarg, Pahalgam | Starting ₹18,999",
  description: "Explore paradise with our Kashmir tour packages. Visit Srinagar Dal Lake, Gulmarg skiing, Pahalgam valleys, and Kashmir Great Lakes Trek. Customized honeymoon and family packages from ₹18,999. Book now!",
  keywords: [
    "Kashmir tour packages",
    "Srinagar Gulmarg Pahalgam package",
    "Kashmir honeymoon packages", 
    "Kashmir Great Lakes trek",
    "Dal Lake houseboat",
    "Gulmarg gondola",
    "Kashmir valley tour",
    "Sonamarg packages",
    "Kashmir family tours",
    "best Kashmir packages",
    "Kashmir trip cost",
    "Kashmir tourism packages"
  ],
  openGraph: {
    title: "Kashmir Tour Packages - Paradise on Earth | Thrillshala",
    description: "Discover the breathtaking beauty of Kashmir with our customized tour packages. Dal Lake, Gulmarg, Pahalgam, and more starting from ₹18,999.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Beautiful Kashmir valley with snow-capped mountains and Dal Lake",
      },
    ],
    url: "https://thrillshala.com/destinations/kashmir",
  },
  twitter: {
    title: "Kashmir Tour Packages - Paradise on Earth | Thrillshala", 
    description: "Discover the breathtaking beauty of Kashmir with our customized tour packages. Dal Lake, Gulmarg, Pahalgam, and more starting from ₹18,999.",
    images: ["https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200"],
  },
  alternates: {
    canonical: "https://thrillshala.com/destinations/kashmir",
  },
}

export default function KashmirDestinationPage() {
  const kashmirPackages = [
    {
      id: "srinagar-gulmarg-pahalgam",
      name: "Srinagar Gulmarg Pahalgam",
      subtitle: "Classic Kashmir Triangle",
      duration: "6 Days / 5 Nights",
      price: "₹18,999",
      originalPrice: "₹22,999",
      rating: 4.8,
      reviews: 156,
      groupSize: "2-12 People",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
      highlights: ["Dal Lake", "Gulmarg Gondola", "Betaab Valley"],
      bestTime: "Apr - Oct",
    },
    {
      id: "kashmir-great-lakes-trek",
      name: "Kashmir Great Lakes Trek",
      subtitle: "Alpine Lakes Adventure",
      duration: "8 Days / 7 Nights",
      price: "₹24,999",
      originalPrice: "₹28,999",
      rating: 4.9,
      reviews: 89,
      groupSize: "6-15 People",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
      highlights: ["7 Alpine Lakes", "High Altitude Trek", "Camping"],
      bestTime: "Jul - Sep",
    },
    {
      id: "kashmir-houseboat-experience",
      name: "Kashmir Houseboat Experience",
      subtitle: "Luxury on Dal Lake",
      duration: "4 Days / 3 Nights",
      price: "₹15,999",
      originalPrice: "₹19,999",
      rating: 4.7,
      reviews: 203,
      groupSize: "2-8 People",
      image: "https://images.unsplash.com/photo-1704021717759-15cf9ca938cf?q=80&w=800",
      highlights: ["Luxury Houseboat", "Shikara Rides", "Mughal Gardens"],
      bestTime: "May - Oct",
    },
    {
      id: "sonamarg-thajiwas-glacier",
      name: "Sonamarg Thajiwas Glacier",
      subtitle: "Golden Meadow Adventure",
      duration: "3 Days / 2 Nights",
      price: "₹12,999",
      originalPrice: "₹15,999",
      rating: 4.6,
      reviews: 124,
      groupSize: "2-10 People",
      image: "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=800",
      highlights: ["Thajiwas Glacier", "Pony Rides", "Snow Activities"],
      bestTime: "May - Sep",
    },
    {
      id: "kashmir-tulip-garden-tour",
      name: "Kashmir Tulip Garden Tour",
      subtitle: "Spring Blossom Special",
      duration: "5 Days / 4 Nights",
      price: "₹16,999",
      originalPrice: "₹20,999",
      rating: 4.8,
      reviews: 167,
      groupSize: "2-15 People",
      image: "https://images.unsplash.com/photo-1704114458458-aa6e39150f02?q=80&w=800",
      highlights: ["Tulip Garden", "Almond Blossoms", "Spring Festival"],
      bestTime: "Mar - Apr",
    },
    {
      id: "kashmir-winter-wonderland",
      name: "Kashmir Winter Wonderland",
      subtitle: "Snow Paradise Experience",
      duration: "6 Days / 5 Nights",
      price: "₹21,999",
      originalPrice: "₹25,999",
      rating: 4.7,
      reviews: 98,
      groupSize: "2-12 People",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      highlights: ["Snow Activities", "Skiing", "Winter Sports"],
      bestTime: "Dec - Feb",
    },
    {
      id: "kashmir-photography-tour",
      name: "Kashmir Photography Tour",
      subtitle: "Capture Paradise",
      duration: "7 Days / 6 Nights",
      price: "₹22,999",
      originalPrice: "₹26,999",
      rating: 4.9,
      reviews: 76,
      groupSize: "4-10 People",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
      highlights: ["Photography Guide", "Sunrise/Sunset", "Hidden Spots"],
      bestTime: "Apr - Oct",
    },
    {
      id: "kashmir-adventure-sports",
      name: "Kashmir Adventure Sports",
      subtitle: "Thrill Seeker's Paradise",
      duration: "5 Days / 4 Nights",
      price: "₹19,999",
      originalPrice: "₹23,999",
      rating: 4.6,
      reviews: 134,
      groupSize: "4-12 People",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800",
      highlights: ["River Rafting", "Paragliding", "Rock Climbing"],
      bestTime: "May - Sep",
    },
    {
      id: "kashmir-spiritual-journey",
      name: "Kashmir Spiritual Journey",
      subtitle: "Sacred Sites & Temples",
      duration: "6 Days / 5 Nights",
      price: "₹17,999",
      originalPrice: "₹21,999",
      rating: 4.8,
      reviews: 112,
      groupSize: "2-15 People",
      image: "https://images.unsplash.com/photo-1704021717759-15cf9ca938cf?q=80&w=800",
      highlights: ["Amarnath Cave", "Vaishno Devi", "Ancient Temples"],
      bestTime: "Jun - Sep",
    },
    {
      id: "kashmir-honeymoon-special",
      name: "Kashmir Honeymoon Special",
      subtitle: "Romantic Paradise",
      duration: "5 Days / 4 Nights",
      price: "₹25,999",
      originalPrice: "₹29,999",
      rating: 4.9,
      reviews: 189,
      groupSize: "2 People",
      image: "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=800",
      highlights: ["Luxury Stay", "Candlelight Dinner", "Private Shikara"],
      bestTime: "Apr - Oct",
    },
    {
      id: "kashmir-family-package",
      name: "Kashmir Family Package",
      subtitle: "Perfect Family Getaway",
      duration: "6 Days / 5 Nights",
      price: "₹16,999",
      originalPrice: "₹20,999",
      rating: 4.7,
      reviews: 145,
      groupSize: "4-12 People",
      image: "https://images.unsplash.com/photo-1704114458458-aa6e39150f02?q=80&w=800",
      highlights: ["Family Activities", "Kid-Friendly", "Safe Transport"],
      bestTime: "May - Sep",
    },
    {
      id: "kashmir-luxury-tour",
      name: "Kashmir Luxury Tour",
      subtitle: "Premium Experience",
      duration: "7 Days / 6 Nights",
      price: "₹35,999",
      originalPrice: "₹42,999",
      rating: 4.9,
      reviews: 67,
      groupSize: "2-8 People",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
      highlights: ["5-Star Hotels", "Private Guide", "Helicopter Ride"],
      bestTime: "Apr - Oct",
    },
    {
      id: "kashmir-budget-tour",
      name: "Kashmir Budget Tour",
      subtitle: "Affordable Paradise",
      duration: "5 Days / 4 Nights",
      price: "₹12,999",
      originalPrice: "₹15,999",
      rating: 4.5,
      reviews: 234,
      groupSize: "4-15 People",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      highlights: ["Budget Friendly", "Group Sharing", "Essential Sights"],
      bestTime: "May - Sep",
    },
    {
      id: "kashmir-cultural-tour",
      name: "Kashmir Cultural Tour",
      subtitle: "Heritage & Traditions",
      duration: "6 Days / 5 Nights",
      price: "₹18,999",
      originalPrice: "₹22,999",
      rating: 4.8,
      reviews: 98,
      groupSize: "2-12 People",
      image: "https://images.unsplash.com/photo-1704021717759-15cf9ca938cf?q=80&w=800",
      highlights: ["Local Culture", "Handicrafts", "Traditional Food"],
      bestTime: "Apr - Oct",
    },
    {
      id: "kashmir-backpacking-adventure",
      name: "Kashmir Backpacking Adventure",
      subtitle: "Explorer's Choice",
      duration: "8 Days / 7 Nights",
      price: "₹14,999",
      originalPrice: "₹18,999",
      rating: 4.6,
      reviews: 156,
      groupSize: "6-15 People",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
      highlights: ["Backpacking", "Local Stay", "Off-beat Places"],
      bestTime: "May - Sep",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              "name": "Kashmir",
              "description": "Paradise on Earth - Kashmir offers breathtaking valleys, pristine lakes, snow-capped mountains, and rich cultural heritage.",
              "url": "https://thrillshala.com/destinations/kashmir",
              "image": "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "34.0837",
                "longitude": "74.7973"
              },
              "touristType": ["Adventure Seekers", "Honeymooners", "Families", "Nature Lovers"],
              "includesAttraction": [
                {
                  "@type": "TouristAttraction",
                  "name": "Dal Lake",
                  "description": "Famous lake with houseboats and shikaras"
                },
                {
                  "@type": "TouristAttraction", 
                  "name": "Gulmarg",
                  "description": "Ski resort and gondola rides"
                },
                {
                  "@type": "TouristAttraction",
                  "name": "Pahalgam",
                  "description": "Beautiful valleys and trekking base"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Kashmir Tour Packages",
              "description": "Complete list of Kashmir tour packages offered by Thrillshala",
              "numberOfItems": 15,
              "itemListElement": kashmirPackages.map((pkg, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "TouristTrip",
                  "name": pkg.name,
                  "description": pkg.subtitle,
                  "url": `https://thrillshala.com/destinations/kashmir/${pkg.id}`,
                  "image": pkg.image,
                  "offers": {
                    "@type": "Offer",
                    "price": pkg.price.replace("₹", "").replace(",", ""),
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2025-01-01",
                    "validThrough": "2025-12-31"
                  },
                  "duration": pkg.duration,
                  "touristType": pkg.groupSize.includes("2 People") ? "Couples" : "Groups",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": pkg.rating,
                    "reviewCount": pkg.reviews,
                    "bestRating": 5,
                    "worstRating": 1
                  }
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the best time to visit Kashmir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best time to visit Kashmir is from April to October for pleasant weather, March-April for tulip gardens, and December-February for snow activities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the main attractions in Kashmir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Main attractions include Dal Lake with houseboats, Gulmarg ski resort, Pahalgam valleys, Sonamarg meadows, and Mughal gardens in Srinagar."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does a Kashmir tour package cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kashmir tour packages range from ₹12,999 for budget tours to ₹35,999 for luxury packages, depending on duration, accommodation, and inclusions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Kashmir safe for tourists?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Kashmir is safe for tourists. We ensure safe transportation, experienced guides, and 24/7 support for all our tour packages."
                  }
                }
              ]
            }
          ])
        }}
      />
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
            <Badge className="bg-blue-500 text-white mb-4">Paradise on Earth</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kashmir Tour Packages</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Discover the heaven on earth with our carefully curated Kashmir tour packages. From luxury experiences to
              adventure treks, find your perfect Kashmir journey.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>15 Different Packages</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Year Round Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>All Group Sizes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Kashmir Adventure</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From romantic honeymoon packages to thrilling adventure tours, we have something special for every traveler.
            Explore our diverse collection of Kashmir tour packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kashmirPackages.map((pkg) => (
            <Card key={pkg.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 text-white">
                    Save ₹
                    {Number.parseInt(pkg.originalPrice.replace("₹", "").replace(",", "")) -
                      Number.parseInt(pkg.price.replace("₹", "").replace(",", ""))}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {pkg.bestTime}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm">{pkg.subtitle}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(pkg.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{pkg.rating}</span>
                  <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-orange-600">{pkg.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <div className="text-xs text-gray-500">per person</div>
                </div>

                <Link href={`/destinations/kashmir/${pkg.id}`}>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
    </>
  )
}
