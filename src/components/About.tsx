import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Users, GraduationCap, Github } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const values = [
    {
      icon: Code2,
      title: 'Excelencia Técnica',
      description: 'Desarrollo código limpio, escalable y mantenible aplicando principios SOLID y mejores prácticas de la industria.'
    },
    {
      icon: Users,
      title: 'Trabajo Colaborativo',
      description: 'Experiencia en equipos multidisciplinarios, metodologías ágiles y contribución activa a proyectos open source.'
    },
    {
      icon: GraduationCap,
      title: 'Innovación Constante',
      description: 'Combinando conocimientos académicos sólidos con exploración de tecnologías emergentes como IA y ML.'
    }
  ];

  return (
    <section id="sobre-mí" className="section-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Sobre <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Mí</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Conoce más sobre mi trayectoria y pasión por el desarrollo
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mi Historia</h3>
            </div>              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Soy <strong>Emanuel Londoño</strong>, estudiante de 6to semestre de Ingeniería en Sistemas e Informática 
                en la <strong>Universidad Pontificia Bolivariana</strong> de Medellín. Mi pasión por la tecnología 
                me impulsa a crear soluciones innovadoras con impacto real.
              </p>
              <p>
                Mi trayectoria comenzó con curiosidad por entender cómo funcionan las aplicaciones diarias. 
                Desde entonces, he evolucionado hacia el desarrollo full-stack, especializándome en 
                <strong>React, TypeScript, Node.js y Python</strong>, con creciente interés en IA y machine learning.
              </p>
              <p>
                Durante mi formación, he combinado fundamentos teóricos con proyectos prácticos, 
                desarrollando desde <strong>sistemas de e-commerce completos</strong> hasta plataformas de 
                inteligencia artificial como <strong>FlowForgeAI</strong>. Mi enfoque busca siempre 
                excelencia técnica e innovación.
              </p>
              <p>
                Actualmente exploro las fronteras entre desarrollo web moderno e inteligencia artificial, 
                integrando <strong>machine learning</strong> con interfaces intuitivas y experiencias 
                digitales excepcionales.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Code2 className="w-8 h-8 text-primary-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mis Valores</h3>
            </div>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¡Colaboremos juntos!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Siempre estoy abierto a nuevos proyectos y oportunidades de aprendizaje. 
              Si tienes una idea en mente, ¡hablemos!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Emanuel0428"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-medium hover:from-primary-600 hover:to-purple-700 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>Ver mi GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}