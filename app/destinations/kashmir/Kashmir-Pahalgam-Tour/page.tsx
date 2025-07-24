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

export default function KashmirPahalgamTourPage() {
  // Hero Slider State
  const heroImages = [
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Pahalgam focus
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // General Kashmir landscape
    "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Gulmarg view
    "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Another scenic view
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
      title: "Arrive in Srinagar",
      description: "Upon arrival, check into your hotel at 11:00 am. In the afternoon, set out to explore the iconic Dal Lake. Consider taking an optional Shikara ride to admire the floating gardens and intricately designed houseboats. Afterwards, visit Nishat Bagh and Shalimar Bagh, two magnificent Mughal gardens offering breathtaking views of the mountains and the lake.",
      highlights: ["Hotel Check-in (Srinagar)", "Dal Lake (Optional Shikara Ride)", "Floating Gardens", "Houseboats", "Nishat Bagh", "Shalimar Bagh"],
      meals: "Dinner",
      hotel: "Hotel in Srinagar",
    },
    {
      day: 2,
      title: "Srinagar to Gulmarg Day Trip",
      description: "After breakfast, proceed to Gulmarg, about 50 km from Srinagar. Once there, you can enjoy various adventure activities, such as skiing, snowboarding, and trekking (depending on the season). The Gulmarg Gondola, one of the world's highest cable cars, offers a two-phase journey. The first phase ascends from Gulmarg to Kongdoori, showcasing lush forests and meadows. The second phase continues to Apharwat Peak, which provides breathtaking views of snow-clad mountains.",
      highlights: ["Day Trip to Gulmarg", "Skiing (Seasonal, Optional)", "Snowboarding (Seasonal, Optional)", "Trekking (Optional)", "Gulmarg Gondola (Phase 1 & 2)"],
      meals: "Breakfast and Dinner",
      hotel: "Hotel in Srinagar",
    },
    {
      day: 3,
      title: "Depart to Pahalgam",
      description: "Early in the morning, depart for Pahalgam, famously known as the 'Valley of Shepherds,' located at the meeting point of the Lidder River and Sheeshnag Lake. En route, visit the ancient Awantipora ruins, an 1100-year-old temple dedicated to Lord Vishnu. Continue your journey to Baisaran, a charming village nestled amidst pine and fir forests.",
      highlights: ["Transfer to Pahalgam", "Lidder River", "Sheeshnag Lake", "Awantipora Ruins", "Baisaran Village"],
      meals: "Breakfast and Dinner",
      hotel: "Hotel in Pahalgam",
    },
    {
      day: 4,
      title: "Pahalgam to Srinagar & Departure",
      description: "After breakfast, visit the renowned Shankaracharya Temple, perched atop a hill, offering sweeping views of Srinagar. Continue to the Hazratbal Mosque, a significant religious landmark in the region. Later, explore the Old City, wandering through its narrow lanes, vibrant bazaars, and historic architecture. In the evening, proceed to the airport for your flight back home.",
      highlights: ["Shankaracharya Temple", "Hazratbal Mosque", "Old City Exploration", "Vibrant Bazaars", "Airport Transfer"],
      meals: "Breakfast",
      hotel: "NA", // Not applicable for departure day
    },
  ];

  const localSightseeingActivities = [
    { location: "Srinagar", places: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Shankaracharya Temple, Tulip Garden, Dal Lake, Etc.", activities: "Shikara Ride" },
    { location: "Gulmarg", places: "Gulmarg Gondola ride, Golf Course, Drung waterfall, Children's park, etc.", activities: "Gondola ride, Ski, ATV Ride" },
    { location: "Pahalgam", places: "Baisaran, Chandanwari Valley, Betaab Valley, Aru Valley etc.", activities: "" }, // Activities can be added if specified
  ];

  const thingsToCarry = [
    "Good shoes.",
    "Union cab charges are in ABC Valley and for Gulmarg.",
    "The headscarf is for women who are visiting a religious place.",
    "Emergency medicines.",
    "Post-paid sim.",
    "Carry sufficient cash.",
    "Carry Identity Proof.",
    "Carry cold cream and lip guard in winter & sunscreen in summer.",
    "Warm clothes will be needed depending upon the time you visit.",
  ];

  const inclusions = [
    "Accommodation.",
    "Daily Breakfast & Dinner.",
    "Pick up and drop from Srinagar.",
    "All sightseeing.",
    "State tax, hotel tax, and Driver charge.",
    "Drivers allowance.",
    "Parking charges.",
  ];

  const exclusions = [
    "Air, Train, or Bus fare from/to your originating city of stay.",
    "Lunch",
    "Any additional sightseeing other than the fixed program.",
    "Any cost arising due to natural calamities",
    "Travel Insurance",
    "Local transportation",
    "The cost is incidental to any change in the itinerary/stay due to flight cancellation due to bad weather, ill health, roadblocks, and any factors beyond our control.",
    "Anything not explicitly mentioned under the head.",
  ];

  const cancellationPolicy = [
    "Unexpected events or government restrictions may cancel the tour. In such cases, you can reschedule your dates; however, no refund will be provided.",
    "30 days or more: 90% of the total package cost is refundable",
    "21-30 days: 75% of the total package cost is refundable",
    "11-20 days: 50% of the total package cost is refundable",
    "Less than 10 days: No refund",
    "The booking amount (30% of the package amount) is non-refundable. However, you can adjust this amount for the same trek/tour/activity shortly.",
  ];

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
  ];

  const hotelDetails = [
    { destination: "Srinagar", nights: "2 Nights", hotels: "Hotel in Srinagar" },
    { destination: "Pahalgam", nights: "1 Night", hotels: "Hotel in Pahalgam" },
  ];

  // Array for Photo Gallery images
  const galleryPhotos = [
    "https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?q=80&w=600",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600",
    "https://images.unsplash.com/photo-1548011241-115f22ea891c?q=80&w=600",
    "https://images.unsplash.com/photo-1610488057200-508dd665427d?q=80&w=600",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Srinagar_Dal_Lake_Kashmir_India.jpg/1280px-Srinagar_Dal_Lake_Kashmir_India.jpg",
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
            alt={`Kashmir Tour ${index + 1}`}
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
            <Badge className="bg-orange-500 text-white mb-4 rounded-full px-3 py-1">4 Days / 3 Nights</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Kashmir Pahalgam Tour</h1>
            <p className="text-xl mb-6 max-w-2xl text-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Explore the iconic Dal Lake, thrilling Gulmarg, and the serene 'Valley of Shepherds,' Pahalgam on this concise Kashmir tour.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-200" />
                <span>Srinagar • Gulmarg • Pahalgam</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-200" />
                <span>4 Days / 3 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-200" />
                <span>Individual & Group Options</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* About the Tour Package */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About the Srinagar Gulmarg Pahalgam Tour</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Srinagar Gulmarg Pahalgam tour offers an unforgettable experience, blending Kashmir's natural beauty and cultural richness. Begin your journey in Srinagar, where you can explore the serene Dal Lake, iconic Mughal gardens, and vibrant markets. From there, head to Gulmarg to enjoy the scenic Gondola ride and panoramic mountain views. Continue to Pahalgam, the 'Valley of Shepherds,' known for its lush meadows, picturesque rivers, and tranquil surroundings.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Pahalgam</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pahalgam is a hill station located in the union territory of Jammu and Kashmir, India. It is situated at 2,130 meters (7,000 ft) above sea level and is known as the Valley of Shepherds. Pahalgam is known for its breathtaking views of the Himalayan Mountains and is a popular destination for trekking and other adventure activities. The town of Pahalgam was first known as `Bail Gham' meaning. The Village of Shepherds'. It is said that the great sage Vyasa visited the place and blessed it with his presence. The place is also known for its religious significance, as Lord Shiva is believed to have mediated as a bull for a long time. Pahalgam is surrounded by lush green hills, valleys and meadows, making it an ideal place for trekking and other adventure activities. The town is located on the banks of the Lidder River, a tributary of the Jhelum River.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Lidder Valley is also known for its beautiful lakes and glaciers. The main attraction of Pahalgam is the Amarnath cave, considered one of the holiest sites in Hinduism. Thousands of pilgrims visit the place yearly to pay their respects to Lord Shiva. The pilgrimage to the Amarnath cave is only possible during Shravan (July-August). Apart from the Amarnath cave, Pahalgam offers many other attractions, such as the Aru Valley, Betaab Valley, Chandanwari, and Baisaran meadows. Aru Valley is known for its picturesque landscape,e and Betaab Valley is popular for its religious significance. Chandanwari is the starting point for the Amarnath Yatra, while Baisaran meadows offer spectacular views of the Himalayan range. Pahalgam is also known for its rich cultural heritage. The town has several traditional Kashmiri and Pahari villages and ancient temples and shrines. The inhabitants of the city are mainly Muslims, but there are also a few Hindus and Sikhs living in the area. The city is also known for its various festivals and fairs, the most popular being the Baisakhi fair, which is held every year in April. The fair is celebrated with great enthusiasm and is attended by people from all over the country. Pahalgam is an excellent place for a peaceful and tranquil holiday. The town is filled with beautiful scenery, religious sites and ancient monuments, making it a great place to explore. Pahalgam is also a great place to experience the culture and traditions of the local people, and for those looking for adventure, it is a great place to go trekking and rafting.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Valley of Shepherds: Pahalgam</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Valley of Shepherds was a picturesque paradise nestled in the hills of the kingdom's northern region. It was a place of peace and tranquillity where the people of the area came to relax and enjoy the beauty of nature. The valley was a landscape of rolling hills and lush green meadows dotted with grazing sheep and cattle. The meadows were filled with wildflowers in the spring and the summer, and the sweet smell of mountain air filled the air. The sky was a deep blue, and the sun shone brightly upon the people. The people of the valley were hardworking, humble people. They were shepherds living in the valley for generations, and their livelihood depended on the sheep and other livestock they kept in the valley. They were also farmers, growing crops in the valley's rich soil to provide sustenance for themselves and their families. The people of the valley were friendly and welcoming. They welcomed travellers from near and far and were always willing to share a meal and a story. This was where families gathered around the fire and shared stories of days gone by, and laughter filled the air. The valley was also home to a variety of wildlife, and the people of the valley enjoyed watching the birds and other animals that inhabited the area. It was a place of beauty and peace, and the people of the valley felt blessed to live in such a paradise. The valley of shepherds was a place of solace, a place of refuge, and a place of joy. It was a place where the region's people could escape the world's troubles and find peace and contentment. It was a place of beauty and harmony, and it was a place where the people of the valley could discover the joy and happiness that life had to offer.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Lidder and Sheeshnag Lake</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Sheeshnag Lake is nestled in the picturesque Pir Panjal Range of the Himalayas in the Indian state of Jammu and Kashmir. It is one of the most beautiful and serene lakes in the region. It is known for its crystal clear waters and is surrounded by lush green hills and snow-capped mountains. The lake is well known for its unique shape, which is in the form of a half-moon. It is believed to be formed from a large glacier that melted and created a significant depression in the ground. It is also believed that in ancient times, the lake was a holy site for worshipping Lord Sheeshnag, the four-headed snake god in Hindu mythology. The lake is situated at an elevation of 11,500 feet and is surrounded by hills of the same height. It has a maximum length of 4 km and a maximum width of 2 km. The lake is surrounded by a thick forest home to various animal species, including leopards, bears, and wild boars. The lake is also a popular destination for trekkers, as the trail to the lake passes through the forests and the snow-capped mountains. The trek is of medium difficulty and is suitable for all levels of trekkers. It offers breathtaking views of the surrounding areas and the lake itself.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The lake is also a paradise for fishing enthusiasts. It is home to various fish, including brown trout and mahseer. Fishing is usually done by boats, which can be hired from the local village near the lake. The lake is also home to a small shrine dedicated to Lord Sheeshnag, which is said to have healing powers. Devotees from all over the region pilgrimage to the lake and offer their prayers at the shrine. The lake is also a popular spot for camping and picnics. Several campsites are located nearby, some providing basic amenities like bathrooms and kitchens. The lake is also a great spot to enjoy the beauty of the sunrise and sunset. The Lidder Valley is another popular destination just a few kilometres from the lake. The valley is surrounded by tall pine trees and is filled with lush green meadows and snow-capped mountains. It is a perfect spot to enjoy nature and the serenity of the valley. The area around the lake is also home to several villages, including Pahalgam, the closest town to the lake. The Sheeshnag Lake is an excellent spot for a peaceful and tranquil holiday away from the hustle and bustle of the city. It is a place that offers stunning views and a chance to experience the beauty of nature. The lake is truly a hidden gem and is a must-visit for anyone looking to explore the beauty of the Himalayas.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Baisaren</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Baisaren is a small village in the Kargil district of Jammu and Kashmir. It is situated in the Suru Valley, near the Line of Control, a de facto border between India and Pakistan. The village is home to around 500 people, mainly of the Shia Muslim faith. Baisaren lies in a semi-arid region and is surrounded by towering mountains. It is located at an altitude of 3,000 meters (9,800 ft) and is one of the highest villages in the Kargil district. The village has a temperate climate, with cold winters and mild summers. The villagers of Baisaren primarily depend on agriculture for their livelihood, and many also work as labourers in the nearby towns of Kargil and Drass. Most of them are involved in producing wheat, barley, peas, and potatoes. Other crops grown in the area include maise, millet, and mustard. Livestock rearing is also an essential source of livelihood, with sheep, goats, cows, and yaks being commonly found. The village is connected to the nearby towns and cities by a network of roads. The nearest railway station is at Kargil, located at a distance of 70km. The nearest airport is at Srinagar, situated at 250km. The people of Baisaren are very hospitable and warm. They are very religious and observe all the Islamic festivals, such as Ramadan, Eid-ul-Fitr, and Eid-ul-Adha. The traditional attire of the men is the phera,n and the women wear the salwar kameez. Baisaren is known for its unique culture and traditions. The villagers are fond of folk music featured in weddings and other festivities. The local cuisine is known for its non-vegetarian dishes such as rogan josh, yakhni, and tabak maaz. The village has several ancient monuments and structures, such as the Rangdum Monastery, the Suru Fort, and the Kargil War Memorial. These monuments are a reminder of the region’s rich cultural heritage and history. Baisaren is a great place to visit and explore. It offers a unique insight into the life and culture of the people of Jammu and Kashmir and is a great place to experience the beauty of the Himalayas.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Shankaracharya Temple</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Shankaracharya Temple is a Hindu temple in Jammu and Kashmir, India. It is perched atop Shankaracharya Hill and is known as the Takht-e-Sulaiman. The temple is said to have been built on the spot where Adi Shankaracharya experienced enlightenment. According to legend, Lord Shiva visited him while meditating on the hill, revealing the universe's secrets and the Vedas' knowledge. This inspired Shankaracharya to write his famous commentaries on the Upanishads, the Brahma Sutras, and the Bhagavad Gita.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The temple is built on the hill's summit, surrounded by a large lake. It comprises two parts: the inner sanctum, the 'Garbhagriha,' and the outer hall, the 'Mandapa.' The inner sanctum has a small shrine dedicated to Lord Shiva, and the outer hall has a large open courtyard with a raised platform where devotees can listen to discourses and religious lectures.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The temple is open on all four sides and surrounded by four walls. The walls are decorated with intricate carvings depicting various Hindu gods and goddesses. A small door in one of the walls provides access to the inner sanctum.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The temple has a rich collection of sculptures, artefacts, and inscriptions. The sculptures are mainly of Shiva, Parvati, and their son Ganesh. The inscriptions are mainly in Sanskrit and are believed to be from the 8th century CE.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Weather conditions</h3>
                <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Srinagar:</h4>
                <p className="text-gray-600 mb-4">The weather in Srinagar is usually pleasant and warm throughout the year, with temperatures ranging from 4°C to 28°C. Summers (March to September) are warm, with occasional thundershowers and temperatures ranging from 14°C to 28°C. Winters (October to February) are cold, with temperatures ranging from 4°C to 15°C.</p>

                <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Gulmarg:</h4>
                <p className="text-gray-600 mb-4">Gulmarg experiences a temperate climate, with distinct seasons throughout the year. Winters (November to February) are cold and snowy, ideal for skiing, with temperatures often dropping below freezing. As the meadows bloom, Spring (March to May) brings pleasant weather, with temperatures ranging from 5°C to 15°C. Summer (June to August) is mild and comfortable, with temperatures between 9°C and 24°C, perfect for outdoor activities. Autumn (September to October) sees cooler temperatures and beautiful fall foliage.</p>

                <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Pahalgam:</h4>
                <p className="text-gray-600 mb-4">The weather in Pahalgam is usually pleasant and cold throughout the year, with temperatures ranging from -2°C to 25°C. Summers (March to September) are warm, ranging from 10°C to 25°C. Winters (October to February) are cold, with temperatures ranging from -2°C to 10°C.</p>
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
                  <span className="font-semibold">Note:</span> The cost of adventure activities is not included in the package. You can book them on the spot.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold">Gondola Cable cars should be booked in advance.</span> To make a reservation, call +91 9103058616 (9:00 AM to 5:00 PM) or visit the official website: <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">www.jammukashmircablecar.com</a>.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Some places may not always be accessible by road. You may have to trek to reach them.
                </p>
              </CardContent>
            </Card>

            {/* Things to Carry */}
            <Card className="rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Things to Carry</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {thingsToCarry.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the best places to visit in Srinagar?</h3>
                <p className="text-gray-600 mb-4">The best places to visit in Srinagar are the iconic Dal Lake, the Mughal Gardens, the Jama Masjid, the Shankaracharya Temple, the Hazratbal Mosque, the Pari Mahal, the Hari Parbat Fort, the Chashme Shahi Garden, the Wular Lake, the Tulip Garden and much more.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the must-see attractions in Srinagar?</h3>
                <p className="text-gray-600 mb-4">Some of the must-see attractions in Srinagar include the Dal Lake, Mughal Gardens, Shankaracharya Hill, the old city of Srinagar, Hazratbal Shrine, Jama Masjid, Chashme Shahi, and Pari Mahal. Other attractions include the nearby Gulmarg ski resort, Aru Valley, and the Nishat and Shalimar Bagh gardens.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What are the popular local dishes in Srinagar?</h3>
                <p className="text-gray-600 mb-2">Some popular local dishes in Srinagar include:</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>**Rogan Josh:** Made from lamb or goat meat cooked in browned onions, garlic, ginger, and spices.</li>
                  <li>**Kashmiri Dum Aalu:** This traditional dish has potatoes, yoghurt, and spices.</li>
                  <li>**Yakhni:** This dish contains yoghurt, meat, and spices.</li>
                  <li>**Modur Pulav:** This sweet and savoury dish has saffron, crushed nuts, and fruits.</li>
                  <li>**Shufta:** This traditional sweet dish combines nuts, fruits, and sugary syrup.</li>
                  <li>**Tabakmaaz:** This dish is made with lamb ribs that have been fried until crisp.</li>
                  <li>**Kashmiri Kebab:** This dish has minced meat, onions, and spices.</li>
                  <li>**Korma:** This dish is made with yoghurt, cream, and various spices.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How far is Srinagar from Jammu?</h3>
                <p className="text-gray-600 mb-4">Srinagar is approximately 290 km (180 miles) from Jammu. It takes about 5-6 hours to drive from Jammu to Srinagar.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any popular historical sites in Srinagar that you can visit?</h3>
                <p className="text-gray-600 mb-4">Yes, there are several popular historical sites to visit in Srinagar, including the Mughal Gardens, the Hazratbal Shrine, the Shankaracharya Temple, the Jama Masjid, the Hari Parbat Fort, the Pari Mahal, and the Martand Temple.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Can you visit any nearby national parks or wildlife sanctuaries in Srinagar?</h3>
                <p className="text-gray-600 mb-4">Yes, there are several. These include the Dachigam National Park, the Gulmarg Wildlife Sanctuary, the Overa Aru Sanctuary, the Kishtwar National Park, and the Himkund Wildlife Sanctuary.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the best way to experience the local culture in Srinagar?</h3>
                <p className="text-gray-600 mb-4">The best way to experience Srinagar's local culture is to explore its markets, sample its traditional cuisine, and take shikara rides on Dal Lake.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any religious sites or places of worship in Srinagar?</h3>
                <p className="text-gray-600 mb-4">Yes, there are several religious sites and places of worship in Srinagar, such as Jama Masjid, Shankaracharya Temple, and Hazratbal Shrine.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the distance of Pahalgam from Srinagar?</h3>
                <p className="text-gray-600 mb-4">The distance from Pahalgam to Srinagar is approximately 97 kilometres (60 miles).</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any specific places to visit in Pahalgam?</h3>
                <p className="text-gray-600 mb-2">Yes, there are many places to visit in Pahalgam:</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>Betaab Valley.</li>
                  <li>Aru Valley.</li>
                  <li>Baisaran.</li>
                  <li>Chandanwari.</li>
                  <li>Mamaleshwar Temple.</li>
                  <li>Sheshnag Lake.</li>
                  <li>Lidder River.</li>
                  <li>Pahalgam Golf Course.</li>
                  <li>Amarnath Yatra.</li>
                  <li>Tulian Lake.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any restrictions on carrying alcohol to Pahalgam?</h3>
                <p className="text-gray-600 mb-4">Yes, carrying alcohol to Pahalgam is illegal and prohibited. It is also unlawful to consume alcohol in public places.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any special activities to experience at night in Pahalgam?</h3>
                <p className="text-gray-600 mb-4">Yes, several special activities can be enjoyed at night in Pahalgam. These include stargazing, bonfire parties, horse riding, and the traditional Kashmiri dance form, Rouf. Additionally, many night safaris and treks are available in the area.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How far is Gulmarg from Srinagar?</h3>
                <p className="text-gray-600 mb-4">Gulmarg is situated approximately **56 kilometres (35 miles)** from Srinagar.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How long does it take to reach Gulmarg from Srinagar?</h3>
                <p className="text-gray-600 mb-4">It takes approximately **1.5-2 hours** to reach Gulmarg from Srinagar.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">How much does a Gondola ride cost in Gulmarg?</h3>
                <p className="text-gray-600 mb-2">The pricing for the Gondola ride in Gulmarg depends on the phase you select:</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                  <li>**Phase I (Gulmarg to Kongdoori):** ₹840 per adult (plus a convenience fee)</li>
                  <li>**Phase II (Kongdoori to Apharwat):** ₹1010 per adult (plus a convenience fee)</li>
                  <li>**Chairlift (Kongdoori to Mary’s Shoulder):** ₹300 per adult (plus a convenience fee)</li>
                </ul>
                <p className="text-gray-600 mb-4">The combined cost for those opting for Phase I and II is ₹1800 per adult, excluding the convenience fee. For bookings, call **9103058616** (8:30 AM to 5:30 PM) or visit the official website: <a href="https://www.jammukashmircablecar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">www.jammukashmircablecar.com</a>.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Is there a cable car in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, there is a cable car in Gulmarg. The **Gulmarg Gondola** is the world's second-highest and longest cable car, taking visitors to the Apharwat Peak, 4,200 meters above sea level.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any special precautions to take while travelling to Gulmarg?</h3>
                <p className="text-gray-600 mb-4">When visiting Gulmarg, prevent altitude sickness by ascending gradually, staying hydrated, and avoiding overexertion. Dress in layers, use sunscreen and be mindful of the thinner air’s impact on physical activity.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What is the best way to get to Gulmarg from Srinagar?</h3>
                <p className="text-gray-600 mb-4">The best way to reach Gulmarg from Srinagar is by **taxi to Tangmarg** and another Union cab (only in winter), which takes about two hours.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">What kind of terrain can be expected in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Gulmarg is located in a mountainous region in the Himalayas. The terrain can be rugged, with steep mountains and deep valleys. The area is mainly covered with alpine meadows, pine forests, and snow-capped peaks. It is ideal for skiing, other winter sports, trekking, and hiking and is famous for its Gondola cable car.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any special precautions to take while skiing or snowboarding in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, there are several special precautions to take while skiing or snowboarding in Gulmarg. First, it is essential to be aware of the weather conditions and avalanche warnings, as the region is prone to avalanches. Second, appropriate clothing and protective gear, including helmets, goggles, and gloves, are necessary. Third, skiing or snowboarding with a buddy and being aware of your surroundings are essential. Lastly, carrying a map and compass and knowing the ski area boundaries are also necessary.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any special clothing requirements for skiing or snowboarding in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, wearing appropriate outerwear is essential for skiing or snowboarding in Gulmarg. This includes waterproof and windproof clothing, such as a sturdy ski jacket and pants, base layers, hats, gloves, and goggles. Additionally, helmets are recommended for both skiing and snowboarding.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any medical facilities in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">There is a medical facility in Gulmarg called the **Gulmarg Medical Centre**. It is located near the Gondola lift and provides essential medical services, including first aid and emergency care.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any restaurants and cafes near the cable car station?</h3>
                <p className="text-gray-600 mb-4">Yes, several restaurants and cafes are located near the cable car station. Nearby eateries include the Cable Car Cafe, the Cable Car Diner, the Cable Car Restaurant, and the Cable Car Bistro.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any shopping places in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, there are several shopping places in Gulmarg. Some popular shopping places include the **Gulmarg Market**, where you can find local handicrafts, souvenirs, and traditional Kashmiri clothing, as well as the **Gulmarg Handicrafts Market**, where you can buy local carpets, shawls, and textiles. Several stores and kiosks also sell various items, including apparel, accessories, jewellery, and souvenirs.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any unique festivals celebrated in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, Gulmarg celebrates several unique festivals throughout the year, including the Gulmarg Ski Festival, Gulmarg Summer Festival, Gulmarg Blossom Festival, and Gulmarg Winter Festival. Additionally, the Gulmarg Festival of Lights is celebrated annually in December.</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-700">Are there any unique places to visit in Gulmarg?</h3>
                <p className="text-gray-600 mb-4">Yes, there are many unique places to visit in Gulmarg. The most popular attractions include the Gulmarg Gondola, Kongdori Ski Slopes, Alpather Lake, Baba Reshi Shrine, Maharani Temple, Apharwat Peak, and the Gulmarg Biosphere Reserve. Other popular places include St. Mary's Church, the Gulmarg Golf Course, the Gulmarg Wildlife Sanctuary, the Gulmarg Bazaar, and the Ningle Nallah.</p>
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
                    <span className="font-medium">4 Days / 3 Nights</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Night Stays:</span>
                    <span className="font-medium">2N Srinagar • 1N Pahalgam</span>
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
                    <span>Individual & Group Options</span>
                  </div>
                </div>

                <BookingButton tourName="Kashmir Pahalgam Tour" tourPrice="Price on Request" className="w-full py-3 text-lg font-semibold bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 shadow-md hover:shadow-lg" />

                {/* Hotel Details */}
                <div className="mt-8 space-y-4 border-t pt-4 border-gray-200">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Hotel Details</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Destination</th>
                                    <th className="px-4 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Nights</th>
                                    <th className="px-4 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Hotels</th>
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
                </div >

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