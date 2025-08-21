import Image from "next/image"
import Consult from "../../public/consul.png"
import Goal from "../../public/set-goals.png"
import Update from "../../public/update.png"
import Decarbonize from "../../public/netzero-logo-big-tree.png"

const Future = () => {
  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20 md:pt-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 lg:mb-8 xl:mb-12 text-center tracking-tight leading-tight border-b-2 sm:border-b-0 border-gray-300 pb-3 sm:pb-0">
            Your Sustainability Journey
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Consult Now */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-4 sm:mb-6">
                <Image 
                  className="mx-auto rounded-full h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 mb-4 sm:mb-6" 
                  src={Consult} 
                  alt="Consultation" 
                />
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">
                  Consult Now
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                Meet our experts to begin your sustainability and ESG compliance journey.
              </p>
            </div>

            {/* Set Goals */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-4 sm:mb-6">
                <Image 
                  className="mx-auto rounded-full h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 mb-4 sm:mb-6 bg-gray-50" 
                  src={Goal} 
                  alt="Set Goals" 
                />
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">
                  Set Your Goals
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                Our team guides you in understanding and achieving your business goals.
              </p>
            </div>

            {/* Update Data */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-4 sm:mb-6">
                <Image 
                  className="mx-auto rounded-full h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 mb-4 sm:mb-6" 
                  src={Update} 
                  alt="Update Data" 
                />
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">
                  Update Data
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                We interpret and organize data to ensure accuracy and transparency.
              </p>
            </div>

            {/* Decarbonize */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-4 sm:mb-6">
                <Image 
                  className="mx-auto rounded-full h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 mb-4 sm:mb-6 bg-gray-50" 
                  src={Decarbonize} 
                  alt="Decarbonize" 
                />
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">
                  Decarbonize
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                Implement tailored plans to reduce emissions and achieve net zero goals.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 sm:mt-12 lg:mt-16 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-lg sm:shadow-xl border-2 border-[#c5c5c5]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center font-serif border-b-2 sm:border-b-4 border-[#c5c5c5] pb-3 sm:pb-4">
              Building a Sustainable Future
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 font-serif">Strategic Approach</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  Our comprehensive approach ensures that every step of your sustainability 
                  journey is carefully planned and executed for maximum impact.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 font-serif">Measurable Results</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  Track your progress with detailed analytics and reporting, ensuring 
                  transparency and accountability throughout your decarbonization journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Future
