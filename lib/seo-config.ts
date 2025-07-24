// Comprehensive SEO configuration for Thrillshala

export const seoConfig = {
  // Basic site information
  siteName: 'Thrillshala',
  siteUrl: 'https://thrillshala.com',
  description: 'Discover incredible adventure tours and travel packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman. Book customized trekking, honeymoon, and group tour packages with Thrillshala.',
  
  // Default meta tags
  defaultTitle: 'Thrillshala - Adventure Tours & Travel Packages | Kashmir, Himachal, Ladakh',
  titleTemplate: '%s | Thrillshala',
  
  // Social media handles
  social: {
    twitter: '@thrillshala',
    facebook: 'https://facebook.com/thrillshala',
    instagram: 'https://instagram.com/thrillshala',
    linkedin: 'https://linkedin.com/company/thrillshala',
    youtube: 'https://youtube.com/@thrillshala'
  },
  
  // Business information
  business: {
    name: 'Thrillshala',
    type: 'TravelAgency',
    foundingDate: '2020',
    priceRange: '₹12,999 - ₹99,999',
    paymentMethods: ['Cash', 'Credit Card', 'Bank Transfer', 'UPI', 'Digital Wallet'],
    currency: 'INR',
    languages: ['Hindi', 'English'],
    supportHours: '24/7',
    slogan: 'Adventure Awaits, Memories Last Forever'
  },
  
  // Contact information
  contact: {
    phone: '+91-XXXXXXXXXX',
    email: 'info@thrillshala.com',
    address: {
      country: 'IN',
      region: 'India'
    }
  },
  
  // SEO keywords by category
  keywords: {
    primary: [
      'adventure tours India',
      'Kashmir tour packages',
      'Himachal Pradesh packages',
      'Ladakh expeditions',
      'Kerala honeymoon packages',
      'custom travel packages',
      'Goa beach holidays',
      'Andaman tour packages'
    ],
    secondary: [
      'best travel agency India',
      'mountain trekking tours',
      'beach holiday packages',
      'group tour packages',
      'family vacation packages',
      'budget travel packages India',
      'luxury travel packages',
      'adventure travel company'
    ],
    longTail: [
      'best Kashmir tour packages from Delhi',
      'affordable Himachal Pradesh family packages',
      'Ladakh bike tour with accommodation',
      'Kerala houseboat honeymoon packages',
      'custom adventure tours India',
      'group tour packages Kashmir',
      'budget friendly Goa packages',
      'Andaman islands family vacation'
    ],
    destinations: {
      kashmir: [
        'Kashmir tour packages',
        'Srinagar Gulmarg Pahalgam package',
        'Kashmir honeymoon packages',
        'Kashmir Great Lakes trek',
        'Dal Lake houseboat',
        'Gulmarg gondola',
        'Kashmir valley tour',
        'Sonamarg packages'
      ],
      himachal: [
        'Himachal Pradesh tour packages',
        'Shimla Manali packages',
        'Dharamshala tours',
        'Spiti Valley expedition',
        'Himachal honeymoon packages',
        'Kullu Manali tour',
        'Himachal trekking packages',
        'Dalhousie tour packages'
      ],
      ladakh: [
        'Ladakh tour packages',
        'Leh Ladakh bike tour',
        'Pangong Lake tour',
        'Nubra Valley packages',
        'Khardung La Pass',
        'Ladakh trekking tours',
        'Ladakh adventure packages',
        'Magnetic Hill Ladakh'
      ],
      kerala: [
        'Kerala tour packages',
        'Kerala backwaters',
        'Kerala honeymoon packages',
        'Munnar packages',
        'Alleppey houseboat',
        'Kerala hill stations',
        'Kerala beach packages',
        'God\'s own country tour'
      ],
      goa: [
        'Goa tour packages',
        'Goa beach holidays',
        'Goa honeymoon packages',
        'North Goa packages',
        'South Goa tours',
        'Goa adventure sports',
        'Goa family packages',
        'Goa budget packages'
      ],
      andaman: [
        'Andaman tour packages',
        'Andaman honeymoon packages',
        'Havelock Island packages',
        'Neil Island tours',
        'Port Blair packages',
        'Andaman water sports',
        'Andaman family packages',
        'Radhanagar Beach tour'
      ]
    }
  },
  
  // Common FAQ data
  faqs: {
    general: [
      {
        question: 'What destinations does Thrillshala cover?',
        answer: 'Thrillshala offers tour packages to Kashmir, Himachal Pradesh, Ladakh, Kerala, Goa, and Andaman & Nicobar Islands with customized itineraries.'
      },
      {
        question: 'What is the price range for tour packages?',
        answer: 'Our tour packages start from ₹12,999 and go up to ₹99,999 depending on the destination, duration, and inclusions.'
      },
      {
        question: 'Do you provide customized tour packages?',
        answer: 'Yes, we specialize in creating customized tour packages based on your preferences, budget, and travel dates.'
      },
      {
        question: 'What is included in the tour packages?',
        answer: 'Our packages typically include accommodation, meals, transportation, sightseeing, and experienced guides. Specific inclusions vary by package.'
      },
      {
        question: 'How can I book a tour package?',
        answer: 'You can book a package by calling us, filling our online form, or using our customize tour feature to create a personalized package.'
      },
      {
        question: 'Do you provide 24/7 support during tours?',
        answer: 'Yes, we provide 24/7 customer support and emergency assistance during all our tours for your safety and convenience.'
      }
    ],
    kashmir: [
      {
        question: 'What is the best time to visit Kashmir?',
        answer: 'The best time to visit Kashmir is from April to October for pleasant weather, March-April for tulip gardens, and December-February for snow activities.'
      },
      {
        question: 'What are the main attractions in Kashmir?',
        answer: 'Main attractions include Dal Lake with houseboats, Gulmarg ski resort, Pahalgam valleys, Sonamarg meadows, and Mughal gardens in Srinagar.'
      },
      {
        question: 'Is Kashmir safe for tourists?',
        answer: 'Yes, Kashmir is safe for tourists. We ensure safe transportation, experienced guides, and 24/7 support for all our tour packages.'
      }
    ]
  },
  
  // Image configurations
  images: {
    logo: '/images/logo.png',
    favicon: '/favicon.ico',
    hero: '/images/hero.jpg',
    destinations: {
      kashmir: '/images/kashmir.jpg',
      himachal: '/images/himachal.jpg',
      ladakh: '/images/ladakh.jpg',
      kerala: '/images/kerala.jpg',
      goa: '/images/goa.jpg',
      andaman: '/images/andaman.jpg'
    }
  },
  
  // Structured data templates
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'Thrillshala',
      url: 'https://thrillshala.com',
      logo: 'https://thrillshala.com/images/logo.png'
    }
  }
}

export default seoConfig
