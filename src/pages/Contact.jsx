import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, Ticket, Heart, Activity } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setForm({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-bg-main min-h-screen pb-24 font-sans text-left">
      {/* Banner / Hero header */}
      <section className="bg-dark-navy text-white py-24 relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')`
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

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl">Contact Us</h1>
            <p className="text-slate-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Get in touch with our tech experts to schedule a custom system design review.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Contact details & Office Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display font-black text-3xl text-dark-navy">
                Let's Build the Future Together
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Partner with Worldtek Innovations Pvt. Ltd. to transform your ideas into powerful digital solutions. Ready to accelerate your digital journey? Get in touch with our experts today.
              </p>
            </div>

            {/* Communication Info Cards */}
            <div className="space-y-3">
              {/* Phone Card */}
              <motion.a
                href="tel:+918500022226"
                whileHover={{ y: -4, scale: 1.015, boxShadow: "0 15px 30px rgba(255, 107, 0, 0.06)", borderColor: "rgba(255, 107, 0, 0.2)" }}
                whileTap={{ scale: 0.995 }}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl2 border border-slate-200/60 shadow-sm transition-all duration-300 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary font-semibold uppercase tracking-wider">Call Our Office</div>
                  <div className="font-display font-bold text-lg text-dark-navy mt-0.5">+91 85000 22226</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@worldtek.in"
                whileHover={{ y: -4, scale: 1.015, boxShadow: "0 15px 30px rgba(255, 107, 0, 0.06)", borderColor: "rgba(255, 107, 0, 0.2)" }}
                whileTap={{ scale: 0.995 }}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl2 border border-slate-200/60 shadow-sm transition-all duration-300 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary font-semibold uppercase tracking-wider">Email Support</div>
                  <div className="font-display font-bold text-lg text-dark-navy mt-0.5">info@worldtek.in</div>
                </div>
              </motion.a>

              {/* Address Card */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl2 border border-slate-200/60 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary font-semibold uppercase tracking-wider">Headquarters</div>
                  <div className="font-display font-bold text-sm sm:text-base text-dark-navy mt-0.5">
                    Worldtek Innovations Pvt. Ltd., Hyderabad, India
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl2 border border-slate-200/60 p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4 text-primary">
                <Clock className="w-5 h-5" />
                <span className="font-display font-bold text-lg text-dark-navy">Support Hours</span>
              </div>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                <li className="flex justify-between border-b border-bg-alt pb-1.5">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-dark-navy">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-bg-alt pb-1.5">
                  <span>Saturday</span>
                  <span className="font-semibold text-dark-navy">9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-bg-alt pb-1.5">
                  <span>Customer Assistance</span>
                  <span className="font-semibold text-green-600 text-xs tracking-wider mt-0.5">24×7</span>
                </li>
                <li className="flex justify-between">
                  <span>Emergency Support</span>
                  <span className="font-semibold text-green-600 text-xs tracking-wider mt-0.5">Always On</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Form & Support Portals */}
          <div className="lg:col-span-7 space-y-6">

            {/* Form */}
            <div className="bg-white rounded-xl2 border border-slate-200/60 shadow-md p-8 sm:p-10">
              <h3 className="font-display font-bold text-2xl text-dark-navy mb-6">Send A Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-bold text-dark-navy uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-bg-alt rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:border-primary/50 text-dark-navy"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-bold text-dark-navy uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-bg-alt rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:border-primary/50 text-dark-navy"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-bold text-dark-navy uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-bg-alt rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:border-primary/50 text-dark-navy"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-dark-navy uppercase tracking-wider">Message Description</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-bg-alt rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:border-primary/50 text-dark-navy"
                    placeholder="Describe your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full inline-flex items-center justify-center font-bold py-3.5 rounded-full transition-all duration-300 text-white ${submitted ? 'bg-green-500 shadow-none cursor-default' : 'bg-primary hover:bg-secondary shadow-glow hover:-translate-y-0.5'
                    }`}
                >
                  {submitted ? (
                    <span>Message Sent Successfully!</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Other channels support row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Support */}
              <motion.a
                href="https://wa.me/918500022226"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 15px 30px rgba(34, 197, 94, 0.08)" }}
                whileTap={{ scale: 0.99 }}
                className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm hover:border-green-500/30 transition-all duration-300 flex items-center space-x-3 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-dark-navy">WhatsApp Support</h4>
                  <p className="text-xs text-text-secondary">Instant chat click-to-connect</p>
                </div>
              </motion.a>

              {/* Support Ticket */}
              <motion.a
                href="mailto:worldtek.in@gmail.com?subject=Support%20Ticket%20Request"
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 15px 30px rgba(255, 107, 0, 0.08)" }}
                whileTap={{ scale: 0.99 }}
                className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm hover:border-primary/30 transition-all duration-300 flex items-center space-x-3 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Ticket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-dark-navy">Support Tickets</h4>
                  <p className="text-xs text-text-secondary">Submit general bug logs</p>
                </div>
              </motion.a>
            </div>

          </div>
        </div>

        {/* Embedded Interactive Map Card */}
        <section className="mt-8 bg-white rounded-xl2 border border-slate-200/60 p-4 shadow-md overflow-hidden">
          <div className="w-full h-[380px] rounded-xl overflow-hidden shadow-inner border border-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.486241743516!2d78.38006737599026!3d17.436421901375752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c55e94f%3A0xe7a56c382dfa52f4!2sCyber%20Towers!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WorldTek Office Location Map"
            />
          </div>
        </section>

      </div>
    </div>
  )
}
