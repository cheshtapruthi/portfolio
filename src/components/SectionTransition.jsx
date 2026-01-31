import React from 'react';
import { motion } from 'framer-motion';

const SectionTransition = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // 'once: true' is CRITICAL for smooth scrolling. 
      // It ensures the content stays visible once loaded, preventing sections from 
      // flickering or "breaking" (disappearing) when you scroll up and down slightly.
      viewport={{ once: true, amount: 0.1, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
