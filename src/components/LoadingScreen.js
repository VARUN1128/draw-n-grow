import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loading-animation"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          color: 'var(--light-color)',
          position: 'absolute',
          bottom: '20%',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: '600',
          textAlign: 'center'
        }}
      >
        Creating Art...
      </motion.h2>
    </motion.div>
  );
};

export default LoadingScreen; 