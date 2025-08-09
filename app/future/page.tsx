import Image from "next/image"
import Consult from "../../public/consul.png"
import Goal from "../../public/set-goals.png"
import Update from "../../public/update.png"
import Decarbonize from "../../public/netzero-logo-big-tree.png"

const Future = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-black text-gray-900 mb-12 text-center tracking-tight leading-tight">
            Your Sustainability Journey
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Consult Now */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-6">
                <Image 
                  className="mx-auto rounded-full h-32 w-32 mb-6" 
                  src={Consult} 
                  alt="Consultation" 
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                  Consult Now
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed font-light">
                Meet our experts to begin your sustainability and ESG compliance journey.
              </p>
            </div>

            {/* Set Goals */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-6">
                <Image 
                  className="mx-auto rounded-full h-32 w-32 mb-6 bg-gray-50" 
                  src={Goal} 
                  alt="Set Goals" 
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                  Set Your Goals
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed font-light">
                Our team guides you in understanding and achieving your business goals.
              </p>
            </div>

            {/* Update Data */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-6">
                <Image 
                  className="mx-auto rounded-full h-32 w-32 mb-6" 
                  src={Update} 
                  alt="Update Data" 
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                  Update Data
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed font-light">
                We interpret and organize data to ensure accuracy and transparency.
              </p>
            </div>

            {/* Decarbonize */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#c5c5c5] hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-6">
                <Image 
                  className="mx-auto rounded-full h-32 w-32 mb-6 bg-gray-50" 
                  src={Decarbonize} 
                  alt="Decarbonize" 
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                  Decarbonize
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed font-light">
                Implement tailored plans to reduce emissions and achieve net zero goals.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white rounded-2xl p-12 shadow-xl border-2 border-[#c5c5c5]">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif border-b-4 border-[#c5c5c5] pb-4">
              Building a Sustainable Future
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 font-serif">Strategic Approach</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Our comprehensive approach ensures that every step of your sustainability 
                  journey is carefully planned and executed for maximum impact.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 font-serif">Measurable Results</h3>
                <p className="text-gray-700 leading-relaxed font-light">
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
