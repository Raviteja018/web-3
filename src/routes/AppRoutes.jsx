import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import TransformationalServices from '../pages/TransformationalServices'
import Products from '../pages/Products'
import Projects from '../pages/Projects'
import Careers from '../pages/Careers'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import PrivacyPolicy from '../pages/PrivacyStatement'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="transformational-services" element={<TransformationalServices />} />
        <Route path="products" element={<Products />} />
        <Route path="projects" element={<Projects />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  )
}
