"use client"
import Image from "next/image";
import { Calendar, Users, MapPin, CheckCircle, XCircle, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingButton } from "@/components/booking-button";
import React, { useEffect, useRef, useState, useCallback } from 'react';

// Declare a global interface for Instagram's embed object
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: (el?: HTMLElement) => void;
      };
    };
  }
}

export default function SrinagarGulmargTourPage() {
  // Hero Slider State
  const heroImages = [
    "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Gulmarg focus
    "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Another Gulmarg view
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Winter Gulmarg
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // General Kashmir landscape
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  }, [heroImages.length]);

  const goToPrevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + heroImages.length) % heroImages.length
    );
  }, [heroImages.length]);

  useEffect(() => {
    const sliderInterval = setInterval(goToNextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(sliderInterval);
  }, [goToNextImage]);

  const itinerary = [
    {
      day: 1,
      title: "Arrive from Srinagar to Gulmarg",
      description: "Upon arrival at Srinagar, you will drive towards Gulmarg via Tangmarg. Gulmarg is known for its world-class ski slopes. After reaching Gulmarg, you will check in to your hotel. Later, you can explore the Gulmarg Valley and enjoy adventure activities (excluded).",
      highlights: ["Arrival at Srinagar", "Drive to Gulmarg", "Hotel Check-in", "Gulmarg Valley Exploration", "Adventure Activities (Excluded)"],
      hotel: "Hotel at Gulmarg",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Gulmarg Sightseeing",
      description: "Today, after waking up and having breakfast, you will head out to experience the famous Gondola cable car ride (available at an additional cost), which takes you to the top of the ski slopes. You can also try sledging (excluded), which involves riding a flat wooden board downhill on snowy slopes, adding a thrill to your adventure.",
      highlights: ["Gondola Ride (Excluded)", "Ski Slopes", "Sledging (Excluded)"],
      hotel: "Hotel at Gulmarg",
      meals: "Breakfast, Dinner",
    },
    {
      day: 3,
      title: "Gulmarg to Srinagar",
      description: "After checking out, you will depart for Srinagar to explore the famous Mughal Gardens, including Nishat Bagh and Shalimar Bagh, celebrated for their stunning landscapes and historical charm. Later in the evening, you will visit the iconic Shankaracharya Temple and explore the local markets.",
      highlights: ["Check-out from Gulmarg", "Drive to Srinagar", "Mughal Gardens (Nishat Bagh, Shalimar Bagh)", "Shankaracharya Temple", "Local Markets Exploration"],
      hotel: "Hotel at Srinagar",
      meals: "Breakfast & Dinner",
    },
    {
      day: 4,
      title: "Departure from Srinagar",
      description: "You will proceed to Srinagar Airport for your onward journey, carrying cherished memories of Kashmir's enchanting beauty.",
      highlights: ["Breakfast", "Airport Transfer", "Departure"],
      hotel: "Nil",
      meals: "Breakfast",
    },
  ];

  const localSightseeingActivities = [
    { location: "Srinagar", places: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Shankaracharya Temple, Tulip Garden, Dal Lake, Etc.", activities: "Shikara Ride" },
    { location: "Gulmarg", places: "Gulmarg Gondola ride, Golf Course, Drung waterfall (Union Cab), etc.", activities: "Gondola Ride, Ski and Snowboard" },
  ];

  const thingsToCarry = [
    "Good shoes.",
    "Headscarf for women if visiting a religious place.",
    "Emergency medicines.",
    "Post-paid sim.",
    "Carry sufficient cash.",
    "Carry Identity Proof.",
    "Carry cold cream and lip guard in winter & sunscreen in summer.",
    "Warm clothes will be needed depending upon the time you visit.",
  ];

  const inclusions = [
    "Accommodation",
    "Meals as per the itinerary.",
    "Union Cab",
    "Heaters or Electric blankets in hotels.",
    "Pick up and drop from Srinagar",
    "Sightseeing as per itinerary",
    "State tax, hotel tax, and Driver charge.",
    "Drivers allowance.",
    "Parking charges.",
  ];

  const exclusions = [
    "Lunch",
    "Dedicated Tour Guide for Complete Tour.",
    "Any kind of personal expenses or extra meals ordered.",
    "Any additional sightseeing other than the fixed program.",
    "Any cost arising due to natural calamities",
    "Travel Insurance",
    "Local transportation",
    "The cost is incidental to any change in the itinerary/stay due to flight cancellation due to bad weather, ill health, roadblocks, and any factors beyond our control.",
    "Anything not explicitly mentioned under the head.",
  ];

  const cancellationPolicy = [
    "We understand that plans can change, but the booking amount is non-refundable due to the costs we incur in preparing for your tour or activity. If you wish to reschedule for a different date, we'll adjust it to the same package, providing you with the necessary flexibility.",
    "If you have paid the total amount but cancelled the package. You will be provided with a refund, as mentioned below:",
    "30 Days or More: 50% of the total amount is refundable.",
    "15 to 29 Days: 25% of the total amount is refundable.",
    "0 to 14 Days: No Refunds.",
    "Tours or activities might be cancelled due to unexpected circumstances, such as storms, heavy rainfall, sudden closures of specific areas, government restrictions or anything beyond our control. In such a scenario, we will provide an alternate tour or activity. However, no refunds will be provided.",
  ];

  const importantNotes = [
    "The trip will start after the full payment. Make sure you make all the arrangements beforehand.",
    "Check-in/check-out at all properties is from 11:00 a.m. to 12:00 p.m. However, some properties may not allow early check-in.",
    "The vehicle will be provided as per the itinerary, and any additional sightseeing not mentioned in the itinerary will be charged extra.",
    "No refund or compensation for any unused services/transportation in any circumstance.",
    "Visits to museums, parks, gardens, and forts on the tour are subject to their opening on the day of the visit as per the rules of the competent authority.",
    "We will not bear any cost for flights cancelled or delayed due to any reason.",
    "There will be no compensation if you are delayed due to roadblocks, natural calamities or personal reasons. The alternate accommodation cost due to the same should be borne by you.",
    "Rates are subject to change until you haven’t paid the total amount.",
    "Room allotment will be based on availability when check-in; floor or view preferences are not guaranteed.",
    "All expenses which are not included in the cost of the package shall be paid directly at the time of checkout.",
    "You are advised to take insurance before starting the tour.",
  ];

  const hotelDetails = [
    { destination: "Gulmarg", nights: "2 Nights", hotels: "Hotel at Gulmarg" },
    { destination: "Srinagar", nights: "1 Night", hotels: "Hotel at Srinagar" },
  ];

  // Array for Photo Gallery images
  const galleryPhotos = [
    "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=600",
    "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=600",
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=600",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Srinagar_Dal_Lake_Kashmir_India.jpg/1280px-Srinagar_Dal_Lake_Kashmir_India.jpg",
    "https://images.unsplash.com/photo-1704021717759-15cf9ca938cf?q=80&w=600",
  ];

  // Define the permalinks for your Instagram Reels
  const reelPermalinks = [
    "https://www.instagram.com/reel/DFK68_hSPqc/",
    "https://www.instagram.com/reel/DENY_c2y7sl/",
    "https://www.instagram.com/reel/C8q8-i_SWoO/",
    "https://www.instagram.com/reel/C8rA-uGSeI3/",
    "https://www.instagram.com/reel/C8sE-wG1IoN/",
  ];

  const instagramEmbedRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const loadAndProcessInstagramEmbeds = () => {
      setTimeout(() => {
        if (window.instgrm && window.instgrm.Embeds) {
          instagramEmbedRefs.current.forEach(el => {
            if (el) {
              window.instgrm.Embeds.process(el);
            }
          });
        } else {
          console.warn("Instagram embed script not ready, retrying...");
        }
      }, 100);
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      script.onload = loadAndProcessInstagramEmbeds;
      document.body.appendChild(script);
    } else {
      loadAndProcessInstagramEmbeds();
    }
  }, []);


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Slider Implementation */}
      <div className="relative h-[60vh] overflow-hidden">
        {heroImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Gulmarg Tour ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0} // Prioritize loading the first image
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

        {/* Slider Navigation Arrows */}
        <button
          onClick={goToPrevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all duration-300 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all duration-300 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-orange-500 text-white mb-4 rounded-full px-3 py-1">3 Nights / 4 Days</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Srinagar Gulmarg Tour Package</h1>
            <p className="text-xl mb-6 max-w-2xl text-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Explore the iconic beauty of Gulmarg and the cultural charm of Srinagar on this refreshing getaway.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-200" />
                <span>Srinagar • Gulmarg</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-200" />
                <span>3 Nights / 4 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-200" />
                <span>Individual & Group Options</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* About the Tour Package */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About the Srinagar Gulmarg Tour Package</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  **Srinagar**, the summer capital of J&K, lies in the heart of the Kashmir Valley, positioned along the tranquil Jhelum River. Four districts and Ladakh UT surround the city. To the north lies Ladakh, Ganderbal to the east, Pulwama to the south, and Budgam to the northwest. Located 1,585 meters above sea level, Srinagar is renowned for its beautiful gardens, lakes, houseboats, traditional Kashmiri handicrafts, and dried fruits. The Jhelum River, known as Vyath in Kashmir, flows through the city, winding through the valley and eventually merging with Dal Lake. Srinagar is also famous for its nine historic bridges, connecting the city's two parts.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  **Hokersar**, a wetland located 14 km (8.7 miles) north of Srinagar, is an essential site for migratory birds. During winter, thousands of birds migrate from Siberia and other regions to Hokersar, making it a key stopover for birds travelling between Siberia, Central Asia, and Kashmir. The wetland, covering an area of 13.75 km² (5.31 sq mi), includes both lake and marshy areas and is among the most accessible and well-known of Kashmir’s wetlands, alongside others such as Hygam, Shalibug, and Mirgund. The wetlands are critical in supporting a large population of wintering, staging, and breeding birds.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bird species found in Hokersar include migratory ducks and geese, such as the Brahminy duck, tufted duck, gadwall, garganey, greylag goose, mallard, common merganser, northern pintail, common pochard, ferruginous pochard, red-crested pochard, ruddy shelduck, north shoveller, common teal, and Eurasian wigeon.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">How to Reach Srinagar</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>**By Air:** Sheikh ul Alam Airport (IATA: SXR) is an international airport serving Srinagar. It offers regular flights connecting the city to major cities like Delhi, Mumbai, and Chandigarh. The airport is conveniently located just 15 km from the city centre.</li>
                  <li>**Nearest Airport:** Sheikh ul Alam Airport, Srinagar</li>
                  <li>**By Train:** To reach Srinagar by train, Travellers must first reach Banihal Railway Station. From there, they can hire taxis or cabs for the onward journey.</li>
                  <li>**By Road:** Srinagar, the summer capital of Jammu and Kashmir, is well-connected by road to several key cities, including Delhi (876 km), Chandigarh (646 km), Leh (424 km), and Jammu (258 km). Regular buses and taxis make it easy to reach Srinagar.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Shikara Ride on Dal Lake, Kashmir</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A Shikara ride on Dal Lake in Kashmir is a serene experience that blends natural beauty with cultural heritage. Gliding on a slender, intricately carved wooden boat, you’ll witness calm waters reflecting the majestic Pir Panjal mountains, ornate houseboats, and vibrant life around the lake. The ride is a window into Kashmir’s traditions, and the boats symbolise the region’s rich craftsmanship and history.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>**Best Time to Visit:**
                    <ul className="list-circle list-inside ml-4">
                      <li>Autumn (September-November): Golden hues, calm lakes, and clear blue skies create a picturesque and tranquil setting.</li>
                      <li>Summer (June): A vibrant season with blooming flowers and pleasant weather, though it’s also a peak tourist time.</li>
                    </ul>
                  </li>
                  <li>**Practical Tips:**
                    <ul className="list-circle list-inside ml-4">
                      <li>**Pricing:** Negotiate and agree on a price beforehand.</li>
                      <li>**Duration:** Rides last 30 minutes to a few hours; plan and discuss your preference with the boatman.</li>
                      <li>**Safety:** Wear a life jacket if available, secure belongings, and handle cameras or phones carefully.</li>
                    </ul>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Gulmarg: The Meadow of Flowers</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Set against the breathtaking backdrop of the Himalayas, Gulmarg, which translates to "Meadow of Flowers," is a captivating hill station 60 kilometres from Srinagar. The scenic drive to Gulmarg takes approximately 1.5 hours and offers stunning views. With its verdant meadows and snow-capped peaks, Gulmarg has been a beloved destination for travellers.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Main Attractions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A key highlight of Gulmarg is the **Gondola**, renowned as the world’s second-highest cable car. The ride operates in two thrilling stages:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>**Phase 1:** Reaches Kongdori Station at 8,530 feet.</li>
                  <li>**Phase 2:** Climbs to an impressive 12,293 feet, offering sweeping views of the surrounding peaks.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Visitors can also explore the enchanting **Strawberry Valley**, the rugged beauty of **Leopards Valley**, and the tranquil **Al-Pathar Lake**, a frozen marvel accessible by trekking or horseback riding from Kongdori.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In winter, Gulmarg transforms into a snowy wonderland, attracting skiing enthusiasts to its pristine slopes, which are ideal for advanced skiers. The festive atmosphere during this time is vibrant, with events like White Christmas celebrations and lively New Year parties enhancing its charm.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Kongdori Phase 1, Gulmarg: A Gateway to Adventure</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kongdori Phase 1 marks the first stage of the Kongdori Gondola, one of the world's highest cable car systems in the stunning Pir Panjal range. This phase serves as the starting point for an unforgettable ride, offering mesmerising views of snow-clad peaks. Easily accessible from Gulmarg, the gondola offers a scenic ascent through verdant meadows and dense forests. The journey from Kongdori Phase 1 to Apharwat Peak reveals breathtaking panoramic landscapes, making it an essential stop for nature lovers and thrill-seekers.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Historical Background</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gulmarg is steeped in history, once serving as a royal retreat for figures such as Yousuf Shah Chak and Emperor Jahangir. Its original name, Gaurimarg, was inspired by Goddess Parvati, the consort of Lord Shiva. Later, Yousuf Shah Chak renamed it Gulmarg, meaning "the place of roses."
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In the early 1900s, Sir Marc Aurel Stein, a famed Central Asian explorer, often sought solace in Gulmarg, camping between his expeditions. During the British colonial period, it became a favoured summer getaway for officers and their families.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">How to Reach Gulmarg</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>**By Air:** Sheikh Ul Alam International Airport in Srinagar is the nearest airport, 54 kilometres away.</li>
                  <li>**By Train:** The closest railway station is in Anantnag, about 45 kilometres from Gulmarg.</li>
                  <li>**By Road:**
                    <ul className="list-circle list-inside ml-4">
                      <li>From Jammu: Approximately 410 kilometers.</li>
                      <li>From Srinagar: A 54-kilometer drive.</li>
                      <li>From Baramulla: A distance of about 54 kilometres.</li>
                    </ul>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Places To Visit (Srinagar Specifics from prompt)</h3>
                <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Shankaracharya Hill</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Shankaracharya Temple, located in the Srinagar district on Takht-e-Suleiman Hill, is 1,100 feet above the city. A shrine dedicated to Lord Shiva is perched at the peak of this hill. It is recognised as the oldest religious establishment in the Kashmir Valley. Over the years, the temple has undergone numerous repairs. It was repaired after an earthquake damaged it during the reign of Lalitaditya and later under Zain-ul-Abideen. Additional restoration work was done during Sheikh Mohi-ud-Din's tenure as governor. Maharaja Gulab Singh, a Dogra ruler, is credited with constructing the stone steps that lead to the temple. In 1925, the temple was also electrified.
                </p>

                <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Dal Lake</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Situated in Srinagar, Jammu and Kashmir, Dal Lake plays a crucial role in tourism and business, earning the title "Jewel in the Crown of Kashmir." The lake spans 18 square kilometres and is part of a wetland covering 21.1 square kilometres. Its shoreline features Mughal-era gardens, parks, houseboats, and hotels, with scenic views from gardens like Shalimar and Nishat Bagh. In winter, the lake sometimes freezes. The lake is divided into four basins, including Lokut Dal and Bod Dal, each with an island. Floating gardens, known as "Raad," bloom with lotus flowers in summer, making it a significant attraction.
                </p>

                <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Indira Gandhi Tulip Garden</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Indira Gandhi Memorial Tulip Garden, formerly known as the Model Floriculture Center, is the most extensive in Asia, located in Srinagar. Spanning approximately 30 hectares, the garden is situated at the foothills of the Zabarwan Range, offering stunning views of Dal Lake. Opened in 2007, its purpose was to promote floriculture and boost tourism in the Kashmir Valley. The garden is designed on sloping land, with seven terraced levels. In addition to tulips, the garden also features other flower species, such as hyacinths, daffodils, and ranunculus. The Tulip Festival is an annual event held to highlight the variety of flowers in the garden, contributing to the tourism efforts of the Jammu and Kashmir Government. This celebration takes place at the beginning of spring in the Kashmir Valley.
                </p>

                <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Nishat Garden: The Garden of Delight</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nishat Bagh, a terraced Mughal garden, lies on the eastern bank of Dal Lake near Srinagar in Jammu and Kashmir, India. It is the second-largest Mughal garden in the Kashmir Valley, surpassed only by Shalimar Bagh, which also borders Dal Lake. The name "Nishat Bagh," derived from Urdu, translates to "Garden of Joy," "Garden of Gladness," or "Garden of Delight."
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  **Setting and Historical Context:** Nestled against the backdrop of the Zabarwan Mountains, Nishat Bagh offers breathtaking views of Dal Lake and the distant snow-capped Pir Panjal mountain range. It was constructed in 1633 by Asif Khan, the elder brother of Empress Nur Jehan. An intriguing historical anecdote surrounds the garden: Emperor Shah Jahan, upon witnessing its beauty, expressed his admiration multiple times, hoping Asif Khan would gift the garden to him. When no offer was made, Shah Jahan ordered the garden's water supply to be cut off, leaving it abandoned for a time. Later, a loyal servant restored the water flow, and Shah Jahan, instead of reacting angrily, appreciated the act and reinstated water rights for the garden. The Mughal Princess Zuhra Begum, daughter of Emperor Alamgir II and granddaughter of Jahandar Shah, was buried in Nishat Bagh, adding to the site's historical significance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  **Layout and Design:** While inspired by the Persian Chahar Bagh concept, Nishat Bagh’s design was adapted to fit the natural terrain of the Kashmir Valley. Instead of the square layout typical of Persian gardens, it follows a rectangular plan measuring 548 meters in length and 338 meters in width, with an axial stream running through its centre. The garden features twelve terraces symbolising the zodiac signs. These terraces cascade upward from Dal Lake toward the hillside, with an artificial façade marking the upper boundary. The layout includes public and private sections, with the private "Zenana" or harem garden on the highest terrace. The garden’s central water channel, lined with Chinar and cypress trees, flows from the hilltop to the lake, forming sparkling cascades, pools, and fountains at each level. Stone ramps guide water between terraces, while benches at crossings allow visitors to rest and enjoy the serene surroundings.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 ml-4">
                  <li>**Notable Features of the Terraces:**
                    <ul className="list-circle list-inside ml-4">
                      <li>**First Terrace:** Serves as a water collection point with lateral connections.</li>
                      <li>**Second Terrace:** Features five fountains and 23 decorative niches, once illuminated with lamps.</li>
                      <li>**Third Terrace:** Contains a dismantled pavilion, stairways, and a square pool.</li>
                      <li>**Fourth Terrace:** Includes a square pool and water channels at two levels.</li>
                      <li>**Fifth Terrace:** Offers scenic views with a stone bench and five fountains.</li>
                      <li>**6–12. Successive terraces** feature unique elements, such as an octagonal bench, paved pathways, cascading fountains, and the Zenana chamber at the top.</li>
                    </ul>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Pari Mahal</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Located to the west of Srinagar, close to Chashme Shahi and nestled on the slopes of the Zebanwan mountains, Pari Mahal was built around 1650 by Prince Dara Shukoh, the eldest son of Mughal Emperor Shah Jahan. The garden was constructed on the site of an ancient Buddhist monastery. It was envisioned as a Sufi school, following the request of Dara Shukoh’s revered spiritual mentor, Mullah Shah Badakhshi. It is believed that Pari Mahal also served as a place for astronomical research and astrological studies under the Mughal rulers. The garden was named after Dara Shukoh's wife, Nadira Begum, also known as Pari Begum, who was the daughter of Prince Parviz, the son of Emperor Jahangir.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The structure of Pari Mahal includes a domed ceiling with a series of gardens arranged across six terraces, supported by arched retaining walls. The terraces vary in size, and the garden spans 122 meters by 62.5 meters at its widest point. Access to the terraces is provided by steps located at their corners. A pavilion, or baradari, sits on the fourth terrace, while another connects the fifth and sixth terraces. The garden’s entrance is on the fourth terrace, where a series of buildings, believed to have housed a Hamman (bath), once stood.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Unlike most Mughal gardens in Kashmir, which typically feature water channels and cascading waterfalls (chadars) to supply water, Pari Mahal relies on a distinct water system. The garden's water tanks are provided through an underground piping system, with water sourced from a nearby spring.
                </p>

                <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Shalimar Garden</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The origins of Shalimar Bagh date back to the 6th century, with the site believed to have been home to a villa built by King Pravarassena II during that time, when the garden was considered a sacred place. The small village in the area retained the name Shalimar, while the villa and garden faded into history. In the 16th century, the Muslim king Zain-ul-Abidin was credited with constructing a canal and embankment for Shalimar. The lower section of the garden, known as Farah Bakhsh, meaning "Joy-Imparting" garden, was created by Emperor Jahangir around 1620, with Prince Khurram (later Emperor Shah Jahan) overseeing its construction. Like Nishat Bagh, the layout of this garden followed the traditional chahar bagh design. After Shah Jahan ascended to the throne, he added the upper garden, Fayz Bakhsh or "Bounty-Bestowing" garden, around 1630, expanding the space and creating the zenana (women's quarters). Zafar Khan, the Mughal governor of Kashmir, led this project, which included the addition of the black marble pavilion in the zenana.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Shalimar Bagh today spans approximately 594 by 250 meters and features five main terraces, making up two and a half Chahar baghs. The garden was divided into two parts according to its function for royalty. The lower portion, including the first three terraces, was designated Diwan-i-Aam (the public audience hall). In comparison, the upper two terraces were reserved for the Emperor and his courtiers, known as Diwan-i-Khas. A thick masonry wall with gateways on either side of the water channel separated these areas. The upper section, the zenana, was a private area for the Empress and her ladies.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Architecturally, Shalimar Bagh is more elaborate than many other Mughal gardens in Kashmir. Almost every terrace edge features significant architectural elements such as pavilions, pools, and cascading water channels. The garden design integrates the built environment with the natural surroundings, creating a harmonious balance. The Mughals intentionally minimised the grandeur of the buildings to avoid overshadowing the landscape's natural beauty. Among the garden's key structures are the Pink Pavilion in the Diwan-i-Aam area and the Black Pavilion in the Diwan-i-Khas. While Mughal architecture is less prominent in Kashmir than in other parts of India, these pavilions offer rare examples of Mughal architecture in the region. The Pink Pavilion, located over the water channel of the second terrace, is a rectangular open pavilion built with traditional badshahi bricks, featuring papier-mâché ceilings and intricately carved columns and railings. The Black Pavilion, an open structure on the fourth terrace, was built with brick masonry and stone-facing, with recessed niches and Takashi (paintings) on the walls. The pavilion is known for its black appearance due to the polished stone used in its construction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Shalimar Bagh also features six watch towers positioned at the four corners and in the middle of the garden. While the original Mughal planting scheme has changed over the years, the garden remains lush with flowers, well-maintained grass, and some fruit trees. Its unique quality lies in its blend of landscape and architectural features, enhanced by the surrounding agricultural landscape, rice fields, and the historic canal linking it to Dal Lake. A stunning mountain backdrop further frames the garden.
                </p>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                  <Camera className="w-6 h-6 text-gray-600" />
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryPhotos.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-md overflow-hidden group cursor-pointer">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Kashmir ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-orange-500 pl-6 pt-1 pb-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200 rounded-md px-2 py-1 text-sm">
                          Day {day.day}
                        </Badge>
                        <h3 className="text-lg font-semibold text-gray-900">{day.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-3">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700 border border-gray-200 rounded-full px-2 py-0.5">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-3 text-sm text-gray-700">
                        {day.hotel !== "Nil" && <p><span className="font-semibold">Overnight:</span> {day.hotel}</p>}
                        {day.meals && <p><span className="font-semibold">Meals:</span> {day.meals}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Local Sightseeing & Activities */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Local Sightseeing & Activities</h2>
                <div className="space-y-4">
                  {localSightseeingActivities.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <MapPin className="mt-1 w-5 h-5 text-blue-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold">{item.location}</h3>
                        <p className="text-gray-600"><span className="font-medium">Places:</span> {item.places}</p>
                        <p className="text-gray-600"><span className="font-medium">Activities:</span> {item.activities || "N/A"}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  <span className="font-semibold">Note:</span> The cost of adventure activities, such as gondola cable car rides, skiing, snowboarding, etc., is not included in the package. You can book them in advance or on the spot.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold">Gondola Cable cars should be booked in advance.</span> To make a reservation, call +91 9103058616 (9:00 AM to 5:00 PM) or visit the official website: <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">www.jammukashmircablecar.com</a>.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Some places may not always be accessible by road. You may have to trek to reach them.
                </p>
              </CardContent>
            </Card>

            {/* Things to Carry */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Things to Carry</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {thingsToCarry.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Inclusions */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">What's Included</h2>
                <div className="space-y-2">
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="mt-1 w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exclusions */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">What's Not Included</h2>
                <div className="space-y-2">
                  {exclusions.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-gray-700">
                      <XCircle className="mt-1 w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Important Things to Remember */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Important Things to Remember</h2>
                <div className="space-y-3 text-gray-700">
                  {importantNotes.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Cancellation Policy</h2>
                <div className="space-y-3 text-gray-700">
                  {cancellationPolicy.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQs Section */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions (FAQs)</h2>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Which is the most beautiful place in Kashmir?</h3>
                <p className="text-gray-600 mb-4">Kashmir, often called "Paradise on Earth," is home to breathtaking destinations like Srinagar, with its serene Dal Lake and vibrant Mughal gardens; Gulmarg, known for its lush meadows and the iconic Gondola ride; and Pahalgam, featuring the tranquil Aru Valley, scenic Betaab Valley, and picturesque Chandanwari.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is a permit required to visit Kashmir?</h3>
                <p className="text-gray-600 mb-4">Indian citizens need no permit to visit Kashmir. However, they may need a valid passport, PAN card, Aadhar card, or driving license and a ticket printout. Permits may also be required for trekking in sensitive border areas. Foreign nationals need a visa and possibly additional licenses. An Inner Line Permit is necessary for regions like Ladakh, and trekking permits are required for specific areas.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How much does a Kashmir trip typically cost?</h3>
                <p className="text-gray-600 mb-2">The cost of a Kashmir trip varies depending on the type of package and amenities:</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>4 Days, 3 Nights: ₹14,500/- PP</li>
                  <li>5 Days, 4 Nights: ₹18,900/- PP</li>
                  <li>6 Days, 5 Nights: ₹23,500/- PP</li>
                  <li>7 Days, 6 Nights: ₹28,500/- PP</li>
                  <li>Up to 8 Days: Up to ₹34,000/- PP</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the famous bazaars in Kashmir that you should explore?</h3>
                <p className="text-gray-600 mb-2">Famous bazaars in Kashmir:</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>**Lal Chowk:** Vibrant market in Srinagar for Pashmina shawls, carpets, and saffron.</li>
                  <li>**Sopore Fruit Market:** Largest economic hub with a turnover of ~Rs 3000 crore annually.</li>
                  <li>Other shopping spots are Zaina Kadal Road, Residency Road, Kashmir Government Arts Emporium, Sangarmaal City Centre, Ahmad Complex, Polo View, and Fair Deal Shopping Complex.</li>
                  <li>**What to Buy:** Pashmina shawls, carpets, saffron, kangri, pherans, paper mache, and wooden crafts.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the charges for Drung Waterfall?</h3>
                <p className="text-gray-600 mb-2">The charges for the ATV ride to Drung Waterfall are as follows:</p>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Activity</th>
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Details</th>
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">By ATV Ride to Drung Waterfall</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Self-drive round trip (9 km) with an operator</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹3,000/-</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">By Union cab</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">Suitable for 4 to 8 adults per vehicle</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">₹2,800/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the best Srinagar tour packages for family?</h3>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>**Fairy-tale Getaway to Kashmir** (₹17,290): Ideal for a short family trip (4 Days/3 Nights).</li>
                  <li>**Mystical Kashmir Vacation - With Houseboat Stay** (₹27,837): Unique houseboat experience (6 Days/5 Nights).</li>
                  <li>**Relaxing Holiday in Kashmir** (₹25,415): Comfortable and leisurely holiday (6 Days/5 Nights).</li>
                  <li>**Kashmir Week** (₹38,900): Comprehensive tour of key attractions (7 Days/6 Nights).</li>
                  <li>**Exotic Kashmir with Sonmarg** (₹29,400): Outdoor adventures and scenic beauty (7 Days/6 Nights).</li>
                  <li>**Exotic Kashmir with Gulmarg** (₹32,900): Snow activities and family fun in Gulmarg (7 Days/6 Nights).</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is Kashmir like in January?</h3>
                <p className="text-gray-600 mb-2">Kashmir in January:</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>**Snowy Wonderland:** January is one of the coldest months, with heavy snowfall covering the region in pristine white, creating picturesque landscapes.</li>
                  <li>**Winter Sports:** Gulmarg is a skier, snowboarder, and gondola ride hub.</li>
                  <li>**Chillai Kalan (21 Dec - 31 Jan):** The harshest winter period in Kashmir, with freezing temperatures and the heaviest snowfall. Lakes and rivers partially freeze, adding to the beauty.</li>
                  <li>**Cold Weather:** Temperatures can drop below freezing, so pack warm clothing and winter gear.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is December a good time to visit Kashmir?</h3>
                <p className="text-gray-600 mb-2">Visiting Kashmir in December:</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>**Winter Wonderland:** Peak snowfall transforms Kashmir into a snowy paradise.</li>
                  <li>**Winter Sports:** Gulmarg is ideal for skiing, snowboarding, and other activities.</li>
                  <li>**Cold Weather:** Pack warm clothing as temperatures are very low.</li>
                  <li>**Travel Challenges:** Check road conditions due to possible closures from snow.</li>
                  <li>**Cultural Experiences:** Enjoy Kashmiri cuisine and traditions amidst the winter charm.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How much does a Gondola ride cost in Gulmarg?</h3>
                <p className="text-gray-600 mb-2">The pricing for the Gondola ride in Gulmarg depends on the phase you select:</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>**Phase I (Gulmarg to Kongdoori):** ₹840 per adult (plus a convenience fee)</li>
                  <li>**Phase II (Kongdoori to Apharwat):** ₹1010 per adult (plus a convenience fee)</li>
                  <li>**Chairlift (Kongdoori to Mary’s Shoulder):** ₹300 per adult (plus a convenience fee)</li>
                </ul>
                <p className="text-gray-600 mb-4">The combined cost for those opting for Phase I and II is ₹1800 per adult, excluding the convenience fee.</p>
                <p className="text-gray-600 mb-4">**Booking Information:**</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>**Phone:** +91-9103058616 (available from 8:30 AM to 5:30 PM)</li>
                  <li>**Website:** <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">www.jammukashmircablecar.com</a></li>
                </ul>
              </CardContent>
            </Card>

          </div> {/* End of lg:col-span-2 main content */}

          {/* Sidebar - Booking/Price Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4 rounded-lg shadow-md"> {/* Sticky card for sidebar */}
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Package Pricing</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">Price on Request</div>
                  <div className="text-sm text-gray-500">per person (contact for details)</div>
                </div>

                <div className="space-y-4 mb-6 border-t pt-4 border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">3 Nights / 4 Days</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Night Stays:</span>
                    <span className="font-medium">2N Gulmarg • 1N Srinagar</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Pick & Drop:</span>
                    <span className="font-medium">Srinagar to Srinagar</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-medium">Whole Year</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>Individual & Group Options</span>
                  </div>
                </div>

                <BookingButton tourName="Srinagar Gulmarg Tour Package" tourPrice="Price on Request" className="w-full py-3 text-lg font-semibold bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 shadow-md hover:shadow-lg" />

                {/* Hotel Details */}
                <div className="mt-8 space-y-4 border-t pt-4 border-gray-200">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Hotel Details</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Destination</th>
                                    <th className="px-4 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Nights</th>
                                    <th className="px-4 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Hotels</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hotelDetails.map((hotel, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">{hotel.destination}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">{hotel.nights}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">{hotel.hotels}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div >

                {/* Kashmir Reels Section */}
                <div className="mt-8 space-y-4 border-t pt-4 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-gray-600" />
                    Kashmir Reels
                  </h3>
                  {reelPermalinks.map((permalink, index) => (
                    <div
                      key={index}
                      ref={el => instagramEmbedRefs.current[index] = el}
                      className="instagram-media-container rounded-lg overflow-hidden shadow-sm"
                    >
                      {/* Instagram embed blockquote structure */}
                      <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink={`${permalink}?utm_source=ig_embed&amp;utm_campaign=loading`}
                        data-instgrm-version="14"
                        style={{
                          background: '#FFF',
                          border: 0,
                          borderRadius: '3px',
                          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                          margin: '1px',
                          maxWidth: '540px',
                          minWidth: '326px',
                          padding: 0,
                          width: '99.375%',
                          width: '-webkit-calc(100% - 2px)',
                          width: 'calc(100% - 2px)',
                        }}
                      >
                        <div style={{ padding: '16px' }}>
                          <a
                            href={`${permalink}?utm_source=ig_embed&amp;utm_campaign=loading`}
                            style={{ background: '#FFFFFF', lineHeight: 0, padding: 0, textAlign: 'center', textDecoration: 'none', width: '100%' }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minHeight: '50px' }}>
                              <div style={{ fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '18px' }}>View this post on Instagram</div>
                            </div>
                          </a>
                        </div>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div> {/* End of sidebar */}
        </div>
      </div>

      <Footer />
    </div>
  );
}