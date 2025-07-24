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
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      title: "Arrive in Srinagar | Welcome to Paradise on Earth",
      description: "Upon arrival at Srinagar Airport, you’ll be greeted by your driver, who will take you to your hotel after checking in. You may visit sights like the Tulip Garden, Chashma Shahi, Botanical Gardens, and Pari Mahal. End the day with a peaceful overnight stay in Srinagar.",
      highlights: ["Srinagar Airport Welcome", "Tulip Garden", "Chashma Shahi", "Botanical Gardens", "Pari Mahal"],
      hotel: "Hotel at Srinagar",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Excursions to Gulmarg | Enjoy the world’s second-highest cable car ride",
      description: "In the morning, embark on a day trip to Gulmarg. Upon arrival, you will be dropped off at the second check-post, where you can begin your exciting Gulmarg Gondola ride. Enjoy breathtaking views of Apharwat Peak. Afterwards, you’ll have the chance to explore the picturesque Strawberry Valley and the tranquil Drung Waterfall. Finally, you’ll return to Srinagar for a restful overnight stay.",
      highlights: ["Day Trip to Gulmarg", "Gulmarg Gondola Ride", "Apharwat Peak Views", "Strawberry Valley", "Drung Waterfall"],
      hotel: "Hotel at Srinagar",
      meals: "Breakfast & Dinner",
    },
    {
      day: 3,
      title: "Excursion to Doodhpathri | Explore the Beautiful 'Valley of Milk'",
      description: "In the morning, embark on a day trip to Doodhpathri. Enjoy a stroll through the stunning \"Valley of Milk,\" where you can admire the expansive green meadows and the rivers that appear as milky streams. After the sightseeing, return to Srinagar and explore local markets such as Badshah Chowk and Zaina Kadal Market, where you can shop for unique souvenirs. Conclude your day with an overnight stay in Srinagar.",
      highlights: ["Day Trip to Doodhpathri", "Valley of Milk", "Green Meadows", "Badshah Chowk Market", "Zaina Kadal Market"],
      hotel: "Hotel at Srinagar",
      meals: "Breakfast & Dinner",
    },
    {
      day: 4,
      title: "Srinagar to Pahalgam | A Journey to ABC Valleys",
      description: "After check-out, your driver will pick you up from the hotel and transfer you to Pahalgam. En route, you'll have the chance to visit the scenic apple orchards and saffron fields. Upon arrival in Pahalgam, see your hotel and take a sightseeing tour. You can opt for river rafting at the Lidder River (at an additional cost). Continue your exploration with visits to the stunning Aru Valley, Betaab Valley, and Chandanwari. After a day of sightseeing, return to your hotel in Pahalgam for an overnight stay.",
      highlights: ["Transfer to Pahalgam", "Apple Orchards", "Saffron Fields", "Lidder River Rafting (Optional)", "Aru Valley", "Betaab Valley", "Chandanwari"],
      meals: "Breakfast & Dinner",
      hotel: "Hotel at Pahalgam",
    },
    {
      day: 5,
      title: "Pahalgam to Srinagar | Enjoy the Famous Shikara Ride in Dal Lake",
      description: "After check-out, your driver will pick you up from the hotel and take you to Srinagar. Upon arrival, check in to your houseboat on the serene Dal Lake. Once settled, visit the renowned Mughal Gardens and explore the vibrant Lal Chowk for some shopping. You can also visit the historic Shankaracharya Temple and the beautiful Badamwari Park. Experience a relaxing Shikara ride on Dal Lake, soaking in the scenic views. After the ride, return to your hotel/houseboat for an overnight stay.",
      highlights: ["Transfer to Srinagar", "Shikara Ride on Dal Lake", "Mughal Gardens", "Lal Chowk", "Shankaracharya Temple", "Badamwari Park"],
      meals: "Breakfast & Dinner",
      hotel: "Hotel/Houseboat at Dal Lake",
    },
    {
      day: 6,
      title: "Departure",
      description: "Pack your bags and check out from your houseboat in Srinagar. Your driver will pick you up and take you to Srinagar Airport, marking the end of your tour.",
      highlights: ["Breakfast", "Airport Transfer"],
      meals: "Breakfast",
      hotel: "Nil",
    },
  ];

  const localSightseeingActivities = [
    { location: "Srinagar", places: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Shankaracharya Temple Tulip, Garden, Dal Lake, Etc.", activities: "Shikara Ride" },
    { location: "Gulmarg", places: "Gulmarg Gondola ride, Golf Course, Drung waterfall.", activities: "Gondola Ride, Ski and Snowboard" },
    { location: "Pahalgam", places: "Aru Valley, Betaab Valley, Chandanwari Valley, Poshwan Park, Baisaran Valley, Lidder Amusement Park, Etc.", activities: "Rafting" },
    // Removed Sonamarg as it's not in the Short Itinerary for this package
  ];

  const inclusions = [
    "Meals as mentioned in the Itinerary.",
    "One-hour Shikara rides are complimentary.",
    "5-night accommodation.", // Corrected to 5-night
    "Heater Charges.",
    "Union Cab Charges.",
    "Individual cab for the tour.",
    "Daily Breakfast and Dinners.",
    "All sightseeing mentions the itinerary pickup and drop-off at Srinagar.",
    "Taxes included: toll tax, parking fee, green tax, driving and fuel expenses.",
  ];

  const exclusions = [
    "Fees for any adventure activity.",
    "Guide Charges.",
    "Lunch, Camera Fee, or Monument Fee.",
    "Any kind of personal expenses or extra meals ordered.",
    "Services of the vehicle on leisure days and after finishing the sightseeing tour as per the Itinerary.",
    "Any kind of drink (alcoholic, mineral water, aerated).",
    "Any increase in taxes or fuel increases surface transportation and land arrangements, which may become effective before departure.",
    "Cost is incidental to any change in the itinerary/stay due to flight cancellation due to bad weather, ill health, roadblocks, and/or any factors beyond our control.",
    "This package does not include safaris, rafting, and other activities.",
  ];

  const cancellationPolicy = [
    "Unexpected events or government restrictions may cancel the tour. In such cases, you can reschedule your dates. However, we will not provide a refund.",
    "30 days or more: 90% of the total package cost is refundable",
    "21-30 days: 75% of the total package cost is refundable",
    "11-20 days: 50% of the total package cost is refundable",
    "Less than ten days: No refund",
    "The booking amount (30% of the package amount) is non-refundable. However, you can adjust this amount with any other tour, trek, or activity Uncia offers after the booking date.",
  ];

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

  const hotelDetails = [
    { destination: "Srinagar", nights: "4 Nights", hotels: "Hotel at Srinagar / Hotel/Houseboat at Dal Lake" }, // Combines 3N + 1N for Day 5
    { destination: "Pahalgam", nights: "1 Night", hotels: "Hotel at Pahalgam" },
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
    "https://www.instagram.com/reel/DENY_c2y7sl/", // Example Reel 2
    "https://www.instagram.com/reel/C8q8-i_SWoO/", // Added another example reel
    "https://www.instagram.com/reel/C8rA-uGSeI3/", // Added another example reel
    "https://www.instagram.com/reel/C8sE-wG1IoN/", // Added another example reel
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Kashmir Package | Escape To Doodhpathri</h1>
            <p className="text-xl mb-6 max-w-2xl text-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Explore the untouched beauty of Doodhpathri, alongside Srinagar, Gulmarg, and Pahalgam on this refreshing Kashmir tour.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-200" />
                <span>Srinagar • Gulmarg • Doodhpathri • Pahalgam</span>
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
                  Embark on a mesmerizing 5-night, 6-day journey through the serene landscapes of Kashmir. This package takes you through Srinagar's enchanting gardens, the exhilarating heights of Gulmarg, the pristine meadows of Doodhpathri (the 'Valley of Milk'), and the picturesque valleys of Pahalgam. Experience a perfect blend of culture, adventure, and relaxation in this paradise on Earth.
                </p>
              </CardContent>
            </Card>

            {/* About the Tour */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About the Tour</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Embark on a vacation in the paradise nestled amidst the towering green Himalayas, renowned worldwide for its shimmering lakes and stationary houseboats. Welcome to Kashmir, "Heaven on Earth." From witnessing breathtaking sunsets on a Shikara ride across the rippling Dal Lake to exploring the tranquil canals reflecting the beauty of the sky and the surrounding Mughal Gardens, Kashmir offers it all. Enjoy magical family moments in cosy and comfortable suites with warm hosts and delectable Kashmiri cuisine, making your stay on a houseboat genuinely unique and unforgettable.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Relax as you watch shepherd boys wave from the banks of the foaming Lidder River, winding through the mountains and leading to scenic spots like Aru Valley and Betaab Valley. Experience the thrill of winter sports in Gulmarg, whether skiing, sledging, building snowmen, or engaging in a playful snowball fight.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">Quick Info:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Route:</strong> Srinagar - Gulmarg - Doodhpathri - Pahalgam - Srinagar</li>
                  <li><strong>Duration:</strong> 6 Days and 5 Nights</li>
                  <li><strong>Start Point:</strong> Srinagar</li>
                  <li><strong>End Point:</strong> Srinagar</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Uncia Trails Recommends:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Visit the Floating Vegetable Market early in the morning and immerse yourself in the unique culture of the Mir Bahris.</li>
                  <li>Head to Srinagar’s most Instagrammable café, Chai Jaai Tea Roo, for a cosy experience.</li>
                  <li>Savour the authentic flavours of local Kashmiri dishes like Rogan Josh, Matschgand, Yakhni and Kashmiri Muji Gaad, and indulge in a warm cup of Kahwa Tea.</li>
                  <li>Enjoy a scenic horse ride at the breathtaking Alpather Lake.</li>
                  <li>Experience thrilling snow activities such as skiing and snowshoeing in Gulmarg.</li>
                  <li>Pay a visit to the revered Muslim shrine of Baba Reshi to offer your holy tribute.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">How to Reach:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>By Air:</strong> The nearest airport is Budgam Airbase, also known as Sheikh Ul Alam International Airport Srinagar, which has flight connectivity to major cities across India.</li>
                  <li><strong>By Rail:</strong> The Jammu Tawi Railway Station (station code: JAT) is the closest railway station, well-connected by trains to various parts of India.</li>
                  <li><strong>By Road:</strong> You can reach Srinagar by bus from Chandigarh, Gulmarg, Jammu, Sonamarg, Delhi, and Pahalgam.</li>
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
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold">For Gulmarg Gondola bookings:</span> Call 9103058616 (9:00 AM to 5:00 PM evening) or visit the official website: <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">www.jammukashmircablecar.com</a>.
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

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is Doodhpathri famous for?</h3>
                <p className="text-gray-600 mb-4">Doodhpathri is renowned for its picturesque beauty, which is characterised by expansive meadows covered in lush green grass and shimmering streams flowing over large stones. The area features gently sloping landscapes adorned with various colourful flowers extending to Chang. To the west of Doodhpathri lies the famous Tosamaidan.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Which is better, Doodhpathri or Gulmarg?</h3>
                <p className="text-gray-600 mb-4">When comparing Doodhpathri and Gulmarg, the choice depends on what you're looking for. Gulmarg could be the better option if you're interested in a more developed tourist destination with many facilities and activities. In contrast, Doodhpathri offers a quieter, more peaceful natural experience, making it ideal for those seeking serenity.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Does Doodhpathri have snow?</h3>
                <p className="text-gray-600 mb-4">Doodhpathri is a stunning destination in winter, but visitors should be ready for the chilly conditions. This season, the region experiences freezing and snowy weather, with average temperatures ranging from 0°C to -12°C.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is Gulmarg famous for?</h3>
                <p className="text-gray-600 mb-4">Gulmarg is renowned for its breathtaking scenic beauty, including the Himalayan Mountains. A key highlight is the Gulmarg Gondola cable car ride, which is the second-highest cable car in the world.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is Gulmarg costly?</h3>
                <p className="text-gray-600 mb-4">The trip cost to Gulmarg can vary depending on the duration and hotel category. The cost of a trip typically ranges between INR 10,000 and INR 15,000. For a standard three-day visit, the total expense is around INR 20,000.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How far from srinagar to Doodhpathri?</h3>
                <p className="text-gray-600 mb-4">The route from Srinagar to Doodhpathri via Srinagar-Budgam Road is 40 to 45 kilometres. The journey typically takes approximately 2 hours, depending on traffic and road conditions.</p>
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

                <BookingButton tourName="Kashmir Package | Escape To Doodhpathri" tourPrice="Price on Request" className="w-full py-3 text-lg font-semibold bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 shadow-md hover:shadow-lg" />

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
