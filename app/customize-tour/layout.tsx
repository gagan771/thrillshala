import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Customize Your Tour - Create Perfect Travel Package | Thrillshala",
  description: "Create your perfect custom travel package with Thrillshala. Choose destinations, activities, duration, and budget. Get personalized tour quotes for Kashmir, Himachal, Ladakh, Kerala, Goa, and Andaman.",
  keywords: [
    "customize tour package",
    "custom travel packages",
    "personalized tours India",
    "tailor made tours",
    "custom Kashmir packages",
    "personalized Himachal tours",
    "custom Ladakh expeditions",
    "bespoke travel packages"
  ],
  openGraph: {
    title: "Customize Your Perfect Tour Package | Thrillshala",
    description: "Create your perfect custom travel package with Thrillshala. Choose destinations, activities, duration, and budget for Kashmir, Himachal, Ladakh and more.",
    url: "https://thrillshala.com/customize-tour",
  },
}

export default function CustomizeTourLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Custom Tour Package Creation",
              "description": "Create personalized travel packages for destinations across India with expert consultation and custom itineraries.",
              "provider": {
                "@type": "TravelAgency",
                "name": "Thrillshala",
                "url": "https://thrillshala.com",
                "logo": "https://thrillshala.com/images/logo.png"
              },
              "serviceType": "Travel Customization Service",
              "category": "Travel Planning",
              "areaServed": [
                "Kashmir",
                "Himachal Pradesh", 
                "Ladakh",
                "Kerala",
                "Goa",
                "Andaman and Nicobar Islands"
              ],
              "offers": {
                "@type": "Offer",
                "description": "Free consultation for custom tour packages with 24/7 support",
                "price": "0",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Custom Tour Options",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "Honeymoon Packages",
                      "description": "Romantic custom packages for couples"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "Adventure Tours",
                      "description": "Thrilling custom adventure packages"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "Family Vacations",
                      "description": "Custom family-friendly tour packages"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "Group Tours",
                      "description": "Custom packages for large groups"
                    }
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Customize Your Tour",
              "url": "https://thrillshala.com/customize-tour",
              "description": "Interactive tour customization form to create your perfect travel package",
              "mainEntity": {
                "@type": "WebApplication",
                "name": "Tour Customization Tool",
                "applicationCategory": "TravelApplication",
                "operatingSystem": "Web Browser"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://thrillshala.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Customize Tour",
                    "item": "https://thrillshala.com/customize-tour"
                  }
                ]
              }
            }
          ])
        }}
      />
      {children}
    </>
  )
}
