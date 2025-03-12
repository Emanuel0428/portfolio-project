import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'work',
      title: 'Junior Frontend Developer',
      company: 'Outside Company',
      period: '2021 - Presente',
      description: 'Desarrollo de aplicaciones web con React, TypeScript y Tailwind. Implementación de soluciones accesibles y optimizadas para SEO. Colaboración en equipos ágiles bajo metodologías Scrum.',
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Techno Support',
      period: '2023 - Presente',
      description: 'Desarrollo y mantenimiento de plataformas web con React, Node.js y PostgreSQL. Integración de APIs y optimización del backend para mejorar tiempos de respuesta. Gestión de despliegues en entornos cloud.',
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      period: '2024 - Presente',
      description: 'Desarrollo de interfaces interactivas con Next.js y optimización de rendimiento con técnicas de SSR e ISR. Implementación de autenticación segura con OAuth y JWT.',
      icon: Briefcase,
    },
    {
      type: 'education',
      title: 'Ingeniería en Sistemas e Informática',
      company: 'Universidad Pontificia Bolivariana',
      period: '2022 - 2027',
      description: 'Formación en estructuras de datos, bases de datos y desarrollo web. Aplicación de conocimientos en proyectos como foros estudiantiles con IA y análisis de datos con Power BI.',
      icon: GraduationCap,
    },
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experiencia" className="section-container">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <h2 className="section-title">
          Mi <span className="gradient-text">Experiencia</span>
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5
                        bg-gradient-to-b from-primary-500 to-purple-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <exp.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="mb-2">
                      <span className="text-gray-600 dark:text-gray-300">{exp.company}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-primary-600 dark:text-primary-400">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2
                              w-8 h-8 rounded-full bg-primary-500
                              flex items-center justify-center
                              shadow-lg">
                  <exp.icon className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}