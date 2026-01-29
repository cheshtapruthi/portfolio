import React from 'react';
import './Services.css';
import { FaCode, FaDatabase, FaBrain } from 'react-icons/fa';

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className='container'>
        <h2 className='section-title'>My Services</h2>
        <div className='services-grid'>
          <div className='service-card'>
            <FaBrain size={40} className='service-icon' />
            <h3>Machine Learning & DS</h3>
            <p>Building predictive models, natural language processing systems, and deep learning solutions to automate and optimize processes.</p>
          </div>
          <div className='service-card'>
            <FaDatabase size={40} className='service-icon' />
            <h3>Data Engineering</h3>
            <p>Designing scalable ETL pipelines, managing databases, and ensuring data integrity for large-scale analytics.</p>
          </div>
          <div className='service-card'>
            <FaCode size={40} className='service-icon' />
            <h3>Web Development</h3>
            <p>Creating responsive and interactive web applications integrated with data-driven backends.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services;
