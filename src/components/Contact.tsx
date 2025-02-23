import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario: TODO
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Emanuel0428', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/emanuel-londo%C3%B1o-osorio-835315174/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:cod2877@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contacto" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="gradient-text">Contáctame</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ¡Hablemos!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Estoy interesado en oportunidades de freelance y colaboraciones.
              Si tienes alguna pregunta o propuesta, no dudes en contactarme!
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800
                           hover:bg-primary-100 dark:hover:bg-primary-900/30
                           text-gray-600 dark:text-gray-300
                           hover:text-primary-600 dark:hover:text-primary-400
                           transition-colors duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nombre
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg
                         bg-white dark:bg-gray-800
                         border border-gray-300 dark:border-gray-700
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         text-gray-900 dark:text-white
                         transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg
                         bg-white dark:bg-gray-800
                         border border-gray-300 dark:border-gray-700
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         text-gray-900 dark:text-white
                         transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Mensaje
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg
                         bg-white dark:bg-gray-800
                         border border-gray-300 dark:border-gray-700
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         text-gray-900 dark:text-white
                         transition-all duration-300"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 rounded-lg
                       bg-primary-600 hover:bg-primary-700
                       text-white font-medium
                       transform transition-all duration-300
                       shadow-[0_0_15px_rgba(168,85,247,0.5)]
                       hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}