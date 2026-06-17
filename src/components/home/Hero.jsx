import { ArrowRight, CheckCircle2, PlayCircle, BarChart3, Users, CreditCard, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B1120] overflow-hidden pt-6 lg:pt-6 pb-6" id="home">

      {/* Very subtle background grid for texture */}
      <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">

        {/* Left Content - Sharp, Minimal Typography */}
        <div className="flex flex-col items-start max-lg:items-center max-lg:text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/5 text-brand-primary border border-brand-primary/10 rounded-full font-bold text-xs uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            WorldTek Innovations Pvt. Ltd.
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.05] text-white mb-6 tracking-tight uppercase">
            Empowering <br className="hidden lg:block" /> businesses with <br className="hidden lg:block" /> <span className="text-brand-primary relative">WORLDTEK.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-accent/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,0" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl font-medium leading-relaxed">
            Where Innovation Knows No Bounds. At <span className="text-brand-primary font-bold">WorldTek</span>, we're not just another tech company – we're pioneers, visionaries, and dreamers. We believe in pushing the boundaries of what's possible and redefining the future of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-[1rem] rounded-xl bg-brand-primary text-white shadow-lg shadow-brand-primary/20 transition-all hover:bg-brand-secondary hover:-translate-y-0.5"
            >
              Start Building <ArrowRight size={20} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-[1rem] rounded-xl bg-slate-800 text-white border-2 border-slate-700 transition-all hover:border-slate-600 hover:bg-slate-700"
            >
              <PlayCircle size={20} className="text-brand-primary" /> Learn More
            </a>
          </div>

        </div>

        {/* Right Content - Dynamic Tech Graphic with Animated AI Neural Core */}
        <div className="relative w-full max-w-[450px] aspect-square mx-auto lg:max-w-none lg:h-[600px] lg:aspect-auto flex items-center justify-center mt-2 lg:mt-0">

          {/* Ambient Background Glowing Orbs */}
          <div className="absolute w-[400px] h-[400px] bg-brand-primary/15 rounded-full blur-[100px] animate-pulse-soft z-0" />
          <div className="absolute w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-[80px] animate-pulse-soft z-0 delay-1000" />

          {/* SVG AI Neural Network Connections & Concentric Rings */}
          <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
            <defs>
              <radialGradient id="aiCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f97009" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#e65c00" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0B1120" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="primaryPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97009" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f7d272" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="accentPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7d272" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#e65c00" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Glowing core backdrop */}
            <circle cx="250" cy="250" r="140" fill="url(#aiCoreGlow)" />

            {/* Animated Synaptic Connection Lines to Cards */}
            <g>
              {/* Connection Line to Uptime Card (Top-Left: 80, 120) */}
              <motion.path 
                d="M 250 250 Q 150 160 80 120" 
                stroke="url(#primaryPathGrad)" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="6,6"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
              <circle cx="80" cy="120" r="3.5" fill="#f97009" className="animate-ping" style={{ transformOrigin: '80px 120px' }} />

              {/* Connection Line to Security Card (Bottom-Left: 100, 380) */}
              <motion.path 
                d="M 250 250 Q 160 320 100 380" 
                stroke="url(#primaryPathGrad)" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="6,6"
                animate={{ strokeDashoffset: [0, 24] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              />
              <circle cx="100" cy="380" r="3.5" fill="#10B981" className="animate-ping" style={{ transformOrigin: '100px 380px' }} />

              {/* Connection Line to Transactions Card (Middle-Right: 420, 240) */}
              <motion.path 
                d="M 250 250 Q 350 230 420 240" 
                stroke="url(#accentPathGrad)" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="6,6"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <circle cx="420" cy="240" r="3.5" fill="#f7d272" className="animate-ping" style={{ transformOrigin: '420px 240px' }} />
            </g>

            {/* Concentric rotating telemetry ring (outer) */}
            <motion.g 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              style={{ transformOrigin: "250px 250px" }}
            >
              <circle cx="250" cy="250" r="130" stroke="#f97009" strokeWidth="1" strokeDasharray="5,20" fill="none" opacity="0.35" />
              <circle cx="250" cy="250" r="115" stroke="#f7d272" strokeWidth="1.25" strokeDasharray="15,45" fill="none" opacity="0.5" />
              <circle cx="380" cy="250" r="4.5" fill="#f97009" />
              <circle cx="120" cy="250" r="4.5" fill="#f7d272" />
            </motion.g>

            {/* Core tech ring (inner) */}
            <motion.g 
              animate={{ rotate: -360 }} 
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              style={{ transformOrigin: "250px 250px" }}
            >
              <circle cx="250" cy="250" r="80" stroke="#f97009" strokeWidth="1.5" strokeDasharray="12,12" fill="none" opacity="0.6" />
              <circle cx="250" cy="170" r="4" fill="#f97009" />
              <circle cx="250" cy="330" r="4" fill="#f7d272" />
            </motion.g>

            {/* Diagnostic Expanding Scan Waves */}
            <motion.circle 
              cx="250" 
              cy="250" 
              r="170" 
              stroke="#f97009" 
              strokeWidth="0.75" 
              fill="none" 
              animate={{ scale: [0.25, 1], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
            />
            <motion.circle 
              cx="250" 
              cy="250" 
              r="170" 
              stroke="#f7d272" 
              strokeWidth="0.5" 
              fill="none" 
              animate={{ scale: [0.25, 1], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeOut" }}
            />
          </svg>

          {/* Central AI Core Element */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-slate-900/80 border border-slate-700/50 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center z-10 backdrop-blur-xl cursor-pointer"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Spinning active loading segment */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-brand-primary/20 border-t-brand-primary"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
            {/* Counter-spinning second segment */}
            <motion.div 
              className="absolute inset-2 rounded-full border border-dashed border-brand-accent/20 border-t-brand-accent"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
            
            {/* Glowing Core center */}
            <div className="w-24 h-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent rounded-full shadow-[0_0_40px_rgba(249,112,9,0.6)] flex flex-col items-center justify-center text-white relative overflow-hidden group">
              <Activity size={32} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
              <span className="text-[9px] font-black tracking-widest uppercase mt-1 relative z-10 select-none">AI CORE</span>
              
              {/* Core light sweep */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ translateX: ["100%", "-100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Orbiting Ring 1 (Inner Orbit with blue node) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[350px] aspect-square border border-slate-800/40 rounded-full z-10 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {/* Orbit Node */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4.5 h-4.5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] border-2 border-white/25" />
          </motion.div>

          {/* Orbiting Ring 2 (Outer Orbit with brand-primary node) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] max-w-[490px] aspect-square border border-slate-800/20 rounded-full z-10 pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {/* Orbit Node */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(249,112,9,0.8)] border-2 border-white/25" />
          </motion.div>

          {/* Floating Card 1: Performance */}
          <motion.div 
            className="absolute top-[15%] left-[5%] bg-slate-900/85 backdrop-blur-xl border border-slate-700/50 rounded-xl lg:rounded-2xl p-2 pr-4 lg:p-4 lg:pr-8 shadow-2xl z-20 flex items-center gap-2 lg:gap-4 cursor-pointer select-none"
            whileHover={{ scale: 1.05, y: -5 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.2 }
            }}
          >
            <div className="w-9 h-9 lg:w-14 lg:h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex-shrink-0">
              <Activity className="w-5 h-5 lg:w-6 lg:h-6 animate-pulse" />
            </div>
            <div>
              <p className="text-[0.55rem] lg:text-[0.65rem] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Uptime</p>
              <p className="text-sm lg:text-2xl font-black text-white">99.99%</p>
            </div>
          </motion.div>

          {/* Floating Card 2: Security */}
          <motion.div 
            className="absolute bottom-[15%] left-[10%] bg-slate-900/85 backdrop-blur-xl border border-slate-700/50 rounded-xl lg:rounded-2xl p-2 pr-4 lg:p-4 lg:pr-8 shadow-2xl z-20 flex items-center gap-2 lg:gap-4 cursor-pointer select-none"
            whileHover={{ scale: 1.05, y: -5 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              scale: { duration: 0.2 }
            }}
          >
            <div className="w-9 h-9 lg:w-14 lg:h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)] flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div>
              <p className="text-[0.55rem] lg:text-[0.65rem] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Security</p>
              <p className="text-sm lg:text-2xl font-black text-white">Bank-Grade</p>
            </div>
          </motion.div>

          {/* Floating Card 3: Payments */}
          <motion.div 
            className="absolute top-[40%] right-0 lg:right-[-5%] bg-slate-900/85 backdrop-blur-xl border border-slate-700/50 rounded-xl lg:rounded-2xl p-2 pr-4 lg:p-4 lg:pr-8 shadow-2xl z-20 flex items-center gap-2 lg:gap-4 cursor-pointer select-none"
            whileHover={{ scale: 1.05, y: -5 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              scale: { duration: 0.2 }
            }}
          >
            <div className="w-9 h-9 lg:w-14 lg:h-14 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shadow-[0_0_20px_rgba(249,112,9,0.2)] flex-shrink-0">
              <CreditCard className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div>
              <p className="text-[0.55rem] lg:text-[0.65rem] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Transactions</p>
              <p className="text-sm lg:text-2xl font-black text-white">Seamless</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}