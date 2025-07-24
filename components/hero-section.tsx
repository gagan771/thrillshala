import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Mountain landscape with Buddhist statue"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Experiences for
              <br />
              <span className="line-through opacity-75">Tourist</span> Adventurers
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
