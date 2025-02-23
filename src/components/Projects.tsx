import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico con React, Node.js y MongoDB.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      links: {
        demo: 'https://demo.com',
        github: 'https://github.com',
      },
    },
    {
      title: 'Task Manager',
      description: 'Aplicación de gestión de tareas con autenticación y tiempo real.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      links: {
        demo: 'https://demo.com',
        github: 'https://github.com',
      },
    },
    {
      title: 'Blog Platform',
      description: 'Plataforma de blog con CMS headless y generación estática.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
      tech: ['Next.js', 'Strapi', 'PostgreSQL', 'Tailwind CSS'],
      links: {
        demo: 'https://demo.com',
        github: 'https://github.com',
      },
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {projects[currentProject].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {projects[currentProject].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[currentProject].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full
                               bg-primary-100 dark:bg-primary-900/30
                               text-primary-700 dark:text-primary-300"
                    >
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
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg
                             bg-primary-600 text-white
                             hover:bg-primary-700 transition-colors"
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
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg
                             bg-gray-200 dark:bg-gray-700
                             text-gray-900 dark:text-white
                             hover:bg-gray-300 dark:hover:bg-gray-600
                             transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProject}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800
                     hover:bg-gray-300 dark:hover:bg-gray-700
                     transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProject}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800
                     hover:bg-gray-300 dark:hover:bg-gray-700
                     transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}