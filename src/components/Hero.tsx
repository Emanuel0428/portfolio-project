import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-gray-900 dark:text-white mb-4"
        >
          Emanuel Londoño
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-primary-600 dark:text-primary-400 mb-8"
        >
          <TypeAnimation
            sequence={['Desarrollador Web', 2000, 'Desarrollador FullStack', 2000, 'Desarrollador Apasionado', 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex gap-10"
          >
            <ChevronDown className="w-10 h-12 text-primary-600 dark:text-primary-400" />
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('sobre-mí')}
              className="animate-pulse-slow px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Ver más
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('proyectos')}
              className="shadow-glow hover:shadow-glow-lg px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Ver proyectos
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}