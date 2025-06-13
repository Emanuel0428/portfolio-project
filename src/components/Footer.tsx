import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2, Coffee, Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Emanuel0428',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/emanuel-londono',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      href: 'mailto:emanuel.londono@example.com',
      label: 'Email',
      color: 'hover:text-primary-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-primary-500/5 to-purple-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/5 to-primary-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Logo and tagline */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="w-4 h-4 text-primary-400" />
                </motion.div>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Emanuel Londoño
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Frontend Developer
                </div>
              </div>
            </motion.div>

            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
              Construyendo experiencias web excepcionales con pasión y dedicación
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-3 rounded-xl bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm border border-white/10 dark:border-gray-700/10 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.label}
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </motion.a>
            ))}
          </div>

          {/* Made with love section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 dark:text-gray-300"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <span>Hecho con</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </motion.div>
              <span>y mucho</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Coffee className="w-5 h-5 text-amber-600" />
              </motion.div>
            </motion.div>

            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />

            <div className="flex items-center space-x-2">
              <span>Desarrollado con</span>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-blue-600">React</span>
                <span>&</span>
                <span className="font-medium text-primary-600">TypeScript</span>
              </div>
            </div>
          </motion.div>

          {/* Copyright and scroll to top */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200/20 dark:border-gray-700/20">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
              © {currentYear} Emanuel Londoño. Todos los derechos reservados.
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-purple-600 text-white text-sm font-medium hover:from-primary-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-primary-500/25"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Fun stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">∞</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Ideas creativas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Disponibilidad</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Dedicación</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">∞</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Aprendizaje</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}