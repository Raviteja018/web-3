import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Activity, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-dark-navy text-white">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/95 via-dark-navy/80 to-transparent z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            className="lg:col-span-8 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Subtitle */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider text-sm sm:text-base uppercase"
            >
              <span>Innovation • Development • Digital Transformation</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
            >
              Empowering Businesses <br />
              Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">WorldTek</span> Technology
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans"
            >
              Delivering innovative digital solutions that help businesses grow, transform, and succeed in a rapidly evolving digital world.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-glow hover:-translate-y-0.5 group"
              >
                <span>Explore More</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center text-white hover:text-primary font-bold px-4 py-3 text-base relative after:content-[''] after:absolute after:bottom-1.5 after:left-4 after:right-4 after:h-[1px] after:bg-white/40 hover:after:bg-primary transition-colors duration-300"
              >
                View All Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating AI Cognitive Neural Panel in Right Column */}
          <motion.div 
            className="lg:col-span-4 relative h-[380px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Ambient Background Glowing Orb */}
            <div className="absolute w-72 h-72 rounded-full bg-primary/25 blur-[90px] z-0 animate-pulse pointer-events-none" />

            {/* Visual Card 1: AI Agent Monitor */}
            <motion.div
              className="absolute top-4 left-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 w-56 shadow-2xl flex items-center space-x-3 z-20 backdrop-blur-sm select-none"
              animate={{ 
                y: [0, -12, 0],
                x: [0, 6, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center relative">
                <Cpu className="w-5 h-5 animate-pulse" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary border border-slate-900 animate-ping" />
              </div>
              <div className="text-left">
                <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cognitive Engine</h4>
                <p className="text-sm font-display font-black text-white">AI Agent Active</p>
              </div>
            </motion.div>

            {/* Visual Card 2: Neural Synapse Guard */}
            <motion.div
              className="absolute bottom-6 left-12 bg-slate-900/95 border border-slate-800 rounded-2xl p-4 w-60 shadow-2xl flex items-center space-x-3.5 z-10 backdrop-blur-sm select-none"
              animate={{ 
                y: [0, 15, 0],
                x: [0, -8, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-left">
                <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Neural Synapse</h4>
                <p className="text-sm font-display font-black text-white">Threat Shield Online</p>
              </div>
            </motion.div>

            {/* Visual Card 3: Deep Compute Statistics */}
            <motion.div
              className="absolute top-1/3 right-4 bg-slate-900/85 border border-slate-800 rounded-2xl p-5 w-52 shadow-2xl flex flex-col space-y-2.5 z-20 backdrop-blur-sm select-none"
              animate={{ 
                y: [0, -18, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-slate-500 font-bold tracking-wider uppercase">Neural Compute</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-xl font-display font-black text-white">98.4 TFLOPs</p>
                <p className="text-[10px] text-slate-400">Inference Response Speed</p>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-primary to-accent h-full"
                  animate={{ width: ["20%", "85%", "45%", "92%", "35%", "99%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Stylized Orbiting AI / ML Nodes */}
            {[
              { label: 'AI', color: 'from-[#ff6b00] to-[#ff9d00]', top: '2%', right: '40%', delay: 1.5 },
              { label: 'ML', color: 'from-[#8a2be2] to-[#da70d6]', bottom: '15%', right: '5%', delay: 2 },
              { label: 'LLM', color: 'from-[#00c6ff] to-[#0072ff]', top: '55%', left: '-2%', delay: 0.8 }
            ].map((node, idx) => (
              <motion.div
                key={idx}
                className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${node.color} text-white font-display font-black text-[10px] flex items-center justify-center shadow-lg border border-slate-700/30 select-none z-10`}
                style={{ 
                  top: node.top, 
                  bottom: node.bottom, 
                  left: node.left, 
                  right: node.right 
                }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                  y: [0, 8, 0]
                }}
                transition={{ 
                  duration: 8 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.delay
                }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                {node.label}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
