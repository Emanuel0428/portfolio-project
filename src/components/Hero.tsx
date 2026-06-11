import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from './Particles';
import { ChevronDown, Code2, Github, MapPin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <Particles />
      </div>
      
      {/* Decorative Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary-500/20 to-purple-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-primary-500/20 blur-3xl" />
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 text-sm text-gray-700 dark:text-gray-300"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span>Full Stack Developer & QA en <strong className="font-semibold">Nheo</strong></span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
            Emanuel
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Londoño
          </span>
        </motion.h1>
        
        {/* Role Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-8 font-light"
        >
          <TypeAnimation
            sequence={[
              'Desarrollador Full Stack',
              2000,
              'Especialista en TypeScript',
              2000,
              'Arquitecturas Escalables',
              2000,
              'QA & Testing',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Construyo aplicaciones web completas con mejoras medibles en rendimiento
          y eficiencia. Me enfoco en backends robustos, sistemas bien diseñados y en
          la integración de inteligencia artificial donde aporta valor real.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('proyectos')}
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-medium text-lg
                     hover:from-primary-700 hover:to-purple-700 transform transition-all duration-300
                     shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
          >
            <Code2 className="w-5 h-5" />
            <span>Ver Proyectos</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contacto')}
            className="flex items-center space-x-2 px-8 py-4 bg-white/10 dark:bg-gray-800/50 text-gray-900 dark:text-white rounded-full font-medium text-lg
                     hover:bg-white/20 dark:hover:bg-gray-700/50 transform transition-all duration-300
                     backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
          >
            <Mail className="w-5 h-5" />
            <span>Contáctame</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Emanuel0428"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-8 py-4 bg-white/10 dark:bg-gray-800/50 text-gray-900 dark:text-white rounded-full font-medium text-lg
                     hover:bg-white/20 dark:hover:bg-gray-700/50 transform transition-all duration-300
                     backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </motion.a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-gray-600 dark:text-gray-300 mb-16"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>Medellín, Colombia 🇨🇴</span>
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />
          <span>Inglés avanzado B2/C1</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />
          <span>Remoto / Híbrido</span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <motion.button
            onClick={() => scrollToSection('experiencia')}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}