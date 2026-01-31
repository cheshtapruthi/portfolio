import React from 'react';
import './Projects.css';
import Project1 from '../assets/project_placement.png';
import Project2 from '../assets/project_email.png';

import { FaExternalLinkAlt } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Projects = () => {
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
    <div className='projects' id='projects'>
      <div className='container'>
        <h2 className='section-title'>Featured Projects</h2>
        <motion.div
          className='projects-grid'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className='project-card' variants={itemVariants}>
            <img src={Project1} alt="Placement Management System" />
            <div className='project-layer'>
              <h3>Placement Management System</h3>
              <p>Full-stack platform built with Next.js, Redis, Docker, and TailwindCSS. Features responsive design and containerized microservices for optimized performance.</p>
              <a href="https://github.com/cheshtapruthi" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
            </div>
          </motion.div>
          <motion.div className='project-card' variants={itemVariants}>
            <img src={Project2} alt="Briefy Email Categorizer" />
            <div className='project-layer'>
              <h3>Briefy Email Categorizer</h3>
              <p>AI-powered email summarizer using React.js, Node.js, and Hugging Face API. Categorizes emails and generates concise summaries with secure JWT authentication.</p>
              <a href="https://github.com/cheshtapruthi" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
export default Projects;
