'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-colors">
      <nav className="w-full px-0">
        {/* DESKTOP LAYOUT: [Logo | Nav | Contact] */}
        <div className="hidden lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:h-20 lg:w-full">

          {/* FAR LEFT: Logo */}
          <div className="flex items-center pl-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpeg"
                alt="AI Geo Navigators"
                width={150}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* CENTER: Nav links */}
          <div className="flex justify-center">
            {pathname !== "/" && (
              <Link
                href="/"
                className="mx-3 px-4 py-2 font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
              >
                HOME
              </Link>
            )}
            {pathname !== "/calculate" && (
              <Link
                href="/calculate"
                className="mx-3 px-4 py-2 font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
              >
                CALCULATOR
              </Link>
            )}
            {pathname !== "/services" && (
              <Link
                href="/services"
                className="mx-3 px-4 py-2 font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
              >
                SERVICES
              </Link>
            )}
            {pathname !== "/future" && (
              <Link
                href="/future"
                className="mx-3 px-4 py-2 font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
              >
                FUTURE
              </Link>
            )}
            {pathname !== "/about" && (
              <Link
                href="/about"
                className="mx-3 px-4 py-2 font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
              >
                ABOUT  US
              </Link>
            )}
            {pathname !== "/contact" && (
              <Link
                href="/contact"
                className="mx-3 px-4 py-2 font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
              >
                CONTACT US
              </Link>
            )}
          </div>

          {/* FAR RIGHT: Social icons */}
          <div className="flex items-center pr-6 space-x-2">
            <Link href="https://www.youtube.com/@AIGEONAVIGATORS/videos" target="_blank" aria-label="YouTube" className="p-2 rounded-md transition hover:bg-red-50 hover:scale-110">
              <Youtube className="h-6 w-6 text-red-600 hover:text-red-700" />
            </Link>
            <Link href="https://x.com/AiGeoNavigators" target="_blank" aria-label="Twitter" className="p-2 rounded-md transition hover:bg-black/5 hover:scale-110">
              <Twitter className="h-6 w-6 text-black hover:text-gray-800" />
            </Link>
            <Link href="https://pk.linkedin.com/company/geo-ai-navigators" target="_blank" aria-label="LinkedIn" className="p-2 rounded-md transition hover:bg-blue-50 hover:scale-110">
              <Linkedin className="h-6 w-6 text-blue-700 hover:text-blue-800" />
            </Link>
            <Link href="https://www.instagram.com/aigeonavigators/?hl=en" target="_blank" aria-label="Instagram" className="p-2 rounded-md transition hover:bg-pink-50 hover:scale-110">
              <Instagram className="h-6 w-6 text-pink-600 hover:text-pink-700" />
            </Link>
            <Link href="https://www.facebook.com/people/AI-Geo-Navigators/61569856932091/" target="_blank" aria-label="Facebook" className="p-2 rounded-md transition hover:bg-blue-50 hover:scale-110">
              <Facebook className="h-6 w-6 text-blue-600 hover:text-blue-700" />
            </Link>
          </div>

        </div>

        {/* MOBILE & MEDIUM LAYOUT */}
        <div className="lg:hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image
                src="/logo.jpeg"
                alt="AI Geo Navigators"
                width={120}
                height={40}
                className="object-contain md:w-[140px] md:h-[45px]"
                priority
              />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-cyan-600 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Menu Overlay */}
          {isMenuOpen && (
            <div className="absolute top-16 md:top-20 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
              {/* Navigation Links */}
              <div className="px-4 md:px-6 py-2 space-y-1">
                {pathname !== "/" && (
                  <Link
                    href="/"
                    className="block px-4 py-3 text-sm md:text-base font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    HOME
                  </Link>
                )}
                {pathname !== "/calculate" && (
                  <Link
                    href="/calculate"
                    className="block px-4 py-3 text-sm md:text-base font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    CALCULATOR
                  </Link>
                )}
                {pathname !== "/services" && (
                  <Link
                    href="/services"
                    className="block px-4 py-3 text-sm md:text-base font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    SERVICES
                  </Link>
                )}
                {pathname !== "/future" && (
                  <Link
                    href="/future"
                    className="block px-4 py-3 text-sm md:text-base font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    FUTURE
                  </Link>
                )}
                {pathname !== "/about" && (
                  <Link
                    href="/about"
                    className="block px-4 py-3 text-sm md:text-base font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    ABOUT US
                  </Link>
                )}
                {pathname !== "/contact" && (
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-sm md:text-base font-semibold rounded-md transition text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    CONTACT US
                  </Link>
                )}
              </div>

              {/* Social Icons */}
              <div className="flex justify-center items-center px-4 md:px-6 py-4 border-t border-gray-200 space-x-3">
                <Link href="https://www.youtube.com/@AIGEONAVIGATORS/videos" target="_blank" aria-label="YouTube" className="p-2 rounded-md transition hover:bg-red-50 hover:scale-110">
                  <Youtube className="h-5 w-5 md:h-6 md:w-6 text-red-600 hover:text-red-700" />
                </Link>
                <Link href="https://x.com/AiGeoNavigators" target="_blank" aria-label="Twitter" className="p-2 rounded-md transition hover:bg-black/5 hover:scale-110">
                  <Twitter className="h-5 w-5 md:h-6 md:w-6 text-black hover:text-gray-800" />
                </Link>
                <Link href="https://pk.linkedin.com/company/geo-ai-navigators" target="_blank" aria-label="LinkedIn" className="p-2 rounded-md transition hover:bg-blue-50 hover:scale-110">
                  <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-blue-700 hover:text-blue-800" />
                </Link>
                <Link href="https://www.instagram.com/aigeonavigators/?hl=en" target="_blank" aria-label="Instagram" className="p-2 rounded-md transition hover:bg-pink-50 hover:scale-110">
                  <Instagram className="h-5 w-5 md:h-6 md:w-6 text-pink-600 hover:text-pink-700" />
                </Link>
                <Link href="https://www.facebook.com/people/AI-Geo-Navigators/61569856932091/" target="_blank" aria-label="Facebook" className="p-2 rounded-md transition hover:bg-blue-50 hover:scale-110">
                  <Facebook className="h-5 w-5 md:h-6 md:w-6 text-blue-600 hover:text-blue-700" />
                </Link>
              </div>
            </div>
          )}
        </div>

      </nav>
    </header>
  )
}

export default Header