import React from 'react';
import './Certifications.css';
import { FaAward } from 'react-icons/fa';

const Certifications = () => {
  return (
    <div className='certifications' id='certifications'>
      <div className='container'>
        <h2 className='section-title'>Certifications</h2>
        <div className='certifications-wrapper'>
          <div className='certification-card'>
            <div className='cert-icon'>
              <FaAward size={30} />
            </div>
            <div className='cert-info'>
              <h3>Oracle Cloud Infrastructure AI Foundations</h3>
              <p>Oracle</p>
            </div>
          </div>
          <div className='certification-card'>
            <div className='cert-icon'>
              <FaAward size={30} />
            </div>
            <div className='cert-info'>
              <h3>Foundations of Cybersecurity</h3>
              <p>Google</p>
            </div>
          </div>
          <div className='certification-card'>
            <div className='cert-icon'>
              <FaAward size={30} />
            </div>
            <div className='cert-info'>
              <h3>Microsoft Azure AI Fundamentals (AI-900)</h3>
              <p>Microsoft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications;
