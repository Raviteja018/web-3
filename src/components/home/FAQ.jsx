import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, PhoneCall, Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState() 

  const faqs = [
    {
      q: 'What services does your company provide?',
      a: 'WorldTek Innovations Pvt. Ltd. provides custom software development, mobile app development, IT infrastructure solutions, cybersecurity, cloud services, digital marketing, and fintech platforms.'
    },
    {
      q: 'What industries do you serve?',
      a: 'We serve a broad range of industries, including healthcare, banking & fintech, e-commerce, retail, logistics, education, and hospitality, helping them adopt digital transformation and optimize workflow automation.'
    },
    {
      q: 'Do you offer customized IT solutions?',
      a: 'Yes, we specialize in tailor-made business applications, custom CRM/ERP integrations, and AI-powered workflow automation designed around your specific corporate operations.'
    },
    {
      q: 'How can I contact your support team?',
      a: 'You can contact our team directly by calling us at +91 85000 22226 or emailing us at worldtek.in@gmail.com. We also offer 24/7 technical support for our enterprise contract clients.'
    },
    {
      q: 'How secure are your IT solutions?',
      a: 'Security is our top priority. We implement ISO 9001 and ISO 27001 compliance standards, perform regular VAPT audits, and use PCI DSS secure hosting architectures to protect your assets.'
    },
    {
      q: 'Do you offer 24/7 technical support?',
      a: 'Yes, we provide round-the-clock technical monitoring and dedicated support engineers for our enterprise clients to ensure zero downtime.'
    }
  ]

  return (
    <section className="py-24 bg-bg-alt text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
            <span className="text-secondary font-extrabold">//</span>
            <span>FAQs</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-navy leading-tight">
            Question? <span className="text-primary">Look here.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Accordions */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <div 
                  key={idx}
                  className={`rounded-xl overflow-hidden shadow-sm border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-white border-primary shadow-md' 
                      : 'bg-white border-slate-200/60 hover:border-primary/25'
                  }`}
                >
                  {/* Header Button */}
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between font-bold text-base sm:text-lg text-left focus:outline-none group"
                  >
                    <span className={`transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-dark-navy'}`}>
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 ml-4">
                      {isOpen 
                        ? <Minus className="w-5 h-5 text-primary" /> 
                        : <Plus className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
                      }
                    </span>
                  </button>

                  {/* Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Right Column: Support Widgets */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Card 1: Chat Support */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015, boxShadow: "0 20px 40px rgba(255,107,0,0.08)" }}
              whileTap={{ scale: 0.99 }}
              className="bg-dark-navy rounded-xl2 p-8 text-center text-white border border-slate-800 relative overflow-hidden shadow-lg cursor-pointer"
            >
              {/* background overlay blob */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="w-14 h-14 rounded-full bg-slate-800 text-primary flex items-center justify-center mx-auto mb-6 shadow-md border border-slate-700/50">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">You have different questions?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Our team will answer all your questions. We ensure a quick response.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white font-bold px-8 py-3 rounded-full text-sm transition-all duration-300 shadow-glow"
              >
                <span>Contact Us</span>
              </Link>
            </motion.div>

            {/* Card 2: Call Support */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015, boxShadow: "0 15px 30px rgba(255,107,0,0.06)", borderColor: "rgba(255,107,0,0.2)" }}
              whileTap={{ scale: 0.99 }}
              className="bg-white rounded-xl2 border border-slate-200/60 p-8 text-center shadow-sm transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Your Comfort, Our Priority</div>
              <h4 className="font-display font-black text-xl text-dark-navy mt-1">24/7 Service</h4>
              <a 
                href="tel:+918500022226" 
                className="block text-primary hover:text-secondary font-display font-bold text-lg mt-2 tracking-wide transition-colors"
              >
                +91 85000 22226
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}
