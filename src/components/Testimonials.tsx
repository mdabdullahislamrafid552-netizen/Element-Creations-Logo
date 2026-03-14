import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Homeowner',
      text: 'Element Creations completely transformed our backyard. Their team was professional, on time, and the quality of work is outstanding. The attention to detail is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Property Manager',
      text: 'We use them for all our properties. Reliable, well-priced, and they always leave the site cleaner than they found it. A true partner in property maintenance.',
      rating: 5,
    },
    {
      name: 'Emily Thompson',
      role: 'Homeowner',
      text: 'The new patio and pergola they built is exactly what we wanted. Highly recommend their hardscaping services! It has become our favorite "room" in the house.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold tracking-widest uppercase text-secondary mb-4 block">Client Success</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Words From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Partners</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
              Don't just take our word for it. Read what our satisfied customers have to say about their transformations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 60 }}
              className="relative bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(30,58,138,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
            >
              {/* Large Background Quote Icon */}
              <Quote className="absolute -top-6 -right-6 text-slate-50 w-40 h-40 -rotate-12 group-hover:text-primary/5 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-8 text-yellow-400 drop-shadow-sm">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 mb-10 text-lg leading-relaxed font-serif italic">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-secondary font-semibold uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
