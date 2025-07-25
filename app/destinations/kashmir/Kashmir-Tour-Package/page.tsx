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

export default function KashmirTourPackagePage() { // Renamed for this specific package
  // Hero Slider State
  const heroImages = [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Kashmir image
    "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Kashmir image
    "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Kashmir image
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Kashmir image
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

  // Itinerary for Kashmir Tour Package (Srinagar - Gulmarg - Sonamarg - Pahalgam - Srinagar)
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Srinagar | Srinagar Sightseeing Tour",
      description: "Welcome to Srinagar! Upon arrival at the airport, you will be transferred to your hotel for check-in. After a brief rest, embark on a sightseeing tour starting with the Mughal Gardens, including the beautiful Shalimar Bagh, known for its elegant Persian-style terraces. Next, visit Nishat Bagh, which offers stunning views of Dal Lake. Explore Asia's largest Tulip Garden, which boasts a vibrant display of tulips during spring. Finish the tour with a visit to the historical terraced garden of Pari Mahal before being driven back to your hotel.",
      highlights: ["Srinagar Airport Transfer", "Hotel Check-in", "Mughal Gardens (Shalimar Bagh, Nishat Bagh)", "Tulip Garden (seasonal)", "Pari Mahal"],
      hotel: "Hotel at Srinagar",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Excursion to Sonamarg",
      description: "In the morning, you will be driven to the Thajiwas Pony Stand, where you can hire a pony (at your own expense) to reach Thajiwas Glacier. Upon reaching your destination, take in the awe-inspiring sights of the snow-clad glacier and its picturesque alpine scenery. You can also visit Krishnasar Lake, famous for its crystal-clear waters that beautifully reflect the towering mountains and the charming Baltal Valley. After a memorable day, return to the pony stand and return to your hotel for an overnight stay.",
      highlights: ["Drive to Sonamarg", "Thajiwas Glacier (pony ride excluded)", "Krishnasar Lake", "Baltal Valley views"],
      hotel: "Hotel at Srinagar",
      meals: "Breakfast & Dinner",
    },
    {
      day: 3,
      title: "Excursion to Gulmarg",
      description: "You will be driven to the Gulmarg Union Cab Stand in the morning. Upon reaching, you can take a walk or catch a cab to the Gondola cable car station. Enjoy a smooth gondola ride (tickets not included), offering stunning views of the lush meadows, mountains, and valleys below. You will also have the chance to visit the Drung Waterfall and Strawberry Valley. After exploring, return to the Gulmarg Union Cab Stand, where you will be transferred back to your hotel for an overnight stay.",
      highlights: ["Drive to Gulmarg", "Gulmarg Gondola ride (tickets excluded)", "Drung Waterfall", "Strawberry Valley"],
      hotel: "Hotel at Srinagar",
      meals: "Breakfast & Dinner",
    },
    {
      day: 4,
      title: "Transfer to Pahalgam | Pahalgam Sightseeing Tour",
      description: "Check out of the hotel and proceed to Pahalgam. Upon arrival, check into your hotel. Afterwards, proceed to the Union Cab Stand, where you can hire a cab (at an additional cost) to explore the beautiful valleys of Pahalgam. Visit the picturesque Aru Valley, famous for its stunning landscapes, and the scenic Betaab Valley, known for its Bollywood connections. Before returning to the cab stand, visit Chandanwari, offering breathtaking views of the Himalayan mountains. Later, head back to your hotel for an overnight stay.",
      highlights: ["Transfer to Pahalgam", "Hotel Check-in", "Aru Valley (local cab excluded)", "Betaab Valley (local cab excluded)", "Chandanwari (local cab excluded)"],
      meals: "Breakfast & Dinner",
      hotel: "Stay at the Hotel in Pahalgam",
    },
    {
      day: 5,
      title: "Transfer to Srinagar | Srinagar Local | Shikara Ride | Houseboat Stay",
      description: "After check-out, drive to Srinagar and start your sightseeing tour. The Shankaracharya Temple, perched on a hill, offers stunning panoramic city views. Next, explore the vibrant Lal Chowk market, where you can explore traditional handicrafts and immerse yourself in the local culture. Continue your tour with a visit to the picturesque Badam Wari Park. Enjoy a scenic boat ride on Dal Lake, taking in the beauty of the iconic houseboats and surroundings. Finally, check in to your hotel/houseboat for a memorable overnight stay.",
      highlights: ["Transfer to Srinagar", "Shankaracharya Temple", "Lal Chowk market", "Badam Wari Park", "Shikara Ride on Dal Lake", "Houseboat Stay"],
      meals: "Breakfast & Dinner",
      hotel: "Stay at the Hotel/ Houseboat in Srinagar",
    },
    {
      day: 6,
      title: "Srinagar Drop",
      description: "After breakfast, check out of your houseboat and get ready to bid goodbye to Kashmir. You will be transferred to Srinagar airport, marking the conclusion of your memorable trip. We wish you a safe journey ahead!",
      highlights: ["Breakfast", "Houseboat Check-out", "Srinagar Airport Drop-off"],
      meals: "Breakfast",
      hotel: "Nil",
    },
  ];

  // Local Sightseeing & Activities
  const localSightseeingActivities = [
    { location: "Srinagar", places: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Tulip Garden, Dal Lake, Etc.", activities: "Shikara Ride" },
    { location: "Gulmarg", places: "Gulmarg Gondola ride, Golf Course, Drung waterfall, Children's park, etc.", activities: "Gondola Ride, Ski and Snowboard" },
    { location: "Sonamarg", places: "Thajiwas Glacier, Zero Point, Pony Ride, Zojila Pass (Gateway of Ladakh)", activities: "Pony Ride" },
    { location: "Pahalgam", places: "Baisaran, Betaab Valley, Aru Valley, Chandanwari Valley etc.", activities: "Paragliding (Note: specific to package)" },
  ];

  // Inclusions
  const inclusions = [
    "A 3-night stay in Srinagar with breakfast and dinner is included.",
    "A 1-night stay in Houseboat with breakfast and dinner is included.",
    "1-night stay in Pahalgam with breakfast and dinner included.",
    "Heater Charges.",
    "Union Cab Charges (for Sonamarg, Gulmarg, Pahalgam as per itinerary notes).", // Clarified based on itinerary details
    "Private trip to Thajiwas Glacier.", // This seems contradictory if pony ride is excluded. I'll keep as provided in inclusions.
    "Private sightseeing tour of Gulmarg.",
    "Private sightseeing tour of Srinagar, including Badam Wari.",
    "Private sightseeing tour of Srinagar, including the Botanical Garden and Pari Mahal.",
    "Private sightseeing tour of Pahalgam.",
    "Private Shikara ride on Dal Lake in Srinagar.",
    "Airport transfer from Sheikh ul-Alam International Airport to Standard Hotel.",
    "Airport transfer from Standard Hotel to Sheikh ul-Alam International Airport.",
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
    "Cost is incidental to any change in the itinerary/stay due to flight cancellation due to bad weather, ill health, roadblocks, and/or any factors beyond our control.",
    "This package includes no advice, including rafting or other activities.", // Keeping as provided
    "Pony hire charges at Thajiwas Glacier.", // Explicitly added as per itinerary
    "Gondola cable car tickets in Gulmarg.", // Explicitly added as per itinerary
    "Local cab hire charges in Pahalgam (for Aru Valley, Betaab Valley, Chandanwari).", // Explicitly added as per itinerary
  ];

  // Cancellation Policy
  const cancellationPolicy = [
    "In case of unforeseen events or government restrictions, the tour may be cancelled. In such cases, you can reschedule your dates. However, we will not provide a refund in any condition.",
    "30 days or more: 90% of the total package cost is refundable",
    "21-30 days: 75% of the total package cost is refundable",
    "11-20 days: 50% of the total package cost is refundable",
    "Less than 10 days: No refund",
    "The booking amount (30% of the package amount) is non-refundable. However, you can adjust this amount to any other tour, trek, or activity Uncia offers on the post-booking date.",
  ];

  // Important Things to Remember
  const importantNotes = [
    "In exceptional cases, if the mentioned hotel is unavailable, we may shift you to another similar hotel.",
    "Check-in/check-out time at all the properties will be noon hrs (Noon). Some properties may not allow early check-in.",
    "Buffet Service will be available from 8:00 am to 9:30 am and 8:30 pm to 10:00 pm.",
    "You will get hot water in showers for a few hours in the morning. Kindly ask the receptionist about the times in advance.",
    "Triple Sharing does not necessarily mean Three Separate Beds. It can have one double bed and one rollaway bed.",
    "The vehicle will be provided per the itinerary, and any additional sightseeing not mentioned in the itinerary will be charged extra.",
    "No refund or compensation for any unused services/transportation in any circumstance.",
    "Visits to museums/parks/monasteries/forts in the tour are subject to their opening on the day of the visit as per the rules of the competent authority.",
    "We will not bear any cost for flights cancelled or delayed due to any reason.",
    "There will be no compensation if you are delayed due to roadblocks, natural calamities, or personal reasons. The alternate accommodation cost due to the same should be borne by you.",
    "No changes in the date of the tour once booked. However, you can postpone the tour if it gets cancelled due to natural calamities, government restrictions, pandemics, riots, or war.",
    "Rates are subject to change until you haven’t paid the full amount.",
    "Room allotment will be as per the availability at check-in time; floor or view preferences are not guaranteed.",
    "All expenses which are not included in the cost of the package shall be paid directly at the time of checkout.",
    "Smoking or drinking is not allowed inside the vehicle.",
    "You are advised to take insurance before starting the tour.",
  ];

  // Hotel Details
  const hotelDetails = [
    { destination: "Srinagar", nights: "4 Nights", hotels: "Hotel at Srinagar / Houseboat in Srinagar" }, // Combines 3N + 1N for Day 5
    { destination: "Pahalgam", nights: "1 Night", hotels: "Hotel in Pahalgam" },
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

  const currentDate = new Date();
  const isTulipGardenOpen = currentDate.getMonth() >= 2 && currentDate.getMonth() <= 3; // March (2) and April (3)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Slider Implementation */}
      <div className="relative h-[60vh] overflow-hidden">
        {heroImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Kashmir Trip ${index + 1}`}
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
            <Badge className="bg-orange-500 text-white mb-4 rounded-full px-3 py-1">5 Nights / 6 Days</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Kashmir Tour Package | Srinagar, Gulmarg, Sonamarg, Pahalgam</h1>
            <p className="text-xl mb-6 max-w-2xl text-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Explore the iconic destinations of Kashmir: the serene lakes of Srinagar, the snowy meadows of Gulmarg, the majestic landscapes of Sonamarg, and the picturesque valleys of Pahalgam.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-200" />
                <span>Srinagar • Gulmarg • Sonamarg • Pahalgam</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-200" />
                <span>5 Nights / 6 Days</span>
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
                  Kashmir is truly a paradise on Earth, a destination that words can hardly capture. To fully appreciate its beauty, you must experience it firsthand. This 5-night, 6-day comprehensive Kashmir Tour Package takes you through the very best of the valley: the enchanting Mughal Gardens and Dal Lake in Srinagar, the majestic snow-covered peaks of Gulmarg, the breathtaking alpine beauty of Sonamarg, and the serene valleys of Pahalgam. Immerse yourself in the rich culture, stunning landscapes, and unforgettable adventures that await in this "Heaven on Earth."
                </p>
              </CardContent>
            </Card>

            {/* About Kashmir */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About Kashmir</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kashmir is a multi-ethnic, multi-religious, multicultural region in northern India. The majority of Kashmiri people are Muslim, with a Hindu minority. The region has an area of about 222,236 km² (85,806 sq mi), and its population is mainly in Jammu and Kashmir. The region has been the site of political unrest and violence for over 70 years and has been the subject of numerous international disputes. Pakistan and the eastern part of India administer the western parts of the region. The northernmost territory of Kashmir is the Siachen Glacier, the world's second-largest glacier and the largest in India. Kashmir has a rich history and culture, and the region's people are known for their craftsmanship, music, and cuisine. Kashmir is a beautiful place with a lot of scenic beauty and is also known as the "Switzerland of India". Kashmir is also home to some of the most beautiful lakes in the world, such as Dal Lake, Wular Lake, and Anchar Lake. The climate of Kashmir is primarily cool in summer and very cold in winter. Snowfall is common in the higher reaches of the region.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Kashmir problem dates back to the formation of the Indian Union on 15 August 1947. India was partitioned into two sovereign states, India and Pakistan, based on religious divisions. The Muslim-majority states of the northern part of the subcontinent went to Pakistan, and the Hindu-majority states of the southern part went to India. The states of Jammu and Kashmir in the northwest were Muslim-majority states governed by a Hindu ruler, Maharaja Hari Singh. He was offered the option of joining India or Pakistan but remained independent. Pashtun tribe members from the northwest frontier province of Pakistan invaded the state in October 1947.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">How to reach Kashmir:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>By Air:</strong> Srinagar International Airport is the only airport in Kashmir. It is connected to all Indian cities, including New Delhi and Mumbai.</li>
                  <li><strong>By Rail:</strong> There are no direct trains to Srinagar. The nearest railhead is Jammu Tawi, which is 314 km from Srinagar.</li>
                  <li><strong>By Road:</strong> Srinagar is connected to all parts of India by road.</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-2">About Srinagar:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Srinagar is rightly called the ‘Land of Lakes and Gardens’. It is surrounded by the Himalayan Mountains, adorned with beautiful Mughal gardens, and has tranquil Dal and Nigeen lakes. This lovely place is also one of the dream travel destinations in India for honeymooners and family vacationers.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The summer capital of J&K union territory, Srinagar, is one of India's most popular holiday destinations, and it impresses vacationers primarily with its unique experiences of a shikhara ride and houseboat stay on Dal and Nigeen lakes. Another expertise to relish is witnessing a Floating Vegetable Market on Dal Lake.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-1">Nigeen Lake:</h4>
                <p className="text-gray-600 leading-relaxed mb-2">
                  The city's numerous lakes and gardens lend it its famous charm. A small distance away from Dal Lake is Nigeen Lake, where you can go boating, swim, or try water skiing.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-1">Dal Lake:</h4>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Dal Lake is a beautiful water body nestled in scenic surroundings in Srinagar. It represents tourism in Srinagar internationally and is rightly called the 'Jewel in the Crown'. With an area of 22 sq. km, this monotonic lake is the second largest in the northern state. It is significantly associated with different aspects of Srinagar's heritage and lifestyle, including its culture, traditions, and mythology.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Mythological legends state that this lake had an island named Isabar towards its eastern coast, which was the abode of Goddess Durga. It was fed by a spring called Satadhara, and the region along its banks was known as Sureshwari. With time, this lake became the hub of commercial operations like water plant harvesting and fishing, thus playing a crucial role in Srinagar's economy.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-1">Shikara Ride on Dal Lake, Kashmir:</h4>
                <p className="text-gray-600 leading-relaxed mb-2">
                  A Shikara ride on Dal Lake offers a peaceful blend of natural beauty and cultural heritage. As you glide across the calm waters in a delicately carved wooden boat, you'll see the stunning Pir Panjal mountains, elegant houseboats, and the vibrant life surrounding the lake. This ride provides a glimpse into Kashmir's rich traditions and the artistry of its artisans.
                </p>
                <h5 className="text-md font-semibold mt-2 mb-1">Best Time to Visit:</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                  <li>Autumn (September-November): Enjoy the golden hues, serene lakes, and clear blue skies in a calm and picturesque environment.</li>
                  <li>Summer (June): Experience a lively atmosphere with blooming flowers and pleasant weather, although it’s a popular time for tourists.</li>
                </ul>
                <h5 className="text-md font-semibold mt-2 mb-1">Practical Tips:</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                  <li>Pricing: Always negotiate and agree on the fare before starting your ride.</li>
                  <li>Duration: Rides can last from 30 minutes to several hours. Discuss your preference with the boatman in advance.</li>
                  <li>Safety: If available, wear a life jacket, keep your belongings secure, and carefully handle cameras or phones.</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-2">Aru Valley, Betaab Valley, and Chandanwari in Pahalgam:</h3>
                <h4 className="text-lg font-semibold mt-4 mb-1">Aru Valley:</h4>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Located 12 km from Pahalgam, Aru Valley is a pristine destination known for its lush meadows, dense forests, and snow-capped peaks. It's a haven offering trekking, horse riding, and camping activities. The valley is also the starting point for the famous Kolahoi Glacier and Tarsar-Marsar treks.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-1">Betaab Valley:</h4>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Betaab Valley, named after the Bollywood movie Betaab, is about 15 km from Pahalgam. It is famed for its stunning landscapes, featuring lush greenery, sparkling streams, and towering mountains. The valley is a picturesque picnic spot, and its scenic beauty makes it a favourite for filmmakers and tourists alike.
                </p>
                <h4 className="text-lg font-semibold mt-4 mb-1">Chandanwari:</h4>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Chandanwari valley is the starting point of the Amarnath Yatra. Known for its snow bridges and serene environment. The region is also excellent for snow-related activities like sledging and snowball fights in winter.
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
                  <span className="font-semibold">Note:</span> The cost of adventure activities is not included in the package. You can book them on the spot. Some places are not accessible by road. You have to trek to reach such places.
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

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the best time to visit Srinagar, Gulmarg, and Pahalgam?</h3>
                <p className="text-gray-600 mb-4">The best time to visit these places is during the summer months between March and June and then from September to November. The weather is pleasant during these months, and outdoor activities are easy.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How can I reach Srinagar?</h3>
                <p className="text-gray-600 mb-4">Srinagar's international airport can be reached by train or bus. However, the most convenient option is to take a flight.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How far is Gulmarg from Srinagar, and how can I reach there?</h3>
                <p className="text-gray-600 mb-4">Gulmarg is about 48 km from Srinagar and can be reached by taxi or bus. The trip takes about 1.5 hours.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the must-visit places in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Some must-visit places in Gulmarg are Gulmarg Gondola, Khilanmarg, Alpather Lake, and Ningle Nallah.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the must-visit places in Pahalgam?</h3>
                <p className="text-gray-600 mb-4">Some must-visit places in Pahalgam are Betaab Valley, Aru Valley, Chandanwari, and Lidder River.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the best way to travel from Srinagar to Gulmarg and Pahalgam?</h3>
                <p className="text-gray-600 mb-4">The best way to travel is by hiring a taxi or taking a shared cab. You can also book a private car for the entire trip.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the best activities in Srinagar, Gulmarg, and Pahalgam?</h3>
                <p className="text-gray-600 mb-4">Some of the best activities in these places are skiing, trekking, Shikara riding, golfing, and enjoying the scenic beauty.</p>

                {!isTulipGardenOpen && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 rounded-md">
                    <p className="text-sm text-yellow-700">
                      <span className="font-bold">Important Note:</span> The Tulip Garden in Srinagar is primarily open during spring (late March to April). As of July 2025, it is likely closed. Please verify opening dates if visiting specifically for the Tulip Garden.
                    </p>
                  </div>
                )}
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
                    <span className="font-medium">5 Nights / 6 Days</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Night Stays:</span>
                    <span className="font-medium">4N Srinagar • 1N Pahalgam</span>
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

                <BookingButton tourName="Kashmir Tour Package (Srinagar, Gulmarg, Sonamarg, Pahalgam)" tourPrice="Price on Request" className="w-full py-3 text-lg font-semibold bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 shadow-md hover:shadow-lg" />

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