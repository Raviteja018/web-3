import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import companyLogo from '../../assets/images/company_logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add shadow and background-blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/transformational-services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-100 shadow-md py-1.5'
            : 'bg-white border-transparent py-2.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">

            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={companyLogo}
                  alt="WorldTek Logo"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-bold text-sm transition-all duration-300 relative py-2.5 px-4 rounded-full ${isActive
                      ? 'text-primary bg-primary/5'
                      : 'text-text-secondary hover:text-primary hover:bg-slate-100/50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-transparent hover:bg-primary border border-primary text-primary hover:text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-full text-text-primary hover:text-primary hover:bg-slate-100/80 focus:outline-none transition-all duration-200"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-full left-4 right-4 mt-2 z-40 md:hidden bg-white/98 backdrop-blur-lg border border-slate-100 rounded-xl2 shadow-2xl p-5 overflow-hidden"
            >
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 ${isActive
                        ? 'text-primary bg-primary/5 border-l-4 border-primary'
                        : 'text-text-secondary hover:text-primary hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="pt-4 px-1">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full inline-flex items-center justify-center bg-primary hover:bg-secondary text-white font-bold py-3 rounded-xl shadow-glow transition-all duration-300 text-sm"
                  >
                    <span>Get A Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to push content below sticky navbar */}
      <div className="h-[68px] bg-white"></div>
    </>
  )
}
