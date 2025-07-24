// SEO utilities for Thrillshala website

export interface TourPackage {
  id: string
  name: string
  subtitle: string
  duration: string
  price: string
  originalPrice: string
  rating: number
  reviews: number
  groupSize: string
  image: string
  highlights: string[]
  bestTime: string
  destination?: string
}

export function generateTourPackageStructuredData(packages: TourPackage[], destination: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${destination} Tour Packages`,
    "description": `Complete list of ${destination} tour packages offered by Thrillshala`,
    "numberOfItems": packages.length,
    "itemListElement": packages.map((pkg, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristTrip",
        "name": pkg.name,
        "description": pkg.subtitle,
        "url": `https://thrillshala.com/destinations/${destination.toLowerCase()}/${pkg.id}`,
        "image": pkg.image,
        "offers": {
          "@type": "Offer",
          "price": pkg.price.replace("₹", "").replace(",", ""),
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2025-01-01",
          "validThrough": "2025-12-31",
          "priceRange": `${pkg.price} - ${pkg.originalPrice}`,
          "seller": {
            "@type": "TravelAgency",
            "name": "Thrillshala"
          }
        },
        "duration": pkg.duration,
        "touristType": pkg.groupSize.includes("2 People") ? "Couples" : "Groups",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": pkg.rating,
          "reviewCount": pkg.reviews,
          "bestRating": 5,
          "worstRating": 1
        },
        "itinerary": {
          "@type": "TouristTrip",
          "name": `${pkg.name} Itinerary`,
          "description": `Detailed ${pkg.duration} itinerary covering ${pkg.highlights.join(", ")}`
        }
      }
    }))
  }
}

export function generateDestinationStructuredData(destination: string, attractions: string[]) {
  const destinationCoords = {
    kashmir: { lat: "34.0837", lng: "74.7973" },
    himachal: { lat: "31.1048", lng: "77.1734" },
    ladakh: { lat: "34.1526", lng: "77.5771" },
    kerala: { lat: "10.8505", lng: "76.2711" },
    goa: { lat: "15.2993", lng: "74.1240" },
    andaman: { lat: "11.7401", lng: "92.6586" }
  }

  const coords = destinationCoords[destination.toLowerCase() as keyof typeof destinationCoords] || { lat: "20.5937", lng: "78.9629" }

  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination,
    "description": `Explore the beautiful destination of ${destination} with Thrillshala's expert-crafted tour packages.`,
    "url": `https://thrillshala.com/destinations/${destination.toLowerCase()}`,
    "image": `https://thrillshala.com/images/${destination.toLowerCase()}.jpg`,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "touristType": ["Adventure Seekers", "Honeymooners", "Families", "Nature Lovers", "Culture Enthusiasts"],
    "includesAttraction": attractions.map(attraction => ({
      "@type": "TouristAttraction",
      "name": attraction,
      "description": `Popular attraction in ${destination}`
    }))
  }
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export function generateReviewStructuredData(reviews: Array<{ author: string; rating: number; text: string; date: string }>) {
  return reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "reviewBody": review.text,
    "datePublished": review.date,
    "publisher": {
      "@type": "Organization",
      "name": "Thrillshala"
    }
  }))
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
}

export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Thrillshala",
    "alternateName": "Thrillshala Adventure Tours",
    "url": "https://thrillshala.com",
    "logo": "https://thrillshala.com/images/logo.png",
    "image": "https://thrillshala.com/images/hero.jpg",
    "description": "Leading adventure travel agency specializing in customized tour packages across India's most beautiful destinations.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "availableLanguage": ["Hindi", "English"],
        "hoursAvailable": "24/7"
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": ["Hindi", "English"]
      }
    ],
    "sameAs": [
      "https://facebook.com/thrillshala",
      "https://instagram.com/thrillshala", 
      "https://twitter.com/thrillshala",
      "https://linkedin.com/company/thrillshala"
    ],
    "priceRange": "₹12,999 - ₹99,999",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "UPI", "Digital Wallet"],
    "currenciesAccepted": "INR",
    "foundingDate": "2020",
    "slogan": "Adventure Awaits, Memories Last Forever",
    "knowsAbout": [
      "Adventure Tourism",
      "Cultural Tours",
      "Mountain Trekking",
      "Beach Holidays",
      "Honeymoon Packages",
      "Family Vacations"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "TouristTrip",
          "name": "Kashmir Tour Packages"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "TouristTrip", 
          "name": "Himachal Pradesh Packages"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "TouristTrip",
          "name": "Ladakh Expeditions"
        }
      }
    ]
  }
}

export const seoKeywords = {
  primary: [
    "adventure tours India",
    "Kashmir tour packages",
    "Himachal Pradesh packages",
    "Ladakh expeditions",
    "Kerala honeymoon packages",
    "custom travel packages"
  ],
  secondary: [
    "best travel agency India",
    "mountain trekking tours",
    "beach holiday packages",
    "group tour packages",
    "family vacation packages",
    "budget travel packages India"
  ],
  longTail: [
    "best Kashmir tour packages from Delhi",
    "affordable Himachal Pradesh family packages",
    "Ladakh bike tour with accommodation",
    "Kerala houseboat honeymoon packages",
    "custom adventure tours India",
    "group tour packages Kashmir"
  ]
}
