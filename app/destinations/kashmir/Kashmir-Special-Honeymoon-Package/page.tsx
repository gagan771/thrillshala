import Image from "next/image";
import { Calendar, Users, MapPin, CheckCircle, XCircle, Camera, ChevronLeft, ChevronRight, Heart } from "lucide-react"; // Added Heart icon
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
      title: "Arrival in Srinagar | Shikara Ride on Dal Lake | Houseboat Stay",
      description: "Upon arriving at Srinagar Airport, you'll be transferred to the scenic Dal Lake, nestled amidst the stunning Himalayan peaks. Enjoy a peaceful shikara ride, soaking in the enchanting views of the vibrant floating gardens, houseboats, and distant snow-capped mountains. Afterwards, check in to your charming houseboat, where you can unwind and experience the warm Kashmiri hospitality, spending the night on the serene waters of the lake.",
      highlights: ["Srinagar Airport Welcome", "Dal Lake Shikara Ride", "Floating Gardens", "Houseboat Stay"],
      hotel: "Houseboat / Srinagar Hotel",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Srinagar Sightseeing Tour",
      description: "Check out from your houseboat and head to your hotel in Srinagar for check-in. After settling in, embark on a city tour, beginning with the renowned Mughal gardens. Wander through Nishat Bagh, where terraced lawns offer magnificent views of Dal Lake and the Zabarwan mountains. Continue visiting other attractions, such as Chashme Shahi, a royal spring garden, and the ancient Shankaracharya Temple, which provides panoramic city views. End the day by exploring the lively markets of Lal Chowk before returning to the hotel.",
      highlights: ["Mughal Gardens", "Nishat Bagh", "Chashme Shahi", "Shankaracharya Temple", "Lal Chowk Market"],
      hotel: "Hotel at Srinagar",
      meals: "Breakfast & Dinner",
    },
    {
      day: 3,
      title: "Srinagar To Sonamarg Day Trip",
      description: "In the morning, embark on a day trip to Sonmarg. From Thajiwas Pony Stand, enjoy a horse ride to the Thajiwas Glacier viewpoint, which offers breathtaking views of lush meadows, flowing streams, and the towering Himalayas. If time allows, visit the beautiful Krishnasar Lake, known for its crystal-clear waters that mirror the mountains, or take an exhilarating rafting adventure on the Sindh River (additional cost applies). Afterwards, return to the hotel from Pony Stand.",
      highlights: ["Sonamarg Day Trip", "Thajiwas Glacier Viewpoint", "Horse Ride (Optional)", "Krishnasar Lake (Optional)", "Sindh River Rafting (Optional)"],
      hotel: "Hotel at Srinagar",
      meals: "Breakfast & Dinner",
    },
    {
      day: 4,
      title: "Srinagar to Pahalgam | Pahalgam Sightseeing Tour",
      description: "Today, check out and proceed to your hotel in Pahalgam. After checking in, head to the Pahalgam Union cab stand, where you can hire a cab (fare not included) to explore the region's scenic attractions. Visit the picturesque Aru Valley, Betaab Valley, and Chandanwari, renowned for their stunning landscapes and tranquil atmosphere. After exploring, return to the cab stand on your own and be transferred back to your hotel for an overnight stay.",
      highlights: ["Transfer to Pahalgam", "Pahalgam Union Cab Stand", "Aru Valley", "Betaab Valley", "Chandanwari"],
      hotel: "Hotel at Pahalgam",
      meals: "Breakfast & Dinner",
    },
    {
      day: 5,
      title: "Day at Leisure in Pahalgam",
      description: "Spend the day at your leisure, either unwinding at your hotel or exploring the scenic town of Pahalgam at your own pace. You can visit peaceful spots like Poshwan Park or the picturesque Baisaran Valley, known as 'Mini Switzerland' for its lush meadows. For more adventure, consider a trip to Tulian Lake, a fun day at Lidder Amusement Park, or rafting on the Lidder River. In the evening, head back to your hotel for an overnight stay.",
      highlights: ["Leisure Day in Pahalgam", "Poshwan Park", "Baisaran Valley (Mini Switzerland)", "Tulian Lake (Optional)", "Lidder Amusement Park (Optional)", "Lidder River Rafting (Optional)"],
      hotel: "Hotel at Pahalgam",
      meals: "Breakfast & Dinner",
    },
    {
      day: 6,
      title: "Transfer to Gulmarg | Day at Leisure",
      description: "After checking out, you'll be transferred to your hotel in Gulmarg. Once you check in, enjoy the rest of the day at your leisure. You can explore nearby attractions like the Gulmarg Children’s Park, ideal for a stroll, the historic Maharani Temple, or the serene Shrine of Baba Reshi. For nature lovers, a day trip to the Gulmarg Biosphere Reserve offers a chance to explore its diverse flora and fauna. Later, return to your hotel for a restful overnight stay.",
      highlights: ["Transfer to Gulmarg", "Gulmarg Children’s Park", "Maharani Temple", "Shrine of Baba Reshi", "Gulmarg Biosphere Reserve (Optional)"],
      hotel: "Hotel at Gulmarg",
      meals: "Breakfast & Dinner",
    },
    {
      day: 7,
      title: "Gulmarg Sightseeing Tour",
      description: "In the morning, prepare for your transfer to the Gulmarg Union Cab Stand, where you can hire a cab to explore the area. Visit popular attractions such as Strawberry Valley and Drung Waterfall. For lunch, indulge in a tasty meal at Igloo Cafe (at your own expense). Don’t miss the chance to experience the famous Gulmarg Gondola ride (at your own expense). Afterwards, return to the Union Cab Stand and enjoy a transfer back to your hotel for an overnight stay.",
      highlights: ["Gulmarg Sightseeing", "Strawberry Valley", "Drung Waterfall", "Igloo Cafe (Optional)", "Gulmarg Gondola Ride (Optional)"],
      hotel: "Hotel at Gulmarg",
      meals: "Breakfast & Dinner",
    },
    {
      day: 8,
      title: "Departure from Srinagar",
      description: "Today, check out and get transferred to Srinagar Airport, bidding farewell to the scenic town of Gulmarg as your memorable trip ends.",
      highlights: ["Breakfast", "Airport Transfer"],
      hotel: "Nil",
      meals: "Breakfast",
    },
  ];

  const localSightseeingActivities = [
    { location: "Srinagar", places: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Shankaracharya Temple, Tulip Garden, Dal Lake, Etc.", activities: "Shikara Ride" },
    { location: "Gulmarg", places: "Gulmarg Gondola ride, Golf Course, Drung waterfall.", activities: "Gondola Ride, Ski and Snowboard" },
    { location: "Pahalgam", places: "Aru Valley, Betaab Valley, Chandanwari Valley, Poshwan Park, Baisaran Valley, Lidder Amusement Park, Etc.", activities: "Leisure Activities, Rafting (Optional)" },
    { location: "Sonamarg", places: "Krishnasar Lake, Thajiwas Glacier viewpoint.", activities: "Pony Ride (Optional), Rafting (Optional)" },
  ];

  const inclusions = [
    "Meals as mentioned in the Itinerary.",
    "One-hour Shikara ride complimentary on Dal Lake.",
    "7-night accommodation.",
    "Heater Charges.",
    "Individual cab for the tour.",
    "Daily Breakfast and Dinners.",
    "All sightseeing mentioned in the itinerary, with pickup and drop-off at Srinagar.",
    "Taxes included: toll tax, parking fee, green tax, driving and fuel expenses.",
  ];

  const exclusions = [
    "Fees for any adventure activity.",
    "GST 5%.",
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

  const cancellationPolicy = [
    "We understand that plans can change, but the booking amount is non-refundable due to the costs we incur in preparing for your tour or activity. If you wish to reschedule for a different date, we'll adjust it to the same package, providing you with the necessary flexibility.",
    "If you have paid the total amount but cancelled the package. You will be provided with a refund, as mentioned below:",
    "30 Days or More: 90% of the total package cost is refundable.",
    "21 to 29 Days: 75% of the total package cost is refundable.",
    "11 to 20 Days: 50% of the total package cost is refundable.",
    "0 to 14 Days: No Refunds.",
    "Tours or activities may be cancelled due to unforeseen events beyond our control, such as weather conditions such as heavy rain or storms or government restrictions like sudden closures of specific areas. In such a scenario, we will provide an alternate tour or activity. However, no refunds will be provided.",
  ];

  const hotelDetails = [
    { destination: "Srinagar", nights: "3 Nights", hotels: "City grace/star of Kashmir" },
    { destination: "Pahalgam", nights: "2 Nights", hotels: "Pahalgam peaks" },
    { destination: "Gulmarg", nights: "2 Nights", hotels: "Not specified (Hotel at Gulmarg)" }, // Updated based on itinerary
    { destination: "Houseboat", nights: "1 Night", hotels: "Deluxe Houseboat" },
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
    "https://www.instagram.com/reel/DENY_c2y7sl/", // Example Reel 2 (replace with real permalink)
    // Add other reel permalinks here if needed
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
    <div className="min-h-screen bg-pink-50"> {/* Changed background to pink-50 */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-pink-800/60 to-pink-500/30" /> {/* Pinkish overlay */}

        {/* Slider Navigation Arrows */}
        <button
          onClick={goToPrevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-pink-500 p-2 rounded-full hover:bg-white/50 transition-colors z-10" // Pinkish tone for buttons
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-pink-500 p-2 rounded-full hover:bg-white/50 transition-colors z-10" // Pinkish tone for buttons
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Badge className="bg-pink-600 text-white mb-4">7 Nights / 8 Days</Badge> {/* Pinkish badge */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">💖 Kashmir Special Honeymoon Package 💖</h1> {/* Hearts in title */}
            <p className="text-xl mb-6 max-w-2xl">
              Discover the enchanting beauty of Srinagar, Sonamarg, Pahalgam, and Gulmarg on this picturesque journey, crafted for an unforgettable honeymoon.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-200" /> {/* Pinkish icon */}
                <span>Srinagar • Sonamarg • Pahalgam • Gulmarg</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-pink-200" /> {/* Pinkish icon */}
                <span>7 Nights / 8 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-200" /> {/* Heart icon */}
                <span>Perfect for Couples</span>
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
                <h2 className="text-2xl font-bold mb-4 text-pink-700">Trip Overview</h2> {/* Pinkish heading */}
                <p className="text-gray-700 leading-relaxed">
                  Embark on a mesmerizing 7-night, 8-day journey through the crown jewel of India, Kashmir, specially designed for honeymooners. This romantic tour takes you through the serene waters of Dal Lake, the majestic peaks and glaciers of Sonamarg, the idyllic valleys of Pahalgam, and the snow-capped meadows of Gulmarg. Experience cultural richness, breathtaking landscapes, and unforgettable adventures, all tailored for a perfect start to your new life together. 💖
                </p>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-pink-700"> {/* Pinkish heading */}
                  <Camera className="w-6 h-6 text-pink-500" /> {/* Pinkish icon */}
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
                <h2 className="text-2xl font-bold mb-6 text-pink-700">Detailed Itinerary</h2> {/* Pinkish heading */}
                <div className="space-y-6">
                  {itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-pink-500 pl-6"> {/* Pinkish border */}
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="bg-pink-100 text-pink-700 border-pink-300"> {/* Pinkish badge */}
                          Day {day.day}
                        </Badge>
                        <h3 className="text-lg font-semibold text-pink-800">{day.title}</h3> {/* Pinkish heading */}
                      </div>
                      <p className="text-gray-700 mb-3">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-pink-50 text-pink-600"> {/* Pinkish badge */}
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-3 text-sm text-gray-700">
                        {day.hotel !== "Nil" && <p><span className="font-semibold">Overnight:</span> {day.hotel}</p>}
                        {day.meals && <p><span className="font-semibold">Meals:</span> {day.meals}</p>}
                      </div>
                      <Heart className="w-5 h-5 text-pink-400 mt-2 animate-pulse" /> {/* Heart animation */}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Local Sightseeing & Activities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-pink-700">Local Sightseeing & Activities</h2> {/* Pinkish heading */}
                <div className="space-y-4">
                  {localSightseeingActivities.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <MapPin className="mt-1 w-5 h-5 text-pink-500 flex-shrink-0" /> {/* Pinkish icon */}
                      <div>
                        <h3 className="text-lg font-semibold">{item.location}</h3>
                        <p className="text-gray-700"><span className="font-medium">Places:</span> {item.places}</p>
                        <p className="text-gray-700"><span className="font-medium">Activities:</span> {item.activities}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <span className="font-semibold text-pink-700">Note:</span> The cost of adventure activities is separate from the package. You can book them on the spot. Some places are not accessible by road. You have to trek to reach such places, adding to the adventure!
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold text-pink-700">For Gulmarg Gondola bookings:</span> Call 9103058616 (9:00 AM to 5:00 PM evening) or visit the official website: <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.jammukashmircablecar.com</a>.
                </p>
              </CardContent>
            </Card>

            {/* Hotel Details */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-pink-700">Hotel Details</h2> {/* Pinkish heading */}
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-700 uppercase tracking-wider"> {/* Pinkish table header */}
                          Destination
                        </th>
                        <th className="px-4 py-2 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-700 uppercase tracking-wider"> {/* Pinkish table header */}
                          No Of Nights
                        </th>
                        <th className="px-4 py-2 border-b-2 border-pink-200 bg-pink-100 text-left text-xs font-semibold text-pink-700 uppercase tracking-wider"> {/* Pinkish table header */}
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
                <h2 className="text-2xl font-bold mb-6 text-pink-700">What's Included 💖</h2> {/* Pinkish heading + heart */}
                <div className="space-y-2">
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="mt-1 w-5 h-5 text-pink-500 flex-shrink-0" /> {/* Pinkish icon */}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exclusions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-pink-700">What's Not Included 💔</h2> {/* Pinkish heading + heart */}
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
                <h2 className="text-2xl font-bold mb-6 text-pink-700">Important Things to Remember</h2> {/* Pinkish heading */}
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
                <h2 className="text-2xl font-bold mb-6 text-pink-700">Cancellation Policy</h2> {/* Pinkish heading */}
                <div className="space-y-3 text-gray-700">
                  {cancellationPolicy.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div> {/* End of lg:col-span-2 main content */}

          {/* Sidebar - Booking/Price Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">💖 Honeymoon Package Pricing 💖</h3> {/* Pinkish heading + heart */}
                  <div className="flex justify-center items-baseline gap-4 mb-4">
                    <div>
                      <span className="text-3xl font-bold text-pink-600">Price on Request</span> {/* Updated to "Price on Request" */}
                      <p className="text-sm text-gray-500">Tailored for your special journey</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Contact us for a personalized quote!</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">7 Nights / 8 Days</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Night Stays:</span>
                    <span className="font-medium">3N Srinagar • 2N Pahalgam • 2N Gulmarg</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Pick & Drop:</span>
                    <span className="font-medium">Srinagar to Srinagar</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-medium">Whole Year</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Best For:</span>
                    <span className="font-medium">Romantic Getaway, Couples</span>
                  </div>
                </div>

                <BookingButton tourName="Kashmir Special Honeymoon Package" tourPrice="Price on Request" />

                {/* Kashmir Reels Section */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-pink-500" /> {/* Pinkish icon */}
                    Kashmir Reels
                  </h3>
                  {reelPermalinks.map((permalink, index) => ( // Corrected variable name here
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
