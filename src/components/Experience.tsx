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
      title: 'Desarrollador Full Stack & QA',
      company: 'Nheo · SaaS',
      period: 'May 2026 - Presente',
      location: 'Remoto',
      type: 'Startup',
      description: 'Desarrollo y aseguramiento de calidad en plataforma multi-tenant SaaS para call centers, con infraestructura cloud en AWS.',
      achievements: [
        'Desarrollo del módulo de billing completo: lógica de facturación, integración con base de datos y cobertura de pruebas end-to-end',
        'Implementación de suite de pruebas unitarias y automatizadas, garantizando estabilidad en arquitectura multi-tenant de alta criticidad',
        'Responsable de revisión de Pull Requests con feedback técnico, asegurando estándares de calidad en todo el código base'
      ],
      technologies: ['Next.js', 'Express', 'PostgreSQL', 'Docker Compose', 'AWS (EC2 + RDS)', 'CI/CD', 'GitHub Actions']
    },
    {
      title: 'Desarrollador Full Stack Freelance',
      company: 'Clínica Smiley · Sector salud',
      period: 'Mar 2025 - Jul 2025',
      location: 'Medellín, Colombia',
      type: 'Freelance',
      description: 'Desarrollo de plataforma web integral para gestión de citas médicas y administración interna de la clínica.',
      achievements: [
        'Diseño e implementación de aplicación web completa, reduciendo errores administrativos en un 45%',
        'Desarrollo de API REST con autenticación JWT y validaciones robustas, aumentando la confirmación de citas en un 35%',
        'Optimización de consultas en base de datos mediante indexación estratégica, logrando una mejora de velocidad del 50%'
      ],
      technologies: ['React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'JWT']
    },
    {
      title: 'Ingeniería en Sistemas e Informática',
      company: 'Universidad Pontificia Bolivariana',
      period: '2023 - Presente',
      location: 'Medellín, Colombia',
      type: 'Académico',
      description: 'Formación en ingeniería de software con énfasis en arquitectura, bases de datos y desarrollo de aplicaciones. Complementada con Técnico en Sistemas del SENA (2019 - 2021).',
      achievements: [
        'Diseño de arquitecturas: DDD, Clean Architecture, CQRS y principios SOLID',
        'Desarrollo de aplicaciones con bases de datos relacionales y NoSQL',
        'Gestión de proyectos de software con metodologías ágiles'
      ],
      technologies: ['Java', 'C#', 'Python', 'SQL', 'MongoDB', 'Arquitectura de Software']
    }
  ];

  return (
    <section id="experiencia" className="section-container relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-primary-500/15 to-purple-600/15 blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/15 to-primary-500/15 blur-[100px]" />
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
            De startup SaaS a proyectos freelance: mi trayectoria profesional en el desarrollo de software
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="flex gap-4 md:gap-8 items-start"
            >
              {/* Dot + vertical line column */}
              <div className="flex flex-col items-center self-stretch flex-shrink-0">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-white dark:bg-gray-900" />
                </div>
                {index < experiences.length - 1 && (
                  <div className="flex-1 w-0.5 mt-2 mb-0 bg-gradient-to-b from-primary-500/50 to-purple-600/20 rounded-full" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 pb-10">
                <div className="glass-card p-4 md:p-8 rounded-2xl md:rounded-3xl hover:scale-[1.01] transition-all duration-300">

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm md:text-base">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-row sm:flex-col sm:items-end gap-2 flex-shrink-0 flex-wrap">
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-xs">{exp.location}</span>
                      </div>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium w-fit">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-5">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 uppercase tracking-wide">
                      <Star className="w-3.5 h-3.5 text-primary-500" />
                      Logros destacados
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-snug">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 uppercase tracking-wide">
                      <Code2 className="w-3.5 h-3.5 text-primary-500" />
                      Tecnologías
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
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