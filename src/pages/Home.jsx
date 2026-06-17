import Hero from '../components/home/Hero'
import AboutPreview from '../components/home/AboutPreview'
import OurWorkProcess from '../components/home/OurWorkProcess'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ServicesPreview from '../components/home/ServicesPreview'
import ProjectsPreview from '../components/home/ProjectsPreview'
import FAQ from '../components/home/FAQ'
import Testimonials from '../components/home/Testimonials'

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Header Banner */}
      <Hero />

      {/* About Company Overview & Stats */}
      <AboutPreview />

      {/* Structured Step Timeline */}
      <OurWorkProcess />

      {/* Why Choose Us Video Mockup & Key Values */}
      <WhyChooseUs />

      {/* Services Grid List Preview */}
      <ServicesPreview />

      {/* Projects Showcase Mockups */}
      <ProjectsPreview />

      {/* Testimonials Review Cards */}
      <Testimonials />

      {/* FAQ Accordion & Support Cards */}
      <FAQ />
    </div>
  )
}
