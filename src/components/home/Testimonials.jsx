import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { testimonialsData } from '../../data/testimonials'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden text-left relative">
      
      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
            <span className="text-secondary font-extrabold">//</span>
            <span>Testimonials</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-navy leading-tight">
            What Our Clients Say <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              About WorldTek
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonialsData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.015, 
                boxShadow: "0 20px 40px rgba(255, 107, 0, 0.08)",
                borderColor: "rgba(255, 107, 0, 0.15)"
              }}
              whileTap={{ scale: 0.985 }}
              className="bg-bg-alt rounded-xl2 p-8 border border-slate-200/40 flex flex-col justify-between relative group cursor-pointer transition-colors duration-350"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/25 transition-colors duration-300 pointer-events-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-secondary fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Profile details */}
              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-slate-200/50">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-display font-bold text-base text-dark-navy">{item.name}</h4>
                  <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
