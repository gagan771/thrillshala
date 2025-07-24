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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Thrillshala - Adventure Tours & Travel Packages",
              "description": "Premier destination for adventure tours and travel packages in India",
              "url": "https://thrillshala.com",
              "mainEntity": {
                "@type": "TravelAgency",
                "name": "Thrillshala"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://thrillshala.com"
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Popular Tour Destinations",
              "description": "Top travel destinations offered by Thrillshala",
              "numberOfItems": 6,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Kashmir Tour Packages",
                  "url": "https://thrillshala.com/destinations/kashmir",
                  "description": "Paradise on Earth - Dal Lake, Gulmarg, Pahalgam"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Himachal Pradesh Packages",
                  "url": "https://thrillshala.com/destinations/himachal",
                  "description": "Mountain adventures in Shimla, Manali, Dharamshala"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Ladakh Expeditions",
                  "url": "https://thrillshala.com/destinations/ladakh",
                  "description": "Land of High Passes - Pangong Lake, Nubra Valley"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Kerala Backwaters",
                  "url": "https://thrillshala.com/destinations/kerala",
                  "description": "God's Own Country - Houseboats and spice gardens"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Goa Beach Holidays",
                  "url": "https://thrillshala.com/destinations/goa",
                  "description": "Sun, sand and sea - Perfect beach getaway"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Andaman Islands",
                  "url": "https://thrillshala.com/destinations/andaman",
                  "description": "Pristine beaches and coral reefs"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What destinations does Thrillshala cover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Thrillshala offers tour packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman & Nicobar Islands with customized itineraries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the price range for tour packages?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our tour packages start from ₹12,999 and go up to ₹99,999 depending on the destination, duration, and inclusions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide customized tour packages?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in creating customized tour packages based on your preferences, budget, and travel dates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is included in the tour packages?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our packages typically include accommodation, meals, transportation, sightseeing, and experienced guides. Specific inclusions vary by package."
                  }
                }
              ]
            }
          ])
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
