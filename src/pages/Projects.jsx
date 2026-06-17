import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [activeFaq, setActiveFaq] = useState(-1)

  const categories = ['All', 'App Design', 'Web Design', 'UI/UX Design', 'Wireframe']

  const projects = [
    {
      id: 1,
      title: 'Care Connect - Doctor Appointment App',
      category: 'App Design',
      tags: ['UI/UX Design', 'App Design', 'Wireframe'],
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Dental - Dentist and Clinic Website',
      category: 'Web Design',
      tags: ['UI/UX Design', 'Web Design', 'Wireframe'],
      imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Car Rental - Booking Mobile App',
      category: 'App Design',
      tags: ['UI/UX Design', 'App Design', 'Wireframe'],
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Hotel Booking - App Landing Page',
      category: 'Web Design',
      tags: ['UI/UX Design', 'Landing Page', 'Wireframe'],
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'PayFlow - Fintech Transaction Engine',
      category: 'Web Design',
      tags: ['UI/UX Design', 'Web Design', 'Fintech'],
      imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'FitPulse - Workout Tracker App',
      category: 'App Design',
      tags: ['UI/UX Design', 'App Design', 'Fitness'],
      imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80'
    }
  ]

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(filter) || p.category === filter)

  const arrowVariants = {
    initial: { rotate: 0, scale: 1, backgroundColor: "rgba(255, 255, 255, 0.15)" },
    hover: { rotate: 45, scale: 1.1, backgroundColor: "#FF6B00", boxShadow: "0 0 15px rgba(255, 107, 0, 0.4)" }
  }

  return (
    <div className="bg-bg-main min-h-screen pb-24 font-sans text-left">
      {/* Banner / Hero header */}
      <section className="bg-dark-navy text-white py-24 relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80')`
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

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl">Our Projects</h1>
            <p className="text-slate-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Explore our high-fidelity digital interfaces, mobile app mockups, and wireframe configurations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        {/* Filters bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-16">
          {categories.map((cat) => {
            const isActive = filter === cat
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 focus:outline-none ${isActive ? 'text-white bg-primary shadow-glow' : 'text-text-secondary bg-white hover:text-primary border border-slate-200/60'
                  }`}
              >
                <span>{cat}</span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover="hover"
                whileTap={{ scale: 0.99 }}
                className="group relative h-[320px] overflow-hidden rounded-xl2 bg-slate-900 shadow-md cursor-pointer border border-transparent"
              >
                {/* Background image */}
                <img
                  src={proj.imageUrl}
                  alt={proj.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/95 via-dark-navy/55 to-transparent group-hover:from-dark-navy/95 group-hover:via-dark-navy/65 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="space-y-4 max-w-[85%]">
                    <h3 className="font-display font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                      {proj.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold px-2.5 py-0.5 bg-white/10 rounded-full border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Action */}
                  <div className="absolute bottom-6 right-6">
                    <motion.div
                      variants={arrowVariants}
                      className="w-10 h-10 rounded-full text-white flex items-center justify-center transition-shadow duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Projects FAQs Accordion */}
        <section className="my-24 text-left">
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>Project Delivery FAQs</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
              Projects & Design FAQs
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              {
                q: 'Can you design custom apps for both iOS and Android?',
                a: 'Yes! We specialize in cross-platform development (React Native & Flutter) as well as native Swift (iOS) and Kotlin (Android) systems to match your scale requirements.'
              },
              {
                q: 'How do you handle source code ownership and project IP?',
                a: 'Upon project sign-off and milestone closure, 100% of the repository ownership, database structures, and IP rights transfer directly to your company.'
              },
              {
                q: 'What is your standard wireframing and design feedback loop?',
                a: 'We create click-through Figma prototypes. Clients review and sign off on interactive UI/UX wireframes before our engineering team begins writing backend codes.'
              },
              {
                q: 'Do you sign Non-Disclosure Agreements (NDAs) before discussion?',
                a: 'Yes, we respect your confidentiality. We routinely sign strict NDAs before sharing blueprints, system architectures, or product specifications.'
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
