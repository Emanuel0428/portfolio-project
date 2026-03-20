import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Filter, Eye, Code2, Sparkles, Bot, Store, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  tech: string[];
  category: 'ai' | 'ecommerce' | 'webapp' | 'api' | 'mobile';
  links: {
    demo?: string;
    github: string;
  };
  features: string[];
  status: 'completed' | 'in-progress';
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 2,
      title: 'All-in-One Fitness App V.1',
      description: 'Aplicación completa de fitness con tracking de ejercicios, planes personalizados y métricas de progreso.',
      fullDescription: 'Aplicación integral de fitness desarrollada en colaboración que combina tracking de ejercicios, planes de entrenamiento personalizados, seguimiento nutricional y análisis de progreso. Incluye tanto frontend como backend API.',
      images: [
        'https://i.postimg.cc/jdZd11YD/Captura-de-pantalla-2025-06-13-191332.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/zGQDzRB5/Captura-de-pantalla-2025-06-13-191441.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/Hkns1tTB/Captura-de-pantalla-2025-06-13-191538.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/tTQXPQWM/Captura-de-pantalla-2025-06-13-191652.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/s2ZjvDQW/Captura-de-pantalla-2025-06-13-191723.png?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['TypeScript', 'React', 'JavaScript', 'Node.js', 'Express'],
      category: 'webapp',
      links: {
        demo: 'https://www.allinonefitnessapp.online/',
        github: 'https://github.com/dano796/all-in-one-fitness-app',
      },
      features: [
        'Tracking de ejercicios y rutinas',
        'Planes de entrenamiento personalizados',
        'Seguimiento nutricional',
        'Métricas de progreso avanzadas',
        'API backend robusta',
        'Sincronización en tiempo real'
      ],
      status: 'completed'
    },
    {
      id: 3,
      title: 'Outside Project',
      description: 'E-commerce moderno para la marca Outside, especializada en vapes y ropa urbana.',
      fullDescription: 'Plataforma de comercio electrónico completa para la marca Outside, diseñada con un enfoque moderno y urbano. Incluye gestión de productos, carrito de compras, autenticación de usuarios y panel administrativo para la gestión del inventario.',
      images: [
        'https://i.postimg.cc/dtk97sxm/Outside-Mock.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/mr7y2mhY/image.jpg?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/BZFPWjLF/Captura-de-pantalla-2025-06-13-150553.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/xTykCBPT/Captura-de-pantalla-2025-06-13-150807.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/TYXLTTg4/Captura-de-pantalla-2025-06-13-150847.png?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Vite'],
      category: 'ecommerce',
      links: {
        demo: 'https://outside-project.vercel.app/',
        github: 'https://github.com/Emanuel0428/outside-project',
      },
      features: [
        'Diseño moderno y urbano',
        'Catálogo de productos por categorías',
        'Sistema de carrito de compras',
        'Autenticación de usuarios',
        'Panel administrativo',
        'Diseño completamente responsive'
      ],
      status: 'completed'
    },
    {
      id: 4,
      title: 'TimeLock App',
      description: 'App Android híbrida para gestionar el tiempo de pantalla con modo Pomodoro, sistema de tokens, desafíos y bloqueo de aplicaciones.',
      fullDescription: 'Aplicación móvil para Android construida con React y Capacitor que ayuda a controlar el uso del teléfono. Incluye un modo Pomodoro con fases de enfoque y descanso, un sistema de tokens que recompensa los buenos hábitos, desafíos personalizables, bloqueo nativo de apps y métricas detalladas por hora del día. Publicada en la Play Store.',
      images: [
        "https://i.postimg.cc/L58GZybf/brave-screenshot-emanuel0428-github-io.png",
        "https://i.postimg.cc/6qpFGHmZ/brave-screenshot-emanuel0428-github-io-(1).png",
        "https://i.postimg.cc/90QsqxnR/brave-screenshot-emanuel0428-github-io-(2).png"
      ],
      tech: ['React', 'TypeScript', 'Capacitor', 'Tailwind CSS', 'Android'],
      category: 'mobile',
      links: {
        demo: 'https://emanuel0428.github.io/TimeLockApp/',
        github: 'https://github.com/Emanuel0428/TimeLockApp',
      },
      features: [
        'Modo Pomodoro con fases de enfoque y descanso personalizables',
        'Sistema de tokens: recompensas automáticas por buenos hábitos',
        'Desafíos con motor de evaluación automatizada',
        'Bloqueo nativo de apps con permisos UsageStats y Overlay',
        'Dashboard con métricas detalladas por hora del día',
        'Publicada en Google Play Store'
      ],
      status: 'completed'
    },
    {
      id: 5,
      title: 'Mercados Mi Punto',
      description: 'Aplicación web de e-commerce para productos frescos de alta calidad con funcionalidades avanzadas.',
      fullDescription: 'Una plataforma completa de comercio electrónico especializada en productos frescos. Incluye un sistema robusto de gestión de inventario, autenticación JWT, carrito persistente y un panel administrativo para la gestión completa del negocio.',
      images: [
        'https://i.postimg.cc/SKX0DTmb/Captura-de-pantalla-2025-06-13-184721.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/C5gWMwkw/Captura-de-pantalla-2025-06-13-184755.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/ZnxXCXxp/Captura-de-pantalla-2025-06-13-184806.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/Gp6WNFp8/Captura-de-pantalla-2025-06-13-185102.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/nz7ytXsd/Captura-de-pantalla-2025-06-13-185115.png?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['TypeScript', 'React', 'Node.js', 'SQLite', 'Express', 'JWT', 'Zustand'],
      category: 'ecommerce',
      links: {
        demo: 'https://mercados-mipunto-project.vercel.app/',
        github: 'https://github.com/Emanuel0428/mercados-mipunto-project',
      },
      features: [
        'Gestión completa de productos frescos',
        'Sistema de autenticación JWT',
        'Carrito persistente con Zustand',
        'Panel administrativo completo',
        'Base de datos SQLite optimizada',
        'Checkout y gestión de pedidos'
      ],
      status: 'completed'
    },
    {
      id: 1,
      title: 'FlowForgeAI',
      description: 'Asistente inteligente para negocios que brinda estrategias personalizadas según la información recopilada.',
      fullDescription: 'Una plataforma avanzada de inteligencia artificial diseñada para ayudar a todo tipo de negocios. Utiliza machine learning para analizar datos empresariales y generar estrategias personalizadas que impulsen el crecimiento y la eficiencia operativa.',
      images: [
        'https://i.postimg.cc/sxTwFzJ6/Captura-de-pantalla-2025-06-13-190058.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/htzMYHQs/Captura-de-pantalla-2025-06-13-190144.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/2jGHLdfQ/Captura-de-pantalla-2025-06-13-190153.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/RVbXXMhq/Captura-de-pantalla-2025-06-13-190219.png?auto=format&fit=crop&q=80&w=800&h=600',
        'https://i.postimg.cc/yYNLmJVw/Captura-de-pantalla-2025-06-13-190228.png?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['TypeScript', 'React', 'Node.js', 'AI/ML', 'Business Intelligence'],
      category: 'ai',
      links: {
        demo: 'https://flowforge-ai.netlify.app/',
        github: 'https://github.com/Emanuel0428/FlowForgeAI',
      },
      features: [
        'Análisis inteligente de datos empresariales',
        'Generación de estrategias personalizadas',
        'Dashboard interactivo con métricas',
        'Integración con APIs de business intelligence',
        'Reportes automatizados',
        'Interfaz intuitiva para usuarios no técnicos'
      ],
      status: 'completed'
    },
    {
      id: 6,
      title: 'WebApp Restaurante',
      description: 'Aplicación web moderna para gestión de restaurantes con funcionalidades de reservas y menús.',
      fullDescription: 'Sistema integral para la gestión de restaurantes que incluye manejo de menús digitales, sistema de reservas, gestión de mesas y análisis de ventas. Diseñado para optimizar la experiencia tanto del cliente como del personal del restaurante.',
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1559329007-40df8bdfa999?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
      category: 'webapp',
      links: {
        github: 'https://github.com/Emanuel0428/WebApp-Restaurante',
      },
      features: [
        'Sistema de reservas online',
        'Menús digitales interactivos',
        'Gestión de mesas y personal',
        'Dashboard de analytics',
        'Notificaciones en tiempo real',
        'Integración con sistemas de pago'
      ],
      status: 'completed'
    },
    {
      id: 7,
      title: 'Translation API',
      description: 'API desarrollada en Python para la traducción automática de archivos PDF y DOCX.',
      fullDescription: 'API especializada en la traducción de documentos que soporta múltiples formatos de archivo. Utiliza tecnologías modernas de procesamiento de texto y APIs de traducción para ofrecer resultados precisos y rápidos.',
      images: [
        'https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1515378791036-0648a814c963?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['Python', 'FastAPI', 'NLP', 'PDF Processing', 'DOCX'],
      category: 'api',
      links: {
        github: 'https://github.com/Emanuel0428/translation_api',
      },
      features: [
        'Soporte para archivos PDF y DOCX',
        'Múltiples idiomas de traducción',
        'Procesamiento batch de documentos',
        'API RESTful bien documentada',
        'Preservación de formato original',
        'Respuestas rápidas y precisas'
      ],
      status: 'completed'
    },
    {
      id: 8,
      title: 'Generador de Ideas de Videos',
      description: 'Sistema de IA avanzado para creación de contenido viral usando web scraping de tendencias y análisis predictivo.',
      fullDescription: 'Un sistema completamente automatizado que genera ideas de videos optimizadas para diferentes redes sociales usando Inteligencia Artificial, web scraping de tendencias reales y análisis predictivo de viralidad. Utiliza Gemini 2.0 Flash para generar contenido de alta calidad con múltiples tipos de contenido por red social.',
      images: [
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['Python', 'Gemini AI', 'Web Scraping', 'Pandas', 'OpenPyXL'],
      category: 'ai',
      links: {
        github: 'https://github.com/Emanuel0428/Generador-Ideas-Videos',
      },
      features: [
        'Generación inteligente con Gemini 2.0 Flash',
        'Web scraping de tendencias en tiempo real',
        'Optimización por red social (TikTok, YouTube, Instagram)',
        'Análisis predictivo de viralidad (score 70-95)',
        'Exportación profesional a Excel con 4 hojas',
        'Sistema de puntuación automático de calidad'
      ],
      status: 'completed'
    },
    {
      id: 9,
      title: 'Match Cut Generator',
      description: 'Generador de videos con efectos de texto dinámicos y transiciones suaves usando múltiples proveedores de IA.',
      fullDescription: 'Un generador avanzado de videos con efectos de texto dinámicos, enfocado en crear transiciones suaves y efectos visuales atractivos. Incluye interfaz web intuitiva, efectos visuales avanzados como desenfoque radial y gaussiano, texturas de fondo predefinidas y soporte para múltiples proveedores de IA como Mistral, Google Gemini, Anthropic Claude y DeepSeek.',
      images: [
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['Python', 'Flask', 'FFmpeg', 'HTML/CSS', 'Multiple AI APIs'],
      category: 'ai',
      links: {
        github: 'https://github.com/Emanuel0428/Match_cut',
      },
      features: [
        'Interfaz web intuitiva con diseño moderno',
        'Efectos visuales avanzados (desenfoque radial y gaussiano)',
        'Múltiples proveedores de IA (Mistral, Gemini, Claude, DeepSeek)',
        'Texturas de fondo predefinidas y colores personalizables',
        'Dimensiones de video y FPS ajustables',
        'Sistema robusto de manejo de errores'
      ],
      status: 'completed'
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos', icon: Sparkles },
    { id: 'ai', label: 'IA & ML', icon: Bot },
    { id: 'ecommerce', label: 'E-commerce', icon: Store },
    { id: 'webapp', label: 'Web Apps', icon: Code2 },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'api', label: 'APIs', icon: Filter },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const PROJECTS_PER_PAGE = isMobile ? 3 : 6;
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Reset to first page when filter changes
  React.useEffect(() => {
    setCurrentPage(0);
  }, [selectedFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  // Store interval IDs
  const intervalRefs = React.useRef<{ [key: number]: NodeJS.Timeout }>({});

  // Handle image cycling on hover
  const handleProjectHover = (projectId: number) => {
    setHoveredProject(projectId);
    
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prev => {
        const currentIndex = prev[projectId] || 0;
        const project = projects.find(p => p.id === projectId);
        const nextIndex = project ? (currentIndex + 1) % project.images.length : 0;
        return { ...prev, [projectId]: nextIndex };
      });
    }, 1500); // Change image every 1500ms (1.5 seconds)

    // Store interval ID to clear it later
    intervalRefs.current[projectId] = intervalId;
  };

  const handleProjectLeave = (projectId: number) => {
    setHoveredProject(null);
    
    // Clear the interval
    const intervalId = intervalRefs.current[projectId];
    if (intervalId) {
      clearInterval(intervalId);
      delete intervalRefs.current[projectId];
    }
    
    // Reset to first image
    setCurrentImageIndex(prev => ({ ...prev, [projectId]: 0 }));
  };

  // Get current image for a project
  const getCurrentImage = (project: Project) => {
    const index = currentImageIndex[project.id] || 0;
    return project.images[index];
  };

  return (
    <section id="proyectos" className="section-container relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary-500/15 to-purple-600/15 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/15 to-primary-500/15 blur-[100px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Mis <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Proyectos</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Una colección de proyectos que demuestran mi experiencia en desarrollo full-stack
        </motion.p>
      </motion.div>

      {/* Filter buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 relative z-10"
      >
        {filters.map((filter) => {
          const IconComponent = filter.icon;
          const filterCount = filter.id === 'all' ? projects.length : projects.filter(p => p.category === filter.id).length;
          return (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center space-x-1.5 px-3 py-2 md:px-6 md:py-3 rounded-full font-medium text-xs md:text-sm transition-all duration-300 backdrop-blur-sm border ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white border-primary-500 shadow-lg shadow-primary-500/25'
                  : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-700/50'
              }`}
            >
              <IconComponent className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>{filter.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                selectedFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
              }`}>
                {filterCount}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Navigation Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="flex items-center justify-between mb-8 relative z-10 gap-2"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`flex items-center space-x-1.5 px-3 py-2.5 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 ${
            currentPage === 0
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
              : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline text-sm">Anterior</span>
        </motion.button>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? 'bg-primary-500 w-5 h-3 md:w-4 md:h-4'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-primary-300 dark:hover:bg-primary-700'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {startIndex + 1}–{Math.min(endIndex, filteredProjects.length)} de {filteredProjects.length}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`flex items-center space-x-1.5 px-3 py-2.5 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 ${
            currentPage === totalPages - 1
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
              : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700'
          }`}
        >
          <span className="hidden sm:inline text-sm">Siguiente</span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 auto-rows-fr"
      >
        <AnimatePresence>
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              layout
              className="group relative cursor-pointer h-full"
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={() => handleProjectLeave(project.id)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-full flex flex-col overflow-hidden rounded-3xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 p-1 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-500 hover:scale-[1.02] transform">
                {/* Status badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}>
                    {project.status === 'completed' ? 'Completado' : 'En Progreso'}
                  </span>
                </div>

                {/* Image container with carousel - Fixed height */}
                <div className="relative aspect-video overflow-hidden rounded-2xl mb-4 flex-shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${project.id}-${currentImageIndex[project.id] || 0}`}
                      src={getCurrentImage(project)}
                      alt={`${project.title} - Vista ${(currentImageIndex[project.id] || 0) + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: hoveredProject === project.id ? 1.05 : 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image indicators — always visible on mobile, hover on desktop */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    {project.images.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === (currentImageIndex[project.id] || 0)
                            ? 'bg-white w-4'
                            : 'bg-white/50 w-1.5'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Tap hint — mobile only */}
                  <div className="absolute top-3 left-3 md:hidden flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs">
                    <Eye className="w-3 h-3" />
                    <span>Ver detalles</span>
                  </div>
                  
                  {/* Hover overlay with click hint — desktop only */}
                  <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-medium flex items-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Haz click para ver detalles</span>
                    </motion.div>
                  </div>
                </div>

                {/* Content - Flexible content area */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Title - Fixed height */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 min-h-[3.5rem] flex items-center">
                    {project.title}
                  </h3>
                  
                  {/* Description - Fixed height with line clamping */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {project.description}
                  </p>

                  {/* Tech stack - Fixed height */}
                  <div className="flex flex-wrap gap-2 mb-6 min-h-[2.5rem] items-start">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action buttons - Always at bottom */}
                  <div className="flex space-x-3 mt-auto">
                    {project.links.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-purple-600 text-white text-sm font-medium hover:from-primary-600 hover:to-purple-700 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center justify-center p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ${
                        !project.links.demo ? 'flex-1' : ''
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      {!project.links.demo && <span className="ml-2">GitHub</span>}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-4xl w-full max-h-[92vh] bg-white dark:bg-gray-900 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button — absolute sobre el modal, no dentro del scroll */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors shadow-md"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col md:grid md:grid-cols-2 overflow-y-auto md:overflow-hidden flex-1">
                {/* Image — scrollable solo en mobile, fija en desktop */}
                <div className="relative w-full aspect-video md:aspect-auto md:h-auto md:min-h-full flex-shrink-0">
                  <img
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  {/* Título flotante sobre la imagen en desktop */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 hidden md:block">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
                        {selectedProject.title}
                      </h3>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        selectedProject.status === 'completed'
                          ? 'bg-green-500/80 text-white backdrop-blur-sm'
                          : 'bg-yellow-500/80 text-white backdrop-blur-sm'
                      }`}>
                        {selectedProject.status === 'completed' ? 'Completado' : 'En Progreso'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content — scrollable en desktop */}
                <div className="p-5 md:p-8 flex flex-col md:overflow-y-auto">
                  {/* Título en mobile (bajo la imagen) */}
                  <div className="flex flex-wrap items-start gap-2 mb-3 md:hidden">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${
                      selectedProject.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {selectedProject.status === 'completed' ? 'Completado' : 'En Progreso'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-start gap-2 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${
                      selectedProject.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {selectedProject.status === 'completed' ? 'Completado' : 'En Progreso'}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-5">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Características principales:
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Tecnologías utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {selectedProject.links.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium hover:from-primary-600 hover:to-purple-700 transition-all text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Ver Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Ver Código</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}