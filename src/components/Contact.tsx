import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: '', email: '', message: '' });

    if (!formData.name) setErrors((prev) => ({ ...prev, name: 'El nombre es requerido' }));
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) setErrors((prev) => ({ ...prev, email: 'Correo inválido' }));
    if (!formData.message) setErrors((prev) => ({ ...prev, message: 'El mensaje es requerido' }));
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    
    // Simular envío
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Emanuel0428', 
      label: 'GitHub',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:shadow-gray-500/25'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/emanuel-londo%C3%B1o-osorio-835315174/', 
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com', 
      label: 'Twitter',
      color: 'from-sky-400 to-blue-500',
      hoverColor: 'hover:shadow-sky-500/25'
    },
    { 
      icon: Mail, 
      href: 'mailto:cod2877@gmail.com', 
      label: 'Email',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:shadow-red-500/25'
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'cod2877@gmail.com',
      description: 'Respondo en menos de 24 horas'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Medellín, Colombia',
      description: 'Disponible para trabajo remoto'
    },
    {
      icon: Phone,
      title: 'Colaboración',
      value: 'Proyectos & Freelance',
      description: 'Abierto a nuevas oportunidades'
    }
  ];

  return (
    <section id="contacto" className="section-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary-500/20 to-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-pink-500/20 to-primary-500/20 blur-3xl" />
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
            ¡Hablemos <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">juntos!</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            ¿Tienes una idea increíble? ¿Quieres colaborar en un proyecto? ¡Me encantaría escucharte!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Información de contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envíame un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Nombre completo
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm"
                  placeholder="Tu nombre aquí..."
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Correo electrónico
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm resize-none"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-primary-500/25 hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-xl"
                >
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">¡Mensaje enviado correctamente!</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-xl"
                >
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <span className="font-medium">Oops! Algo salió mal. Inténtalo de nuevo.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}