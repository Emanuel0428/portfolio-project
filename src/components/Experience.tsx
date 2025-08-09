import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  MapPin, 
  Code2, 
  Star
} from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Desarrollador Full-Stack',
      company: 'Proyectos Personales',
      period: '2022 - Presente',
      location: 'Medellín, Colombia',
      type: 'Independiente',
      description: 'Desarrollo de aplicaciones web completas desde el diseño hasta el deployment, enfocándome en tecnologías modernas y mejores prácticas.',
      achievements: [
        'Desarrollo de FlowForgeAI - Plataforma de asistencia empresarial con ML',
        'Outside Project - E-commerce completo con carrito y autenticación',
        'Mercados Mi Punto - Sistema de gestión para supermercados',
        'WebApp Restaurante - Aplicación completa para gestión de restaurantes',
        'All in One Fitness App - Aplicación integral para seguimiento de fitness'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'Supabase']
    },
    {
      title: 'Estudiante de Ingeniería de Sistemas e Informática',
      company: 'Universidad Pontificia Bolivariana',
      period: '2023 - Presente',
      location: 'Colombia',      type: 'Académico',
      description: 'Formación académica integral en Ingeniería de Sistemas e Informática. Actualmente cursando 6to semestre con sólidos conocimientos en programación, matemáticas aplicadas, bases de datos, arquitectura de computadores y desarrollo de software.',
      achievements: [
        'Dominio avanzado de algoritmos y estructuras de datos complejas',
        'Desarrollo de aplicaciones con bases de datos relacionales y NoSQL',
        'Implementación de arquitecturas de software escalables y mantenibles',
        'Diseño de patrones arquitectónicos: MVC, MVP, MVVM y Clean Architecture',
        'Desarrollo de microservicios y arquitecturas distribuidas',
        'Implementación de principios SOLID y patrones de diseño',
        'Modelamiento matemático y análisis de sistemas computacionales',
        'Desarrollo de aplicaciones móviles nativas e híbridas',
        'Gestión de proyectos de software con metodologías ágiles',
        'Análisis y diseño de sistemas de información empresariales',
        'Implementación de soluciones de inteligencia artificial básica',
        'Desarrollo de sistemas operativos y programación de bajo nivel',
        'Proyectos colaborativos interdisciplinarios con equipos multifuncionales'
      ],
      technologies: ['Java', 'C#', 'Python', 'JavaScript', 'SQL', 'MongoDB', 'Android Studio', 'Machine Learning', 'Arquitectura de Software', 'Patrones de Diseño', 'Microservicios', 'Clean Architecture', 'Metodologías Ágiles']
    }
  ];

  return (
    <section id="experiencia" className="section-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-primary-500/20 to-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-primary-500/20 blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Mi <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experiencia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Mi trayectoria en el desarrollo de software
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 md:left-8 top-16 w-0.5 h-32 bg-gradient-to-b from-primary-500 to-purple-600 opacity-30" />
              )}

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white dark:bg-gray-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="glass-card p-8 rounded-3xl hover:scale-[1.01] transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col lg:items-end mt-4 lg:mt-0 space-y-2">
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                          <span className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                        <Star className="w-4 h-4 text-primary-500" />
                        <span>Logros destacados:</span>
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                        <Code2 className="w-4 h-4 text-primary-500" />
                        <span>Tecnologías utilizadas:</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}