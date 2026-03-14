import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <img src="https://outdoortransformation.ca/wp-content/uploads/2024/02/outdoortransformations_backyarddesignideas.jpg" alt="About Us" className="rounded-3xl shadow-2xl w-full h-auto object-cover" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-primary mb-1">15+</p>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">About Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">Crafting Nature's Masterpieces</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              We are a premier landscaping company dedicated to turning ordinary yards into extraordinary outdoor living spaces. Our team of certified professionals brings passion, precision, and creativity to every project.
            </p>
            <ul className="space-y-4 mb-10">
              {['Licensed & Insured Professionals', 'Custom 3D Landscape Design', 'Premium Quality Materials', '100% Satisfaction Guarantee'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-secondary" size={24} /> {item}
                </li>
              ))}
            </ul>
            <a href="#about" className="text-primary font-bold hover:text-blue-800 flex items-center gap-2 transition-colors">
              Learn More About Our Team <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
