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

export default function KashmirTripPage() {
  // Hero Slider State
  const heroImages = [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Gurez/Kashmir image
    "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Gurez/Kashmir image
    "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Gurez/Kashmir image
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Gurez/Kashmir image
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

  // Itinerary for Srinagar - Gurez Valley - Srinagar
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Srinagar",
      description: "Upon arriving in Srinagar, you'll be greeted and transferred to your hotel for a smooth check-in. Spend the day exploring local attractions like Boulevard Road and Dal Lake. Take a peaceful Shikara ride on Dal Lake in the evening, then return to the hotel.",
      highlights: ["Srinagar Airport Pick-up", "Hotel Check-in", "Boulevard Road", "Dal Lake exploration", "Shikara ride on Dal Lake"],
      hotel: "Hotel at Srinagar",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Journey from Srinagar to Gurez",
      description: "Start your day with a hearty breakfast, and drive to Gurez Valley. Nestled in the majestic Himalayas, the journey takes you through Bandipora, passing the breathtaking Razdan Top. This route offers a captivating experience, showcasing nature's splendour. Razdan Top, perched at 11,672 feet, is renowned for its diverse medicinal plants. The pass offers a thrilling drive and provides a panoramic view of the snow-clad Harmukh Peak, the tallest mountain in Kashmir. Upon arriving in Gurez, settle into your hotel for a restful overnight stay.",
      highlights: ["Scenic drive to Gurez Valley", "Bandipora", "Razdan Top (11,672 ft)", "Harmukh Peak views", "Hotel Check-in in Gurez"],
      hotel: "Hotel at Gurez",
      meals: "Breakfast & Dinner",
    },
    {
      day: 3,
      title: "Gurez Local Sightseeing",
      description: "Begin your day with a delicious breakfast, then explore the local sights of Gurez. Your first stop will be Dawar, a charming town known for its archaeological significance. Here, you can admire the unique log-wood houses and interact with the friendly locals, known as the “Dards,” to gain insights into their culture and daily lives. Next, visit the iconic Habba Khatoon peak, a pyramid-shaped mountain steeped in Kashmir’s history. This landmark is named after the renowned Kashmiri poetess Habba Khatoon. Don’t miss the nearby Habba Khatoon spring, where crystal-clear water flows from the mountains and is believed to have medicinal qualities. After an eventful day, return to your hotel for a relaxing evening. Enjoy a satisfying dinner and settle in for an overnight stay.",
      highlights: ["Dawar town", "Log-wood houses", "Interaction with Dards", "Habba Khatoon Peak", "Habba Khatoon spring"],
      hotel: "Hotel at Gurez",
      meals: "Breakfast & Dinner",
    },
    {
      day: 4,
      title: "Gurez to Tulail and Back",
      description: "Start your morning with a hearty breakfast before heading via Dawar to the serene Tulail Valley. Known for its remote and untouched beauty, Tulail Valley offers a glimpse into one of the most secluded regions. Upon arrival, take a leisurely walk around the valley, soaking in the breathtaking scenery. During your return journey, visit the captivating villages of Sheikhpura and Chakwali. Chakwali is the last Indian village along the Line of Control. Conclude your day by driving back to Gurez Valley for a comfortable overnight stay.",
      highlights: ["Tulail Valley exploration", "Leisurely walk in Tulail", "Sheikhpura village", "Chakwali village (last Indian village on LoC)"],
      meals: "Breakfast & Dinner",
      hotel: "Stay at the Hotel at Gurez",
    },
    {
      day: 5,
      title: "Journey from Gurez to Srinagar",
      description: "Start your day with a satisfying breakfast before setting out on your journey back to Srinagar. Along the way, stop at the picturesque Izamrg village, where you can capture the stunning green meadows with your camera or take a leisurely walk to soak in the village's serene beauty. Upon reaching Srinagar, check into your hotel, enjoy a delicious dinner, and unwind for a restful overnight stay.",
      highlights: ["Scenic drive to Srinagar", "Izamrg village (photo stop/walk)", "Hotel Check-in in Srinagar"],
      meals: "Breakfast & Dinner",
      hotel: "Stay at the Hotel at Srinagar",
    },
    {
      day: 6,
      title: "Departure from Srinagar",
      description: "Enjoy breakfast before heading to Srinagar airport for your onward flight, concluding your memorable journey.",
      highlights: ["Breakfast", "Srinagar Airport Drop-off"],
      meals: "Breakfast",
      hotel: "Nil",
    },
  ];

  // Local Sightseeing & Activities
  const localSightseeingActivities = [
    { location: "Srinagar", places: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Shankaracharya Temple Tulip, Garden, Dal Lake, Etc.", activities: "Shikara Ride" },
    { location: "Gurez Valley", places: "Razdan top (view the snow-capped Harmukh Peak), Habba Khatoon Peak, Tulail Valley, Sheikhpura and Chakwali villages.", activities: "None explicitly listed, but implies exploration/trekking as per itinerary" },
  ];

  // Inclusions
  const inclusions = [
    "Meals as mentioned in the Itinerary.",
    "One-hour Shikara rides are complimentary.",
    "5-night accommodation.",
    "Heater Charges.",
    "Individual cab for the tour.",
    "Daily Breakfast and Dinners.",
    "All sightseeing mentions the itinerary pickup and drop-off at Srinagar.",
    "Taxes included toll tax, parking fee, green tax, driving and fuel expenses.",
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
    "Heater charges in hotels.", // This is explicitly listed as excluded, despite being in inclusions above. I'll keep it as provided in exclusions.
    "Cost is incidental to any change in the itinerary/stay due to flight cancellation due to bad weather, ill health, roadblocks, and/or any factors beyond our control.",
    "This package does not include safaris, rafting, and other activities.",
  ];

  // Cancellation Policy
  const cancellationPolicy = [
    "Unexpected events or government restrictions may cancel the tour. In such cases, you can reschedule your dates. However, we will not provide a refund.",
    "30 days or more: 90% of the total package cost is refundable",
    "21-30 days: 75% of the total package cost is refundable",
    "11-20 days: 50% of the total package cost is refundable",
    "Less than ten days: No refund",
    "The booking amount (30% of the package amount) is non-refundable. However, you can adjust this amount with any other tour, trek, or activity Uncia offers after the booking date.",
  ];

  // Important Things to Remember
  const importantNotes = [
    "In exceptional cases, if the mentioned hotel is unavailable, we may shift you to another similar hotel.",
    "Check-in/check-out time at all the properties will be at noon hrs. Some properties may not allow early check-in.",
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
    { destination: "Srinagar", nights: "2 Nights", hotels: "Hotel at Srinagar" },
    { destination: "Gurez", nights: "3 Nights", hotels: "Hotel at Gurez" },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Srinagar Gurez Valley Package | Explore Offbeat Kashmir</h1>
            <p className="text-xl mb-6 max-w-2xl text-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Discover the untouched beauty of Gurez Valley and the serene charm of Srinagar on this unforgettable 6-day journey.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-200" />
                <span>Srinagar • Gurez Valley • Srinagar</span>
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
                  Kashmir is truly a paradise on Earth, a destination that words can hardly capture. To fully appreciate its beauty, you must experience it firsthand. Our 5-night, 6-day Majestic Srinagar Gurez Valley package takes you to some of Kashmir’s most captivating and offbeat destinations, including Srinagar, Gurez, and Tulail.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  Srinagar, often called the 'Venice of the East,' is the valley's crown jewel. Known for its natural beauty and tranquillity, Srinagar offers mesmerising views and a peaceful ambience. It's the perfect place to indulge in shopping and immerse yourself in local culture.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  Gurez Valley, nestled in the majestic Himalayas, is one of the most stunning regions of Kashmir. Surrounded by snow-covered peaks and lush pastures, it is a serene and breathtaking haven, genuinely deserving of its reputation as a paradise on Earth.
                </p>
              </CardContent>
            </Card>

            {/* About Gurez Valley */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About Gurez Valley</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gurez Valley, also known as Gurais, is a remote and scenic destination in the Himalayas of Jammu and Kashmir, India. Situated in the Bandipore District, it is approximately 86 kilometres from Bandipore and 123 from Srinagar. At about 2,400 meters, it is north of the Kashmir Valley. Surrounded by majestic snow-capped Mountain Peaks, the valley is carved by the Kishanganga River, adding to its natural beauty.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Inhabitants:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The inhabitants of Gurez are the Dards, who speak the Sheena language and trace their ancestry to Gilgit Valley, now in Pakistan. The Dards' features and attire resemble those of the Kashmiri people from the mountain regions.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Iconic Landmarks & History:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  One of the most iconic landmarks of Gurez is the pyramid-shaped peak, named after the famous Kashmiri poetess Habba Khatoon. This peak holds historical significance as it is believed to be where the emperor Yusuf Shah Chak, a Dard from Gilgit, entered Kashmir. It is also said that during his imprisonment by Emperor Akbar, his beloved Habba Khatoon wandered near this peak in search of him.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The roaring Kishanganga River flows through the valley, creating a soothing ambience. The surrounding mountains add to the serene atmosphere, lulling visitors into a peaceful sleep. The traditional log-wood houses in the valley give Gurez a quaint, European countryside feel.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Adventure Opportunities:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gurez offers a variety of adventure opportunities, including trekking routes leading to Gangabal and Sonamarg to the east and Drass, Dahanu, and Zanskar to the north. For rafting enthusiasts, the Kishanganga River offers calm stretches in Gurez, with more challenging rapids in Tulail. The rugged mountains also present great opportunities for rock climbing. Fishing, particularly trout fishing, is a popular activity among the locals, and anglers can enjoy catching brown trout in the Kishanganga River or the streams descending from the mountains. The valley also has lovely campsites near the river where visitors can pitch tents and immerse themselves in nature.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">How to Reach:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By Road: You can hire a cab from Srinagar directly to Gurez or stop at Bandipora town for a break before continuing your journey. From Bandipora, you can take a passenger vehicle or hire a cab to reach Gurez Valley.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Experience Highlights:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Gurez: Land of the Dard-Shins:</strong> A remote, picturesque northern Kashmir region known for its stunning natural beauty and tranquillity. Home to the Dardic people, descendants of the ancient Dard-Shin tribe.</li>
                  <li><strong>The formidable Habba Khatoon Peak:</strong> A striking pyramid-like shape towering over the village of Dawar, holding significant cultural importance.</li>
                  <li><strong>Hamlets of the Tulail Valley:</strong> One of the region's most remote areas, offering a striking blend of landscapes, traditional wooden houses, and preserved unique traditions.</li>
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

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the Gurez Valley famous for?</h3>
                <p className="text-gray-600 mb-4">Gurez Valley is located in Jammu and Kashmir, India. Surrounded by majestic snow-capped mountains and the flowing Kishanganga River, it offers some of the most spectacular views in the region. The valley is also renowned for its strategic proximity to the LoC (Line of Control) between India and Pakistan, which enhances its historical and geopolitical importance. Its unique blend of scenic charm and strategic significance makes it a captivating destination.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is Gurez Valley open for tourists?</h3>
                <p className="text-gray-600 mb-4">Gurez Valley is not open to tourists year-round due to heavy snowfall. However, it is accessible from May to October, when the roads are clear, and the weather is more favourable for travel.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is permission required for Gurez Valley?</h3>
                <p className="text-gray-600 mb-4">Indian citizens do not require special permits to visit Gurez Valley, but carrying an Aadhaar card or voter ID for checkpost verification is recommended. Foreign nationals, however, must obtain permission from the district commissioner's office in Srinagar or Bandipora before their visit.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is Gurez Valley better or Doodhpathri?</h3>
                <p className="text-gray-600 mb-4">Gurez Valley is better for those seeking adventure, historical sites, and a rugged experience, while Doodhpathri is ideal for a peaceful, serene retreat in lush meadows. Choose Gurez for exploration and Doodhpathri for relaxation.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the distance from Srinagar to Gurez Valley?</h3>
                <p className="text-gray-600 mb-4">The distance from Srinagar to Gurez Valley is approximately 125.8 km, and it takes about 4 hours to travel via Bandipora-Srinagar Road and Bandipora Gurez Road.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is Gurez a border area?</h3>
                <p className="text-gray-600 mb-4">Gurez Valley is a border area in the Himalayas near India and Pakistan's Line of Control (LoC). It is known for its snow-capped mountains, rich flora and fauna, and the Kishanganga River, which flows through it.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Does Gurez Valley have mobile network coverage and internet connectivity?</h3>
                <p className="text-gray-600 mb-4">In Gurez Valley, mobile networks and internet connectivity are available in the main towns, with decent service offered by BSNL and Jio networks. While Jio has improved connectivity, internet access and mobile signals can be sporadic, especially in more remote areas. Some locations further down the valley may have little to no network coverage.</p>
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
                    <span className="font-medium">1N Srinagar • 3N Gurez • 1N Srinagar</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Pick & Drop:</span>
                    <span className="font-medium">Srinagar to Srinagar</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-medium">May to October (Season-dependent)</span> {/* Based on FAQ */}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>Flexible Group Sizes</span>
                  </div>
                </div>

                <BookingButton tourName="Srinagar Gurez Valley Package (5N/6D)" tourPrice="Price on Request" className="w-full py-3 text-lg font-semibold bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 shadow-md hover:shadow-lg" />

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