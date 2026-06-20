import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, PenTool, Code2, Rocket, LifeBuoy } from 'lucide-react'

export default function OurWorkProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  })

  const steps = [
    {
      num: '01',
      title: 'Discover',
      description: 'Understanding your business requirements, objectives, and challenges to define the right solution.',
      Icon: Search
    },
    {
      num: '02',
      title: 'Design',
      description: 'Creating user-centric, scalable solution architectures and interface designs tailored to your needs.',
      Icon: PenTool
    },
    {
      num: '03',
      title: 'Develop',
      description: 'Building secure, reliable, and high-performance systems using industry-best engineering practices.',
      Icon: Code2
    },
    {
      num: '04',
      title: 'Deploy',
      description: 'Seamless implementation, integration, and go-live support ensuring a smooth transition.',
      Icon: Rocket
    },
    {
      num: '05',
      title: 'Support',
      description: 'Continuous monitoring, technical assistance, and proactive updates to keep your platform running perfectly.',
      Icon: LifeBuoy
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const circleVariants = {
    initial: { scale: 1, rotate: 0, backgroundColor: "var(--color-bg-alt)", color: "var(--color-primary)" },
    hover: { scale: 1.1, rotate: 15, backgroundColor: "var(--color-primary)", color: "#ffffff", boxShadow: "0 0 20px rgba(255,107,0,.45)" }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-8 flex items-center justify-center select-none">
        <span className="font-display font-black text-[12vw] text-dark-navy tracking-widest uppercase">
          Worldtek
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
            <span className="text-secondary font-extrabold">//</span>
            <span>Our Worldtek</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-navy leading-tight">
            How We Deliver Excellence
          </h2>
        </div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0" />

          {steps.map((step, idx) => {
            const StepIcon = step.Icon
            return (
              <motion.div
                key={step.num}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.99 }}
                className="relative flex flex-col items-center group text-center z-10 cursor-pointer"
              >
                {/* Step Circle & Icon */}
                <motion.div 
                  variants={circleVariants}
                  className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-md mb-6"
                  transition={{ duration: 0.4 }}
                >
                  
                  {/* Icon */}
                  <StepIcon className="w-10 h-10" />

                  {/* Step Number Badge */}
                  <span className="absolute top-0 right-0 w-8 h-8 rounded-full bg-dark-navy text-white text-xs font-display font-bold flex items-center justify-center border-2 border-white">
                    {step.num}
                  </span>
                </motion.div>

                {/* Text Content */}
                <h3 className="font-display font-bold text-xl text-dark-navy mb-3 transition-colors duration-300 group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Mobile/Tablet Connector Arrow */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-slate-200 my-4" />
                )}
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
