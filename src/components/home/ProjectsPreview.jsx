import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  })

  const projects = [
    {
      title: 'Care Connect - Doctor Appointment App',
      tags: ['UI/UX Design', 'App Design', 'Wireframe'],
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Dental - Dentist and Dental Clinic Website UIUX Design',
      tags: ['UI/UX Design', 'Web Design', 'Wireframe'],
      imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Car Rental - Car Rental Booking Mobile App',
      tags: ['UI/UX Design', 'App Design', 'Wireframe'],
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Hotel Booking - Hotel Booking App Landing Page UIUX Design',
      tags: ['UI/UX Design', 'Landing Page', 'Wireframe'],
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const arrowVariants = {
    initial: { rotate: 0, scale: 1, backgroundColor: "rgba(255, 255, 255, 0.15)" },
    hover: { rotate: 45, scale: 1.1, backgroundColor: "#FF6B00", boxShadow: "0 0 15px rgba(255, 107, 0, 0.4)" }
  }

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
            <span className="text-secondary font-extrabold">//</span>
            <span>Our Latest Projects</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-navy leading-tight">
            Explore Our Showcase of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Featured Works
            </span>
          </h2>
        </div>

        {/* 2x2 Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.99 }}
              className="group relative h-[320px] sm:h-[400px] overflow-hidden rounded-xl2 bg-slate-900 shadow-lg cursor-pointer"
            >
              {/* Background Mockup Image */}
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
              />
              {/* Dark Overlay with brand highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/95 via-dark-navy/50 to-transparent group-hover:from-dark-navy/95 group-hover:via-dark-navy/60 transition-colors duration-300" />
              
              {/* Card Contents */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="space-y-4 max-w-[85%]">
                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl leading-snug group-hover:text-primary transition-colors duration-300">
                    {proj.title}
                  </h3>

                  {/* Tag Badges */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] sm:text-xs font-semibold px-3 py-1 bg-white/10 rounded-full border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Icon Button in bottom right */}
                <div className="absolute bottom-8 right-8">
                  <motion.div 
                    variants={arrowVariants}
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center transition-shadow duration-300"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white font-bold px-10 py-4.5 rounded-full text-base transition-all duration-300 shadow-glow hover:-translate-y-0.5"
          >
            <span>View All Works</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
