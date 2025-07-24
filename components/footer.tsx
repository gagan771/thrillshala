import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 p-1">
                <Image
                  src="/images/logo.png"
                  alt="Thrillshala Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Thrillshala
                </span>
                <span className="text-sm font-medium text-gray-600 -mt-1">adventure experiences</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Creating unforgettable adventure experiences for thrill-seekers worldwide. Discover breathtaking
              destinations and embark on journeys that push your limits and transform your perspective.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link href="/group-trips" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                  Group Trips
                </Link>
              </li>
              <li>
                <Link href="/creator-trips" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                  Creator Trips
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-600">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/booking-policy" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                  Booking Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-600">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  123 Adventure Street,
                  <br />
                  Travel District, Mumbai 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-600 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-600 text-sm">hello@thrillshala.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">© 2024 Thrillshala. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
