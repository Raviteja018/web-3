import { Link } from 'react-router-dom'
import { Activity, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6'
import companyLogo from '../../assets/images/company_logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-navy text-slate-300 relative border-t-4 border-primary pt-16 pb-8">
      {/* Scroll to top button */}
      <button
        onClick={handleScrollToTop}
        className="absolute top-0 right-8 md:right-16 transform -translate-y-1/2 w-12 h-12 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center shadow-glow transition-all duration-300 hover:-translate-y-6 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={companyLogo} alt="WorldTek Logo" className="h-9 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Transforming businesses with custom cutting-edge digital experiences, robust IT systems, and user-centric designs.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebookF, href: 'https://facebook.com' },
                { Icon: FaXTwitter, href: 'https://twitter.com' },
                { Icon: FaLinkedinIn, href: 'https://linkedin.com' },
                { Icon: FaInstagram, href: 'https://instagram.com' }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-primary text-slate-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Our Services
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: 'Website Development', path: '/services' },
                { name: 'Mobile App Development', path: '/services' },
                { name: 'IT Infrastructure Management', path: '/services' },
                { name: 'Cybersecurity Solutions', path: '/services' },
                { name: 'Cloud Services', path: '/services' },
                { name: 'Digital Marketing', path: '/services' },
                { name: 'Fintech & Utility Services', path: '/services' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-primary hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: 'Home Page', path: '/' },
                { name: 'About Company', path: '/about' },
                { name: 'Project Gallery', path: '/projects' },
                { name: 'Latest Blogs', path: '/blog' },
                { name: 'Join Our Team', path: '/careers' },
                { name: 'Privacy Policy', path: '/privacy-policy' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-primary hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  WorldTek Innovations Pvt. Ltd., Hyderabad, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+918500022226" className="hover:text-primary transition-colors">
                  +91 85000 22226
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:worldtek.in@gmail.com" className="hover:text-primary transition-colors">
                  worldtek.in@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-slate-800 my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>&copy; {currentYear} WorldTek. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
