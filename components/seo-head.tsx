import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
  price?: string
  currency?: string
  availability?: string
}

export function SEOHead({
  title = "Thrillshala - Adventure Tours & Travel Packages",
  description = "Discover incredible adventure tours and travel packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman with Thrillshala.",
  keywords = [],
  image = "/images/hero.jpg",
  url = "https://thrillshala.com",
  type = "website",
  price,
  currency = "INR",
  availability = "InStock"
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "product" ? "Product" : "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "image": image,
    ...(type === "product" && price && {
      "offers": {
        "@type": "Offer",
        "price": price.replace(/[^\d]/g, ''),
        "priceCurrency": currency,
        "availability": `https://schema.org/${availability}`,
        "url": url
      }
    })
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Thrillshala" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  )
}
