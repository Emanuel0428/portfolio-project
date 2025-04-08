import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Supermercado Online',
      description: 'Plataforma de comercio electrónico, gestión de inventario y domicilios con React, Node.js y SQL Lite.',
      image: '/images/mockup-mi-punto.webp?auto=format&fit=crop&q=80',
      tech: ['React', 'Node.js', 'SQLlite', 'Tailwind CSS', 'TypeScript'],
      links: {
        demo: 'https://mercados-mipunto-project.vercel.app/',
        github: 'https://github.com/Emanuel0428/mercados-mipunto-project',
      },
    },
    {
      title: 'Outside ',
      description: 'Plataforma para comercio en línea de vapes y ropa, con autenticación de usuario, sistema de compras, contacto y con mejoras del SEO.',
      image: '/images/mockup-outside.webp?auto=format&fit=crop&q=80',
      tech: ['React', 'Node.js','SupaBase', 'Tailwind CSS', 'TypeScript'],
      links: {
        demo: 'https://outside-project.vercel.app/',
        github: 'https://github.com/Emanuel0428/outside-project',
      },
    },
  ];

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="proyectos" className="section-container overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">
          Mis <span className="gradient-text">Proyectos</span>
        </h2>
      </motion.div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video md:aspect-auto">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  loading="lazy"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{projects[currentProject].title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{projects[currentProject].description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[currentProject].tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[currentProject].links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[currentProject].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-8 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProject}
            aria-label="Proyecto anterior"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${currentProject === index ? 'bg-primary-600' : 'bg-gray-300'}`}
                onClick={() => setCurrentProject(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProject}
            aria-label="Proyecto siguiente"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}