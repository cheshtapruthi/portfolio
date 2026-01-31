import React from 'react';
import './Services.css';
import { FaCode, FaDatabase, FaBrain } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Services = () => {
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
    <div className='services' id='services'>
      <div className='container'>
        <h2 className='section-title'>My Services</h2>
        <motion.div
          className='services-grid'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className='service-card' variants={itemVariants}>
            <FaBrain size={40} className='service-icon' />
            <h3>Machine Learning & DS</h3>
            <p>Building predictive models, natural language processing systems, and deep learning solutions to automate and optimize processes.</p>
          </motion.div>
          <motion.div className='service-card' variants={itemVariants}>
            <FaDatabase size={40} className='service-icon' />
            <h3>Data Engineering</h3>
            <p>Designing scalable ETL pipelines, managing databases, and ensuring data integrity for large-scale analytics.</p>
          </motion.div>
          <motion.div className='service-card' variants={itemVariants}>
            <FaCode size={40} className='service-icon' />
            <h3>Web Development</h3>
            <p>Creating responsive and interactive web applications integrated with data-driven backends.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
export default Services;
