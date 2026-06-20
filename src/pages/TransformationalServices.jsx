import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Layers, 
  DollarSign, 
  Compass, 
  Smartphone, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  Zap,
  Globe,
  Settings
} from 'lucide-react'

export default function TransformationalServices() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  return (
    <div className="bg-bg-main min-h-screen pb-24 font-sans text-left">
      
      {/* Banner / Hero Header */}
      <section className="bg-dark-navy text-white py-28 relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-navy via-dark-navy/50 to-transparent z-10" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] z-10 animate-pulse-soft" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl space-y-6"
          >
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Worldtek <span className="text-brand-primary">Transformational</span> Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
              We don't just provide services, we craft experiences that propel your business into the future. Our visionary solutions are designed to ignite innovation, drive efficiency, and unlock new opportunities for growth. From cutting-edge technology to unparalleled expertise, we're committed to empowering your organization to thrive in a rapidly evolving digital landscape. Experience the WorldTek difference and embark on a journey of transformation today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-28">

        {/* Section 1: Core Integrated Services (ERP, Payments, Custom) */}
        <section ref={ref1} className="space-y-12">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center space-x-2 text-brand-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-brand-secondary font-extrabold">//</span>
              <span>Core Pillars</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
              Integrated Technology Ecosystem
            </h2>
            <p className="text-text-secondary text-base">
              Connecting front-end engagement with back-end operations through robust enterprise solutions.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Card 1: ERP POS Solutions */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl2 shadow-lg border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
            >
              {/* Slide-in Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-white/20 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl text-dark-navy group-hover:text-white transition-colors duration-300">
                  ERP &amp; POS Solutions
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  We deliver seamless ERP and POS integrations that connect your front-end sales with back-end operations in real time. By synchronizing inventory, billing, customer data, and financial records, we eliminate manual errors and enable faster decision-making. Whether you’re in retail, hospitality, or distribution, our integrated systems help streamline workflows, improve accuracy, and boost overall efficiency. With Worldtek, you get a unified technology ecosystem that keeps every part of your business connected and in sync.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Easy Payment */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl2 shadow-lg border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
            >
              {/* Slide-in Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-white/20 group-hover:text-white transition-all duration-300 shadow-sm">
                  <DollarSign className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl text-dark-navy group-hover:text-white transition-colors duration-300">
                  Easy Payment
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Our solutions are designed to make digital transactions truly effortless—streamlining the entire payment experience for both businesses and their customers. We support a wide range of payment methods, including UPI, credit/debit cards, wallets, net banking, and QR-based payments, ensuring flexibility and convenience at every step. With seamless integration into your existing web, mobile, ERP, or POS platforms, our systems enhance operational efficiency while preserving your workflow.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Customised Solutions */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl2 shadow-lg border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
            >
              {/* Slide-in Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-white/20 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl text-dark-navy group-hover:text-white transition-colors duration-300">
                  Customised Solutions
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Our IT Consulting services are designed to help businesses navigate the fast-changing technology landscape with confidence. We assess your current systems, identify opportunities for improvement, and craft tailored strategies that align technology with your business goals. From infrastructure planning and software selection to digital transformation and risk management, our experts provide actionable insights and hands-on guidance. Whether you're scaling up, optimizing operations, or starting fresh.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 2: Simplify Your Payment Solutions */}
        <section ref={ref2} className="bg-slate-900 text-white rounded-xl2 p-8 sm:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-secondary/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 space-y-16">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              className="max-w-3xl space-y-4 text-left"
            >
              <div className="inline-flex items-center space-x-2 text-brand-primary font-bold tracking-wider text-sm uppercase">
                <span className="text-brand-secondary font-extrabold">//</span>
                <span>Simply Payment</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Simplify Your Payment Solutions
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                We Believe in simplifying the Payment Process for Businesses of all sizes. Our SimplyPayment Solutions are Designed to Streamline Transactions, Enhance Security, and Provide a Seamless Experience for Both Merchants and Customers.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* gate-img1: POS Solutions */}
              <motion.div 
                variants={fadeInUp}
                className="bg-slate-800/80 rounded-xl border border-slate-700/50 overflow-hidden flex flex-col justify-between hover:shadow-glow-orange transition-all duration-300 group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=600&q=80" 
                      alt="Pos Solutions" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-brand-primary" />
                      Pos Solutions
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We're Revolutionizing the Way Businesses Engage With their Customers at the Point of Sale. Our Cutting-edge POS solutions are Designed to Streamline Transactions, optimize Operations, and Elevate the Customer Experience to New Heights.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* gate-img2: Payment Gateway Solutions */}
              <motion.div 
                variants={fadeInUp}
                className="bg-slate-800/80 rounded-xl border border-slate-700/50 overflow-hidden flex flex-col justify-between hover:shadow-glow-orange transition-all duration-300 group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80" 
                      alt="Payment Gateway Solutions" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-brand-primary" />
                      Payment Gateway Solutions
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We understand that seamless transactions are essential for your business's success. That's why we offer cutting-edge payment gateway services designed to streamline the payment process, enhance security, and provide a frictionless experience for both merchants and customers.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* gate-img3: Sms Pay / Qrpe */}
              <motion.div 
                variants={fadeInUp}
                className="bg-slate-800/80 rounded-xl border border-slate-700/50 overflow-hidden flex flex-col justify-between hover:shadow-glow-orange transition-all duration-300 group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" 
                      alt="Sms Pay / Qrpe" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-brand-primary" />
                      Sms Pay / Qrpe
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We're redefining the payment experience with our innovative SMS Pay and QRPE solutions. Say goodbye to cash and cards – with just a simple text message or scan of a QR code, Transactions have never been Easier.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              className="flex justify-center"
            >
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-brand-secondary/30 hover:-translate-y-0.5 group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Economical Technology Solutions */}
        <section ref={ref3} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 text-brand-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-brand-secondary font-extrabold">//</span>
              <span>Cost-Effective Quality</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-navy leading-tight">
              Economical Technology Solutions
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              At Worldtek, we deliver economical technology solutions that don’t compromise on quality. Our approach is centered around smart, scalable, and efficient tech that minimizes cost while maximizing performance.
            </p>
            
            {/* Visual Callout */}
            <div className="bg-brand-primary/5 border-l-4 border-brand-primary p-6 rounded-r-2xl">
              <p className="text-brand-primary font-black text-lg font-display uppercase tracking-wider mb-1">
                Our Philosophy
              </p>
              <p className="text-slate-700 text-sm font-semibold italic">
                "Making technology work for you, not against you."
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            className="lg:col-span-7 space-y-6"
          >
            {/* Feature Point 1 */}
            <motion.div 
              variants={fadeInUp}
              className="flex gap-6 p-6 bg-white rounded-xl shadow-md border border-slate-100/80 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-lg text-dark-navy">
                  Seamless Experience
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Whether you're a startup or an enterprise, we design systems that reduce resource waste, automate repetitive tasks, and streamline operations.
                </p>
              </div>
            </motion.div>

            {/* Feature Point 2 */}
            <motion.div 
              variants={fadeInUp}
              className="flex gap-6 p-6 bg-white rounded-xl shadow-md border border-slate-100/80 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-lg text-dark-navy">
                  Accessibility &amp; Sustainability
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Helping you achieve more with less. With Worldtek, cutting-edge technology becomes accessible, practical, and sustainable for every business.
                </p>
              </div>
            </motion.div>

            {/* Feature Point 3 */}
            <motion.div 
              variants={fadeInUp}
              className="flex gap-6 p-6 bg-white rounded-xl shadow-md border border-slate-100/80 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Settings className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-lg text-dark-navy">
                  Replacing Complexity with Simplicity
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  At Worldtek, we believe that true innovation lies in making the complex simple. Our mission is to replace overwhelming systems and confusing processes with clean, user-friendly solutions that deliver real value. Whether it’s through intuitive software, streamlined workflows, or seamless integrations, we specialize in transforming complexity into clarity. With Worldtek, businesses can focus on growth, while we handle the intricacies behind the scenes.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </section>

      </div>
    </div>
  )
}
