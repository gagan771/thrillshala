import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thrillshala.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/customize-tour`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Destination pages
  const destinations = [
    'kashmir',
    'himachal', 
    'ladakh',
    'kerala',
    'goa',
    'andaman'
  ]

  const destinationPages = destinations.map(destination => ({
    url: `${baseUrl}/destinations/${destination}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
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
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Kashmir specific packages
  const kashmirPackages = [
    'Kashmir-Family-Vacation',
    'kashmir-great-lakes-trek',
    'Kashmir-Group-Tour-Package',
    'kashmir-honeymoon-special',
    'Kashmir-Package-Escape-To-Doodhpathri',
    'Kashmir-Pahalgam-Tour',
    'Kashmir-Sonamarg-Gulmarg-Pahalgam-Package',
    'Kashmir-Special-Honeymoon-Package',
    'Kashmir-Trip',
    'Srinagar-Gulmarg-Package'
  ]

  const kashmirPackagePages = kashmirPackages.map(pkg => ({
    url: `${baseUrl}/destinations/kashmir/${pkg}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...destinationPages, ...tourPages, ...kashmirPackagePages]
}
