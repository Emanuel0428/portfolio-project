import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const emailJsData = {
      service_id: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      template_params: {
        user_name: formData.name,
        user_email: formData.email,
        user_message: formData.message,
      },
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailJsData),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error enviando el formulario:', error);
      setStatus('error');
    }
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
    <section id="contact" className="section-container text-center">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          <span className="gradient-text">Ponte en contacto :) </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">Tienes una idea? Quieres colaborar? Vamos a hablar!!</p>

        <div className="flex justify-center gap-6 mt-6">
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

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Correo
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium
                       transform transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]
                       hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </motion.button>

          {status === 'success' && <p className="text-green-500">Mensaje enviado correctamente!</p>}
          {status === 'error' && <p className="text-red-500">Oops! Parece que algo no salió bien.</p>}
        </motion.form>
      </motion.div>
    </section>
  );
}
