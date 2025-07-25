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
      id: "Gulmarg-Tour-Package",
      name: "Gulmarg Tour Package",
      subtitle: "3 Days / 2 Nights of Alpine Beauty",
      duration: "3 Days / 2 Nights",
      price: "₹9,999", // Placeholder price
      originalPrice: "₹12,000", // Placeholder originalPrice
      rating: 4.7,
      reviews: 95,
      groupSize: "2-8 People",
      image: "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=800",
      highlights: ["Gulmarg Gondola", "Skiing/Snowboarding", "Golf Course"],
      bestTime: "May - Oct",
    },
    {
      id: "Srinagar-Gulmarg-Package",
      name: "Srinagar Gulmarg Package",
      subtitle: "4 Nights / 5 Days of Meadow & Lake",
      duration: "4 Nights / 5 Days",
      price: "₹14,999", // Placeholder price
      originalPrice: "₹18,000", // Placeholder originalPrice
      rating: 4.6,
      reviews: 110,
      groupSize: "2-10 People",
      image: "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=800",
      highlights: ["Dal Lake", "Shikara Ride", "Gulmarg Gondola", "Drung Waterfall"],
      bestTime: "Apr - Nov",
    },
    {
      id: "Kashmir-Pahalgam-Tour",
      name: "Kashmir Pahalgam Tour",
      subtitle: "4 Days / 3 Nights Valley Retreat",
      duration: "4 Days / 3 Nights",
      price: "₹11,500", // Placeholder price
      originalPrice: "₹14,000", // Placeholder originalPrice
      rating: 4.5,
      reviews: 80,
      groupSize: "2-8 People",
      image: "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=8000",
      highlights: ["Aru Valley", "Betaab Valley", "Lidder River"],
      bestTime: "May - Oct",
    },
    {
      id: "KashmirGulmargTourPackage-5",
      name: "Kashmir Gulmarg Tour Package",
      subtitle: "5 Days / 4 Nights Ski & Scenery",
      duration: "5 Days / 4 Nights",
      price: "₹16,500", // Placeholder price
      originalPrice: "₹20,000", // Placeholder originalPrice
      rating: 4.7,
      reviews: 130,
      groupSize: "2-10 People",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
      highlights: ["Gulmarg Gondola", "Skiing", "Alpather Lake", "Srinagar Highlights"],
      bestTime: "Dec - Mar (Winter Sports)",
    },
    {
      id: "Kashmir-Paradise-Tour-Package",
      name: "Kashmir Paradise Tour Package",
      subtitle: "5 Days / 4 Nights Grand Tour",
      duration: "5 Days / 4 Nights",
      price: "₹18,999", // Placeholder price
      originalPrice: "₹22,999", // Placeholder originalPrice
      rating: 4.8,
      reviews: 150,
      groupSize: "2-12 People",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
      highlights: ["Srinagar", "Gulmarg", "Pahalgam", "Shikara Ride"],
      bestTime: "Apr - Oct",
    },
    {
      id: "Srinagar-Pahalgam-ABC-Valley-package",
      name: "Srinagar Pahalgam ABC Valley Package",
      subtitle: "4 Nights / 5 Days of Serene Valleys",
      duration: "4 Nights / 5 Days",
      price: "₹17,500", // Placeholder price
      originalPrice: "₹21,000", // Placeholder originalPrice
      rating: 4.6,
      reviews: 105,
      groupSize: "2-10 People",
      image: "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=800",
      highlights: ["Srinagar Mughal Gardens", "Aru Valley", "Betaab Valley", "Chandanwari"],
      bestTime: "May - Sep",
    },
    {
      id: "Kashmir-Tour-Package",
      name: "Kashmir Tour Package",
      subtitle: "6 Days / 5 Nights Comprehensive Journey",
      duration: "6 Days / 5 Nights",
      price: "₹21,999", // Placeholder price
      originalPrice: "₹26,000", // Placeholder originalPrice
      rating: 4.8,
      reviews: 180,
      groupSize: "2-15 People",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
      highlights: ["Srinagar", "Gulmarg", "Sonamarg", "Pahalgam", "Houseboat Stay"],
      bestTime: "Apr - Oct",
    },
    {
      id: "Srinagar-Gurez-valley-Package",
      name: "Srinagar Gurez Valley Package",
      subtitle: "6 Days / 5 Nights Offbeat Exploration",
      duration: "5 Nights / 6 Days",
      price: "₹23,500", // Placeholder price
      originalPrice: "₹28,000", // Placeholder originalPrice
      rating: 4.7,
      reviews: 75,
      groupSize: "2-8 People",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
      highlights: ["Gurez Valley", "Razdan Top", "Tulail Valley", "Srinagar"],
      bestTime: "May - Oct",
    },
    {
      id: "Kashmir-Package-Escape-To-Doodhpathri",
      name: "Kashmir Package | Escape To Doodhpathri",
      subtitle: "6 Days / 5 Nights Untouched Beauty",
      duration: "6 Days / 5 Nights",
      price: "₹19,500", // Placeholder price
      originalPrice: "₹23,000", // Placeholder originalPrice
      rating: 4.6,
      reviews: 60,
      groupSize: "2-10 People",
      image: "https://images.unsplash.com/photo-1704114458458-aa6e39150f02?q=80&w=800",
      highlights: ["Doodhpathri Meadows", "Srinagar", "Gulmarg (day trip)", "Pahalgam"],
      bestTime: "May - Sep",
    },
    {
      id: "Kashmir-Trip",
      name: "Kashmir Trip",
      subtitle: "5 Days / 4 Nights Srinagar & Pahalgam",
      duration: "4 Nights / 5 Days",
      price: "₹16,999", // Placeholder price
      originalPrice: "₹20,000", // Placeholder originalPrice
      rating: 4.5,
      reviews: 100,
      groupSize: "2-12 People",
      image: "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=800",
      highlights: ["Srinagar", "Pahalgam", "Dal Lake", "Mughal Gardens"],
      bestTime: "Apr - Oct",
    },
    {
      id: "Kashmir-Family-Vacation",
      name: "Kashmir Family Vacation",
      subtitle: "6 Days / 5 Nights Fun for All Ages",
      duration: "6 Days / 5 Nights",
      price: "₹20,999", // Placeholder price
      originalPrice: "₹25,000", // Placeholder originalPrice
      rating: 4.8,
      reviews: 140,
      groupSize: "4-15 People",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
      highlights: ["Customizable itinerary", "Kid-friendly activities", "Safe & Comfortable"],
      bestTime: "May - Sep",
    },
    {
      id: "Kashmir-Sonamarg-Gulmarg-Pahalgam-Package",
      name: "Kashmir Sonamarg Gulmarg Pahalgam Package",
      subtitle: "6 Days / 5 Nights Golden Triangle",
      duration: "6 Days / 5 Nights",
      price: "₹22,999", // Placeholder price
      originalPrice: "₹27,000", // Placeholder originalPrice
      rating: 4.7,
      reviews: 125,
      groupSize: "2-12 People",
      image: "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=800",
      highlights: ["Sonamarg", "Gulmarg", "Pahalgam", "Srinagar"],
      bestTime: "May - Oct",
    },
    {
      id: "Kashmir-Special-Honeymoon-Package",
      name: "Kashmir Special Honeymoon Package",
      subtitle: "5 Days / 4 Nights Romantic Escape",
      duration: "5 Days / 4 Nights",
      price: "₹25,999", // As per your previous input
      originalPrice: "₹29,999", // As per your previous input
      rating: 4.9,
      reviews: 189,
      groupSize: "2 People",
      image: "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=800",
      highlights: ["Luxury Stay", "Candlelight Dinner", "Private Shikara"],
      bestTime: "Apr - Oct",
    },
    {
      id: "Kashmir-Group-Tour-Package",
      name: "Kashmir Group Tour Package",
      subtitle: "7 Days / 6 Nights Budget-Friendly Group Travel",
      duration: "7 Days / 6 Nights",
      price: "₹15,999", // Placeholder price
      originalPrice: "₹19,000", // Placeholder originalPrice
      rating: 4.5,
      reviews: 70,
      groupSize: "10+ People",
      image: "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=800",
      highlights: ["Cost-effective", "Group activities", "Major attractions"],
      bestTime: "May - Oct",
    },
    {
      id: "Srinagar-Gulmarg-Tour-Package", // This one already exists, adding again with new details
      name: "Srinagar Gulmarg Tour Package",
      subtitle: "5 Days / 4 Nights Adventure & Lake Serenity",
      duration: "4 Nights / 5 Days",
      price: "₹17,999", // Placeholder price
      originalPrice: "₹21,000", // Placeholder originalPrice
      rating: 4.7,
      reviews: 160,
      groupSize: "2-10 People",
      image: "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=800",
      highlights: ["Gulmarg Skiing", "Drung Village", "Dal Lake Shikara"],
      bestTime: "Nov - Mar (Winter)",
    },
    {
      id: "srinagar-gulmarg-pahalgam", // This ID is repeated with different details from first one
      name: "Srinagar Gulmarg Pahalgam Tour",
      subtitle: "6 Days / 5 Nights Kashmir's Highlights",
      duration: "6 Days / 5 Nights",
      price: "₹18,999", // As per your previous input for Kashmir Paradise
      originalPrice: "₹22,999", // As per your previous input for Kashmir Paradise
      rating: 4.8,
      reviews: 156,
      groupSize: "2-12 People",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
      highlights: ["Dal Lake", "Gulmarg Gondola", "Betaab Valley"],
      bestTime: "Apr - Oct",
    },
    {
      id: "kashmir-great-lakes-trek", // This one already exists
      name: "Kashmir Great Lakes Trek",
      subtitle: "8 Days / 7 Nights of High Altitude Trekking",
      duration: "8 Days / 7 Nights",
      price: "₹24,999", // As per your previous input
      originalPrice: "₹28,999", // As per your previous input
      rating: 4.9,
      reviews: 89,
      groupSize: "6-15 People",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
      highlights: ["7 Alpine Lakes", "High Altitude Trek", "Camping"],
      bestTime: "Jul - Sep",
    },
    {
      id: "kashmir-honeymoon-special-v2", // Adding a unique ID for the second honeymoon special
      name: "Kashmir Honeymoon Special (V2)",
      subtitle: "5 Days / 4 Nights Exclusive Romantic Getaway",
      duration: "5 Days / 4 Nights",
      price: "₹26,999", // Placeholder slightly different for distinction
      originalPrice: "₹30,999", // Placeholder
      rating: 4.9,
      reviews: 120,
      groupSize: "2 People",
      image: "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=800", // Reusing image
      highlights: ["Candlelit dinners", "Shikara Serenade", "Private Tours"],
      bestTime: "Apr - Oct",
    },
  ];

  // Map the packages to their correct routes as provided
  const packagesWithRoutes = [
    { ...kashmirPackages.find(p => p.id === "Gulmarg-Tour-Package"), route: "/destinations/kashmir/Gulmarg-Tour-Package" },
    { ...kashmirPackages.find(p => p.id === "Srinagar-Gulmarg-Package"), route: "/destinations/kashmir/Srinagar-Gulmarg-Package" },
    { ...kashmirPackages.find(p => p.id === "Kashmir-Pahalgam-Tour"), route: "/destinations/kashmir/Kashmir-Pahalgam-Tour" },
    { ...kashmirPackages.find(p => p.id === "KashmirGulmargTourPackage-5"), route: "/destinations/kashmir/KashmirGulmargTourPackage-5" },
    { ...kashmirPackages.find(p => p.id === "Kashmir-Paradise-Tour-Package"), route: "/destinations/kashmir/Kashmir-Paradise-Tour-Package" },
    { ...kashmirPackages.find(p => p.id === "Srinagar-Pahalgam-ABC-Valley-package"), route: "/destinations/kashmir/Srinagar-Pahalgam-ABC-Valley-package" },
    { ...kashmirPackages.find(p => p.id === "Kashmir-Tour-Package"), route: "/destinations/kashmir/Kashmir-Tour-Package" },
    { ...kashmirPackages.find(p => p.id === "Srinagar-Gurez-valley-Package"), route: "/destinations/kashmir/Srinagar-Gurez-valley-Package" },
    { ...kashmirPackages.find(p => p.id === "Kashmir-Package-Escape-To-Doodhpathri"), route: "/destinations/kashmir/Kashmir-Package-Escape-To-Doodhpathri" },
    { ...kashmirPackages.find(p => p.id === "Kashmir-Trip"), route: "/destinations/kashmir/Kashmir-Trip" },
    { ...kashmirPackages.find(p => p.id === "Kashmir-Family-Vacation"), route: "/destinations/kashmir/Kashmir-Family-Vacation" },
    { ...kashmirPackages.find(p => p.id === "Kashmir-Sonamarg-Gulmarg-Pahalgam-Package"), route: "/destinations/kashmir/Kashmir-Sonamarg-Gulmarg-Pahalgam-Package" },
    { ...kashmirPackages.find(p => p.id === "Kashmir-Special-Honeymoon-Package"), route: "/destinations/kashmir/Kashmir-Special-Honeymoon-Package" },
    { ...kashmirPackages.find(p => p.id === "Kashmir-Group-Tour-Package"), route: "/destinations/kashmir/Kashmir-Group-Tour-Package" },
    { ...kashmirPackages.find(p => p.id === "Srinagar-Gulmarg-Tour-Package"), route: "/destinations/kashmir/Srinagar-Gulmarg-Tour-Package" },
    { ...kashmirPackages.find(p => p.id === "srinagar-gulmarg-pahalgam"), route: "/destinations/kashmir/srinagar-gulmarg-pahalgam" },
    { ...kashmirPackages.find(p => p.id === "kashmir-great-lakes-trek"), route: "/destinations/kashmir/kashmir-great-lakes-trek" },
    { ...kashmirPackages.find(p => p.id === "kashmir-honeymoon-special-v2"), route: "/destinations/kashmir/kashmir-honeymoon-special" }, // Using the given route for the second honeymoon
  ].filter(Boolean); // Filter out any undefined if find returns null

  return (
    <>
      {/* Schema.org JSON-LD for SEO */}
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
                },
                {
                  "@type": "TouristAttraction",
                  "name": "Sonamarg",
                  "description": "Meadows and Thajiwas Glacier"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Kashmir Tour Packages",
              "description": "Complete list of Kashmir tour packages offered by Thrillshala",
              "numberOfItems": packagesWithRoutes.length,
              "itemListElement": packagesWithRoutes.map((pkg, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "TouristTrip",
                  "name": pkg.name,
                  "description": pkg.subtitle,
                  "url": `https://thrillshala.com${pkg.route}`,
                  "image": pkg.image,
                  "offers": {
                    "@type": "Offer",
                    "price": pkg.price ? pkg.price.replace("₹", "").replace(",", "") : "0", // Default to "0" if price is undefined
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2025-01-01",
                    "validThrough": "2025-12-31"
                  },
                  "duration": pkg.duration,
                  "touristType": pkg.groupSize.includes("2 People") ? "Couples" : "Groups", // Simplified type
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
                    "text": "Yes, Kashmir is generally safe for tourists. We ensure safe transportation, experienced guides, and 24/7 support for all our tour packages."
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
                Discover heaven on Earth with our carefully curated **Kashmir tour packages**. From luxury experiences to
                adventure treks, find your perfect Kashmir journey.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{packagesWithRoutes.length} Different Packages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Year-Round Availability</span>
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
              Explore our diverse collection of **Kashmir tour packages**.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesWithRoutes.map((pkg) => (
              <Card key={pkg.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {pkg.originalPrice && pkg.price && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-500 text-white">
                        Save ₹
                        {Number.parseInt(pkg.originalPrice.replace("₹", "").replace(",", "")) -
                          Number.parseInt(pkg.price.replace("₹", "").replace(",", ""))}
                      </Badge>
                    </div>
                  )}
                  {pkg.bestTime && (
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {pkg.bestTime}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    {pkg.duration && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.duration}</span>
                      </div>
                    )}
                    {pkg.groupSize && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{pkg.groupSize}</span>
                      </div>
                    )}
                  </div>

                  {pkg.rating && pkg.reviews && (
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
                  )}

                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-orange-600">{pkg.price || 'Price on Request'}</span>
                      {pkg.originalPrice && pkg.price && pkg.price !== 'Price on Request' && (
                        <span className="text-sm text-gray-400 line-through ml-2">{pkg.originalPrice}</span>
                      )}
                    </div>
                    {pkg.price !== 'Price on Request' && (
                      <div className="text-xs text-gray-500">per person</div>
                    )}
                  </div>

                  {/* Ensure pkg.route is defined before linking */}
                  {pkg.route && (
                    <Link href={pkg.route}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full">
                        View Details
                      </Button>
                    </Link>
                  )}
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