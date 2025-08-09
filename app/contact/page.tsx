'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                  <p className="text-gray-600">info@aigeonavigators.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                  <p className="text-gray-600">Pakistan</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Follow Us</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://www.youtube.com/@AIGEONAVIGATORS/videos" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-red-600 hover:text-red-700">
                      YouTube
                    </a>
                    <a href="https://x.com/AiGeoNavigators" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-black hover:text-gray-800">
                      Twitter
                    </a>
                    <a href="https://pk.linkedin.com/company/geo-ai-navigators" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-blue-700 hover:text-blue-800">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition duration-200 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
