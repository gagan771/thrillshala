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
      description: "Welcome to Srinagar! Upon arrival at the airport, you will be transferred to your hotel for check-in. After a brief rest, embark on a sightseeing tour starting with the Mughal Gardens, including the beautiful Shalimar Bagh, known for its elegant Persian-style terraces. Next, visit Nishat Bagh, which offers stunning views of Dal Lake. Explore Asia's largest Tulip Garden, which boasts a vibrant display of tulips during spring. Finish the tour with a visit to the historical terraced garden of Pari Mahal before being driven back to your hotel.",
      highlights: ["Srinagar Airport Welcome", "Shalimar Bagh", "Nishat Bagh", "Tulip Garden", "Pari Mahal"],
      hotel: "Hotel at Srinagar",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Excursion to Sonamarg",
      description: "In the morning, you will be driven to the Thajiwas Pony Stand, where you can hire a pony (at your own expense) to reach Thajiwas Glacier. Upon reaching your destination, take in the awe-inspiring sights of the snow-clad glacier and its picturesque alpine scenery. You can also visit Krishnasar Lake, famous for its crystal-clear waters that beautifully reflect the towering mountains and the charming Baltal Valley. After a memorable day, return to the pony stand and return to your hotel for an overnight stay.",
      highlights: ["Thajiwas Pony Stand", "Thajiwas Glacier", "Krishnasar Lake", "Baltal Valley"],
      hotel: "Hotel at Srinagar",
      meals: "Breakfast and Dinner",
    },
    {
      day: 3,
      title: "Excursion to Gulmarg",
      description: "You will be driven to the Gulmarg Union Cab Stand in the morning. Upon reaching, you can take a walk or catch a cab to the Gondola cable car station. Enjoy a smooth gondola ride (tickets not included), offering stunning views of the lush meadows, mountains, and valleys below. You will also have the chance to visit the Drung Waterfall and Strawberry Valley. After exploring, return to the Gulmarg Union Cab Stand, where you will be transferred back to your hotel for an overnight stay.",
      highlights: ["Gulmarg Union Cab Stand", "Gondola Ride (Optional)", "Drung Waterfall", "Strawberry Valley"],
      hotel: "Hotel at Srinagar",
      meals: "Breakfast and Dinner",
    },
    {
      day: 4,
      title: "Transfer to Pahalgam | Pahalgam Sightseeing Tour",
      description: "Check out from the hotel and proceed to Pahalgam. Upon arrival, check into your hotel. Afterwards, proceed to the Union Cab Stand, where you can hire a cab (at an additional cost) to explore the beautiful valleys of Pahalgam. Visit the picturesque Aru Valley, famous for its stunning landscapes, and the scenic Betaab Valley, known for its Bollywood connections. Before returning to the cab stand, visit Chandanwari, offering breathtaking views of the Himalayan mountains. Later, head back to your hotel for an overnight stay.",
      highlights: ["Transfer to Pahalgam", "Aru Valley", "Betaab Valley", "Chandanwari"],
      hotel: "Hotel at Pahalgam",
      meals: "Breakfast and Dinner",
    },
    {
      day: 5,
      title: "Transfer to Srinagar | Srinagar local | Shikara Ride | Houseboat Stay",
      description: "After check-out, drive to Srinagar and start your sightseeing tour. The Shankaracharya Temple, perched on a hill, offers stunning panoramic city views. Next, explore the vibrant Lal Chowk market, where you can explore traditional handicrafts and immerse yourself in the local culture. Continue your tour with a visit to the picturesque Badam Wari Park. Enjoy a scenic boat ride on Dal Lake, taking in the beauty of the iconic houseboats and surroundings. Finally, check in to your hotel/houseboat for a memorable overnight stay.",
      highlights: ["Transfer to Srinagar", "Shankaracharya Temple", "Lal Chowk Market", "Badam Wari Park", "Dal Lake Shikara Ride"],
      hotel: "Hotel / Houseboat at Dal Lake",
      meals: "Breakfast and Dinner",
    },
    {
      day: 6,
      title: "Srinagar Drop",
      description: "After breakfast, check out of your houseboat and get ready to bid goodbye to Kashmir. You will be transferred to Srinagar airport, marking the conclusion of your memorable trip. We wish you a safe journey ahead!",
      highlights: ["Breakfast", "Airport Drop-off"],
      hotel: "Nil",
      meals: "Breakfast",
    },
  ];

  const localSightseeingActivities = [
    { location: "Srinagar", places: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Tulip Garden, Dal Lake", activities: "Shikara Ride" },
    { location: "Gulmarg", places: "Gulmarg Gondola ride, Golf Course, Drung waterfall, Children's park", activities: "Gondola Ride, Ski and Snowboard" },
    { location: "Sonamarg", places: "Thajiwas Glacier, Zero Point, Pony Ride, Zojila Pass (Gateway of Ladakh)", activities: "Pony Ride" },
    { location: "Pahalgam", places: "Baisaran, Betaab Valley, Aru Valley, Chandanwari Valley", activities: "Paragliding (Note: Cost not included)" },
  ];

  const inclusions = [
    "Meals as mentioned in the Itinerary.",
    "05-Nights accommodation on dual and triple sharing basis.",
    "Local Transportation via Cab/Tempo.",
    "Daily Breakfast and Dinner.",
    "Heater Charges.",
    "Union Charges In ABC Valley.",
    "1hr Shikara Ride Complimentary on Dal Lake.",
    "1 Group Reel.",
    "All sightseeing mentions the itinerary pickup and drops from Delhi.", // Note: This contradicts "Pick Up and Drop: Srinagar" in the Short Itinerary. Clarification needed if this is a typo.
    "Taxes included tolls, parking, green tax, driving, and fuel expenses.",
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
    "The cost is incidental to any change in the itinerary/stay due to flight cancellation due to bad weather, roadblocks, or other factors beyond our control.",
    "This package does not include safaris, rafting, and other activities.",
  ];

  const importantNotes = [
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
    "The check-in time for all properties is 1200 hrs (Noon). However, some properties may not allow early check-in.",
    "Buffet Service will be available from 8:00 am to 9:30 am and 8:30 pm to 10:00 pm.",
    "You will have hot water in the showers in the morning for a few hours. Please ask the receptionist about the times in advance.",
    "Houseboats in Kashmir operate differently than those in Kerala. All houseboats on Dal Lake are stationary and offer amazing views of the lake and its surroundings. Accommodation in the quaint houseboats of Kashmir is purely for the experience. Unlike hotels, houseboats are limited by certain limitations, such as 24x7 electricity and water supply, a television in each room, etc.",
    "The timings given in the itinerary and program may be changed without notice.",
    "Places mentioned in the itinerary may need to be noticed.",
    "Guests shall be liable to pay for any damages, except normal wear and tear, to an asset.",
    "Rates will be different for foreign tourists. Kindly contact us for more information.",
    "We will not pay, reimburse, cover losses, or take any responsibility for any activity due to circumstances beyond our control. When we say circumstances beyond our control, we mean any event we cannot avoid even after taking all the necessary precautions. Such events include, but are not limited to, airport closures, war, natural disasters, nuclear disasters, pandemics, acts of terrorism, illness, death, injury, burglary, and bad weather.",
  ];

  const cancellationPolicy = [
    "We understand that plans can change, but the booking amount is non-refundable due to the costs we incur in preparing for your tour or activity. If you wish to reschedule for a different date, we'll adjust it to the same package, providing you with the necessary flexibility.",
    "If you have paid the total amount but cancelled the package. You will be provided with a refund, as mentioned below:",
    "30 Days or More: 50% of the total amount is refundable.",
    "15 to 29 Days: 25% of the total amount is refundable.",
    "0 to 14 Days: No Refunds.",
    "Tours or activities may be cancelled due to unforeseen events beyond our control, such as weather conditions such as heavy rain or storms or government restrictions like sudden closures of specific areas. In such a scenario, we will provide an alternate tour or activity. However, no refunds will be provided.",
  ];

  const groupDates = {
    February: ["12", "20", "27"],
    March: ["4", "10", "18", "25"],
    April: ["4", "9", "18", "25"],
  };

  const hotelDetails = [
    { destination: "Srinagar", nights: "3 Nights", hotels: "City grace/star of Kashmir" },
    { destination: "Pahalgam", nights: "1 Night", hotels: "Pahalgam peaks" },
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
            <Badge className="bg-orange-500 text-white mb-4">6 Days / 5 Nights</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kashmir Group Tour Package</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Discover the enchanting beauty of Srinagar, Sonamarg, Gulmarg, and Pahalgam on this picturesque journey through Kashmir.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Srinagar • Sonamarg • Gulmarg • Pahalgam</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>6 Days / 5 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Group Dates Available</span>
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
                  Embark on a mesmerizing 6-day, 5-night journey through the crown jewel of India, Kashmir. This group tour takes you through the serene gardens of Srinagar, the majestic peaks and glaciers of Sonamarg, the snow-capped meadows of Gulmarg, and the idyllic Lidder Valley in Pahalgam. Experience cultural richness, breathtaking landscapes, and unforgettable adventures designed for a perfect getaway.
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
                        <p className="text-gray-600"><span className="font-medium">Activities:</span> {item.activities}</p>
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

          </div> {/* End of lg:col-span-2 main content */}

          {/* Sidebar - Booking/Price Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Pricing (Per Person)</h3>
                  <div className="flex justify-center items-baseline gap-4 mb-4">
                    <div>
                      <span className="text-2xl font-bold text-orange-600">₹18,499</span>
                      <p className="text-sm text-gray-500">Dual Sharing</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-orange-600">₹16,499</span>
                      <p className="text-sm text-gray-500">Triple Sharing</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Please check package details for full pricing.</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">6 Days / 5 Nights</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Night Stays:</span>
                    <span className="font-medium">3N Srinagar • 1N Pahalgam • 1N Srinagar/Houseboat</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Pick & Drop:</span>
                    <span className="font-medium">Srinagar to Srinagar</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">Easy to Moderate</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Throughout the year</span>
                  </div>
                </div>

                <BookingButton tourName="Kashmir Group Tour Package" tourPrice="Starting from ₹16,499" />

                {/* Group Dates */}
                <div className="mt-8 space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Upcoming Group Dates
                  </h3>
                  {Object.entries(groupDates).map(([month, dates]) => (
                    <div key={month}>
                      <p className="font-semibold text-gray-700">{month}:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {dates.map((date, idx) => (
                          <Badge key={idx} variant="outline" className="text-sm bg-blue-50 text-blue-700 border-blue-200">
                            {date}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

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
