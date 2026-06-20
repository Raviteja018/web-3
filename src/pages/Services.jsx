import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { servicesData } from '../data/services'
import { techExpertiseData } from '../data/technologies'
import { CheckCircle2, ArrowRight, Plus, Minus, ChevronDown } from 'lucide-react'

export default function Services() {
  const [activeFaq, setActiveFaq] = useState(-1)
  const [expandedService, setExpandedService] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  })
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const whatWeDo = [
    'Payment Gateway & UPI Solutions',
    'ERP & Business Automation Platforms',
    'WhatsApp Business & Chatbot Solutions',
    'AI & Intelligent Workflow Automation',
    'Mobile & Web Application Development',
    'Government Digital Transformation',
    'POS & Merchant Management Systems',
    'Cloud Infrastructure & Scalable Platforms'
  ]

  return (
    <div className="bg-bg-main min-h-screen pb-24 font-sans text-left">
      {/* Banner / Hero header */}
      <section className="bg-dark-navy text-white py-24 relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')`
          }}
        />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/40 via-dark-navy/90 to-dark-navy z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl">Our Solutions</h1>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Secure, scalable, and innovative technology platforms that simplify operations, enhance customer experiences, and accelerate digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

        {/* What We Do Section */}
        <section className="bg-white rounded-xl2 shadow-md p-8 sm:p-12 mb-16 border border-bg-alt">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
                <span className="text-secondary font-extrabold">//</span>
                <span>What We Do</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
                Empowering Organizations with End-to-End Digital Solutions
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                From Payment Solutions and ERP Platforms to AI-powered Automation and Government Digital Services — we help organizations build smarter ecosystems for the future.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatWeDo.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 bg-bg-alt rounded-xl border border-slate-200/50 hover:border-primary/20 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-sm text-dark-navy leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Showcase Section */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>Our Specializations</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
              Solutions We Provide
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {servicesData.map((service, idx) => {
              const ServiceIcon = service.icon
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="perspective-1000 min-h-[460px] lg:h-[500px] group cursor-pointer"
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                    
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden bg-white rounded-xl2 p-8 shadow-sm border border-bg-alt flex flex-col justify-between items-center text-center">
                      <div className="flex flex-col items-center justify-center h-full space-y-6">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-sm">
                          <ServiceIcon className="w-10 h-10" />
                        </div>
                        <h3 className="font-display font-black text-2xl text-dark-navy transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-xs font-bold text-primary flex items-center gap-1 mt-auto">
                        <span>Hover to view offerings</span>
                        <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-xl2 p-8 shadow-sm border border-slate-200 flex flex-col justify-between text-left">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <ServiceIcon className="w-5 h-5" />
                          </div>
                          <h4 className="font-display font-bold text-lg text-dark-navy">
                            {service.title}
                          </h4>
                        </div>
                        
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-primary mb-4">// Core Offerings</div>
                        
                        {service.items && (
                          <ul className="space-y-2.5">
                            {service.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* Technologies Grid Section */}
        <section className="bg-dark-navy text-white rounded-xl2 shadow-2xl p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mb-14 space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-xs sm:text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>Technology Expertise</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl">
              Platforms & Technology Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techExpertiseData.map((tech, idx) => {
              const TechIcon = tech.icon
              return (
                <div key={idx} className="bg-slate-900/60 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tech.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                      <TechIcon className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white mb-4">{tech.category}</h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                      {tech.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="my-24 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
                <span className="text-secondary font-extrabold">//</span>
                <span>Why Partner With Us</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy leading-tight">
                Engineering Excellence for Enterprise Systems
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                At Worldtek, we believe technology should simplify operations, empower organizations, and create meaningful experiences. We are committed to delivering solutions that drive efficiency, innovation, and long-term growth.
              </p>
              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-glow"
                >
                  Start Your Digital Journey
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'ISO & Compliance Standards', desc: 'Strict adherence to ISO 9001 and ISO 27001 data security compliance layers.' },
                { title: 'Agile Delivery & CI/CD', desc: 'Constant status updates, iterative pipelines, and continuous deployment.' },
                { title: '24×7 Global Operations', desc: 'Constant platform monitoring, automated backups, and emergency engineering lines.' },
                { title: 'End-to-End Delivery', desc: 'From wireframes and system blueprints to direct deployment and long-term support.' }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02, borderColor: "rgba(255, 107, 0, 0.25)", boxShadow: "0 15px 30px rgba(255, 107, 0, 0.08)" }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-white rounded-xl p-6 border border-slate-200/50 shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <h4 className="font-display font-bold text-lg text-dark-navy mb-2">{value.title}</h4>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services FAQs Accordion */}
        <section className="my-24 text-left">
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>FAQs</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              {
                q: 'What industries do you serve?',
                a: 'We serve Government Departments, Banking & Financial Services, Healthcare, Education, Retail & E-Commerce, Hospitality, Manufacturing, Logistics & Transportation, Real Estate, and Small & Medium Enterprises.'
              },
              {
                q: 'Do you provide custom ERP solutions for our specific business needs?',
                a: 'Yes, our ERP platforms are fully tailor-made to your business — covering Finance, HR, Payroll, Inventory, Procurement, Asset Management, and Reporting, all configured to your workflows.'
              },
              {
                q: 'How does your WhatsApp Business Automation work?',
                a: 'We integrate with the official WhatsApp Business API to build intelligent chatbots, automate customer support, send notifications, run marketing campaigns, and enable CRM integration — all AI-powered.'
              },
              {
                q: 'Do you offer post-launch support and platform updates?',
                a: 'Yes, we provide 24×7 customer assistance and flexible SLA support tiers — from general maintenance and bug fixes to dedicated technical monitoring contracts.'
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div
                  key={idx}
                  className={`rounded-xl overflow-hidden shadow-sm border transition-all duration-300 ${isOpen
                      ? 'bg-white border-primary shadow-md'
                      : 'bg-white border-slate-200/60 hover:border-primary/25'
                    }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
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
        </section>

      </div>
    </div>
  )
}
