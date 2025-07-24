import Image from "next/image";
import { Calendar, Users, Mountain, MapPin, CheckCircle, XCircle, Camera, ChevronLeft, ChevronRight } from "lucide-react";
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
    // ... (your existing itinerary data)
    {
      day: 1,
      title: "Arrival in Srinagar and Local Exploration",
      description: "Upon arrival at Srinagar Airport, our representative will warmly welcome you with a placard with your name on it. After a smooth greeting, you can start your local sightseeing in Srinagar immediately or proceed to check in at your hotel. Srinagar has several enchanting gardens, such as Nishat, Shalimar, Botanical Garden, Chasm-e-Shahe, and the iconic Pari Mahal. Don't miss a peaceful Shikara ride on Dal Lake during sunset, which is an unforgettable experience. While on the lake, enjoy a cup of traditional Kashmiri Kahwa and explore the lakeside shops.",
      highlights: ["Srinagar Airport Welcome", "Mughal Gardens", "Pari Mahal", "Dal Lake Shikara Ride", "Kashmiri Kahwa"],
      hotel: "Hotel at Srinagar",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Srinagar to Gulmarg",
      description: "On the second day of your Kashmir journey, we’ll embark on a scenic 2-hour drive to Gulmarg, 52 kilometres from Srinagar. Known for its stunning beauty and adventure-filled activities, Gulmarg offers plenty to explore. After checking into your hotel, we’ll begin with a tour of the local sights. If your tour package includes a Gondola ride, we’ll start with that. For those visiting in winter, various snow-based activities are available, including skiing, snowboarding, and snow tubing. You can also experience a thrilling Helicopter ride or an ATV adventure. After a day full of fun, our driver will take you back to the hotel for a peaceful overnight stay.",
      highlights: ["Scenic Drive to Gulmarg", "Local Sights Tour", "Gondola Ride (Optional)", "Snow Activities (Winter)", "Helicopter/ATV Adventure"],
      hotel: "Hotel at Gulmarg",
      meals: "Breakfast & Dinner",
    },
    {
      day: 3,
      title: "Gulmarg to Pahalgam",
      description: "We will begin a picturesque drive from Gulmarg to Pahalgam, a 3-hour journey spanning 130 kilometres. Pahalgam, a charming hill station, offers stunning views of the Lidder River and lush meadows. Suppose you’re in the mood for adventure. In that case, you can enjoy hiking or a pony ride through beautiful spots like Mini-Switzerland, Baisaran, Pahalgam Valley, or the nearby waterfall. For those seeking thrills, river rafting is also an option. A romantic walk with your partner at sunset is a perfect way to end the day, and you can return to your hotel for a restful night.",
      highlights: ["Picturesque Drive to Pahalgam", "Lidder River Views", "Hiking/Pony Rides", "Mini-Switzerland", "River Rafting (Optional)", "Romantic Sunset Walk"],
      hotel: "Hotel at Pahalgam",
      meals: "Breakfast & Dinner",
    },
    {
      day: 4,
      title: "Pahalgam to Srinagar",
      description: "On the fourth day of your Kashmir adventure, you’ll have the opportunity to explore some of Pahalgam’s most scenic spots. Begin with a visit to the famous Betaab Valley, named after the Bollywood film Betaab.” Known for its lush meadows and towering pine forests, it’s a popular spot for tourists who often recreate iconic movie scenes for their social media. Next, head to Aru Valley, where you can enjoy a peaceful picnic by the serene Lidder River. Feel free to bring along some food to savour on the riverbank. After a day of exploration, our driver will take you back to Srinagar for a relaxing evening and a well-deserved rest.",
      highlights: ["Betaab Valley", "Aru Valley", "Lidder River Picnic", "Scenic Exploration", "Drive back to Srinagar"],
      hotel: "Hotel in Srinagar",
      meals: "Breakfast & Dinner",
    },
    {
      day: 5,
      title: "Sonamarg Day Trip and Hotel/Houseboat Stay",
      description: "On the fifth day of your Kashmir tour, we’ll embark on a scenic road trip from Srinagar to Sonamarg, a journey of around 2 hours, covering a distance of 80 kilometres. Sonamarg, known for its majestic Himalayan peaks, glaciers, and expansive meadows, offers breathtaking views. Key attractions include Thajiwas Glacier, Baltal, Zero Point, and Zojila Pass, all of which promise panoramic vistas and awe-inspiring landscapes. For an adventurous experience, you can also try water rafting in the Nilagrad River. After exploring Sonamarg, we’ll head back to Srinagar, where you’ll be dropped off for a Shikara ride to your houseboat. Spend a peaceful night on the houseboat, soaking in the serene beauty of Dal Lake.",
      highlights: ["Scenic Drive to Sonamarg", "Thajiwas Glacier", "Zero Point", "Zojila Pass", "Nilagrad River Rafting", "Shikara to Houseboat"],
      hotel: "Hotel/ Houseboat at Srinagar",
      meals: "Breakfast & Dinner",
    },
    {
      day: 6,
      title: "Srinagar Drop",
      description: "Enjoy a delicious breakfast at your hotel/houseboat in Srinagar on the final day of your Kashmir tour. Depending on your flight schedule, take some time to revisit Dal Lake or the Mughal Gardens for one last dose of scenic beauty. If you have extra time before your departure, Take some time to explore the local markets and pick up souvenirs like Pashmina shawls, Kashmiri carpets, or handcrafted traditional items made by local artisans. We suggest arriving at the airport at least 2-3 hours before your flight, and our driver will ensure you're dropped off on time for your departure. Wishing you a safe and pleasant trip ahead!",
      highlights: ["Breakfast", "Mughal Gardens (Optional)", "Local Market Exploration", "Souvenir Shopping", "Airport Drop-off"],
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
    "3-night stay in Srinagar with breakfast and dinner is included.",
    "1-night stay in Gulmarg with breakfast and dinner is included.",
    "1-night stay in Pahalgam with breakfast and dinner included.",
    "Heater Charges.",
    "Union Cab Charges.",
    "Private trip to Thajiwas Glacier.",
    "Private sightseeing tour of Gulmarg.",
    "Private sightseeing tour of Srinagar, including Badam Wari.",
    "Private sightseeing tour of Srinagar, including the Botanical Garden and Pari Mahal.",
    "Private sightseeing tour of Pahalgam.",
    "Private Shikara ride on Dal Lake in Srinagar.",
  ];

  const exclusions = [
    "Fees for any adventure activity.",
    "Guide Charges.",
    "Lunch, Camera Fee, or Monument Fee.",
    "Any kind of personal expenses or extra meals ordered.",
    "Services of the vehicle on leisure days and after finishing the sightseeing tour as per the Itinerary.",
    "Any kind of drink (alcoholic, mineral water, or aerated).",
    "Any increase in taxes or fuel increases surface transportation and land arrangements, which may become effective before departure.",
    "Cost is incidental to any change in the itinerary/stay due to flight cancellation due to bad weather, ill health, roadblocks, and/or any factors beyond our control.",
    "This package includes no advice, including rafting or other activities.",
  ];

  const importantNotes = [
    "In exceptional cases, we may shift you to a similar hotel if the mentioned hotel is unavailable.",
    "Check-in/check-out time at all the properties will be 10:00 am to 12:00 pm. Some properties may not allow early check-in.",
    "Buffet Service will be available from 8:00 am to 9:30 am and 8:30 pm to 10:00 pm.",
    "You will get hot water in showers for a few hours in the morning. Kindly ask the receptionist about the times in advance.",
    "Triple Sharing does not necessarily mean Three Separate Beds. It can have one double bed and one rollaway bed.",
    "The vehicle will be provided per the itinerary, and any additional sightseeing not mentioned in the itinerary will be charged extra.",
    "No refund or compensation for any unused services/transportation in any circumstance.",
    "Visits to museums/parks/monasteries/forts in the tour are subject to their opening on the day of the visit as per the rules of the competent authority.",
    "We will not bear any cost for flights cancelled or delayed due to any reason.",
    "There will be no compensation if you are delayed due to roadblocks, natural calamities, or personal reasons. The alternate accommodation cost due to the same should be borne by you.",
    "No changes in the date of the tour once booked. However, you can postpone the tour if it gets cancelled due to natural calamities, government restrictions, pandemics, riots, or war.",
    "Rates are subject to change until you have paid the full amount.",
    "Room allotment will be as per the availability at check-in time; floor or view preferences are not guaranteed.",
    "All expenses that are not included in the cost of the package shall be paid directly at the time of checkout.",
    "Smoking or drinking is not allowed inside the vehicle.",
    "You are advised to take out insurance before starting the tour.",
  ];

  const cancellationPolicy = [
    "In case of unforeseen events or government restrictions, the tour may be cancelled. In such cases, you can reschedule your dates. However, we will not provide a refund in any conditions.",
    "30 days or more: 90% of the total package cost is refundable",
    "21-30 days: 75% of the total package cost is refundable",
    "11-20 days: 50% of the total package cost is refundable",
    "Less than 10 days: No refund",
    "The booking amount (30% of the package amount) is non-refundable. However, you can adjust this amount to any other tour, trek, or activity Uncia offers on the post-booking date.",
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
    "https://www.instagram.com/reel/DFK68_hSPqc/", // This is the new reel you provided
    // Add other reel permalinks here if needewww.instagram.com/reel//d
    "https://www.instagram.com/reel/DENY_c2y7sl/", // Example Reel 2 (replace with real permalink)
    "https://www.instagram.com/reel/DENY_c2y7sl/", // Example Reel 3 (replace with real permalink)
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kashmir Valley Tour</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Discover the enchanting beauty of Srinagar, Gulmarg, and Pahalgam on this picturesque journey through Kashmir.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Srinagar • Gulmarg • Pahalgam</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>6 Days / 5 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Flexible Group Sizes</span> {/* Placeholder */}
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
                  Embark on a mesmerizing 6-day, 5-night journey through the crown jewel of India, Kashmir. This tour takes you through the serene gardens of Srinagar, the snow-capped peaks and meadows of Gulmarg, and the idyllic Lidder Valley in Pahalgam. Experience cultural richness, breathtaking landscapes, and unforgettable adventures designed for a perfect getaway.
                </p>
              </CardContent>
            </Card>

            {/* Photo Gallery - New Section */}
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
                        {day.hotel !== "Nil" && <p><span className="font-semibold">Hotel:</span> {day.hotel}</p>}
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
                  <span className="font-semibold">Note:</span> The cost of adventure activities is not included in the package. You can book them on the spot. Some places are not accessible by road, requiring a trek.
                </p>
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

          </div> {/* End of lg:col-span-2 main content */}

          {/* Sidebar - Booking/Price Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  {/* Price not provided in the new text, using placeholder for demonstration */}
                  <div className="text-3xl font-bold text-orange-600 mb-2">Price Not Specified</div>
                  <div className="text-sm text-gray-500">per person (please check package details)</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">6 Days / 5 Nights</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Night Stays:</span>
                    <span className="font-medium">2N Srinagar • 1N Gulmarg • 1N Pahalgam • 1N Srinagar</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Pick & Drop:</span>
                    <span className="font-medium">Srinagar to Srinagar</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">Easy to Moderate</span> {/* Assumed difficulty */}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">Throughout the year</span> {/* Assumed best time */}
                  </div>
                </div>

                <BookingButton tourName="Kashmir Trip" tourPrice="Price Not Specified" />

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

            {/* Cancellation Policy - Moved here */}
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

            {/* Important Things to Remember - Moved here */}
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

          </div> {/* End of sidebar */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
