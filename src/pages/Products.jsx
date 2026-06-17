import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { productsData } from '../data/products'
import { ArrowRight, Cpu, Layers, Sparkles, Plus, Minus } from 'lucide-react'

export default function Products() {
  const [activeFaq, setActiveFaq] = useState(-1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="bg-bg-main min-h-screen pb-24 font-sans text-left">
      {/* Banner / Hero header */}
      <section className="bg-dark-navy text-white py-24 relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80')`
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
            <div className="text-primary font-bold tracking-wider text-sm uppercase mb-2">
              <span className="text-secondary font-extrabold">//</span> Ready-to-deploy platforms
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl">Our Products</h1>
            <p className="text-slate-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Streamline enterprise workflows, automate data, and optimize customer transactions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

        {/* Core Product Grid */}
        <section className="mb-20">
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>Proprietary Ecosystem</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
              Enterprise Software Products
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {productsData.map((prod, idx) => {
              const ProdIcon = prod.icon
              return (
                <motion.div
                  key={prod.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(255, 107, 0, 0.08)", borderColor: "rgba(255, 107, 0, 0.2)" }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-white rounded-xl2 p-6 shadow-sm border border-bg-alt transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <ProdIcon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-dark-navy group-hover:text-primary transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-bg-alt flex items-center justify-between text-xs font-bold text-primary group-hover:text-secondary transition-colors">
                    <span>Request Demo</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* Feature Panel */}
        <section className="bg-bg-alt rounded-xl2 border border-slate-200/40 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Integration Support</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-dark-navy">
                Looking for a Custom Integration?
              </h3>
              <p className="text-text-secondary text-sm sm:text-base">
                Our team can configure, extend, and deploy our ERP and CRM products to integrate seamlessly into your legacy payment portals and database configurations.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-glow"
              >
                <span>Consult Our Team</span>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Our Products */}
        <section className="my-24 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
                <span className="text-secondary font-extrabold">//</span>
                <span>Product Advantages</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy leading-tight">
                Out-of-the-Box Power, Fully Customized
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Our proprietary suite of business software offers pre-built module reliability with 100% customization support. Save months of development time while launching highly secure, compliant, and branded software assets.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Reduce TTM by 60%', desc: 'Launch complete ERP, CRM, and eCommerce platforms in a fraction of standard scratch timelines.' },
                { title: 'Scale-Ready Core', desc: 'Engineered on high-throughput database layers designed to manage millions of concurrent user sessions.' },
                { title: 'ISO & VAPT Compliant', desc: 'Every product codebase undergoes regular penetration testing (VAPT) and conforms to ISO 27001 standard frameworks.' },
                { title: 'Modular Architecture', desc: 'Easily toggle integrations (SMS gateways, trusted banking APIs, payment portals) with zero code conflicts.' }
              ].map((adv, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02, borderColor: "rgba(255, 107, 0, 0.25)", boxShadow: "0 15px 30px rgba(255, 107, 0, 0.08)" }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-white rounded-xl p-6 border border-slate-200/50 shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <h4 className="font-display font-bold text-lg text-dark-navy mb-2">{adv.title}</h4>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Integration FAQs Accordion */}
        <section className="my-24 text-left">
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="text-secondary font-extrabold">//</span>
              <span>Product FAQs</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-navy">
              Integration & Deployment FAQs
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {[
              {
                q: 'Are your ERP and CRM systems cloud-hosted or on-premise?',
                a: 'We support both! Our products can be deployed directly to your secure cloud clusters (AWS, GCP, Azure) or installed on-premise on private local servers depending on compliance parameters.'
              },
              {
                q: 'Can we integrate third-party payment gateways into your retail POS?',
                a: 'Yes, our POS and E-commerce platforms support direct modular integrations with all major payment systems, banking APIs, and regional SMS confirmation systems.'
              },
              {
                q: 'How do you handle software customisation requests?',
                a: 'We treat our ready-to-deploy platforms as a foundational code shell. Our engineers build custom features, reporting layouts, and workflow fields directly on top of the shell.'
              },
              {
                q: 'Do you offer custom integrations with banking portals?',
                a: 'Yes, we have verified API templates and established relations with major banking nodes (SBI, ICICI, Yes Bank, KVB, HDFC) to configure secure real-time transaction reporting.'
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
