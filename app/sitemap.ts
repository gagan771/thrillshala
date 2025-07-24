import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thrillshala.com'
  const currentDate = new Date('2025-07-25')
  
  // Core pages with high priority
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/customize-tour`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Destination pages with high SEO value
  const destinations = [
    { name: 'kashmir', priority: 0.95 },
    { name: 'himachal', priority: 0.9 }, 
    { name: 'ladakh', priority: 0.9 },
    { name: 'kerala', priority: 0.85 },
    { name: 'goa', priority: 0.85 },
    { name: 'andaman', priority: 0.8 }
  ]

  const destinationPages = destinations.map(dest => ({
    url: `${baseUrl}/destinations/${dest.name}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: dest.priority,
  }))

  // Tour pages
  const tours = [
    'girls-only-trek',
    'gulmarg-sonamarg',
    'hampta-pass-trek', 
    'kashmir-trip',
    'shimla-package',
    'spiti-7-days'
  ]

  const tourPages = tours.map(tour => ({
    url: `${baseUrl}/tours/${tour}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Kashmir specific packages (high value pages)
  const kashmirPackages = [
    'srinagar-gulmarg-pahalgam',
    'kashmir-great-lakes-trek',
    'kashmir-houseboat-experience',
    'sonamarg-thajiwas-glacier',
    'kashmir-tulip-garden-tour',
    'kashmir-winter-wonderland',
    'kashmir-photography-tour',
    'kashmir-adventure-sports',
    'kashmir-spiritual-journey',
    'kashmir-honeymoon-special',
    'kashmir-family-package',
    'kashmir-luxury-tour',
    'kashmir-budget-tour',
    'kashmir-cultural-tour',
    'kashmir-backpacking-adventure'
  ]

  const kashmirPackagePages = kashmirPackages.map(pkg => ({
    url: `${baseUrl}/destinations/kashmir/${pkg}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Additional important pages
  const additionalPages = [
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }
  ]

  return [
    ...corePages, 
    ...destinationPages, 
    ...tourPages, 
    ...kashmirPackagePages,
    ...additionalPages
  ]
}
