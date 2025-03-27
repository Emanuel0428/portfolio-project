import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
          >
            <span>Hecho con</span>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span>usando React</span>
          </motion.div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Emanuel Londoño.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}