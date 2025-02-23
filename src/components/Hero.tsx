import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from './Particles';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('sobre-mí');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Particles />
      </div>
      
      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Emanuel Londoño
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-8"
        >
          <TypeAnimation
            sequence={[
              'Desarrollador Web',
              2000,
              'Frontend Developer',
              2000,
              'React Specialist',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <div className="relative flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 text-white rounded-full font-medium
                     hover:bg-primary-700 transform transition-all duration-300
                     shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
            onClick={scrollToAboutMe}
          >
            Ver más
          </motion.button>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8"
          >
            <ChevronDown className="w-10 h-12 text-primary-600 dark:text-primary-400" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}