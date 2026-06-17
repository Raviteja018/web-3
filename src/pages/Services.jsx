import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { servicesData } from '../data/services'
import { techExpertiseData } from '../data/technologies'
import { CheckCircle2, ArrowRight, Plus, Minus } from 'lucide-react'

export default function Services() {
  const [activeFaq, setActiveFaq] = useState(-1)
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
    'Custom Software Development',
    'Digital Transformation Services',
    'IT Infrastructure Solutions',
    'Cloud-Based Technologies',
    'Scalable Business Applications',
    'Cost-Effective Technology Services'
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

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl">Our Services</h1>
            <p className="text-slate-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Reliable, secure, and scalable IT offerings designed to drive modern business growth.
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
                Empowering Businesses through End-to-End Solutions
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                We deliver high-fidelity digital solutions structured for scalability and security, matching standard compliance layers to optimize organizational productivity.
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

        {/* Services Showcase Section */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>Our Specializations</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
              Services We Provide
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
                  whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(255,107,0,0.08)", borderColor: "rgba(255,107,0,0.2)" }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-white rounded-xl2 p-8 shadow-sm border border-bg-alt transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <ServiceIcon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-dark-navy mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-sm font-bold text-primary group-hover:text-secondary transition-colors mt-auto">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
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
                We go beyond standard code. WorldTek provides high-performance architectures, secure payment checkouts, and fully compliant security pipelines built to scale alongside your organization.
              </p>
              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-glow"
                >
                  Start Your Project
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'ISO & Compliance Standards', desc: 'Strict adherence to ISO 9001 and ISO 27001 data security compliance layers.' },
                { title: 'Agile Delivery & CI/CD', desc: 'Constant status updates, iterative pipelines, and continuous deployment.' },
                { title: '24/7 Global Operations', desc: 'Constant platform monitoring, automated backups, and emergency engineering lines.' },
                { title: 'End-to-End Delivery', desc: 'From wireframes and system blueprints to direct deployment and global scaling.' }
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
              <span>Services FAQs</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              {
                q: 'What is your standard project development timeline?',
                a: 'Standard website projects take 4-6 weeks, while complex custom ERP/CRM platform integrations range from 8-12 weeks. We map out detailed milestone checklists during our blueprinting phase.'
              },
              {
                q: 'Do you offer post-launch support and platform updates?',
                a: 'Yes, we provide flexible SLA support tiers ranging from general maintenance checks and bug fixes to dedicated 24/7 technical monitoring contracts.'
              },
              {
                q: 'How do you handle project confidentiality and code IP?',
                a: 'We sign strict NDAs before project blueprints begin. All code bases, databases, and IP rights transfer fully to you upon final project sign-off.'
              },
              {
                q: 'Can you work with our existing hosting and local infrastructure?',
                a: 'Absolutely. We regularly deploy systems to clients\' existing AWS, Azure, Google Cloud, or local private server clusters, ensuring seamless configurations.'
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
