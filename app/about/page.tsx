export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 lg:mb-8 xl:mb-12 text-center tracking-tight leading-tight border-b-2 sm:border-b-0 border-gray-300 pb-3 sm:pb-0">
            About AI Geo Navigators
          </h1>
          
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 xl:p-12 mb-6 sm:mb-8 lg:mb-12 border-2 border-[#c5c5c5]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 border-b-2 sm:border-b-4 border-[#c5c5c5] pb-3 sm:pb-4 font-serif">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-light">
              AI Geo Navigators is dedicated to leveraging cutting-edge artificial intelligence 
              and geospatial technologies to address critical environmental challenges. We 
              specialize in carbon emissions monitoring, environmental impact assessment, 
              and sustainable development solutions.
            </p>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 border-b-2 sm:border-b-4 border-[#c5c5c5] pb-3 sm:pb-4 font-serif">
              What We Do
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-light">
              Our team combines expertise in AI, remote sensing, and environmental science 
              to provide innovative solutions for carbon footprint analysis, deforestation 
              monitoring, and climate change mitigation strategies.
            </p>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 border-b-2 sm:border-b-4 border-[#c5c5c5] pb-3 sm:pb-4 font-serif">
              Our Approach
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
              We utilize advanced machine learning algorithms and satellite imagery analysis 
              to deliver accurate, real-time environmental data and insights that help 
              organizations make informed decisions for a sustainable future.
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 xl:p-12 mb-6 sm:mb-8 lg:mb-12 border-2 border-[#c5c5c5]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 xl:mb-10 text-center font-serif border-b-2 sm:border-b-4 border-[#c5c5c5] pb-3 sm:pb-4">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">Comprehensive Carbon Footprint Analysis</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  Detailed assessment of carbon emissions across all operational aspects, 
                  providing actionable insights for reduction strategies and sustainability reporting.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">AI-Powered Environmental Monitoring</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  Real-time environmental data collection and analysis using advanced AI algorithms 
                  for predictive modeling and early warning systems.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">Regulatory Compliance Support</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  Expert guidance on environmental regulations, compliance reporting, 
                  and ensuring adherence to international sustainability standards.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-[#c5c5c5] hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif">Sustainable Development Consulting</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  Strategic consulting services for integrating sustainability into business 
                  operations, supply chain optimization, and green technology implementation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-lg border-2 border-[#c5c5c5] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 font-serif">Innovation</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-light">
                Pioneering AI-driven solutions for environmental monitoring and sustainability.
              </p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-lg border-2 border-[#c5c5c5] hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 font-serif">Excellence</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-light">
                Delivering high-quality, accurate environmental data and insights.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-lg sm:shadow-xl border-2 border-[#c5c5c5]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center font-serif border-b-2 sm:border-b-4 border-[#c5c5c5] pb-3 sm:pb-4">
              Our Commitment
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-center font-light max-w-3xl mx-auto">
              We are committed to creating a sustainable future through innovative technology 
              and data-driven environmental solutions. Our expertise in AI and geospatial 
              analysis enables us to provide actionable insights for climate action and 
              environmental conservation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
