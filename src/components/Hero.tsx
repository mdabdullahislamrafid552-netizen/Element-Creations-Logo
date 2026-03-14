import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

const backgroundImages = [
  "https://pristinegreenaz.com/BV-Fire-pit-wide-shot-scaled.jpg",
  "https://urbanoasisllc.com/wp-content/uploads/2021/03/Screenshot_2021-03-09-Bellevue-Backyard-Renovation.png",
  "https://urbanexteriors.com.au/wp-content/uploads/outdoor-transformations-13-patio-pergolas-sydney-with-sunroom-extension.jpg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex]}
            alt="Landscaping Project"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/90" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="max-w-4xl"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-md">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm">Premium Landscaping Services</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-[1.1] drop-shadow-lg">
            Transform Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-300 drop-shadow-sm">
              Outdoor Space
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-10 max-w-2xl leading-relaxed font-light drop-shadow-md">
            Expert landscaping, hardscaping, and outdoor design tailored to elevate your property's beauty and value.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a href="#contact" className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-blue-800 transition-all shadow-[0_0_20px_rgba(29,78,216,0.4)] hover:shadow-[0_0_30px_rgba(29,78,216,0.6)] flex items-center justify-center gap-2 hover:-translate-y-1 text-base md:text-lg">
              Start Your Project <ArrowRight size={22} />
            </a>
            <a href="#portfolio" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-white/20 hover:border-white/50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 text-base md:text-lg">
              <ImageIcon size={22} /> Explore Portfolio
            </a>
          </div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-secondary scale-125' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
