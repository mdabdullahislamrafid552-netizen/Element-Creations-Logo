import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="pr-0 lg:pr-12"
          >
            <span className="text-sm font-bold tracking-widest uppercase text-secondary mb-4 block">Let's Connect</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Transform</span> Your Space?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 md:mb-16 font-light leading-relaxed">
              Contact us today for a free consultation and estimate. We're ready to bring your vision to life.
            </p>

            <div className="space-y-8 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={24} className="text-primary group-hover:text-white transition-colors md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-1">Call Us</h4>
                  <p className="text-gray-600 text-base md:text-lg font-medium">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={24} className="text-primary group-hover:text-white transition-colors md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-1">Email Us</h4>
                  <p className="text-gray-600 text-base md:text-lg font-medium break-all">info@elementcreations.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} className="text-primary group-hover:text-white transition-colors md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-1">Location</h4>
                  <p className="text-gray-600 text-base md:text-lg font-medium">Houston, TX & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            className="bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative mt-8 lg:mt-0"
          >
            {/* Subtle Gradient Border Effect */}
            <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] border-2 border-transparent bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-bold text-gray-700 mb-2 md:mb-3 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-300 text-base md:text-lg"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-bold text-gray-700 mb-2 md:mb-3 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-300 text-base md:text-lg"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-bold text-gray-700 mb-2 md:mb-3 uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-300 text-base md:text-lg"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-bold text-gray-700 mb-2 md:mb-3 uppercase tracking-wider">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-300 resize-none text-base md:text-lg"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 bg-primary text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl hover:bg-blue-800 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(30,58,138,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(30,58,138,0.7)] hover:-translate-y-1"
              >
                Send Message
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
