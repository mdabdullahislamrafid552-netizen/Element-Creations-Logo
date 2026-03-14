import { motion } from 'motion/react';
import { Shovel, TreePine, Droplets, Hammer } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shovel size={36} />,
      title: 'Landscaping',
      description: 'Complete landscape design and installation to create your perfect outdoor oasis.',
    },
    {
      icon: <Hammer size={36} />,
      title: 'Hardscaping',
      description: 'Custom patios, walkways, and retaining walls built with premium materials.',
    },
    {
      icon: <TreePine size={36} />,
      title: 'Tree Services',
      description: 'Professional tree trimming, removal, and health assessments by certified arborists.',
    },
    {
      icon: <Droplets size={36} />,
      title: 'Irrigation',
      description: 'Smart sprinkler systems designed for optimal water efficiency and plant health.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold tracking-widest uppercase text-secondary mb-4 block">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Outdoor Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
              Elevating properties with meticulous design, premium materials, and unparalleled craftsmanship.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 60 }}
              className="group bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(30,58,138,0.15)] hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-500/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
