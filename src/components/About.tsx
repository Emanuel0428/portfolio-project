import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Coffee, Globe } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const skills = [
    { icon: Code2, text: 'Desarrollo Web Full Stack' },
    { icon: Brain, text: 'Resolución de Problemas' },
    { icon: Coffee, text: 'Aprendizaje Continuo' },
    { icon: Globe, text: 'Trabajo Remoto' },
  ];

  return (
    <section id="sobre-mí" className="section-container">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div className="relative">
          <motion.div
            className="relative w-full aspect-square rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80"
              alt="Foto de perfil de Emanuel Londoño"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-600/20 dark:bg-primary-900/30" />
          </motion.div>
        </motion.div>

        <div className="space-y-6">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Sobre <span className="gradient-text">Mí</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Soy un desarrollador web apasionado por crear experiencias digitales excepcionales.
            Me especializo en el desarrollo frontend con React, typescript y tailwind, además tengo experiencia en el stack
            completo de desarrollo web moderno usando frameworks como express.js.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 p-3 rounded-lg
                         bg-gray-50 dark:bg-gray-800
                         shadow-sm hover:shadow-md
                         transition-all duration-300"
              >
                <skill.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{skill.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}