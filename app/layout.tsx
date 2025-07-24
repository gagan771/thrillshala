import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://thrillshala.com'),
  title: {
    default: 'Thrillshala - Adventure Tours & Travel Packages | Kashmir, Himachal, Ladakh',
    template: '%s | Thrillshala'
  },
  description: 'Discover incredible adventure tours and travel packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman. Book customized trekking, honeymoon, and group tour packages with Thrillshala.',
  keywords: [
    'adventure tours',
    'travel packages',
    'Kashmir tours',
    'Himachal Pradesh packages',
    'Ladakh expeditions',
    'Kerala backwaters',
    'Goa holidays',
    'Andaman packages',
    'trekking tours',
    'honeymoon packages',
    'group tours',
    'customized tours',
    'India travel',
    'mountain adventures',
    'beach holidays'
  ],
  authors: [{ name: 'Thrillshala Travel Team' }],
  creator: 'Thrillshala',
  publisher: 'Thrillshala',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thrillshala.com',
    siteName: 'Thrillshala',
    title: 'Thrillshala - Adventure Tours & Travel Packages',
    description: 'Discover incredible adventure tours and travel packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman with Thrillshala.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Thrillshala Adventure Tours - Beautiful mountain landscapes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thrillshala - Adventure Tours & Travel Packages',
    description: 'Discover incredible adventure tours and travel packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman.',
    images: ['/images/hero.jpg'],
    creator: '@thrillshala',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://thrillshala.com',
  },
  category: 'travel',
  classification: 'Travel and Tourism',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Thrillshala",
              "url": "https://thrillshala.com",
              "logo": "https://thrillshala.com/images/logo.png",
              "description": "Premier adventure travel agency offering customized tour packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://facebook.com/thrillshala",
                "https://instagram.com/thrillshala",
                "https://twitter.com/thrillshala"
              ],
              "serviceType": [
                "Adventure Tours",
                "Trekking Packages",
                "Honeymoon Packages",
                "Group Tours",
                "Customized Travel Packages"
              ],
              "areaServed": [
                "Kashmir",
                "Himachal Pradesh",
                "Ladakh",
                "Kerala",
                "Goa",
                "Andaman and Nicobar Islands"
              ]
            })
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}
