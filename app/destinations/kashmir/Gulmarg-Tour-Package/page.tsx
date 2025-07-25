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

export default function GulmargTourPage() { // Renamed component for clarity
  // Hero Slider State
  const heroImages = [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Gulmarg image
    "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Gulmarg image
    "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Gulmarg image
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example Gulmarg image
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

  // Updated Itinerary for Gulmarg Tour Package (3 Days, 2 Nights)
  const itinerary = [
    {
      day: 1,
      title: "Arrive at Srinagar and Transfer to Gulmarg",
      description: "Upon your arrival at Srinagar airport, our vehicle will be ready to transfer you from Srinagar to Gulmarg, which is 59 kilometres away. After checking in at your accommodation, you can enjoy some exciting activities and adventures in Gulmarg.",
      highlights: ["Srinagar Airport Pick-up", "Transfer to Gulmarg", "Hotel Check-in", "Leisure/Activities in Gulmarg"],
      hotel: "Hotel in Gulmarg",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Gulmarg Sightseeing Tour",
      description: "After breakfast, you will set off for an exhilarating Gondola ride on the world’s highest cable car (excluded). If time and weather permits, you can spend the remaining day exploring attractions such as the Golf Course, Maharaja Palace, and Children’s Park. In the evening you will return to the hotel.",
      highlights: ["Gondola Ride (Phase 1 & 2, excluded)", "Golf Course", "Maharaja Palace", "Children's Park", "Gulmarg Exploration"],
      hotel: "Hotel in Gulmarg",
      meals: "Breakfast and Dinner",
    },
    {
      day: 3,
      title: "Gulmarg to Srinagar & Departure",
      description: "After a hearty breakfast at the hotel, you will check out and begin your journey back to Srinagar. Enjoy the scenic drive as you return to the city. Upon arrival, you will be transferred to the airport or railway station for your departure, taking with you wonderful memories of your time in Gulmarg.",
      highlights: ["Breakfast", "Hotel Check-out", "Scenic Drive to Srinagar", "Srinagar Airport/Railway Station Drop-off"],
      meals: "Breakfast",
      hotel: "Nil",
    },
  ];

  // Updated Local Sightseeing & Activities for Gulmarg
  const localSightseeingActivities = [
    { location: "Gulmarg", places: "Gulmarg Gondola ride, Golf Course, Children's Park, Maharaja Palace.", activities: "Gondola Ride, Ski and Snowboard" },
  ];

  // Updated Inclusions for Gulmarg Tour Package
  const inclusions = [
    "Accommodation",
    "Meals as per the itinerary (2 breakfasts, 2 dinners).",
    "Union Cab",
    "Heaters or Electric blankets in hotels.",
    "Pick up and drop from Srinagar.",
    "Sightseeing as per itinerary.",
    "State tax, hotel tax, and Driver charge.",
    "Drivers allowance.",
    "Parking charges.",
  ];

  // Updated Exclusions for Gulmarg Tour Package
  const exclusions = [
    "Lunch.",
    "Dedicated Tour Guide for Complete Tour.",
    "Any kind of personal expenses or extra meals ordered.",
    "Any additional sightseeing other than the fixed program.",
    "Any cost arising due to natural calamities.",
    "Travel Insurance.",
    "Local transportation (e.g., ponies, ATV rides, human sledges where applicable and not part of the standard union cab).",
    "The cost is incidental to any change in the itinerary/stay due to flight cancellation due to bad weather, ill health, roadblocks, and any factors beyond our control.",
    "Cost of adventure activities, such as gondola cable car rides, skiing, snowboarding, etc.", // Explicitly mentioned as per source
    "Anything not explicitly mentioned under the head.",
  ];

  // Updated Cancellation Policy for Gulmarg Tour Package
  const cancellationPolicy = [
    "The booking amount is non-refundable due to the costs we incur in preparing for your tour or activity. If you wish to reschedule for a different date, we'll adjust it to the same package, providing you with the necessary flexibility.",
    "If you have paid the total amount but cancelled the package. You will be provided with a refund, as mentioned below:",
    "30 Days or More: 50% of the total amount is refundable.",
    "15 to 29 Days: 25% of the total amount is refundable.",
    "0 to 14 Days: No Refunds.",
    "Tours or activities might be cancelled due to unexpected circumstances, such as storms, heavy rainfall, sudden closures of specific areas, government restrictions or anything beyond our control. In such a scenario, we will provide an alternate tour or activity. However, no refunds will be provided."
  ];

  // Updated Important Notes for Gulmarg Tour Package
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
    "Good shoes are recommended.",
    "Headscarf for women if visiting a religious place.",
    "Carry emergency medicines.",
    "Post-paid sim is advisable.",
    "Carry sufficient cash.",
    "Carry Identity Proof.",
    "Carry cold cream and lip guard in winter & sunscreen in summer.",
    "Warm clothes will be needed depending upon the time you visit.",
    "Gondola Cable cars should be booked in advance. To make a reservation, call +91 9103058616 (9:00 AM to 5:00 PM) or visit the official website: www.jammukashmircablecar.com.",
    "Some places may not always be accessible by road. You may have to trek to reach them."
  ];

  // Updated Hotel Details for Gulmarg Tour Package
  const hotelDetails = [
    { destination: "Gulmarg", nights: "2 Nights", hotels: "Hotel in Gulmarg" },
  ];

  // Photo Gallery images (can be updated to be more Gulmarg-specific)
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
            alt={`Gulmarg Trip ${index + 1}`}
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
            <Badge className="bg-orange-500 text-white mb-4 rounded-full px-3 py-1">3 Days / 2 Nights</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Gulmarg Tour Package | The Meadow of Flowers</h1>
            <p className="text-xl mb-6 max-w-2xl text-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Discover the enchanting beauty of Gulmarg, home to the world's second-highest cable car, pristine slopes, and lush meadows.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-200" />
                <span>Srinagar • Gulmarg • Srinagar</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-200" />
                <span>3 Days / 2 Nights</span>
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
                  Embark on a captivating 3-day, 2-night journey to Gulmarg, often called the "Meadow of Flowers." This package offers a perfect escape to one of Kashmir's most picturesque hill stations. From the thrilling Gulmarg Gondola ride, offering panoramic views of the snow-capped Himalayas, to exploring lush golf courses and serene landscapes, this tour promises an unforgettable experience of natural beauty and adventure.
                </p>
              </CardContent>
            </Card>

            {/* About the Tour */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About Gulmarg</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nestled amidst stunning Himalayan landscapes, Gulmarg, meaning "Meadow of Flowers," is a picturesque hill station approximately 60 kilometres from Srinagar. The journey by car takes about an hour and a half and offers scenic views along the way. Thanks to its lush meadows and snow-capped mountain backdrop, Gulmarg has been a tourist favourite destination throughout history. Its beauty is sure to inspire you.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">Key Attractions:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li><strong>Gulmarg Gondola:</strong> The second-highest cable car in the world, operating in two phases: Phase 1 to Kongdori Station (8,530 feet) and Phase 2 to an altitude of 12,293 feet.</li>
                  <li><strong>Strawberry Valley & Leopards Valley:</strong> Charming natural spots for exploration.</li>
                  <li><strong>Al-Pathar Lake:</strong> A frozen wonder accessible via horse rides or treks.</li>
                  <li><strong>Winter Wonderland:</strong> Gulmarg transforms into a snowy paradise, ideal for skiing, especially during White Christmas and New Year.</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-2">Historical Significance:</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gulmarg has a rich history, having served as a retreat for royalty like Yousuf Shah Chak and Emperor Jahangir. Originally named Gaurimarg after Goddess Parvati, it was renamed Gulmarg ("the place of roses") by Yousuf Shah Chak. It was also a popular summer escape for British officers.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">Quick Info:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Route:</strong> Srinagar - Gulmarg - Srinagar</li>
                  <li><strong>Duration:</strong> 3 Days and 2 Nights</li>
                  <li><strong>Pick and Drop Location:</strong> Srinagar</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-2">How to Reach Gulmarg:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>By Air:</strong> The Sheikh Ul Alam International Airport in Srinagar is the nearest, 54 kilometres from Gulmarg.</li>
                  <li><strong>By Train:</strong> The most proximate railway station is in Anantnag, about 45 kilometres away.</li>
                  <li><strong>By Road:</strong> From Srinagar, it's a 54-kilometer drive.</li>
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
                        alt={`Gulmarg ${index + 1}`}
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
                  <span className="font-semibold">For Gulmarg Gondola bookings:</span> Call +91 9103058616 (9:00 AM to 5:00 PM) or visit the official website: <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">www.jammukashmircablecar.com</a>.
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

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How far is Gulmarg from Srinagar?</h3>
                <p className="text-gray-600 mb-4">Gulmarg is situated approximately 56 kilometres (35 miles) from Srinagar.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How long does it take to reach Gulmarg from Srinagar?</h3>
                <p className="text-gray-600 mb-4">It takes approximately 1.5-2 hours to reach Gulmarg from Srinagar.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How much does a Gondola ride cost in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">The cost of a Gondola ride in Gulmarg varies depending on the phase you choose:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>Phase I (Gulmarg to Kongdoori): ₹840 per adult, plus a convenience fee.</li>
                  <li>Phase II (Kongdoori to Apharwat): ₹1010 per adult, plus a convenience fee.</li>
                  <li>Chairlift (Kongdoori to Mary’s Shoulder): ₹300 per adult, plus a convenience fee.</li>
                  <li>If you opt for Phase I and II, the total cost amounts to ₹1800 per adult, excluding the convenience fee.</li>
                </ul>
                <p className="text-gray-600 mb-4">For bookings, call 9103058616 (8:30 AM to 5:30 PM) or visit the official website: <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">www.jammukashmircablecar.com</a>.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is there a cable car in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, there is a cable car in Gulmarg. The Gulmarg Gondola is the world's second-highest and longest cable car, taking visitors to the Apharwat Peak, 4,200 meters above sea level.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the best way to get to Gulmarg from Srinagar?</h3>
                <p className="text-gray-600 mb-4">The best way to reach Gulmarg from Srinagar is by taxi to Tangmarg and another Union cab (only in winter), which takes about two hours.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What kind of terrain can be expected in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Gulmarg is located in a mountainous region in the Himalayas. The terrain can be rugged, with steep mountains and deep valleys. The area is mainly covered with alpine meadows, pine forests, and snow-capped peaks. It is ideal for skiing, other winter sports, trekking, and hiking and is famous for its Gondola cable car.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any special precautions to take while skiing or snowboarding in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, there are several special precautions to take while skiing or snowboarding in Gulmarg. First, it is essential to be aware of the weather conditions and avalanche warnings, as the region is prone to avalanches. Second, appropriate clothing and protective gear, including helmets, goggles, and gloves, are necessary. Third, skiing or snowboarding with a buddy and being aware of your surroundings are essential. Lastly, carrying a map and compass and knowing the ski area boundaries are also necessary.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any special clothing requirements for skiing or snowboarding in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, wearing appropriate outerwear is essential for skiing or snowboarding in Gulmarg. This includes waterproof and windproof clothing, such as a sturdy ski jacket and pants, base layers, hats, gloves, and goggles. Additionally, helmets are recommended for both skiing and snowboarding.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any medical facilities in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">There is a medical facility in Gulmarg called the Gulmarg Medical Centre. It is located near the Gondola lift and provides essential medical services, including first aid and emergency care.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any restaurants and cafes near the cable car station?</h3>
                <p className="text-gray-600 mb-4">Yes, several restaurants and cafes are located near the cable car station. Nearby eateries include the Cable Car Cafe, the Cable Car Diner, the Cable Car Restaurant, and the Cable Car Bistro.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any shopping places in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, there are several shopping places in Gulmarg. Some popular shopping places include the Gulmarg Market, where you can find local handicrafts, souvenirs, and traditional Kashmiri clothing, as well as the Gulmarg Handicrafts Market, where you can buy local carpets, shawls, and textiles. Several stores and kiosks also sell various items, including apparel, accessories, jewellery, and souvenirs.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any unique festivals celebrated in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, Gulmarg celebrates several unique festivals throughout the year, including the Gulmarg Ski Festival, Gulmarg Summer Festival, Gulmarg Blossom Festival, and Gulmarg Winter Festival. Additionally, the Gulmarg Festival of Lights is celebrated annually in December.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any unique places to visit in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, there are many unique places to visit in Gulmarg. The most popular attractions include the Gulmarg Gondola, Kongdori Ski Slopes, Alpather Lake, Baba Reshi Shrine, Maharani Temple, Apharwat Peak, and the Gulmarg Biosphere Reserve. Other popular places include St. Mary's Church, the Gulmarg Golf Course, the Gulmarg Wildlife Sanctuary, the Gulmarg Bazaar, and the Ningle Nallah.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is 3 days enough for Gulmarg with proper planning?</h3>
                <p className="text-gray-600 mb-4">Yes, three days can be enough to visit Gulmarg. However, if you prefer a more adventurous or relaxing itinerary, contact Uncia Trails for a better-tailored one.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the Srinagar, Gulmarg, and Pahalgam tour packages?</h3>
                <p className="text-gray-600 mb-4">These packages typically include Srinagar's iconic Dal Lake and Mughal Gardens, Gulmarg's scenic meadows and Gondola ride, and Pahalgam's picturesque valleys, such as ABC (Aru, Betaab, and Chandanwari Valley) for Kashmir tour packages.</p>

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
                    <span className="font-medium">3 Days / 2 Nights</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Night Stays:</span>
                    <span className="font-medium">2N Gulmarg</span>
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

                <BookingButton tourName="Gulmarg Tour Package (3 Days, 2 Nights)" tourPrice="Price on Request" className="w-full py-3 text-lg font-semibold bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 shadow-md hover:shadow-lg" />

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