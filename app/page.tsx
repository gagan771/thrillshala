import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { DestinationSelector } from "@/components/destination-selector"
import { ImageSlider } from "@/components/image-slider"
import { DestinationCards } from "@/components/destination-cards"
import { TrendingSection } from "@/components/trending-section"
import { AdventureGallery } from "@/components/adventure-gallery"
import { CultureGallery } from "@/components/culture-gallery"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Thrillshala - Best Adventure Tours & Travel Packages in India",
  description: "Book the best adventure tours and travel packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman. Customized trekking, honeymoon, and group tour packages starting from ₹12,999. Expert guides, 24/7 support.",
  keywords: [
    "best travel packages India",
    "adventure tours Kashmir",
    "Himachal Pradesh packages",
    "Ladakh bike tours",
    "Kerala honeymoon packages",
    "Goa beach holidays",
    "Andaman tour packages",
    "budget travel packages",
    "customized tours India",
    "mountain trekking tours",
    "group tour packages",
    "family vacation packages"
  ],
  openGraph: {
    title: "Thrillshala - Best Adventure Tours & Travel Packages in India",
    description: "Book the best adventure tours and travel packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman. Starting from ₹12,999.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Beautiful mountain landscapes and adventure destinations in India",
      },
    ],
    url: "https://thrillshala.com",
  },
  twitter: {
    title: "Thrillshala - Best Adventure Tours & Travel Packages in India",
    description: "Book the best adventure tours and travel packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman. Starting from ₹12,999.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://thrillshala.com",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Thrillshala - Adventure Tours & Travel Packages",
            "description": "Premier destination for adventure tours and travel packages in India",
            "url": "https://thrillshala.com",
            "mainEntity": {
              "@type": "TravelAgency",
              "name": "Thrillshala",
              "offers": [
                {
                  "@type": "TouristTrip",
                  "name": "Kashmir Adventure Tours",
                  "description": "Explore the paradise of Kashmir with our customized tour packages",
                  "touristType": "Adventure Seekers"
                },
                {
                  "@type": "TouristTrip", 
                  "name": "Himachal Pradesh Packages",
                  "description": "Experience the beauty of Himachal with trekking and cultural tours",
                  "touristType": "Mountain Enthusiasts"
                },
                {
                  "@type": "TouristTrip",
                  "name": "Ladakh Expeditions", 
                  "description": "Discover the rugged beauty of Ladakh with bike tours and treks",
                  "touristType": "Adventure Travelers"
                }
              ]
            }
          })
        }}
      />
      <div className="min-h-screen">
        <Navbar />
        <DestinationSelector />
        <ImageSlider />
        <DestinationCards />
        <TrendingSection />
        <AdventureGallery />
        <CultureGallery />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}
