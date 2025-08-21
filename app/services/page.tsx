import type React from "react"
import scope3 from "../../public/animation-03.gif"
import scope2 from "../../public/animation_02.gif"
import scope1 from "../../public/animation.gif"
import Image from "next/image"

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 lg:mb-8 xl:mb-12 text-center tracking-tight leading-tight border-b-2 sm:border-b-0 border-gray-300 pb-3 sm:pb-0">
            Our Service Plans
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4 sm:mb-6">
                <Image 
                  src={scope3} 
                  alt="Basic Plan" 
                  className="mx-auto h-24 sm:h-28 lg:h-32 w-auto rounded-lg bg-gray-50 mb-4 sm:mb-6"
                />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">
                  Basic Plan
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light text-center">
                Track Scope 1 & 2 emissions, ensure ESG compliance, access a GHG dashboard, 
                and get online support.
              </p>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4 sm:mb-6">
                <Image 
                  src={scope1} 
                  alt="Enterprise Plan" 
                  className="mx-auto h-24 sm:h-28 lg:h-32 w-auto rounded-lg bg-gray-50 mb-4 sm:mb-6"
                />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">
                  Enterprise Plan
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light text-center">
                Includes basic features plus AI to track Scope 3, automate reporting, 
                create action plans and ensure compliance.
              </p>
            </div>

            {/* Net Zero Plan */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4 sm:mb-6">
                <Image 
                  src={scope2} 
                  alt="Net Zero Plan" 
                  className="mx-auto h-24 sm:h-28 lg:h-32 w-auto rounded-lg bg-gray-50 mb-4 sm:mb-6"
                />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">
                  Net Zero Plan
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light text-center">
                Includes Enterprise features. Create net-zero strategies, analyze data, 
                engage suppliers, and ensure decarbonization.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 sm:mt-12 lg:mt-16 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-lg sm:shadow-xl border-2 border-[#c5c5c5]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center font-serif border-b-2 sm:border-b-4 border-[#c5c5c5] pb-3 sm:pb-4">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 font-serif">Comprehensive Coverage</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  From basic emissions tracking to full net-zero strategies, we provide 
                  complete solutions for every stage of your sustainability journey.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 font-serif">AI-Powered Insights</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  Leverage advanced artificial intelligence for accurate data analysis, 
                  predictive modeling, and automated reporting capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

