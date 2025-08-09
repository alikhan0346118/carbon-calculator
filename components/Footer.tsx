'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      {/* Top row */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10 lg:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-40">
          
          {/* FAR LEFT: Brand + blurb + socials */}
          <div className="flex flex-col md:w-1/3">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.jpeg"
                alt="AI Geo Navigators 360 Digital"
                width={170}
                height={60}
                className="h-auto w-auto"
                priority
              />
            </Link>
          

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              <Link href="https://www.facebook.com/people/AI-Geo-Navigators/61569856932091/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-md p-2 transition hover:bg-blue-50">
                <Facebook className="h-5 w-5 text-blue-600" />
              </Link>
              <Link href="https://www.instagram.com/aigeonavigators/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md p-2 transition hover:bg-pink-50">
                <Instagram className="h-5 w-5 text-pink-600" />
              </Link>
              <Link href="https://www.youtube.com/@AIGEONAVIGATORS/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-md p-2 transition hover:bg-red-50">
                <Youtube className="h-5 w-5 text-red-600" />
              </Link>
              <Link href="https://x.com/AiGeoNavigators" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="rounded-md p-2 transition hover:bg-gray-100">
                <Twitter className="h-5 w-5 text-gray-900" />
              </Link>
              <Link href="https://pk.linkedin.com/company/geo-ai-navigators" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md p-2 transition hover:bg-blue-50">
                <Linkedin className="h-5 w-5 text-blue-700" />
              </Link>
            </div>
          </div>

                     {/* CENTER: Mission Statement */}
           <div className="flex flex-col justify-center text-center flex-grow">
             <h4 className="mb-4 text-lg font-bold text-gray-800">Our Mission</h4>
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                At AI Geo Navigators, we bridge technology and sustainability through advanced GIS and AI solutions.
              </p>
              <p >
                Our work addresses global challenges from urban planning to climate change adaptation.
              </p>
              <p >
                Empowering stakeholders worldwide to make informed, future ready decisions.
              </p>
            </div>
          </div>

                     {/* FAR RIGHT: Contact */}
           <div className="flex flex-col md:w-1/3">
             <h4 className="text-lg font-bold text-gray-800 mb-4">Contact</h4>
                         <div className="space-y-4 text-gray-900">
               <div className="flex items-center gap-3">
                 <Phone className="h-6 w-6 text-green-600" />
                 <span className="text-sm">+92 334 0333366</span>
               </div>
               <div className="flex items-center gap-3">
                 <Mail className="h-6 w-6 text-blue-600" />
                 <span className="text-sm">info@aigeo360.com</span>
               </div>
               <div className="flex items-start gap-3">
                 <MapPin className="mt-0.5 h-6 w-6 text-red-600" />
                 <span className="text-sm">
                   Street 92, Building no. 63, Service Road I-8/4, near Dar-e-Arqam School
                 </span>
               </div>
             </div>
          </div>

                 </div>
       </div>

       {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex w-full max-w-full flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} AI Geo Navigators. All rights reserved.</p>
          <p className="text-center">Your sustainability partner</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
