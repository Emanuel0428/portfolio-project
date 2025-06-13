import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Filter, Eye, Code2, Sparkles, Bot, Store, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  tech: string[];
  category: 'ai' | 'ecommerce' | 'webapp' | 'api';
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
      id: 1,
      title: 'FlowForgeAI',
      description: 'Asistente inteligente para negocios que brinda estrategias personalizadas según la información recopilada.',
      fullDescription: 'Una plataforma avanzada de inteligencia artificial diseñada para ayudar a todo tipo de negocios. Utiliza machine learning para analizar datos empresariales y generar estrategias personalizadas que impulsen el crecimiento y la eficiencia operativa.',
      images: [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['TypeScript', 'React', 'Node.js', 'AI/ML', 'Business Intelligence'],
      category: 'ai',
      links: {
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
      status: 'in-progress'
    },
    {
      id: 2,
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
      id: 3,
      title: 'Mercados Mi Punto',
      description: 'Aplicación web de e-commerce para productos frescos de alta calidad con funcionalidades avanzadas.',
      fullDescription: 'Una plataforma completa de comercio electrónico especializada en productos frescos. Incluye un sistema robusto de gestión de inventario, autenticación JWT, carrito persistente y un panel administrativo para la gestión completa del negocio.',
      images: [
        'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800&h=600'
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
      id: 4,
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
      status: 'in-progress'
    },
    {
      id: 5,
      title: 'All-in-One Fitness App',
      description: 'Aplicación completa de fitness con tracking de ejercicios, planes personalizados y métricas de progreso.',
      fullDescription: 'Aplicación integral de fitness desarrollada en colaboración que combina tracking de ejercicios, planes de entrenamiento personalizados, seguimiento nutricional y análisis de progreso. Incluye tanto frontend como backend API.',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1583500178690-f7d24219f8d2?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['TypeScript', 'React', 'JavaScript', 'Node.js', 'Express'],
      category: 'webapp',
      links: {
        github: 'https://github.com/Emanuel0428/all-in-one-fitness-app',
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
      id: 6,
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
      id: 7,
      title: 'TaskMaster Pro',
      description: 'Aplicación avanzada de gestión de tareas con colaboración en tiempo real y análisis de productividad.',
      fullDescription: 'Sistema completo de gestión de proyectos y tareas diseñado para equipos de trabajo. Incluye colaboración en tiempo real, seguimiento de tiempo, reportes de productividad y integración con herramientas populares.',
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express'],
      category: 'webapp',
      links: {
        github: 'https://github.com/Emanuel0428/taskmaster-pro',
      },
      features: [
        'Colaboración en tiempo real',
        'Gestión de proyectos y sprints',
        'Seguimiento de tiempo automático',
        'Reportes de productividad',
        'Notificaciones push',
        'Integración con Slack y Discord'
      ],
      status: 'in-progress'
    },
    {
      id: 8,
      title: 'SmartFinance Dashboard',
      description: 'Dashboard inteligente para gestión financiera personal con análisis predictivo y recomendaciones automáticas.',
      fullDescription: 'Plataforma avanzada de gestión financiera que utiliza inteligencia artificial para analizar patrones de gasto, predecir tendencias financieras y ofrecer recomendaciones personalizadas para el ahorro e inversión.',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['Vue.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Chart.js'],
      category: 'ai',
      links: {
        github: 'https://github.com/Emanuel0428/smartfinance-dashboard',
      },
      features: [
        'Análisis predictivo de gastos',
        'Recomendaciones de ahorro personalizadas',
        'Conectividad con bancos (Open Banking)',
        'Categorización automática de transacciones',
        'Alertas inteligentes de presupuesto',
        'Visualizaciones interactivas avanzadas'
      ],
      status: 'completed'
    },
    {
      id: 9,
      title: 'EcoTrack Marketplace',
      description: 'Marketplace ecológico para productos sostenibles con sistema de trazabilidad y certificaciones verdes.',
      fullDescription: 'Plataforma de comercio electrónico especializada en productos ecológicos y sostenibles. Incluye sistema de trazabilidad completa, verificación de certificaciones ambientales y programa de compensación de carbono.',
      images: [
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['React', 'Node.js', 'Blockchain', 'PostgreSQL', 'Stripe'],
      category: 'ecommerce',
      links: {
        github: 'https://github.com/Emanuel0428/ecotrack-marketplace',
      },
      features: [
        'Trazabilidad completa de productos',
        'Verificación de certificaciones ecológicas',
        'Calculadora de huella de carbono',
        'Programa de compensación ambiental',
        'Marketplace multi-vendor',
        'Sistema de reviews verificadas'
      ],
      status: 'in-progress'
    },
    {
      id: 10,
      title: 'DevConnect API Hub',
      description: 'API Gateway y hub de desarrollo para conectar múltiples servicios con documentación automática.',
      fullDescription: 'Plataforma centralizada para la gestión de APIs que incluye gateway inteligente, documentación automática, monitoreo en tiempo real y herramientas de testing. Diseñada para simplificar la integración de microservicios.',
      images: [
        'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['Node.js', 'Express', 'Redis', 'Docker', 'GraphQL'],
      category: 'api',
      links: {
        github: 'https://github.com/Emanuel0428/devconnect-api-hub',
      },
      features: [
        'API Gateway inteligente',
        'Documentación automática con Swagger',
        'Rate limiting y autenticación',
        'Monitoreo y analytics en tiempo real',
        'Testing integrado de endpoints',
        'Versionado automático de APIs'
      ],
      status: 'completed'
    },
    {
      id: 11,
      title: 'EducaStream Platform',
      description: 'Plataforma de educación online con streaming en vivo, quizzes interactivos y seguimiento de progreso.',
      fullDescription: 'Sistema completo de educación virtual que combina clases en vivo, contenido grabado, evaluaciones interactivas y seguimiento detallado del progreso estudiantil. Incluye herramientas de colaboración y gamificación.',
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['React', 'WebRTC', 'Socket.io', 'MongoDB', 'AWS S3'],
      category: 'webapp',
      links: {
        github: 'https://github.com/Emanuel0428/educastream-platform',
      },
      features: [
        'Streaming en vivo de alta calidad',
        'Quizzes y evaluaciones interactivas',
        'Sistema de gamificación',
        'Chat y foros de discusión',
        'Grabación automática de clases',
        'Certificados digitales'
      ],
      status: 'in-progress'
    },
    {
      id: 12,
      title: 'AI Content Generator',
      description: 'Generador de contenido automatizado usando IA para crear textos, imágenes y videos personalizados.',
      fullDescription: 'Plataforma avanzada que utiliza múltiples modelos de IA para generar contenido multimedia de alta calidad. Incluye generación de texto, imágenes, videos cortos y optimización SEO automática.',
      images: [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800&h=600',
        'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=800&h=600'
      ],
      tech: ['Python', 'OpenAI GPT', 'Stable Diffusion', 'FastAPI', 'Redis'],
      category: 'ai',
      links: {
        github: 'https://github.com/Emanuel0428/ai-content-generator',
      },
      features: [
        'Generación de textos con GPT',
        'Creación de imágenes con IA',
        'Videos cortos automatizados',
        'Optimización SEO inteligente',
        'Templates personalizables',
        'API para desarrolladores'
      ],
      status: 'completed'
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos', icon: Sparkles },
    { id: 'ai', label: 'IA & ML', icon: Bot },
    { id: 'ecommerce', label: 'E-commerce', icon: Store },
    { id: 'webapp', label: 'Web Apps', icon: Code2 },
    { id: 'api', label: 'APIs', icon: Filter },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const PROJECTS_PER_PAGE = 6;
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
    <section id="proyectos" className="section-container overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary-500/20 to-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-primary-500/20 blur-3xl" />
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
          Una colección de 12 proyectos que demuestran mi experiencia en desarrollo full-stack
        </motion.p>
      </motion.div>

      {/* Filter buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className="flex flex-wrap justify-center gap-4 mb-8 relative z-10"
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
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white border-primary-500 shadow-lg shadow-primary-500/25'
                  : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-700/50'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{filter.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
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
        className="flex items-center justify-between mb-8 relative z-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            currentPage === 0
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
              : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Anterior</span>
        </motion.button>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Página {currentPage + 1} de {totalPages}
          </span>
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300 dark:hover:bg-primary-700'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} de {filteredProjects.length}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            currentPage === totalPages - 1
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
              : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700'
          }`}
        >
          <span>Siguiente</span>
          <ChevronRight className="w-5 h-5" />
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
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === (currentImageIndex[project.id] || 0)
                            ? 'bg-white scale-125'
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Hover overlay with click hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-video md:aspect-auto">
                  <img
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover md:rounded-l-3xl"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedProject.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {selectedProject.status === 'completed' ? 'Completado' : 'En Progreso'}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Características principales:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-primary-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Tecnologías utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {selectedProject.links.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium hover:from-primary-600 hover:to-purple-700 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Ver Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
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