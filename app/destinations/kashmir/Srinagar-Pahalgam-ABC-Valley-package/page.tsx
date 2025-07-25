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

export default function KashmirTripPage() { // Renamed back to KashmirTripPage for this general package
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

  // Itinerary for Kashmir Trip (Srinagar - Pahalgam - Srinagar)
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Srinagar and Local Exploration",
      description: "Upon arrival at Srinagar Airport, our representative will warmly welcome you with a placard with your name on it. After a smooth greeting, you can start your local sightseeing in Srinagar immediately or proceed to check in at your hotel. Srinagar has several enchanting gardens, such as Nishat, Shalimar, Botanical Garden, Chasm-e-Shahe, and the iconic Pari Mahal. Don't miss a peaceful Shikara ride on Dal Lake during sunset, which is an unforgettable experience. While on the lake, enjoy a cup of traditional Kashmiri Kahwa and explore the lakeside shops.",
      highlights: ["Srinagar Airport Welcome", "Nishat Bagh", "Shalimar Bagh", "Botanical Garden", "Chasm-e-Shahe", "Pari Mahal", "Shikara ride on Dal Lake"],
      hotel: "Hotel at Srinagar",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Srinagar to Pahalgam",
      description: "We will begin a picturesque drive from Pahalgam, a 3-hour journey spanning 130 kilometres. Pahalgam, a charming hill station, offers stunning views of the Lidder River and lush meadows. Suppose you’re in the mood for adventure. In fact, you can enjoy hiking or a pony ride through beautiful spots like Mini-Switzerland, Baisaran, Pahalgam Valley, or the nearby waterfall. For those seeking thrills, river rafting is also an option. A romantic walk with your partner at sunset is a perfect way to end the day and return to your hotel for a restful night.",
      highlights: ["Scenic drive to Pahalgam", "Lidder River views", "Hiking/Pony ride (Mini-Switzerland, Baisaran, Pahalgam Valley)", "River rafting (optional)", "Sunset walk"],
      hotel: "Hotel at Pahalgam",
      meals: "Breakfast & Dinner",
    },
    {
      day: 3,
      title: "Pahalgam Local Sightseeing",
      description: "After breakfast, enjoy a leisurely day where you can visit the ABC Valley.",
      highlights: ["ABC Valley exploration"],
      hotel: "Hotel in Pahalgam",
      meals: "Breakfast & Dinner",
    },
    {
      day: 4,
      title: "Pahalgam to Srinagar",
      description: "On the fourth day of your Kashmir adventure, you’ll have the opportunity to explore some of Pahalgam’s most scenic spots. Begin with a visit to the famous Betaab Valley, named after the Bollywood film “Betaab.” Known for its lush meadows and towering pine forests, it’s a popular spot for tourists who often recreate iconic movie scenes for their social media. Next, head to Aru Valley, where you can enjoy a peaceful picnic by the serene Lidder River. Feel free to bring along some food to savour on the riverbank. After a day of exploration, our driver will take you back to Srinagar for a relaxing evening and a well-deserved rest.",
      highlights: ["Betaab Valley", "Aru Valley", "Picnic by Lidder River", "Transfer back to Srinagar"],
      hotel: "Hotel in Srinagar",
      meals: "Breakfast & Dinner",
    },
    {
      day: 5,
      title: "Srinagar Drop",
      description: "Enjoy a delicious breakfast at your hotel/houseboat in Srinagar on the final day of your Kashmir tour. Depending on your flight schedule, take some time to revisit Dal Lake or the Mughal Gardens for one last dose of scenic beauty. If you have extra time before your departure, Take some time to explore the local markets and pick up souvenirs like Pashmina shawls, Kashmiri carpets, or handcrafted traditional items made by local artisans. We suggest arriving at the airport at least 2-3 hours before your flight, and our driver will ensure you're dropped off on time for your departure. Wishing you a safe and pleasant trip ahead!",
      highlights: ["Breakfast", "Optional Dal Lake/Mughal Gardens revisit", "Local market exploration/Souvenir shopping", "Srinagar Airport Drop-off"],
      meals: "Breakfast",
      hotel: "Nil",
    },
  ];

  // Local Sightseeing & Activities
  const localSightseeingActivities = [
    { location: "Srinagar", places: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Tulip Garden, Dal Lake, Etc.", activities: "Shikara Ride" },
    { location: "Pahalgam", places: "Baisaran, Betaab Valley, Aru Valley, Chandanwari Valley etc.", activities: "Paragliding (Note: specific to package)" },
  ];

  // Inclusions
  const inclusions = [
    "A 2-night stay in Srinagar with breakfast and dinner is included.",
    "2-night stay in Pahalgam with breakfast and dinner included.",
    "Heater Charges.",
    "Union Cab Charges.",
    "Private trip to Thajiwas Glacier.",
    "Private sightseeing tour of Gulmarg.", // This inclusion contradicts the itinerary not including Gulmarg. I will keep it as provided, but note it might be an error in the source text.
    "Private sightseeing tour of Srinagar, including Badam Wari.",
    "Private sightseeing tour of Srinagar, including the Botanical Garden and Pari Mahal.",
    "Private sightseeing tour of Pahalgam.",
    "Private Shikara ride on Dal Lake in Srinagar.",
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
    "This package includes no advice, including rafting or other activities.", // This sentence seems to have a typo "advice" instead of "activities". I'll use it as provided.
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
    { destination: "Srinagar", nights: "2 Nights", hotels: "Hotel at Srinagar" },
    { destination: "Pahalgam", nights: "2 Nights", hotels: "Hotel at Pahalgam" },
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
            <Badge className="bg-orange-500 text-white mb-4 rounded-full px-3 py-1">4 Nights / 5 Days</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Kashmir Trip | Srinagar & Pahalgam Escape</h1>
            <p className="text-xl mb-6 max-w-2xl text-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Embark on a picturesque journey through Srinagar's enchanting gardens and lakes, and Pahalgam's serene valleys and lush meadows.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-200" />
                <span>Srinagar • Pahalgam • Srinagar</span>
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
                  Experience the quintessential beauty of Kashmir with this 4-night, 5-day package covering Srinagar and Pahalgam. Begin your journey amidst the iconic Mughal Gardens and serene Dal Lake in Srinagar, immersing yourself in its cultural charm. Then, delve into the breathtaking valleys and lush landscapes of Pahalgam, known for its adventurous spirit and tranquil riverside settings. This carefully crafted itinerary promises a blend of relaxation, exploration, and unforgettable memories in paradise.
                </p>
              </CardContent>
            </Card>

            {/* About the Tour - General Kashmir Info */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About the Tour</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Embark on a vacation in the paradise nestled amidst the towering green Himalayas, renowned worldwide for its shimmering lakes and stationary houseboats. Welcome to Kashmir, "Heaven on Earth." From witnessing breathtaking sunsets on a Shikara ride across the rippling Dal Lake to exploring the tranquil canals reflecting the beauty of the sky and the surrounding Mughal Gardens, Kashmir offers it all. Enjoy magical family moments in cosy and comfortable suites with warm hosts and delectable Kashmiri cuisine, making your stay on a houseboat genuinely unique and unforgettable.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Relax as you watch shepherd boys wave from the banks of the foaming Lidder River, winding through the mountains and leading to scenic spots like Aru Valley and Betaab Valley.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">Quick Info:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Route:</strong> Srinagar - Pahalgam - Srinagar</li>
                  <li><strong>Duration:</strong> 5 Days and 4 Nights</li>
                  <li><strong>Start Point:</strong> Srinagar</li>
                  <li><strong>End Point:</strong> Srinagar</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Uncia Trails Recommends:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Visit the Floating Vegetable Market early in the morning and immerse yourself in the unique culture of the Mir Bahris.</li>
                  <li>Head to Srinagar’s most Instagrammable café, Chai Jaai Tea Roo, for a cosy experience.</li>
                  <li>Savour the authentic flavours of local Kashmiri dishes like Rogan Josh, Matschgand, Yakhni and Kashmiri Muji Gaad, and indulge in a warm cup of Kahwa Tea.</li>
                  <li>Enjoy a scenic horse ride at the breathtaking Alpather Lake (Note: Alpather Lake is near Gulmarg, but this is a general Kashmir recommendation. If the package doesn't go to Gulmarg, this might be misleading for this specific itinerary.)</li>
                  <li>Experience thrilling snow activities such as skiing and snowshoeing in Gulmarg (Note: Same as above, if Gulmarg is not in the itinerary, this is a general Kashmir point).</li>
                  <li>Pay a visit to the revered Muslim shrine of Baba Reshi to offer your holy tribute (Note: Baba Reshi is near Gulmarg).</li>
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

            {/* FAQs Section - Added general Kashmir FAQs */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions (FAQs)</h2>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the best time to visit Kashmir?</h3>
                <p className="text-gray-600 mb-4">The best time to visit Kashmir depends on your preferences. Spring (April to June) offers blooming gardens and pleasant weather. Summer (July to August) is ideal for exploring higher altitudes. Autumn (September to November) showcases stunning golden Chinar leaves. Winter (December to March) is perfect for snow sports and experiencing a white landscape.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is Kashmir safe for tourists?</h3>
                <p className="text-gray-600 mb-4">Kashmir has seen an increase in tourism in recent years, and generally, it is considered safe for tourists. However, it's always advisable to check current travel advisories, stay informed about the local situation, and follow local guidelines. Most tourist areas are well-managed and frequented by visitors.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the must-try local foods in Kashmir?</h3>
                <p className="text-gray-600 mb-4">When in Kashmir, you must try Wazwan, a multi-course meal, which includes dishes like Rogan Josh (lamb curry), Yakhni (yogurt-based lamb curry), Gushtaba (meatballs in gravy), and Rista (meatballs in red gravy). Also, don't miss Kashmiri Pulao, Dum Aloo, and traditional Kahwa tea.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What kind of clothes should I carry for a Kashmir trip?</h3>
                <p className="text-gray-600 mb-4">Clothing depends on the season. In summer, light woolens are sufficient. For spring and autumn, medium to heavy woolens are recommended. During winter, heavy woolens, including thermal wear, heavy jackets, gloves, caps, and waterproof shoes, are essential due to snowfall and freezing temperatures.</p>
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
                    <span className="font-medium">1N Srinagar • 2N Pahalgam • 1N Srinagar</span>
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

                <BookingButton tourName="Kashmir Trip | Srinagar & Pahalgam Escape (4N/5D)" tourPrice="Price on Request" className="w-full py-3 text-lg font-semibold bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 shadow-md hover:shadow-lg" />

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