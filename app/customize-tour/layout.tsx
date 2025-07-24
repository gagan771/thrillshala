import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Customize Your Tour - Create Perfect Travel Package | Thrillshala",
  description: "Create your perfect custom travel package with Thrillshala. Choose destinations, activities, duration, and budget. Get personalized tour quotes for Kashmir, Himachal, Ladakh, Kerala, Goa, and Andaman. Free consultation available.",
  keywords: [
    "customize tour package",
    "custom travel packages", 
    "personalized tours India",
    "tailor made tours",
    "custom Kashmir packages",
    "personalized Himachal tours",
    "custom Ladakh expeditions",
    "bespoke travel packages",
    "custom honeymoon packages",
    "personalized adventure tours",
    "custom family packages",
    "made to order tours"
  ],
  openGraph: {
    title: "Customize Your Perfect Tour Package | Thrillshala",
    description: "Create your perfect custom travel package with Thrillshala. Choose destinations, activities, duration, and budget for Kashmir, Himachal, Ladakh and more.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Customize your perfect travel package with Thrillshala",
      },
    ],
    url: "https://thrillshala.com/customize-tour",
  },
  twitter: {
    title: "Customize Your Perfect Tour Package | Thrillshala", 
    description: "Create your perfect custom travel package with Thrillshala. Choose destinations, activities, duration, and budget for Kashmir, Himachal, Ladakh and more.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://thrillshala.com/customize-tour",
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Tour Package Creation",
            "description": "Create personalized travel packages for destinations across India",
            "provider": {
              "@type": "TravelAgency",
              "name": "Thrillshala",
              "url": "https://thrillshala.com"
            },
            "serviceType": "Travel Customization Service",
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
              "description": "Free consultation for custom tour packages",
              "price": "0",
              "priceCurrency": "INR"
            }
          })
        }}
      />
      {children}
    </>
  )
}
