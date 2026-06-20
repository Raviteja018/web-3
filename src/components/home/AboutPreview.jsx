import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUpModule from 'react-countup'
const CountUp = typeof CountUpModule === 'function' ? CountUpModule : (CountUpModule.default || CountUpModule)
import { Sparkles, ArrowUpRight } from 'lucide-react'

export default function AboutPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const imageGrid = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Image Collage */}
          <motion.div 
            className="lg:col-span-6 relative"
            variants={imageGrid}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Sparkle effects */}
            <div className="absolute -top-6 -left-6 text-primary animate-pulse">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-8 -right-4 text-accent animate-bounce">
              <Sparkles className="w-6 h-6" />
            </div>

            {/* Collage Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Image 1: Digital Payments */}
                <div className="overflow-hidden rounded-xl2 bg-slate-100 shadow-lg border-2 border-bg-alt">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
                    alt="Digital Payments & POS Solution"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Image 2: Government/Enterprise Portal */}
                <div className="overflow-hidden rounded-xl2 bg-slate-100 shadow-lg border-2 border-bg-alt">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                    alt="Enterprise & Government ERP Platform"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                {/* Image 3: Intelligent AI Solutions */}
                <div className="overflow-hidden rounded-xl2 bg-slate-100 shadow-lg border-2 border-bg-alt">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                    alt="Intelligent AI & Automation Solutions"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Image 4: WhatsApp & Mobile Solutions */}
                <div className="overflow-hidden rounded-xl2 bg-slate-100 shadow-lg border-2 border-bg-alt">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                    alt="WhatsApp Business & Mobile Solutions"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Rotating Circular Badge in the center */}
            <motion.div 
              className="absolute top-1/2 left-1/2 z-20 cursor-pointer"
              style={{ x: "-50%", y: "-50%" }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-28 h-28 bg-primary rounded-full flex items-center justify-center shadow-glow border-4 border-white">
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full p-1.5 fill-white font-display font-black text-[10px] tracking-wider">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text>
                      <textPath href="#circlePath">
                        WORLDTEK • INNOVATION • DIGITAL SOLUTIONS • 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <ArrowUpRight className="w-8 h-8 text-white relative z-10" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content & Stats */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-left"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Section Tag */}
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>About Us</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-navy leading-tight">
              Building <span className="text-primary">Digital Excellence</span>
            </h2>

            {/* Description */}
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Worldtek Innovations Pvt. Ltd. is a technology-driven company focused on delivering next-generation digital solutions for Government Departments, Enterprises, Financial Institutions, Healthcare Organizations, Educational Institutions, and Businesses. Our expertise spans Digital Payments, ERP Platforms, WhatsApp Automation, AI Solutions, Mobile Applications, and Cloud Infrastructure.
            </p>

            {/* Stats list */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-bg-alt">
              {/* Stat 1 */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-primary">
                  {inView ? <CountUp start={0} end={150} duration={2.5} suffix="+" /> : '0+'}
                </div>
                <div className="text-xs sm:text-sm text-text-secondary font-medium uppercase tracking-wider">
                  Team Members
                </div>
              </div>
              
              {/* Stat 2 */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-primary">
                  {inView ? <CountUp start={0} end={2000} duration={2.5} suffix="+" /> : '0+'}
                </div>
                <div className="text-xs sm:text-sm text-text-secondary font-medium uppercase tracking-wider">
                  Happy Clients
                </div>
              </div>

              {/* Stat 3 */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-primary">
                  {inView ? <CountUp start={0} end={99} duration={2.5} suffix="%" /> : '0%'}
                </div>
                <div className="text-xs sm:text-sm text-text-secondary font-medium uppercase tracking-wider">
                  Satisfaction
                </div>
              </div>
            </div>

            {/* Vision & Mission Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 text-primary border border-primary/15 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Vision: Global Technology Partner
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 text-primary border border-primary/15 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Mission: Secure &amp; Scalable Solutions
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
