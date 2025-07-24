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
      title: "Arrival in Srinagar | Srinagar Sightseeing Tour",
      description: "Welcome to the enchanting land of Kashmir, often called \"Heaven on Earth\"! Upon arriving at Srinagar Airport, you will be escorted to your hotel. After checking in and settling down, you'll embark on an exciting city tour. Your sightseeing adventure includes visiting the stunning Pari Mahal, where you can soak in the region's rich history and architectural brilliance. You'll also explore the exquisite Mughal gardens, such as Shalimar Bagh, renowned for its 17th-century Mughal design. Additionally, you'll have the opportunity to visit the revered Shankaracharya Temple, a site of spiritual significance. After a day of exploration and wonder, you'll be driven back to your hotel for a restful overnight stay.",
      highlights: ["Srinagar Airport Arrival", "Pari Mahal", "Mughal Gardens", "Shalimar Bagh", "Shankaracharya Temple"],
      hotel: "Hotel at Srinagar",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Transfer to Gulmarg | Gulmarg Sightseeing Tour",
      description: "Today, after checking out from your hotel, you'll head to Gulmarg, famously known as the \"Meadow of Flowers.\" Once you arrive, settle into your hotel and unwind before proceeding. Later, you'll be transported to the Gulmarg Union Cab Stand, where you can hire a cab (at your own expense) for a memorable excursion. During this trip, you’ll witness the breathtaking Drung Waterfall and visit the unique Igloo Cafe. Don't miss the thrilling gondola ride, which takes you to an altitude of nearly 4,000 meters. After your adventure, return to the Gulmarg Union Cab Stand. Finally, you'll return to your hotel to unwind and enjoy an overnight stay.",
      highlights: ["Transfer to Gulmarg", "Gulmarg Union Cab Stand", "Drung Waterfall", "Igloo Cafe", "Gondola Ride"],
      hotel: "Hotel at Gulmarg",
      meals: "Breakfast & Dinner",
    },
    {
      day: 3,
      title: "Transfer to Pahalgam | Day at Leisure",
      description: "After checking out of your hotel in Gulmarg, you'll journey to Pahalgam. Along the way, take in the scenic beauty of the region's apple orchards and saffron fields. Upon reaching Pahalgam, check into your hotel and settle in. The rest of the day is yours to enjoy at your leisure. You can experience the excitement of water activities, such as rafting on the Lidder River, known for its exhilarating rapids. Return to your hotel later for a peaceful overnight stay.",
      highlights: ["Transfer to Pahalgam", "Apple Orchards", "Saffron Fields", "Lidder River Rafting (Optional)"],
      hotel: "Hotel at Pahalgam",
      meals: "Breakfast & Dinner",
    },
    {
      day: 4,
      title: "Pahalgam Sightseeing Tour",
      description: "You'll head to the Pahalgam Union Cab Stand in the morning to begin your sightseeing adventure. From there, you can hire a cab (at your own expense) to explore the renowned Aru Valley, Betaab Valley, and Chandanwari. These picturesque locations are known for their stunning landscapes, featuring verdant greenery, crystal-clear rivers, and towering mountains. After immersing yourself in the natural beauty of these valleys, return to the Union Cab Stand at your own pace. Then, you'll be driven back to your hotel for a restful overnight stay.",
      highlights: ["Pahalgam Union Cab Stand", "Aru Valley", "Betaab Valley", "Chandanwari"],
      hotel: "Hotel at Pahalgam",
      meals: "Breakfast & Dinner",
    },
    {
      day: 5,
      title: "Transfer to Srinagar | Shikara Ride on Dal Lake",
      description: "After checking out of your hotel in Pahalgam, you'll be driven to Srinagar. Upon arrival, check into your hotel/houseboat and prepare for a delightful Shikara ride on the serene Dal Lake. As you smoothly drift over the calm waters, you'll have the chance to interact with the locals and discover the vibrant floating markets, where merchants offer a variety of flowers and handmade items from their boats. Later, you'll return to your hotel/houseboat to relax and enjoy an overnight stay.",
      highlights: ["Transfer to Srinagar", "Shikara Ride on Dal Lake", "Floating Markets", "Local Interaction"],
      hotel: "Hotel/Houseboat at Dal Lake",
      meals: "Breakfast & Dinner",
    },
    {
      day: 6,
      title: "Excursion to Sonamarg",
      description: "After checking out of your hotel, you'll head to the Sonamarg Pony Ride Parking. You can reach the Thajiwas Glacier on horseback or by cab. Enjoy the breathtaking views of the majestic Thajiwas Glacier mountain, lush conifer forests, expansive meadows, and serene frozen lakes. Next, take in the beauty of the stunning Baltal Valley. If you’re feeling adventurous, you can opt for a whitewater rafting experience on the Sindh River (available at an extra cost). Later, you'll be transferred to your houseboat, where you'll spend the night.",
      highlights: ["Sonamarg Excursion", "Thajiwas Glacier", "Horseback/Cab Ride (Optional)", "Baltal Valley", "Sindh River Rafting (Optional)"],
      hotel: "Hotel at Srinagar", // Note: Itinerary states transfer to houseboat, then stay at Srinagar hotel. Clarified to Srinagar hotel for consistency with 5N Srinagar.
      meals: "Breakfast & Dinner",
    },
    {
      day: 7,
      title: "Departure",
      description: "After checking out from your hotel in the morning, you'll be transferred to Srinagar Airport or the railway station for your journey home. This concludes your memorable trip.",
      highlights: ["Breakfast", "Hotel Check-out", "Airport/Railway Station Transfer"],
      hotel: "Nil",
      meals: "Breakfast",
    },
  ];

  const localSightseeingActivities = [
    { location: "Srinagar", places: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Shankaracharya Temple Tulip, Garden, Dal Lake, Etc.", activities: "Shikara Ride" },
    { location: "Gulmarg", places: "Gulmarg Gondola ride, Golf Course, Drung waterfall.", activities: "Gondola Ride, Ski and Snowboard" },
    { location: "Pahalgam", places: "Aru Valley, Betaab Valley, Chandanwari Valley, Poshwan Park, Baisaran Valley, Lidder Amusement Park, Etc.", activities: "Rafting" },
    { location: "Sonamarg", places: "Krishnasar Lake, Thajiwas Glacier viewpoint, Zero Point, Etc", activities: "Pony Ride, Rafting" },
  ];

  const inclusions = [
    "Meals as mentioned in the Itinerary.",
    "One-hour Shikara rides are complimentary.",
    "6-night accommodation.",
    "Union Cab Charges.",
    "Heater Charges.",
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
    "Heater charges in hotels.",
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
    "Ensure you are 100% comfortable with the off-road experience and extreme conditions of the Kashmir Package. Expect to encounter slippery, narrow, unpaved roads and stretches of grit and rubble with water flowing through them.",
    "The itinerary is fixed and cannot be modified. Transportation will be provided as per the itinerary and will not be available. If a paid activity is non-operational for an unforeseen reason, we will process a refund, which should reach the guest within 30 days of processing.",
    "Also, no refund will be processed for any complementary activity not charged to UNCIA and guests.",
    "AC will not be functional anywhere in cool or hilly areas.",
    "Entrance fees, parking and guide charges are not included in the packages.",
    "Suppose your flights involve a combination of different airlines. In that case, you may have to collect your luggage on arrival at the connecting hub and register it again while checking in for the onward journey to your destination.",
    "Booking rates are subject to change without prior notice.",
    "If the listed hotels are unavailable, arrangements will be made for alternate accommodation in a hotel of a similar standard. Suppose your package must be cancelled due to natural calamities, weather conditions, etc. In that case, UNCIA will strive to give you the maximum possible refund, subject to the agreement made with our trade partners/vendors.",
    "UNCIA reserves the right to modify the itinerary at any point due to reasons including, but not limited to, force majeure events, strikes, fairs, festivals, weather conditions, traffic problems, overbooking of hotels/flights, cancellation / re-routing of flights, closure of /entry restrictions at a place of a visit, etc. While we will do our best to make suitable alternate arrangements, we will not be held liable for any refunds/compensation claims arising from this.",
    "The booking price does not include personal expenses such as laundry, telephone calls, room service, alcoholic beverages, mini bar charges, tips, portage, camera fees, etc.",
    "Any other items not mentioned under Inclusions are not included in the booking cost.",
    "In Gulmarg, the horseman union does not allow vehicles to drop off or pick up guests at the gondola and prohibits all sightseeing tours.",
    "During winter, the road to Sonamarg remains closed, and vehicles can only go to Gagangir.",
    "Our vehicle will take the guest to the Sonamarg taxi stand for sightseeing. The guest must hire a pony or a local Union cab from there. Thajwas Glacier and Zero Point at Sonamarg are not included in the tour due to restrictions imposed by the local union.",
    "Personal cabs cannot transfer tourists to/from Thajiwas Glacier, Fish Pond, Zero Point, Baltal, Krishansar, and Vishansar Lake. However, taxis hired from local unions can be paid directly.",
    "You must bring proof of valid identification at check-in. (PAN cards are not accepted.)",
    "The sequence of the day-wise itinerary for the Package may change during the trip depending on restrictions or any other unknown issues.",
    "We are not responsible for any changes in the package itinerary due to union issues, landslides, flight cancellations, weather conditions, or unforeseen events. The additional cost will be in addition to the package price.",
    "If you cancel your trip midway for any reason, the remaining amount will be non-refundable.",
    "No Refund or Compensation for any unused services/transportation in any circumstance.",
    "The client should bear any cost increase due to a medical emergency. No refund will be given for any unused service.",
    "The price will be affected if the transport cost during the trip (including fuel surcharge) or accommodation increases properties'nprecedentedly.",
  ];

  const hotelDetails = [
    { destination: "Srinagar", nights: "3 Nights", hotels: "Not Specified (Hotel at Srinagar)" },
    { destination: "Gulmarg", nights: "1 Night", hotels: "Not Specified (Hotel at Gulmarg)" },
    { destination: "Pahalgam", nights: "2 Nights", hotels: "Not Specified (Hotel at Pahalgam)" },
  ];

  // Array for Photo Gallery images
  const galleryPhotos = [
    "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600",
    "https://images.unsplash.com/photo-1704021717759-15cf9ca938cf?q=80&w=600",
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=600",
    "https://images.unsplash.com/photo-1704114458458-aa6e39150f02?q=80&w=600",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600",
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-orange-500 text-white mb-4">6 Nights / 7 Days</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kashmir Family Vacation to Kashmir</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Discover the enchanting beauty of Srinagar, Gulmarg, Pahalgam, and Sonamarg on this unforgettable family journey through Kashmir.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Srinagar • Gulmarg • Pahalgam • Sonamarg</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>6 Nights / 7 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Family Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Trip Overview */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Trip Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  This Kashmir family tour package offers a scenic and cultural exploration of the stunning region, beginning with a visit to Srinagar's landmarks, such as Pari Mahal, Mughal Gardens, and Shankaracharya Temple. The tour includes scenic transfers to Gulmarg for a gondola ride and waterfall views, followed by a leisurely day at Pahalgam to enjoy rafting and explore beautiful valleys like Aru and Betaab. A visit to Dal Lake for a Shikara ride and a day trip to Sonamarg to experience the Thajiwas Glacier and optional rafting complete the adventure. The package offers families a perfect blend of nature, culture, and relaxation over a week-long journey.
                </p>
              </CardContent>
            </Card>

            {/* About The Tour */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About The Tour</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Throughout your trip, you'll be enchanted by the awe-inspiring beauty of the Kashmir Valley, from its serene lakes and untouched meadows to its majestic mountains. This journey combines the ideal mix of relaxation, adventure, and an authentic experience of Kashmiri culture, ensuring you create lasting memories of this stunning destination.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kashmir, often called "Heaven on Earth," is located at the northernmost edge of the Indian subcontinent. Its breathtaking landscapes, including the famous Vale of Kashmir, the charming southern hills, and the stark beauty of Ladakh to the north, have made it a popular tourist destination. The region offers a variety of activities, such as scenic drives, challenging pilgrimages, leisurely walks, and adventure pursuits, all of which can be included in family tour packages.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Travelling with family adds a unique dimension to the holiday experience. Kashmir family packages feature meticulously planned itineraries that ensure a smooth, well-organized, and stress-free vacation. These itineraries are tailored to meet the needs of every family member and include services such as sightseeing tours, outdoor activities, comfortable accommodations, and local and interstate transfers, ensuring a perfect and seamless holiday.
                </p>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Camera className="w-6 h-6" />
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryPhotos.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
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
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-orange-500 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                          Day {day.day}
                        </Badge>
                        <h3 className="text-lg font-semibold">{day.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-3">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
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
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Local Sightseeing & Activities</h2>
                <div className="space-y-4">
                  {localSightseeingActivities.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <MapPin className="mt-1 w-5 h-5 text-gray-500 flex-shrink-0" />
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
                  <span className="font-semibold">For Gulmarg Gondola bookings:</span> Call 9103058616 (9:00 AM to 5:00 PM evening) or visit the official website: <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.jammukashmircablecar.com</a>.
                </p>
              </CardContent>
            </Card>

            {/* Hotel Details */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Hotel Details</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Destination
                        </th>
                        <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          No Of Nights
                        </th>
                        <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Hotels
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotelDetails.map((hotel, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{hotel.destination}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{hotel.nights}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{hotel.hotels}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Inclusions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">What's Included</h2>
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
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">What's Not Included</h2>
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
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Important Things to Remember</h2>
                <div className="space-y-3 text-gray-700">
                  {importantNotes.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Cancellation Policy</h2>
                <div className="space-y-3 text-gray-700">
                  {cancellationPolicy.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQs Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions (FAQs)</h2>

                <h3 className="text-lg font-semibold mb-2">How do you plan a Kashmir trip with your family?</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>The Floating Market on Dal Lake.</li>
                  <li>Nishat Garden in Srinagar.</li>
                  <li>Pari Mahal, Srinagar.</li>
                  <li>A panoramic aerial view of Srinagar.</li>
                  <li>Betaab Valley in Pahalgam.</li>
                  <li>Aru Valley in Pahalgam.</li>
                  <li>Hazratbal Mosque in Srinagar.</li>
                  <li>Badamwari Garden in Srinagar.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">How many days are sufficient for the Kashmir trip?</h3>
                <p className="text-gray-700 mb-4">A week-long trip to Kashmir is ideal for exploring the key hill stations and famous places. With a well-organized itinerary, you can enjoy a fulfilling and memorable experience in the region. For the best tour Package, Contact Uncia Trails for a better-tailored itinerary.</p>

                <h3 className="text-lg font-semibold mb-2">How much money is required for the Kashmir trip?</h3>
                <p className="text-gray-700 mb-2">The cost of a Kashmir trip varies depending on the package chosen. Here are some popular options for a 5-day, 4-night stay:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Fabulous Kashmir Trip Package: ₹30,750</li>
                  <li>Lavish Kashmir Holiday with Gulmarg Package: ₹49,502</li>
                  <li>Learn Skiing in Gulmarg Package: ₹46,076</li>
                  <li>Unforgettable Kashmir Holiday with Gulmarg Excursion Package: ₹37,625</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Which part of Kashmir is most beautiful?</h3>
                <p className="text-gray-700 mb-4">Gurez Valley is considered the most stunning part of Kashmir. While it used to be challenging to visit, there are no longer any permit requirements. All you need is a valid identity card. You can explore the valley to Chakhwali in Tulail and Tarbal in Bagtore.</p>

                <h3 className="text-lg font-semibold mb-2">Pahalgam To ABC valley Union Taxi Fare</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Places</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Innova</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Xylo</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tavera</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Sumo</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Etios</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Eco</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Pahalgam To Aru Valley</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1600</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1500/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1400/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1300/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1450/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1200/-</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Pahalgam To Betaab Valley</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1400</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1300/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1200/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1100/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1250/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹1100/-</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">Pahalgam To Chandanwari valley</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">₹1800</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">₹1700/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">₹1600/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">₹1500/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">₹1650/-</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">₹1400/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-2">What are the charges for Drung Waterfall?</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Activity</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Details</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">ATV Ride to Drung Waterfall</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Self-drive round trip (8 km) with an operator</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹3,000/-</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">By Union cab</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">4 to 8 Adults per Vehicle</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">₹2,800/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-2">How much does a Kashmir trip typically cost?</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Package</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Inclusion</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Exclusion</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Stay</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">2 Person</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹16000/-</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Airport to Airport cab</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Meal</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Guest houses</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">4 Person</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹32000/-</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Srinagar stay only</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Entry passes</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Homestays</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">6 Person</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹53000/-</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Sightseeing as per the plan</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Operational tours</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Govt. hutments</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">12 Person</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹96000/-</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Private cabs</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Activities</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Guest houses</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-2">What are the best Srinagar tour packages for couples?</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Package Name</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration (Days/Nights)</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price₹</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Fairy-tale Getaway to Kashmir Package</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">4 Days/3 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹27,790/-</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Mystical Kashmir Vacation - With Houseboat Stay</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">6 Days/5 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹46,670/-</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Relaxing Holiday in Kashmir Package</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">6 Days/5 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹38,520/-</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Scenic Kashmir - Honeymoon Special Package</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">7 Days/6 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹65,600/-</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-2">Which srinagar tour package is best?</h3>
                <p className="text-gray-700 mb-2">The best Srinagar tour package depends on your preferences, budget, and interests. Here's a breakdown to help you decide:</p>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Package Name</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration (Days/Nights)</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price (₹)</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Fairy-tale Getaway to Kashmir</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">4 Days/3 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹17,290/-</td><td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">Budget-friendly romantic escape</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Mystical Kashmir Vacation - With Houseboat Stay</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">6 Days/5 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹25,837/-</td><td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">Unique houseboat experience and scenic beauty</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Scenic Kashmir - Honeymoon Special</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">7 Days/6 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹59,303/-</td><td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">Couples seeking a luxurious honeymoon retreat</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Mata Vaishnodevi with Jammu Darshan Yatra</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">4 Days/3 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹14,900/-</td><td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">Religious pilgrimage with sightseeing</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Kashmir Week</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">7 Days/6 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹34,900/-</td><td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">Comprehensive Kashmir experience for travellers</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Exotic Kashmir with Sonamarg</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">7 Days/6 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹37,400/-</td><td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">Skiing and gondola rides in picturesque Gulmarg</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Exotic Kashmir with Gulmarg</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">7 Days/6 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹42,900/-</td><td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">Adventure and scenic beauty in Sonamarg</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Relaxing Holiday in Kashmir</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">6 Days/5 Nights</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹25,415/-</td><td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">Leisurely vacation amidst Kashmir's beauty</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-2">What are the best Srinagar tour packages for family?</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Fairy-tale Getaway to Kashmir (₹17,290): Ideal for a short family trip (4 Days/3 Nights).</li>
                  <li>Mystical Kashmir Vacation - With Houseboat Stay (₹27,837): Unique houseboat experience (6 Days/5 Nights).</li>
                  <li>Relaxing Holiday in Kashmir (₹25,415): Comfortable and leisurely holiday (6 Days/5 Nights).</li>
                  <li>Kashmir Week (₹38,900): Comprehensive tour of key attractions (7 Days/6 Nights).</li>
                  <li>Exotic Kashmir with Sonmarg (₹29,400): Outdoor adventures and scenic beauty (7 Days/6 Nights).</li>
                  <li>Exotic Kashmir with Gulmarg (₹32,900): Snow activities and family fun in Gulmarg (7 Days/6 Nights).</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Is 3 days enough for with proper planning, Gulmarg?</h3>
                <p className="text-gray-700 mb-4">Yes, three days can be enough to visit Gulmarg. However, if you prefer a more adventurous or relaxing itinerary, contact Uncia Trails for a better-tailored one.</p>

                <h3 className="text-lg font-semibold mb-2">What are the Srinagar, Gulmarg, and Pahalgam tour packages?</h3>
                <p className="text-gray-700 mb-4">These packages typically include Srinagar's iconic Dal Lake and Mughal Gardens, Gulmarg's scenic meadows and Gondola ride, and Pahalgam's picturesque valleys, such as ABC (Aru, Betaab, and Chandanwari Valley) for Kashmir tour packages.</p>

                <h3 className="text-lg font-semibold mb-2">Is a permit required to visit Kashmir?</h3>
                <p className="text-gray-700 mb-4">Indian citizens need no permit to visit Kashmir. However, they may need a valid passport, PAN card, Aadhar card, or driving license and a ticket printout. Permits may also be required for trekking in sensitive border areas. Foreign nationals need a visa and possibly additional licenses. An Inner Line Permit is necessary for regions like Ladakh, and trekking permits are required for specific areas.</p>

                <h3 className="text-lg font-semibold mb-2">In which month can you see snow in Kashmir?</h3>
                <p className="text-gray-700 mb-4">Snow begins falling in Kashmir around late October at higher altitudes like Gulmarg and Sonamarg. However, the primary snowfall season typically occurs between December and February, with Gulmarg, Pahalgam, and Sonamarg being the top spots for snowfall enthusiasts.</p>

                <h3 className="text-lg font-semibold mb-2">How far is Kashmir from Delhi by air?</h3>
                <p className="text-gray-700 mb-4">Kashmir is approximately 800 to 1,000 kilometres (about 500 to 620 miles) from Delhi. Depending on the route and weather conditions, the flight takes 1.5 to 2 hours.</p>

                <h3 className="text-lg font-semibold mb-2">When is the off-season for visiting Kashmir?</h3>
                <p className="text-gray-700 mb-4">The off-season for visiting Kashmir is from July to early September. During this time, the weather is warmer with occasional rainfall, and there are fewer tourists, offering a quieter experience. It’s also the best time for apple picking. While hotel and tour deals are often available, visitors should be prepared with warm clothes and rain gear.</p>

                <h3 className="text-lg font-semibold mb-2">Is it possible to travel to Kashmir without a tour package?</h3>
                <p className="text-gray-700 mb-4">Yes, it is possible to travel to Kashmir without a tour package. You can plan your itinerary, book accommodations, and arrange local transportation, offering flexibility, cost-effectiveness, and a more authentic experience. It also allows you to customise your trip and explore off-the-beaten-path destinations.</p>

                <h3 className="text-lg font-semibold mb-2">What are the train options to reach Srinagar?</h3>
                <p className="text-gray-700 mb-4">To reach Srinagar by train, the nearest railway stations are Jammu Tawi (271 km) and Udhampur (200 km), both well-connected to major cities. You can take private cabs or state buses from these stations to Srinagar. The New Delhi to Srinagar Vande Bharat Sleeper train will begin operations in January 2025. This direct, semi-high-speed rail service will cover over 800 kilometres in under 13 hours, providing modern amenities and a more comfortable travel experience.</p>

                <h3 className="text-lg font-semibold mb-2">Are there flight options for travelling to Kashmir?</h3>
                <p className="text-gray-700 mb-4">Yes, there are flight options for travelling to Kashmir. Srinagar Airport is well-connected, with direct flights from 10 major Indian airports. Airlines like IndiGo and Air-India Express operate non-stop flights to Srinagar from cities such as Ahmedabad, Amritsar, Bengaluru, Chandigarh, and Hyderabad. These direct flights make it convenient for travellers to reach Kashmir by air.</p>

                <h3 className="text-lg font-semibold mb-2">Is train travel to Kashmir possible?</h3>
                <p className="text-gray-700 mb-4">Although there are no direct train routes to Kashmir, you can take a train to Jammu Tawi, the nearest railway station, about 300 km from Srinagar. After arriving in Jammu, you can continue your travel to the Kashmir Valley. Additionally, starting in January 2025, the New Delhi to Srinagar Vande Bharat Sleeper train will offer a direct, semi-high-speed rail service between New Delhi and Srinagar, covering the distance in under 13 hours. This will improve accessibility to the Kashmir Valley, offering travellers a more comfortable and efficient option.</p>

                <h3 className="text-lg font-semibold mb-2">When is the best time of year to visit Kashmir?</h3>
                <p className="text-gray-700 mb-4">The best season to visit Kashmir depends on your preferences: Spring (March-May): Pleasant weather, blooming flowers (tulips, daffodils) in Mughal Gardens, vibrant landscapes. Summer (June-August): Cool temperatures, lush green meadows, and hill stations like Gulmarg and Pahalgam. Autumn (September-November): Stunning fall foliage with vibrant colors. Winter (December-February): Perfect for snow lovers, skiing and snowboarding in a snowy wonderland.</p>

                <h3 className="text-lg font-semibold mb-2">Which place in Kashmir is referred to as "Mini Switzerland"?</h3>
                <p className="text-gray-700 mb-4">Baisaran Valley, located just 5 kilometres from Pahalgam in Kashmir's Anantnag district, is often referred to as "Mini Switzerland" due to its stunning scenic beauty, lush meadows, and snow-capped mountains, resembling the landscapes of Switzerland.</p>

                <h3 className="text-lg font-semibold mb-2">What are the famous foods in Kashmir?</h3>
                <p className="text-gray-700 mb-2">Famous for its rich and flavorful cuisine, Kashmir offers a variety of unique dishes, including:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Rogan Jos: An aromatic lamb dish that is a must-try for meat lovers.</li>
                  <li>Modur Pulav: A fragrant rice dish made with saffron, dried fruits, and spices.</li>
                  <li>Matschgand: Minced meatballs cooked in a spicy gravy.</li>
                  <li>Yakhni (Yoghurt Lamb Curry): A mild, yoghurt-based lamb curry with aromatic spices.</li>
                  <li>Dum Olav: Potatoes cooked in a spicy, aromatic gravy.</li>
                  <li>Kashmiri Muji Gaad: A traditional fish curry made with mustard sauce and spices.</li>
                  <li>Aab Gosht: Lamb cooked in a milky sauce with saffron and other spices.</li>
                  <li>Goshtaba: Meatballs made with minced lamb, cooked in a rich gravy, often served on special occasions.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Should I carry cash when visiting Kashmir?</h3>
                <p className="text-gray-700 mb-4">Carrying cash when visiting Kashmir is advisable, as some places may not accept online payments or card transactions. While larger hotels and businesses in tourist areas might accept digital payments, smaller shops, markets, and remote regions may only deal in cash. Carrying enough money to cover your expenses is a good idea, especially in less urban areas.</p>

                <h3 className="text-lg font-semibold mb-2">Is it safe to visit Kashmir alone?</h3>
                <p className="text-gray-700 mb-4">Yes, Kashmir is generally safe to travel. While some visitors may be concerned about the region's past, it is safe for tourists, even those travelling alone. The area has seen significant security improvements, and many travelers visit without issues. As with any destination, it’s always important to stay updated on local conditions, follow safety advice, and take basic precautions to ensure a smooth and enjoyable trip.</p>

                <h3 className="text-lg font-semibold mb-2">What documents are required to travel to Kashmir?</h3>
                <p className="text-gray-700 mb-4">When travelling to Kashmir, you must carry valid photo identification and address proofs, such as your passport, Aadhaar card, or driving license. These are required to board your flight and access certain areas in Kashmir. Additionally, carry a printout of your ticket, whether you travel by road, rail, or air.</p>

                <h3 className="text-lg font-semibold mb-2">How much does a Gondola ride cost in Gulmarg?</h3>
                <p className="text-gray-700 mb-2">The cost of a Gondola ride in Gulmarg varies depending on the phase you choose:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Phase I (Gulmarg to Kongdoori): ₹840 per adult, plus a convenience fee.</li>
                  <li>Phase II (Kongdoori to Apharwat): ₹1010 per adult, plus a convenience fee.</li>
                  <li>Chairlift (Kongdoori to Mary’s Shoulder): ₹300 per adult, plus a convenience fee.</li>
                </ul>
                <p className="text-gray-700 mb-4">If you opt for Phase I and II, the total cost amounts to ₹1800 per adult, excluding the convenience fee. For bookings, call 9103058616 (8:30 AM to 5:30 PM) or visit the official website: <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.jammukashmircablecar.com</a>.</p>

                <h3 className="text-lg font-semibold mb-2">What are the best places for couples to visit on a Kashmir tour?</h3>
                <p className="text-gray-700 mb-4">Couples on a Kashmir tour can explore romantic destinations like Srinagar's Dal Lake, the picturesque gardens of Mughal, the serene meadows of Pahalgam, the breathtaking vistas of Gulmarg, and the enchanting beauty of Sonamarg. These spots offer perfect settings for memorable moments amidst nature's splendor.</p>

                <h3 className="text-lg font-semibold mb-2">Can we travel to Kashmir without booking a package?</h3>
                <p className="text-gray-700 mb-4">Yes, you can travel to Kashmir without booking a tour package. However, in this case, you must handle and manage all the arrangements yourself, such as accommodations, transportation, and itinerary planning. While it offers flexibility, it requires more effort and preparation to ensure a smooth trip.</p>

                <h3 className="text-lg font-semibold mb-2">What is the average budget for a Kashmir tour?</h3>
                <p className="text-gray-700 mb-2">The average budget for a Kashmir tour varies based on group size and inclusions:</p>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Package</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Inclusion</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Exclusion</th>
                        <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Stay</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">2 Person</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹16000/-</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Airport to Airport cab</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Meal</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Guest houses</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">4 Person</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹32000/-</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Srinagar stay only</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Entry passes</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Homestays</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">6 Person</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹53000/-</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Sightseeing as per the plan</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Operational tours</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Govt. hutments</td></tr>
                      <tr><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">12 Person</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">₹96000/-</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Private cabs</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Activities</td><td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-b border-gray-200">Guest houses</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-2">Can Kashmir be reached by car?</h3>
                <p className="text-gray-700 mb-4">Yes, you can reach Kashmir by car. The route from Delhi is about 800 km via National Highway 44, passing through Punjab and Jammu. You can drive your car, rent one, or take a taxi. It's essential to plan carefully, as weather and traffic can affect travel time. Buses are also an affordable option. The journey is scenic but requires a sturdy vehicle for the terrain. Flying is the fastest option, while trains to Jammu, followed by a road trip, offer a more affordable and scenic experience.</p>

                <h3 className="text-lg font-semibold mb-2">What is the best season to visit Kashmir?</h3>
                <p className="text-gray-700 mb-4">The best season to visit Kashmir depends on your preferences: Spring (March-May): Pleasant weather, blooming flowers (tulips, daffodils) in Mughal Gardens, vibrant landscapes. Summer (June-August): Cool temperatures, lush green meadows, and hill stations like Gulmarg and Pahalgam. Autumn (September-November): Stunning fall foliage with vibrant colors. Winter (December-February): Perfect for snow lovers, skiing and snowboarding in a snowy wonderland.</p>

                <h3 className="text-lg font-semibold mb-2">How can I plan a Kashmir tour by train?</h3>
                <p className="text-gray-700 mb-4">To plan a Kashmir tour by train: Reach Srinagar by Train: The Vande Bharat Express now connects Delhi to Srinagar, offering a comfortable and fast option. From Srinagar, hire a cab or take a tour of local sights Visit Key Destinations: Include Srinagar, Gulmarg, Pahalgam, and Sonamarg in your itinerary. Book in Advance: Reserve train tickets, accommodations, and guided tours early to avoid last-minute hassles. Combine with Air Travel if Needed: If train availability is limited, consider taking a flight to Srinagar and using local transport.</p>

                <h3 className="text-lg font-semibold mb-2">What are the famous bazaars in Kashmir that you should explore?</h3>
                <p className="text-gray-700 mb-2">Famous bazaars in Kashmir:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Lal Chowk: Vibrant market in Srinagar for Pashmina shawls, carpets, and saffron.</li>
                  <li>Sopore Fruit Market: Largest economic hub with a turnover of ~Rs 3000 crore annually.</li>
                  <li>Other shopping spots are Zaina Kadal Road, Residency Road, Kashmir Government Arts Emporium, Sangarmaal City Centre, Ahmad Complex, Polo View, and Fair Deal Shopping Complex.</li>
                  <li>What to Buy: Pashmina shawls, carpets, saffron, kangri, pherans, paper mache, and wooden crafts.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Are there bus services for a Kashmir tour?</h3>
                <p className="text-gray-700 mb-4">Kashmir is well-connected by road, with private and state-run buses linking significant cities like Delhi and Chandigarh to Srinagar. Overnight buses are available, often arriving early or late at night for convenient travel.</p>

                <h3 className="text-lg font-semibold mb-2">What is a recommended itinerary for a Kashmir tour?</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Day 1: Srinagar Arrival & Sightseeing - Visit Mughal Gardens (Nishat, Shalimar), Chashme Shahi, and Pari Mahal, and enjoy a Shikara ride at Dal Lake. Overnight in Srinagar.</li>
                  <li>Day 2: Sonamarg Day Tour - Explore snowy glaciers, Thajiwas Glacier, pony rides, and rafting. Return to Srinagar.</li>
                  <li>Day 3: Doodhpathri Day Tour - Visit green meadows and streams at 9,000 feet and enjoy peaceful walks and pony rides. Overnight in Srinagar.</li>
                  <li>Day 4: Srinagar to Gulmarg - Take a Gondola ride, enjoy skiing or ATV rides, and explore the scenic beauty. Return to Srinagar. For Gulmarg Gondola bookings, call 9103058616, 9:00 AM (Morning) to 5:00 PM (Evening) or visit the official website: <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.jammukashmircablecar.com</a>.</li>
                  <li>Day 5: Gulmarg to Pahalgam - Enjoy Lidder River views, pony rides to Mini-Switzerland or Baisaran, and rafting. Overnight in Pahalgam.</li>
                  <li>Day 6: Pahalgam to Srinagar - Visit Betaab Valley and Aru Valley, enjoy picnics, and return to a houseboat stay at Nigeen Lake.</li>
                  <li>Day 7: Departure - Shop for souvenirs, and visit Dal Lake or the gardens before heading to Srinagar Airport.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Is December a good time to visit Kashmir?</h3>
                <p className="text-gray-700 mb-4">Visiting Kashmir in December: Winter Wonderland: Peak snowfall transforms Kashmir into a snowy paradise. Winter Sports: Gulmarg is ideal for skiing, snowboarding, and other activities. Cold Weather: Pack warm clothing as temperatures are very low. Travel Challenges: Check road conditions due to possible closures from snow. Cultural Experiences: Enjoy Kashmiri cuisine and traditions amidst the winter charm.</p>

                <h3 className="text-lg font-semibold mb-2">What is Kashmir like in January?</h3>
                <p className="text-gray-700 mb-4">Kashmir in January: Snowy Wonderland: January is one of the coldest months, with heavy snowfall covering the region in pristine white, creating picturesque landscapes. Winter Sports: Gulmarg is a skier, snowboarder, and gondola ride hub. Chillai Kalan (21 Dec - 31 Jan): The harshest winter period in Kashmir, with freezing temperatures and the heaviest snowfall. Lakes and rivers partially freeze, adding to the beauty. Cold Weather: Temperatures can fall below freezing, so pack warm clothing and winter gear.</p>
              </CardContent>
            </Card>

          </div> {/* End of lg:col-span-2 main content */}

          {/* Sidebar - Booking/Price Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Package Pricing</h3>
                  {/* Assuming a placeholder price or calculation here if not specified */}
                  <div className="text-3xl font-bold text-orange-600 mb-2">Price on Request</div>
                  <div className="text-sm text-gray-500">per person (contact for details)</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">6 Nights / 7 Days</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Night Stays:</span>
                    <span className="font-medium">3N Srinagar • 1N Gulmarg • 2N Pahalgam</span>
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
                    <Users className="w-4 h-4" />
                    <span>Family Friendly</span>
                  </div>
                </div>

                <BookingButton tourName="Kashmir Family Vacation to Kashmir" tourPrice="Price on Request" />

                {/* Kashmir Reels Section */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Kashmir Reels
                  </h3>
                  {reelPermalinks.map((permalink, index) => (
                    <div
                      key={index}
                      ref={el => instagramEmbedRefs.current[index] = el}
                      className="instagram-media-container"
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
