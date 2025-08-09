'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setFormStatus('submitting')
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }



  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        
        
        <div className="relative container mx-auto px-4 py-16">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-6">
                             Get in <span className="text-gray-500">Touch</span>
            </h1>

          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 pb-16">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <div className="flex items-center mb-8">
                                 <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                   <Send className="w-6 h-6 text-gray-500" />
                 </div>
                                  <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-800">Send us a Message</h2>
                    <p className="text-gray-600 font-sans">We'd love to hear from you</p>
                  </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-display font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-display font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-display font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-display font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-display font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-display font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-4 px-6 rounded-lg font-display font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                    formStatus === 'submitting' 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#c5c5c5] to-gray-600 hover:from-gray-600 hover:to-[#c5c5c5] hover:shadow-lg border-2 border-[#c5c5c5]'
                  }`}
                  whileHover={formStatus !== 'submitting' ? { scale: 1.02 } : {}}
                  whileTap={formStatus !== 'submitting' ? { scale: 0.98 } : {}}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {formStatus === 'error' && (
                  <motion.div 
                    className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Additional Information */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              {/* About Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#c5c5c5]">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Why Choose AI Geo Navigators?</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed font-sans">
                    We specialize in cutting-edge carbon emissions tracking and environmental 
                    impact assessment using advanced AI and geospatial technologies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#c5c5c5] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-sans">Comprehensive carbon footprint analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#c5c5c5] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-sans">AI-powered environmental monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#c5c5c5] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-sans">Regulatory compliance support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#c5c5c5] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-sans">Sustainable development consulting</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Connect With Us</h3>
                <div className="space-y-4">
                  <a 
                    href="https://www.youtube.com/@AIGEONAVIGATORS/videos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                                         <div>
                       <p className="font-display font-semibold text-gray-800">YouTube</p>
                       <p className="text-sm font-sans text-gray-600">Watch our latest videos</p>
                     </div>
                  </a>

                  <a 
                    href="https://x.com/AiGeoNavigators" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                                         <div>
                       <p className="font-display font-semibold text-gray-800">Twitter</p>
                       <p className="text-sm font-sans text-gray-600">Follow our updates</p>
                     </div>
                  </a>

                  <a 
                    href="https://pk.linkedin.com/company/geo-ai-navigators" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                                         <div>
                       <p className="font-display font-semibold text-gray-800">LinkedIn</p>
                       <p className="text-sm font-sans text-gray-600">Connect professionally</p>
                     </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
