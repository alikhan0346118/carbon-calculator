export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            About AI Geo Navigators
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              AI Geo Navigators is dedicated to leveraging cutting-edge artificial intelligence 
              and geospatial technologies to address critical environmental challenges. We 
              specialize in carbon emissions monitoring, environmental impact assessment, 
              and sustainable development solutions.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team combines expertise in AI, remote sensing, and environmental science 
              to provide innovative solutions for carbon footprint analysis, deforestation 
              monitoring, and climate change mitigation strategies.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We utilize advanced machine learning algorithms and satellite imagery analysis 
              to deliver accurate, real-time environmental data and insights that help 
              organizations make informed decisions for a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
