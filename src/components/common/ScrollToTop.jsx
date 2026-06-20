import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Track scroll position to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary hover:shadow-brand-secondary/30 transition-all border border-white/10 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
