import { motion } from 'framer-motion'
import { Eye, Rocket, Lightbulb, ShieldCheck, HeartHandshake, Award, Building2, Sparkles, Target, Zap } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const values = [
    {
      title: 'Innovation',
      description: 'Continuously exploring new technologies and creative solutions.',
      Icon: Lightbulb
    },
    {
      title: 'Quality',
      description: 'Maintaining the highest standards in every project we deliver.',
      Icon: ShieldCheck
    },
    {
      title: 'Customer Satisfaction',
      description: 'Ensuring exceptional client experiences and measurable business outcomes.',
      Icon: HeartHandshake
    },
    {
      title: 'Long-Term Partnerships',
      description: 'Building lasting relationships based on trust, transparency, and success.',
      Icon: Award
    }
  ]

  const bankingPartners = [
    { name: 'State Bank of India', short: 'SBI', color: 'from-[#00a5ec] to-[#0070c0]' },
    { name: 'ICICI Bank', short: 'ICICI', color: 'from-[#f58220] to-[#b83c08]' },
    { name: 'AU Small Finance', short: 'AU', color: 'from-[#e65a00] to-[#ff9800]' },
    { name: 'Yes Bank', short: 'YES', color: 'from-[#0054a6] to-[#009bdf]' },
    { name: 'Karur Vysya Bank', short: 'KVB', color: 'from-[#007a3d] to-[#8dc63f]' },
    { name: 'HDFC Bank', short: 'HDFC', color: 'from-[#004c8f] to-[#003060]' }
  ]

  const certifications = [
    { name: 'VAPT Certified', desc: 'Vulnerability Assessment and Penetration Testing compliance' },
    { name: 'PCI DSS Compliant', desc: 'Payment Card Industry Data Security Standard secure payment processing' },
    { name: 'ISO 9001 Certified', desc: 'International quality management system standards' },
    { name: 'ISO 27001 Certified', desc: 'Information security management standards' },
    { name: 'Secure Infrastructure Standards', desc: 'Encrypted databases and secure hosting environments' }
  ]

  return (
    <div className="bg-bg-main min-h-screen pb-24 font-sans">
      {/* Banner / Hero header */}
      <section className="bg-dark-navy text-white py-24 relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')`
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

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl">About WorldTek</h1>
            <p className="text-slate-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Innovating Digital & Smart Solutions to empower businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

        {/* Company Overview Section */}
        <section className="bg-white rounded-xl2 shadow-md p-8 sm:p-12 mb-16 border border-bg-alt text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
                Worldtek Innovations Pvt. Ltd.
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full" />
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                Worldtek Innovations Pvt. Ltd. is a technology-driven company focused on delivering next-generation digital solutions for Government Departments, Enterprises, Financial Institutions, Healthcare Organizations, Educational Institutions, and Businesses. Our expertise spans Digital Payments, ERP Platforms, WhatsApp Automation, AI Solutions, Mobile Applications, Web Platforms, POS Ecosystems, and Cloud Infrastructure.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                With innovation at the core, we create intelligent systems that improve efficiency, increase transparency, and drive sustainable growth.
              </p>
            </div>
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute -inset-2 rounded-xl2 bg-gradient-to-r from-primary to-accent opacity-20 blur-lg" />
              <div className="relative w-full h-64 rounded-xl2 bg-dark-navy flex flex-col justify-center p-8 text-white border border-slate-800">
                <span className="font-display font-black text-6xl text-primary mb-2">Smart</span>
                <span className="font-display font-bold text-3xl text-slate-300">Software Solutions</span>
                <p className="text-slate-400 text-xs mt-3">Tailored architectures engineered for security, scaling, and high-performance throughput.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Row */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
          {/* Vision Card */}
          <motion.div
            className="bg-white rounded-xl2 border border-bg-alt shadow-md p-8 sm:p-10 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-display font-black text-2xl text-dark-navy">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                To become a trusted global technology partner by empowering organizations with innovative digital ecosystems.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm sm:text-base">
                {[
                  'Lead the global transition toward smart, secure, and unified digital ecosystems.',
                  'Pioneer next-generation advancements in AI automation and fintech platforms.',
                  'Establish a trusted, long-term technological framework for enterprises and governments.',
                  'Empower businesses to scale effortlessly by turning complex systems into clean designs.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-white rounded-xl2 border border-bg-alt shadow-md p-8 sm:p-10 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="font-display font-black text-2xl text-dark-navy">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                To provide secure, scalable, and intelligent solutions that transform businesses and improve customer experiences.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm sm:text-base">
                {[
                  'Deliver secure, scalable, and intelligent digital solutions.',
                  'Empower Government Departments and Enterprises with smart technology.',
                  'Build long-term partnerships based on trust and transparency.',
                  'Drive innovation through emerging technologies like AI and automation.',
                  'Create meaningful experiences that improve efficiency and growth.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Core Values Section */}
        <section className="mb-20 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>Our Principles</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">Our Core Values</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((val, idx) => {
              const ValIcon = val.Icon
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="bg-white rounded-xl2 border border-bg-alt shadow-md p-8 text-center group hover:-translate-y-1.5 transition-all duration-300 hover:shadow-glow relative overflow-hidden"
                >
                  {/* Slide-in Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                      <ValIcon className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-dark-navy group-hover:text-white transition-colors duration-300 mb-2">{val.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary group-hover:text-white/90 transition-colors duration-300 leading-relaxed">{val.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* Why Choose WorldTek (Marketing Advantages) */}
        <section className="mb-20 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
                <span className="text-secondary font-extrabold">//</span>
                <span>Why Choose WorldTek</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy leading-tight">
                Driving Competitive Advantages For Your Business
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                At WorldTek, we blend cutting-edge technological expertise with deep business domain logic. We don't just deliver software; we create future-proof digital assets that streamline operational costs, secure critical customer workflows, and scale infinitely.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Accelerated Time-to-Market', desc: 'Pre-engineered module components and agile delivery methods save up to 40% of development timelines.' },
                  { title: 'Zero Compromise Security', desc: 'Embedded compliance architectures checking every API call, transaction block, and DB record for threat immunity.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-navy text-base">{item.title}</h4>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Custom Engineering Focus',
                  desc: 'Every system we develop is tailored directly to your specific database structures and legacy APIs, avoiding standard cookie-cutter layouts.',
                  Icon: Target
                },
                {
                  title: 'Vibrant Innovation Stack',
                  desc: 'We actively adopt cutting-edge advancements in cloud architectures, real-time sync systems, and secure transaction workflows.',
                  Icon: Sparkles
                },
                {
                  title: 'Trusted Domain Experts',
                  desc: 'Our cross-functional teams hold senior industry experience building systems for retail POS, medical clinics, and enterprise fintech engines.',
                  Icon: Award
                },
                {
                  title: 'Enterprise Scalability Core',
                  desc: 'Engineered from day one to scale elastically on standard cloud containers, managing massive bursts in user interactions.',
                  Icon: Building2
                }
              ].map((card, idx) => {
                const CardIcon = card.Icon
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02, boxShadow: "0 15px 30px rgba(255, 107, 0, 0.08)" }}
                    whileTap={{ scale: 0.99 }}
                    className="bg-white rounded-xl2 p-6 border border-slate-200/50 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <CardIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-dark-navy mb-2">{card.title}</h4>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{card.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-20 bg-bg-alt rounded-xl2 border border-bg-alt p-10 sm:p-12 text-center">
          <div className="max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-xs sm:text-sm uppercase">
              <Building2 className="w-5 h-5" />
              <span>Industries We Serve</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-dark-navy">Trusted Across Every Sector</h3>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
              From Government Departments and Financial Institutions to Healthcare and Retail — we deliver tailored digital solutions across every industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Government Departments', icon: '🏛️' },
              { name: 'Banking & Financial Services', icon: '🏦' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Education', icon: '🎓' },
              { name: 'Retail & E-Commerce', icon: '🛒' },
              { name: 'Hospitality', icon: '🏨' },
              { name: 'Manufacturing', icon: '🏭' },
              { name: 'Logistics & Transportation', icon: '🚛' },
              { name: 'Real Estate', icon: '🏢' },
              { name: 'Small & Medium Enterprises', icon: '💼' }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.03, borderColor: 'rgba(255,107,0,0.25)', boxShadow: '0 12px 24px rgba(255,107,0,0.08)' }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl p-5 border border-slate-200/50 shadow-sm transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-2 text-center"
              >
                <span className="text-3xl">{industry.icon}</span>
                <h4 className="font-display font-bold text-xs sm:text-sm text-dark-navy leading-snug">{industry.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Engineering Lifecycle */}
        <section className="my-24 text-left">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>Our Workflow Blueprint</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
              Our Development Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: '01', title: 'Blueprint & Design', desc: 'Detailed wireframing, architecture blueprinting, compliance planning, and secure DB schema designs.' },
              { step: '02', title: 'Agile Construction', desc: 'Iterative sprint models, standard CI/CD deployment pipelines, and constant sandbox reviews.' },
              { step: '03', title: 'VAPT & Quality Gate', desc: 'Rigorous automated tests, human code reviews, and strict Vulnerability Penetration testing.' },
              { step: '04', title: 'Scaling & Ops', desc: 'Cloud migration, server clustering, elastic scaling triggers, and 24/7 support structures.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02, borderColor: "rgba(255,107,0,0.2)", boxShadow: "0 15px 30px rgba(255,107,0,0.06)" }}
                whileTap={{ scale: 0.99 }}
                className="bg-white rounded-xl p-6 border border-bg-alt shadow-sm relative group transition-all duration-300 cursor-pointer"
              >
                <span className="font-display font-black text-4xl text-primary/10 group-hover:text-primary/25 transition-colors absolute top-4 right-6 select-none">{item.step}</span>
                <h4 className="font-display font-bold text-lg text-dark-navy mb-3 mt-4 transition-colors duration-300 group-hover:text-primary">{item.title}</h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
