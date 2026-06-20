import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, ShieldCheck, Settings, HeartHandshake, Layers, Users, ArrowRight } from 'lucide-react'

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  })

  const features = [
    {
      title: 'Innovation-Driven Approach',
      description: 'We leverage emerging technologies to create future-ready solutions that keep your business ahead of the curve.',
      Icon: Lightbulb
    },
    {
      title: 'Secure & Reliable',
      description: 'Designed with enterprise-grade security and scalability, our platforms protect what matters most to your organization.',
      Icon: ShieldCheck
    },
    {
      title: 'Customized Solutions',
      description: 'Tailor-made platforms built to suit your unique business requirements — no one-size-fits-all templates.',
      Icon: Settings
    },
    {
      title: 'End-to-End Support',
      description: 'From consultation and implementation to maintenance and support — we are with you every step of the journey.',
      Icon: HeartHandshake
    },
    {
      title: 'Scalable Architecture',
      description: 'Solutions engineered from the ground up to grow seamlessly alongside your business and user base.',
      Icon: Layers
    },
    {
      title: 'Experienced Team',
      description: 'A cross-functional team of technology experts committed to delivering excellence on every engagement.',
      Icon: Users
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section ref={ref} className="py-24 bg-dark-navy text-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 text-left">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>Why Choose Worldtek</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Why Trust Us for Your Digital Needs?
            </h2>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-glow hover:-translate-y-0.5 group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-slate-800 h-[380px]">
              {/* Presentation/Meeting Background Image */}
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                alt="WorldTek Digital Solutions"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/40 transition-colors duration-300 z-10" />

              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md text-white font-display font-bold text-[10px] tracking-wider px-3.5 py-2 rounded-lg select-none border border-slate-700/50">
                <span>Innovation at Scale</span>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 grid grid-cols-3 gap-2">
                {[
                  { label: 'Uptime', value: '99.99%' },
                  { label: 'Projects', value: '500+' },
                  { label: 'Support', value: '24×7' }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900/80 backdrop-blur-md rounded-lg p-2 border border-slate-700/50 text-center">
                    <div className="text-primary font-black text-sm">{stat.value}</div>
                    <div className="text-slate-400 text-[9px] uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Features Grid */}
          <motion.div 
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {features.map((feat, idx) => {
              const FeatIcon = feat.Icon
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start space-x-4 text-left group"
                >
                  {/* Icon Wrapper */}
                  <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300 flex-shrink-0 shadow-md">
                    <FeatIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  {/* Description text */}
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg text-white transition-colors duration-300 group-hover:text-primary">
                      {feat.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>

      </div>
    </section>
  )
}
