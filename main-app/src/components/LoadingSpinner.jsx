import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const LoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`${sizeClasses[size]} text-primary-600`}
      >
        <Brain className="w-full h-full" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-gray-600"
      >
        {text}
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;