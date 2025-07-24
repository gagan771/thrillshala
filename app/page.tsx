import { Navbar } from "@/components/navbar"
import { DestinationSelector } from "@/components/destination-selector"
import { ImageSlider } from "@/components/image-slider"
import { DestinationCards } from "@/components/destination-cards"
import { TrendingSection } from "@/components/trending-section"
import { AdventureGallery } from "@/components/adventure-gallery"
import { CultureGallery } from "@/components/culture-gallery"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DestinationSelector />
      <ImageSlider />
      <DestinationCards />
      <TrendingSection />
      <AdventureGallery />
      <CultureGallery />
      <Testimonials />
      <Footer />
    </div>
  )
}
