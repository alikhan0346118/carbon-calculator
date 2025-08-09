'use client'

import Link from 'next/link'

const CTA = () => {
  return (
         <div className="border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Sustainability Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join us in creating a sustainable future with advanced GIS and AI solutions. 
            Get your free consultation today and discover how we can help your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/calculate" 
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Track Your Emissions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
