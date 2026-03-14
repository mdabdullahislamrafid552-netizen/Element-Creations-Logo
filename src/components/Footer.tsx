import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
      {/* Subtle Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-blue-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="mb-8 block">
              <img
                src="https://i.imgur.com/ULwsgwG.png"
                alt="Element Creations Logo"
                className="h-16 w-auto drop-shadow-lg object-contain bg-white/80 p-2 rounded-xl"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-gray-400 mb-8 leading-relaxed font-light">
              Professional landscaping and outdoor design services tailored to enhance the beauty, functionality, and value of your home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-secondary transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Our Services</h4>
            <ul className="space-y-4">
              {['Landscaping', 'Hardscaping', 'Tree Services', 'Irrigation', 'Outdoor Lighting'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-secondary transition-colors font-medium">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Contact Us</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-center gap-4">
                <MapPin size={20} className="text-secondary" />
                <span className="font-medium">Houston, TX</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-secondary" />
                <span className="font-medium">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-secondary" />
                <span className="font-medium">info@elementcreations.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Element Creations. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
