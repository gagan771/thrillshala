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

export default function SrinagarGulmargTourPackagePage() { // Renamed for this specific package
  // Hero Slider State
  const heroImages = [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Kashmir/Gulmarg image
    "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Kashmir/Gulmarg image
    "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Kashmir/Gulmarg image
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Kashmir/Gulmarg image
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

  // Itinerary for Srinagar - Gulmarg - Srinagar
  const itinerary = [
    {
      day: 1,
      title: "Arrive at Srinagar and Transferred to Gulmarg",
      description: "Upon your arrival at Srinagar airport, our vehicle will be ready to take you to Gulmarg, located 59 km from Srinagar at 2650 meters. After checking into your accommodation, you will head out with your guide to enjoy thrilling activities and adventures in Gulmarg.",
      highlights: ["Srinagar Airport Pick-up", "Transfer to Gulmarg", "Hotel Check-in", "Gulmarg activities/adventure"],
      hotel: "Stay at the Hotel at Gulmarg",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Gulmarg Sightseeing",
      description: "After breakfast, you'll embark on a Gondola ride on the world’s highest cable car journey. Later, you’ll spend the rest of your day exploring notable sites such as the Golf Course, Maharaja Palace, and Children’s Park while enjoying scenic views of Gulmarg.",
      highlights: ["Gondola ride (excluded)", "Golf Course", "Maharaja Palace", "Children’s Park", "Scenic views of Gulmarg"],
      hotel: "Stay at the Hotel at Gulmarg",
      meals: "Breakfast & Dinner",
    },
    {
      day: 3,
      title: "Drung Village Tour",
      description: "After breakfast, we will head out on a village tour. We will travel 13 km downhill to the village of Drung, known for its frozen waterfall. After exploring the town, we will return to Gulmarg.",
      highlights: ["Drung Village tour", "Frozen Drung Waterfall (Union Cab excluded)", "Village exploration"],
      hotel: "Stay at the Hotel at Gulmarg",
      meals: "Breakfast & Dinner",
    },
    {
      day: 4,
      title: "Gulmarg to Srinagar",
      description: "After breakfast, you will head out for a skiing session, where our instructor will teach you some tips and tricks. After a few hours on the slopes, you will depart for Srinagar. Upon arrival, you will be escorted to your hotel or houseboat for an overnight stay.",
      highlights: ["Skiing session with instructor", "Departure to Srinagar", "Hotel/Houseboat Check-in"],
      meals: "Breakfast & Dinner",
      hotel: "Stay at the Hotel at Srinagar/Houseboat in Dal Lake",
    },
    {
      day: 5,
      title: "Depart",
      description: "After breakfast, you will enjoy a one-hour Shikara ride on the serene Dal Lake, which offers views of the vegetable market, Char Chinar, and Nagin Lake. Following the ride, our car will pick you up and take you to Srinagar International Airport, where you will return home.",
      highlights: ["Breakfast", "One-hour Shikara ride on Dal Lake", "Floating Vegetable Market", "Char Chinar", "Nagin Lake", "Srinagar International Airport Drop-off"],
      meals: "Breakfast",
      hotel: "Nil",
    },
  ];

  // Local Sightseeing & Activities
  const localSightseeingActivities = [
    { location: "Srinagar", places: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Shankaracharya Temple Tulip, Garden, Dal Lake, Etc.", activities: "Shikara Ride" },
    { location: "Gulmarg", places: "Gulmarg Gondola ride, Golf Course, Drung waterfall.", activities: "Gondola Ride, Ski and Snowboard" },
  ];

  // Inclusions
  const inclusions = [
    "Meals as mentioned in the Itinerary (4 Breakfasts, 4 Dinners).",
    "One-hour Shikara ride is complimentary.",
    "4-night accommodation.",
    "Heater Charges (if specified by hotel).",
    "Individual cab for the tour.",
    "All sightseeing as mentioned in the itinerary.",
    "Pick up and drop off at Srinagar.",
    "Taxes included: toll tax, parking fee, green tax, driving and fuel expenses.",
  ];

  // Exclusions
  const exclusions = [
    "Fees for any adventure activity.",
    "Guide Charges.",
    "Lunch, Camera Fee, or Monument Fee.",
    "Any kind of personal expenses or extra meals ordered.",
    "Services of the vehicle on leisure days and after finishing the sightseeing tour as per the Itinerary.",
    "Any kind of drink (alcoholic, mineral water, aerated).",
    "Any increase in taxes or fuel increases surface transportation and land arrangements, which may become effective before departure.",
    "Heater charges in hotels (Note: This contradicts an item in inclusions; clarification needed from provider).",
    "Cost is incidental to any change in the itinerary/stay due to flight cancellation due to bad weather, ill health, roadblocks, and/or any factors beyond our control.",
    "This package does not include safaris, rafting, and other activities.",
    "Gondola ride tickets.",
    "Union Cab to Drung Waterfall (if applicable).",
  ];

  // Cancellation Policy
  const cancellationPolicy = [
    "Unexpected events or government restrictions may cancel the tour. In such cases, you can reschedule your dates. However, we will not provide a refund.",
    "30 days or more: 90% of the total package cost is refundable.",
    "21-30 days: 75% of the total package cost is refundable.",
    "11-20 days: 50% of the total package cost is refundable.",
    "Less than ten days: No refund.",
    "The booking amount (30% of the package amount) is non-refundable. However, you can adjust this amount with any other tour, trek, or activity Uncia offers after the booking date.",
  ];

  // Important Things to Remember
  const importantNotes = [
    "In exceptional cases, if the mentioned hotel is unavailable, we may shift you to another similar hotel.",
    "Check-in/check-out time at all the properties will be at noon hrs (Noon). Some properties may not allow early check-in.",
    "Buffet Service will be available from 8:00 am to 9:30 am and 8:30 pm to 10:00 pm.",
    "You will get hot water in showers for a few hours in the morning. Kindly ask the receptionist about the times in advance.",
    "Triple Sharing does not necessarily mean Three Separate Beds. It can have one double bed and one rollaway bed.",
    "The vehicle will be provided as per the itinerary, and any additional sightseeing not mentioned in the itinerary will be charged extra.",
    "No refund or compensation for any unused services/transportation in any circumstance.",
    "Visits to museums/parks/monasteries/forts in the tour are subject to their opening on the day of the visit as per the rules of the competent authority.",
    "We will not bear any cost for flights cancelled or delayed due to any reason.",
    "There will be no compensation if you are delayed due to roadblocks, natural calamities, or personal reasons. The alternate accommodation cost due to the same should be borne by you.",
    "There are no changes in the date of the tour once booked. However, you can postpone the tour if it gets cancelled due to natural calamities, government restrictions, pandemics, riots, or war.",
    "Rates are subject to change until you haven’t paid the total amount.",
    "Room allotment will be as per the availability at check-in time; floor or view preferences are not guaranteed.",
    "All expenses which are not included in the cost of the package shall be paid directly at the time of checkout.",
    "Smoking or drinking is not allowed inside the vehicle.",
    "You are advised to take insurance before starting the tour.",
  ];

  // Hotel Details
  const hotelDetails = [
    { destination: "Gulmarg", nights: "3 Nights", hotels: "Hotel at Gulmarg" },
    { destination: "Srinagar", nights: "1 Night", hotels: "Hotel at Srinagar/Houseboat in Dal Lake" },
  ];

  // Array for Photo Gallery images
  const galleryPhotos = [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600",
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

  const currentYear = new Date().getFullYear(); // To note current year for historical context

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Slider Implementation */}
      <div className="relative h-[60vh] overflow-hidden">
        {heroImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Srinagar Gulmarg Tour ${index + 1}`}
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
            <Badge className="bg-orange-500 text-white mb-4 rounded-full px-3 py-1">4 Nights / 5 Days</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Srinagar Gulmarg Tour Package | Majestic Meadows & Lake Serenity</h1>
            <p className="text-xl mb-6 max-w-2xl text-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Experience the best of Kashmir with a focus on Gulmarg's thrilling adventures and Srinagar's tranquil lake life.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-200" />
                <span>Srinagar • Gulmarg • Srinagar</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-200" />
                <span>4 Nights / 5 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-200" />
                <span>Flexible Group Sizes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            {/* Trip Overview */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Trip Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Embark on a delightful 4-night, 5-day journey focusing on the captivating beauty of Gulmarg and the serene charm of Srinagar. This package takes you directly from Srinagar Airport to the adventure hub of Gulmarg for three nights, where you'll enjoy exhilarating activities like the Gondola ride and a village tour to Drung. Conclude your trip with a relaxing night in Srinagar, complete with a traditional Shikara ride on Dal Lake, making for an unforgettable Kashmir experience.
                </p>
              </CardContent>
            </Card>

            {/* About Kashmir & Destinations */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About Kashmir & Your Destinations</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  The region of Jammu and Kashmir, before 1947, spanned an impressive 86,024 square miles, stretching from latitudes 32° 78' to 36° 58' N and longitudes 73° 27' to 80° 72' E. This vast territory encompassed not only the Jammu region but also included areas such as Ladakh, Gilgit, Hunza, Nagar, Punial, and Yasin. Furthermore, the tiny State of Chitral, located northwest of Gilgit, was historically tributary to the ruler of Kashmir. The present shape of the State owes much to Maharaja Gulab Singh Ji, the founder of the Dogra Hindu dynasty in Kashmir, whose efforts in the second half of the 19th century consolidated these regions into a single dominion.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Historical Overview of Kashmir (Before 1947):</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nestled amidst the grandeur of the Himalayas, Kashmir is often hailed as one of the most beautiful places on Earth. Unlike much of India, Kashmir has a recorded history that extends far into the past, in contrast to Alberuni’s observation in the 11th century that Indians generally lacked a sense of historical record. Kashmir also boasts a legacy of distinguished historians, including Kalhana, author of the Rajatarangini, and Bilhana, a Sanskrit scholar who composed the Vikramankadeva-charity in honour of King Vikramaditya VI of Kalyana.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The name "Kashmir" is said to derive from "Ka" (water) and "Shimir" (to desiccate), referencing a tradition that the region was once a lake drained by the ancient saint Kashyap. Historically, it became part of the Mauryan Empire under Ashoka, who founded Srinagar around 250 BCE. Buddhism flourished in the region during this period, particularly under the Kushans. The third Buddhist council was held in Kashmir during Kanishka's reign, corroborated by the accounts of the Chinese traveller Hien Tsang in the 7th century CE. Despite the influence of Buddhism, Hinduism remained the dominant religion.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-2">Dynastic Eras:</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In the 7th century CE, the Karkota dynasty, established by Durlabhavardhana, rose to prominence. Lalitaditya Muktapida, a notable ruler of this dynasty, constructed the renowned Martand Sun Temple. The Karkotas dynasty succeeded the Utpala dynasty in 855 CE, under which Avanti Verman restored political and economic stability to Kashmir. Queen Didda, a widow of the Gupta lineage, ruled effectively until 1003 CE despite her controversial personal life, paving the way for the Lohara dynasty.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Udyan Dev was the final Hindu monarch of Kashmir, but his actual power largely rested with his queen, Kota Rani, who effectively governed as the de facto ruler. Known for her bravery and political acumen, her death in 1339 marked the end of Hindu rule and the establishment of Muslim dominance in Kashmir under Sultan Shams-ud-Din’s dynasty, which ruled for 222 years. Sultan Zain-ul-Abidin, a prominent figure of this era, presided over a cultural and political renaissance in the region.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-2">Kashmir Under Foreign Rule:</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kashmir was annexed into the Mughal Empire in 1586, ending its independence. Later, in 1757, the region came under the control of Ahmed Shah Durrani, an Afghan ruler. In 1819, Ranjit Singh integrated Kashmir into his Sikh Empire. However, following the Anglo-Sikh wars, British forces assumed control and, under the Treaty of Amritsar, sold Kashmir to Gulab Singh for 75 lakh rupees. This transaction granted Gulab Singh full authority over the region, which he expanded by annexing Ladakh. His successors included Maharaja Ranbir Singh (1857-1885), Maharaja Partab Singh (1885-1925), and Maharaja Hari Singh, who ruled from 1925 until 1950.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-2">Political Awakening:</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In 1932, Sheikh Abdullah founded Kashmir’s first political party, the All Jammu & Kashmir Muslim Conference, later renamed the National Conference in 1939. This party remains a significant political entity in modern-day Kashmir.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">The History of Kashmir Post-1947:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  After India gained independence in 1947, Maharaja Hari Singh, the ruler of Jammu and Kashmir, opted to remain neutral, neither joining India nor Pakistan. However, when Pakistani forces invaded the region in 1948, the Maharaja sought India's military aid. In return, he signed the Instrument of Accession, formally merging Kashmir with the Indian Union and integrating Kashmir into the Indian Union. Indian troops intervened, and fighting ceased in 1949 following a United Nations-mediated truce. This agreement established the first Line of Control (LoC), which divided the territory between India and Pakistan.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By 1956, Jammu and Kashmir became an official part of India under a newly framed Constitution. However, areas captured by Pakistan during the 1948 conflict, known as Azad Kashmir, remained under its control. The situation grew more complex in 1959 when China occupied the Aksai Chin region of Ladakh. The situation intensified in 1963 when Pakistan and China reached a border agreement under which Pakistan handed over portions of territory claimed by India to China.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In 1965, India and Pakistan clashed over Kashmir once more, but the hostilities were brought to a halt through a United Nations-mediated ceasefire. The following year, Indian Prime Minister Lal Bahadur Shastri and Pakistani President Ayub Khan signed the Tashkent Agreement, committing to peaceful conflict resolution. However, in 1971, another war erupted, this time triggered by the independence movement in East Pakistan. With India's support, East Pakistan became Bangladesh. This war concluded with the Shimla Agreement of 1972, where Indian Prime Prime Minister Indira Gandhi and Pakistani President Zulfikar Ali Bhutto agreed to settle disputes bilaterally.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  During the 1970s and early 1980s, Kashmir experienced a boom in tourism, attracting visitors from across the globe to its breathtaking scenery and rich cultural heritage. However, this period of peace ended in the late 1980s and 1990s, when separatist militancy and terrorism surged in the region. Armed insurgents and foreign militants caused widespread violence, leading to significant casualties and the displacement of many Kashmiri families.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In recent years, efforts have been made to foster dialogue between India and Pakistan to resolve enduring issues. These initiatives bring hope for lasting peace in Jammu and Kashmir. As stability gradually returns, the region's allure—its beautiful gardens, tranquil meadows, towering mountains, and vibrant cultural sites—might again draw tourists worldwide.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">About Srinagar:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Srinagar, the capital of J&K, is situated in the heart of the Kashmir Valley along the scenic banks of the Jhelum River. Four districts and Ladakh UT surround the city. To the north lies Ladakh, Ganderbal to the east, Pulwama to the south, and Budgam to the northwest. Located 1,585 meters above sea level, Srinagar is renowned for its beautiful gardens, lakes, houseboats, traditional Kashmiri handicrafts, and dried fruits. The Jhelum River, known as Vyath in Kashmir, flows through the city, winding through the valley and eventually merging with Dal Lake. Srinagar is also famous for its nine historic bridges, connecting the city's two parts.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-2">Hokersar:</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Hokersar, a wetland located 14 km (8.7 miles) north of Srinagar, is an essential site for migratory birds. During winter, thousands of birds migrate from Siberia and other regions to Hokersar, making it a key stopover for birds travelling between Siberia, Central Asia, and Kashmir. The wetland, covering an area of 13.75 km² (5.31 sq mi), includes both lake and marshy areas and is among the most accessible and well-known of Kashmir’s wetlands, alongside others such as Hygam, Shalibug, and Mirgund. The wetlands are critical in supporting a large population of wintering, staging, and breeding birds. Bird species found in Hokersar include migratory ducks and geese, such as the Brahminy duck, tufted duck, gadwall, garganey, greylag goose, mallard, common merganser, northern pintail, common pochard, ferruginous pochard, red-crested pochard, ruddy shelduck, north shoveller, common teal, and Eurasian wigeon.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-2">How to Reach Srinagar:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>By Air:</strong> Sheikh ul Alam Airport (IATA: SXR) is an international airport serving Srinagar. It offers regular flights connecting the city to major cities like Delhi, Mumbai, and Chandigarh. The airport is conveniently located just 15 km from the city centre.</li>
                  <li><strong>Nearest Airport:</strong> Sheikh ul Alam Airport, Srinagar</li>
                  <li><strong>By Train:</strong> To reach Srinagar by train, travellers must first reach Banihal Railway Station. From there, they can hire taxis or cabs for the onward journey.</li>
                  <li><strong>By Road:</strong> Srinagar, the summer capital of Jammu and Kashmir, is well-connected by road to several key cities, including Delhi (876 km), Chandigarh (646 km), Leh (424 km), and Jammu (258 km). Regular buses and taxis make it easy to reach Srinagar.</li>
                </ul>
                <h4 className="text-lg font-semibold mt-4 mb-2">Shikara Ride on Dal Lake, Kashmir:</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A Shikara ride on Dal Lake in Kashmir offers a peaceful journey combining stunning natural beauty and cultural significance. As you glide through the calm waters in a beautifully crafted wooden boat, you’ll be captivated by the reflections of the Pir Panjal mountains, the unique houseboats, and the lively surroundings. The experience offers a glimpse into Kashmir’s rich traditions, and the boats showcase the region's exquisite craftsmanship and heritage.
                </p>
                <h5 className="text-md font-semibold mt-2 mb-1">Best Time to Visit:</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Autumn (September-November): The landscape is bathed in golden tones, with tranquil lakes and clear skies providing a serene atmosphere.</li>
                  <li>Summer (June): A lively time marked by blooming flowers and pleasant weather, though it also attracts many tourists.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Gulmarg: The Meadow of Flowers:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In the heart of the stunning Himalayan range, Gulmarg, which translates to "Meadow of Flowers," is a picturesque hill station around 60 kilometres from Srinagar. The drive takes around an hour and a half, offering panoramic views. Known for its lush meadows and snow-covered mountains, Gulmarg has always been a favourite destination for travellers.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-2">Main Attractions:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Gulmarg Gondola:</strong> One of the world’s highest cable cars, divided into two phases: Phase 1 to Kongdori Station (8,530 feet) and Phase 2 to Apharwat Peak (12,293 feet).</li>
                  <li><strong>Strawberry Valley & Leopards Valley:</strong> Enchanting natural areas for exploration.</li>
                  <li><strong>Al-Pathar Lake:</strong> A peaceful frozen lake, accessible via horse ride or trek from Kongdori.</li>
                  <li><strong>Winter Wonderland:</strong> Gulmarg transforms into a snowy paradise for skiing, with a festive atmosphere including White Christmas and New Year celebrations.</li>
                </ul>
                <h4 className="text-lg font-semibold mt-4 mb-2">Historical Background:</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gulmarg is rich in history. It once served as a retreat for royalty like Yousuf Shah Chak and Emperor Jahangir. Initially known as Gaurimarg, named after Goddess Parvati, it was renamed Gulmarg, meaning "the place of roses."
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In the early 20th century, the renowned explorer Sir Marc Aurel Stein often visited Gulmarg to rest between his Central Asian expeditions. It became a popular summer destination for British officers and their families during British rule.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-2">How to Reach Gulmarg:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>By Air:</strong> The closest airport is Sheikh Ul Alam International Airport in Srinagar, 54 kilometres from Gulmarg.</li>
                  <li><strong>By Train:</strong> The nearest railway station is in Anantnag, about 45 kilometres away.</li>
                  <li><strong>By Road:</strong> From Srinagar, it's a 54-kilometer drive.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Seasonal Activities & Culinary Delights:</h3>
                <h4 className="text-lg font-semibold mt-4 mb-2">Summer Activities in Kashmir:</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  During the summer, Gulmarg becomes a vibrant hub, offering a variety of activities for visitors to enjoy. Whether it’s a scenic ride on the Gondola or trekking through the stunning landscapes of Kashmir, there's something for everyone. The local festivals provide a chance to experience the region's traditional crafts and music, while the bustling markets are perfect for picking up unique, handmade souvenirs. Visitors can also unwind by the crystal-clear lakes or have a relaxing picnic in the serene natural surroundings.
                </p>
                <h5 className="text-md font-semibold mt-2 mb-1">Summer Culinary Delights:</h5>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Try a refreshing Kashmiri Kahwa, a fragrant green tea infused with saffron, almonds, and cardamom to cool off. On warm summer evenings, enjoy a savoury treat: Chaman, fried cottage cheese cubes cooked in a rich curry sauce and served with rice or chapati.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-2">Autumn: The Golden Season (September to November):</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  From September to November, Kashmir is transformed into a golden wonderland. In the local language, autumn is known as Harud. During this time, trees shed their leaves, turning the valley into a breathtakingly picturesque landscape. With temperatures ranging from 9°C to 23°C, this season offers the perfect climate for sightseeing and outdoor activities.
                </p>
                <h5 className="text-md font-semibold mt-2 mb-1">Autumn Activities in Kashmir:</h5>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Autumn is an ideal time to visit apple orchards and join locals in picking fresh apples. The Saffron Festival in Pampore is another highlight, where you can witness the beautiful saffron blooms and learn about the local farming traditions. The stunning autumn foliage also creates excellent photography opportunities and leisurely drives around the valley.
                </p>
                <h5 className="text-md font-semibold mt-2 mb-1">Autumn Culinary Delights:</h5>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Try Gushtaba, a creamy meatball curry perfect for cooler autumn weather. These rich and warming dishes are also popular. Another popular dish is Kahwa Kebab, tender meat grilled with aromatic spices. It is often paired with fresh fruits for a satisfying meal.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-2">Winter: A Snowy Wonderland (December to February):</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  From December to February, Kashmir's winter becomes a snowy retreat, attracting snow lovers and adventure enthusiasts. The region becomes a winter wonderland, with temperatures between -2°C and 12°C. Gulmarg is particularly popular during this time for winter sports like skiing and snowboarding, drawing visitors from across the globe.
                </p>
                <h5 className="text-md font-semibold mt-2 mb-1">Winter Activities in Kashmir:</h5>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Winter is the season to embrace Kashmir’s snowy beauty. Try snowshoeing through the snow-covered landscapes or riding a horse-drawn sleigh. Gulmarg offers thrilling skiing opportunities, while the peaceful valleys provide an idyllic winter escape for those seeking tranquillity.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Famous Dishes of Kashmir and Ladakh:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Influenced by diverse cultures, Kashmiri cuisine offers a rich array of flavorful dishes. Here are some must-try dishes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li><strong>Rogan Josh:</strong> A spicy lamb dish with yoghurt and browned onions, a Mughal legacy.</li>
                  <li><strong>Modur Pulav:</strong> Sweet rice with saffron, milk, ghee, and dry fruits.</li>
                  <li><strong>Matschgand:</strong> Spicy minced meatballs cooked in red gravy.</li>
                  <li><strong>Yakhni:</strong> Lamb cooked in yoghurt with aromatic spices.</li>
                  <li><strong>Dum Olav:</strong> A vegetarian potato curry with yoghurt and spices.</li>
                  <li><strong>Kashmiri Muji Gaad:</strong> Fish with radish or lotus stems, typically served during festivals.</li>
                  <li><strong>Aab Gosht:</strong> Mutton stew made with milk and spices.</li>
                  <li><strong>Goshtaba:</strong> Minced mutton in rich yoghurt gravy, a royal dish.</li>
                  <li><strong>Lyodur Tschaman:</strong> Cottage cheese cooked in creamy turmeric gravy.</li>
                  <li><strong>Skyu:</strong> Ladakhi wheat dough dish with meat and vegetables.</li>
                  <li><strong>Khambir:</strong> Ladakhi whole wheat bread, served with butter tea.</li>
                  <li><strong>Herbal Tea:</strong> A warming, health-boosting green tea with butter and salt in Ladakh.</li>
                  <li><strong>Paba:</strong> Peas and wheat-based dough, a nutritious Ladakhi dish.</li>
                  <li><strong>Tangdur:</strong> Buttermilk mixed with wild vegetables, eaten with Paba.</li>
                  <li><strong>Thenthuk:</strong> Noodle soup with vegetables and meat, typical in Ladakh.</li>
                  <li><strong>Butter Tea:</strong> Tibetan drink made with butter and salt, often with yak meat.</li>
                  <li><strong>Wazwan:</strong> A grand Kashmiri multi-course feast featuring Rogan Josh and Yakhni dishes.</li>
                </ul>
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
                  <span className="font-semibold">Note:</span> The cost of adventure activities is separate from the package. You can book them on the spot. Some places are not accessible by road. You have to trek to reach such places.
                </p>
              </CardContent>
            </Card>

            {/* Hotel Details */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Hotel Details</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Destination
                        </th>
                        <th className="px-4 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          No Of Nights
                        </th>
                        <th className="px-4 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Hotels
                        </th>
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

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the best Srinagar tour packages for family?</h3>
                <p className="text-gray-600 mb-4">You can choose from several family-friendly packages. For example:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li><strong>Fairy-tale Getaway to Kashmir (₹14,500 PP for 4 Days/3 Nights):</strong> Ideal for a short family trip.</li>
                  <li><strong>Mystical Kashmir Vacation - With Houseboat Stay (₹27,837 for 6 Days/5 Nights):</strong> Offers a unique houseboat experience.</li>
                  <li><strong>Relaxing Holiday in Kashmir (₹25,415 for 6 Days/5 Nights):</strong> A comfortable and leisurely holiday.</li>
                  <li><strong>Kashmir Week (₹38,900 for 7 Days/6 Nights):</strong> A comprehensive tour of key attractions.</li>
                  <li><strong>Exotic Kashmir with Sonmarg (₹29,400 for 7 Days/6 Nights):</strong> Focuses on outdoor adventures and scenic beauty.</li>
                  <li><strong>Exotic Kashmir with Gulmarg (₹32,900 for 7 Days/6 Nights):</strong> Includes snow activities and family fun in Gulmarg.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is a permit required to visit Kashmir?</h3>
                <p className="text-gray-600 mb-4">Indian citizens generally do not need a permit to visit Kashmir. However, it's recommended to carry a valid photo ID (like an Aadhaar card, voter ID, or driving license) and a ticket printout for checkpost verification. Permits may be required for trekking in sensitive border areas. Foreign nationals will need a visa and possibly additional licenses. An Inner Line Permit is also necessary for regions like Ladakh, and specific trekking permits are required for certain areas.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">In which month can you see snow in Kashmir?</h3>
                <p className="text-gray-600 mb-4">Snow typically begins falling in Kashmir around late October at higher altitudes like Gulmarg and Sonamarg. However, the primary snowfall season usually occurs between December and February, with Gulmarg, Pahalgam, and Sonamarg being the top spots for snowfall enthusiasts.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the train options to reach Srinagar?</h3>
                <p className="text-gray-600 mb-4">The nearest railway stations to reach Kashmir by train are Jammu Tawi (271 km) and Udhampur (200 km), both well-connected to major cities. You can take private cabs or state buses from these stations to Srinagar. Note that the New Delhi to Srinagar Vande Bharat Sleeper train is projected to begin operations in January {currentYear + 0} (or {currentYear + 1} if it's currently late {currentYear}), offering a direct, semi-high-speed rail service in under 13 hours with modern amenities.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How much does a Kashmir trip typically cost?</h3>
                <p className="text-gray-600 mb-4">The cost of a Kashmir trip varies depending on the type of package and amenities:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>4 Days, 3 Nights: ₹14,500/- PP</li>
                  <li>5 Days, 4 Nights: ₹18,900/- PP</li>
                  <li>6 Days, 5 Nights: ₹23,500/- PP</li>
                  <li>7 Days, 6 Nights: ₹28,500/- PP</li>
                  <li>Up to 8 Days: Up to ₹34,000/- PP</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is a trip to Gulmarg expensive?</h3>
                <p className="text-gray-600 mb-4">The cost of a trip to Gulmarg depends on the duration of your stay. It typically ranges from INR 10,000 to INR 35,000. For an ideal 7-day trip, the cost is approximately INR 30,000.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is there an entry fee for Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, there is an entry fee for the Gulmarg Gondola ride. The ticket prices are as follows:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Phase I (Gulmarg to Kongdoori): INR 840 plus convenience fee per adult.</li>
                  <li>Phase II (Kongdoori to Apharwat): INR 950 plus convenience fee per adult.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is the Gondola ride safe?</h3>
                <p className="text-gray-600 mb-4">Yes, the Gondola ride is considered very safe. A {currentYear - 3} global analysis by Tüv Süd, a testing and certification company, revealed that riding a cable car is more than ten times safer than travelling by car and flying.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is food expensive in Kashmir?</h3>
                <p className="text-gray-600 mb-4">The cost of food in Kashmir depends on where you choose to eat. A simple meal at a local restaurant typically costs between INR 200 and INR 500 per person. If you opt for a mid-range restaurant, the cost can range from INR 500 to INR 1000 per person.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the cost of a Shikara ride in Srinagar?</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Period</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white"><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">1 Hour</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">₹700/-</td></tr>
                      <tr className="bg-gray-50"><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">2 Hours</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">₹1,500/-</td></tr>
                      <tr className="bg-white"><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">3 Hours</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">₹2,300/-</td></tr>
                      <tr className="bg-gray-50"><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">Up to 3+ hours</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">₹4,000/-</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the price of houseboats in Dal Lake Srinagar?</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Houseboat Category</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price (INR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white"><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">Deluxe Houseboat</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">₹3,000 - ₹5,000</td></tr>
                      <tr className="bg-gray-50"><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">Super Deluxe Houseboat</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">₹5,000 - ₹6,000</td></tr>
                      <tr className="bg-white"><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">Luxury Houseboat</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">₹8,000 - ₹22,000</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How many people can stay in a houseboat?</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Occupancy Type</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Number of People</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Extra Costs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white"><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">Normal Occupancy</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">14 Adults</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">N/A</td></tr>
                      <tr className="bg-gray-50"><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">Maximum Allowed</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">28 (max 21 adults)</td><td className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">Extra Adult Cost: ₹900, Extra Child Cost: ₹800</td></tr>
                    </tbody>
                  </table>
                </div>
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
                    <span className="font-medium">4 Nights / 5 Days</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Night Stays:</span>
                    <span className="font-medium">3N Gulmarg • 1N Srinagar (Hotel/Houseboat)</span>
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
                    <span>Flexible Group Sizes</span>
                  </div>
                </div>

                <BookingButton tourName="Srinagar Gulmarg Tour Package (4N/5D)" tourPrice="Price on Request" className="w-full py-3 text-lg font-semibold bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 shadow-md hover:shadow-lg" />

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