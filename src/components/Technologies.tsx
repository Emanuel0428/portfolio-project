import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Brain,
  Cloud,
  Star
} from 'lucide-react';

export default function Technologies() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    // Frontend
    {
      name: 'React',
      category: 'frontend',
      level: 90,
      icon: '⚛️',
      description: 'Framework para desarrollo de interfaces modernas y reactivas',
      projects: ['FlowForgeAI', 'Outside Project', 'WebApp Restaurante']
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      level: 85,
      icon: '🟦',
      description: 'JavaScript con tipado estático para código más robusto',
      projects: ['Todos los proyectos principales']
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      level: 88,
      icon: '🟨',
      description: 'Lenguaje base para desarrollo web dinámico',
      projects: ['All-in-One Fitness App', 'Backend APIs']
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 92,
      icon: '🎨',
      description: 'Framework CSS utility-first para diseños modernos',
      projects: ['Outside Project', 'Mercados Mi Punto', 'Portfolio']
    },
    {
      name: 'HTML/CSS',
      category: 'frontend',
      level: 95,
      icon: '🌐',
      description: 'Fundamentos de estructuración y estilización web',
      projects: ['Todos los proyectos web']
    },

    // Backend
    {
      name: 'Node.js',
      category: 'backend',
      level: 85,
      icon: '🟢',
      description: 'Runtime de JavaScript para desarrollo de servidores',
      projects: ['FlowForgeAI', 'Outside Project', 'Mercados Mi Punto']
    },
    {
      name: 'Express',
      category: 'backend',
      level: 82,
      icon: '🚀',
      description: 'Framework web minimalista para Node.js',
      projects: ['Mercados Mi Punto', 'WebApp Restaurante']
    },
    {
      name: 'Python',
      category: 'backend',
      level: 75,
      icon: '🐍',
      description: 'Lenguaje versátil para backend y procesamiento de datos',
      projects: ['Translation API', 'Match Cut']
    },
    {
      name: 'FastAPI',
      category: 'backend',
      level: 70,
      icon: '🔥',
      description: 'Framework moderno para construir APIs con Python',
      projects: ['Translation API']
    },
    {
      name: 'SQLite',
      category: 'backend',
      level: 78,
      icon: '💾',
      description: 'Base de datos ligera y confiable',
      projects: ['Mercados Mi Punto']
    },
    {
      name: 'PostgreSQL',
      category: 'backend',
      level: 72,
      icon: '🐘',
      description: 'Sistema de gestión de base de datos avanzado',
      projects: ['WebApp Restaurante']
    },

    // Tools & Services
    {
      name: 'Git',
      category: 'tools',
      level: 88,
      icon: '📦',
      description: 'Control de versiones para gestión de código',
      projects: ['Todos los proyectos']
    },
    {
      name: 'Zustand',
      category: 'tools',
      level: 80,
      icon: '🔄',
      description: 'Gestión de estado pequeña y escalable',
      projects: ['Mercados Mi Punto']
    },
    {
      name: 'Supabase',
      category: 'tools',
      level: 75,
      icon: '🔑',
      description: 'Backend-as-a-service con autenticación',
      projects: ['Outside Project']
    },
    {
      name: 'Vercel',
      category: 'tools',
      level: 85,
      icon: '▲',
      description: 'Plataforma de deployment para aplicaciones modernas',
      projects: ['Portfolio', 'Outside Project']
    },

    // AI/ML & Others
    {
      name: 'Machine Learning',
      category: 'ai',
      level: 70,
      icon: '🤖',
      description: 'Desarrollo de modelos de IA para análisis de datos',
      projects: ['FlowForgeAI']
    },
    {
      name: 'NLP',
      category: 'ai',
      level: 68,
      icon: '🧠',
      description: 'Procesamiento de lenguaje natural',
      projects: ['Translation API', 'FlowForgeAI']
    },
    {
      name: 'C#',
      category: 'ai',
      level: 60,
      icon: '🟣',
      description: 'Lenguaje orientado a objetos robusto',
      projects: ['Advanced Task Manager']
    },
    {
      name: 'Java',
      category: 'ai',
      level: 65,
      icon: '☕',
      description: 'Lenguaje multiplataforma y orientado a objetos',
      projects: ['Poker Exercise']
    }
  ];

  const filters = [
    { id: 'all', label: 'Todas', icon: Star, count: technologies.length },
    { id: 'frontend', label: 'Frontend', icon: Code2, count: technologies.filter(t => t.category === 'frontend').length },
    { id: 'backend', label: 'Backend', icon: Database, count: technologies.filter(t => t.category === 'backend').length },
    { id: 'tools', label: 'Herramientas', icon: Cloud, count: technologies.filter(t => t.category === 'tools').length },
    { id: 'ai', label: 'AI/ML & Otros', icon: Brain, count: technologies.filter(t => t.category === 'ai').length },
  ];

  const filteredTechnologies = selectedFilter === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedFilter);

  return (
    <section id="tecnologías" className="section-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-green-500/20 to-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 blur-3xl" />
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
            Stack <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Tecnológico</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Tecnologías que domino para crear soluciones innovadoras
          </motion.p>
        </div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = selectedFilter === filter.id;
            
            return (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{filter.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                }`}>
                  {filter.count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Technologies grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
              className="glass-card group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-3xl">{tech.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                    {tech.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 1.2 + index * 0.05 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {tech.level}%
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {tech.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {tech.projects.slice(0, 2).map((project, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                  >
                    {project}
                  </span>
                ))}
                {tech.projects.length > 2 && (
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    +{tech.projects.length - 2}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}