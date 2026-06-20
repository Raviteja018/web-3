import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CreditCard, BarChart3, MessageSquare, ArrowRight } from 'lucide-react'

export default function ServicesPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  })

  const services = [
    {
      title: 'Payment Solutions',
      description: 'Comprehensive payment infrastructure — Payment Gateways, UPI APIs, QR Payments, Payout Solutions, Merchant Management, and Digital Collection Platforms.',
      Icon: CreditCard,
      path: '/services'
    },
    {
      title: 'Enterprise ERP Platforms',
      description: 'Integrated ERP to streamline Finance, Inventory, HR, Payroll, Attendance, Asset Management, and Reporting & Analytics across your organization.',
      Icon: BarChart3,
      path: '/services'
    },
    {
      title: 'WhatsApp Business Automation',
      description: 'Engage customers with intelligent WhatsApp Chatbots, Marketing Campaigns, Notifications, Order Tracking, CRM Integration, and AI-Powered Conversations.',
      Icon: MessageSquare,
      path: '/services'
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

  return (
    <section ref={ref} className="py-24 bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 text-left">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>Our Solutions</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-navy leading-tight">
              Intelligent Digital Solutions <br />
              for Every Business Need
            </h2>
          </div>
          <div>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-glow hover:-translate-y-0.5 group"
            >
              <span>View All Solutions</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Services Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, idx) => {
            const CardIcon = service.Icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.015, 
                  boxShadow: "0 20px 40px rgba(255, 107, 0, 0.12)",
                  borderColor: "rgba(255, 107, 0, 0.2)"
                }}
                whileTap={{ scale: 0.985 }}
                className="bg-white rounded-xl2 p-8 text-left border border-slate-200/50 flex flex-col justify-between h-full group cursor-pointer transition-colors duration-350"
              >
                <div>
                  {/* Icon Wrapper */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <CardIcon className="w-8 h-8" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-dark-navy mb-4 transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
