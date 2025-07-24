"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { User, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isToursOpen, setIsToursOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 rounded-b-3xl mx-4 mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 p-1">
                <Image
                  src="/images/logo.png"
                  alt="Thrillshala Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Thrillshala
                </span>
                <span className="text-sm font-medium text-gray-600 -mt-1">adventure experiences</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="bg-orange-50 rounded-full px-8 py-3 shadow-sm border border-orange-100 flex items-center space-x-8">
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium transition-colors"
                  onMouseEnter={() => setIsToursOpen(true)}
                  onMouseLeave={() => setIsToursOpen(false)}
                >
                  Tours & Packages
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isToursOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-orange-100 py-2 z-50"
                    onMouseEnter={() => setIsToursOpen(true)}
                    onMouseLeave={() => setIsToursOpen(false)}
                  >
                    <Link
                      href="/tours/spiti-7-days"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      Spiti Valley 7 Days
                    </Link>
                    <Link
                      href="/tours/kashmir-trip"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      Kashmir Paradise
                    </Link>
                    <Link
                      href="/tours/shimla-package"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      Shimla Package
                    </Link>
                    <Link
                      href="/tours/girls-only-trek"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      Girls Only Trek
                    </Link>
                    <Link
                      href="/tours/hampta-pass-trek"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      Hampta Pass Trek
                    </Link>
                    <Link
                      href="/tours/gulmarg-sonamarg"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      Gulmarg Sonamarg
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <Link
                      href="/customize-tour"
                      className="block px-4 py-2 text-sm text-orange-600 font-medium hover:bg-orange-50"
                    >
                      Customize Your Tour
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/group-trips" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Group Trips
              </Link>
              <Link href="/creator-trips" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Creator Trips
              </Link>
            </div>
          </div>

          {/* User Account */}
          <div className="hidden md:flex items-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6 py-2">
              <User className="w-4 h-4 mr-2" />
              Account
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t rounded-b-3xl shadow-lg">
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-gray-500">Tours & Packages</div>
                <Link
                  href="/tours/spiti-7-days"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                >
                  Spiti Valley 7 Days
                </Link>
                <Link
                  href="/tours/kashmir-trip"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                >
                  Kashmir Paradise
                </Link>
                <Link
                  href="/tours/shimla-package"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                >
                  Shimla Package
                </Link>
                <Link
                  href="/tours/girls-only-trek"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                >
                  Girls Only Trek
                </Link>
                <Link
                  href="/tours/hampta-pass-trek"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                >
                  Hampta Pass Trek
                </Link>
                <Link
                  href="/tours/gulmarg-sonamarg"
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                >
                  Gulmarg Sonamarg
                </Link>
                <Link
                  href="/customize-tour"
                  className="block px-6 py-2 text-sm text-orange-600 font-medium hover:bg-orange-50 rounded-lg"
                >
                  Customize Your Tour
                </Link>
              </div>

              <Link
                href="/group-trips"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-orange-50"
              >
                Group Trips
              </Link>
              <Link
                href="/creator-trips"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-orange-50"
              >
                Creator Trips
              </Link>

              <div className="pt-2">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full">
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
