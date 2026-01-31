import React from 'react';
import './Certifications.css';
import { FaAward } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  return (
    <div className='certifications' id='certifications'>
      <div className='container'>
        <h2 className='section-title'>Certifications</h2>
        <motion.div
          className='certifications-wrapper'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className='certification-card' variants={itemVariants}>
            <div className='cert-icon'>
              <FaAward size={30} />
            </div>
            <div className='cert-info'>
              <h3>Oracle Cloud Infrastructure AI Foundations</h3>
              <p>Oracle</p>
            </div>
          </motion.div>
          <motion.div className='certification-card' variants={itemVariants}>
            <div className='cert-icon'>
              <FaAward size={30} />
            </div>
            <div className='cert-info'>
              <h3>Foundations of Cybersecurity</h3>
              <p>Google</p>
            </div>
          </motion.div>
          <motion.div className='certification-card' variants={itemVariants}>
            <div className='cert-icon'>
              <FaAward size={30} />
            </div>
            <div className='cert-info'>
              <h3>Microsoft Azure AI Fundamentals (AI-900)</h3>
              <p>Microsoft</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications;
