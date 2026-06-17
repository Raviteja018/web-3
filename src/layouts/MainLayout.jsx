import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { motion } from 'framer-motion'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-main text-text-primary antialiased">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
