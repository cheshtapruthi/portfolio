import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className='container'>
        <h2 className='section-title'>Technical Skills</h2>
        <div className='skills-grid'>
          <div className='skill-category'>
            <h3>Programming</h3>
            <div className='skill-tags'>
              <span className='skill-tag'>C/C++</span>
              <span className='skill-tag'>Python</span>
              <span className='skill-tag'>SQL</span>
              <span className='skill-tag'>JavaScript</span>
            </div>
          </div>

          <div className='skill-category'>
            <h3>Web & Backend</h3>
            <div className='skill-tags'>
              <span className='skill-tag'>React.js</span>
              <span className='skill-tag'>Node.js</span>
              <span className='skill-tag'>Express.js</span>
              <span className='skill-tag'>REST APIs</span>
              <span className='skill-tag'>Auth</span>
            </div>
          </div>

          <div className='skill-category'>
            <h3>Database</h3>
            <div className='skill-tags'>
              <span className='skill-tag'>PostgreSQL</span>
              <span className='skill-tag'>MySQL</span>
              <span className='skill-tag'>MongoDB</span>
            </div>
          </div>

          <div className='skill-category'>
            <h3>Cloud & DevOps</h3>
            <div className='skill-tags'>
              <span className='skill-tag'>AWS (EC2, S3)</span>
              <span className='skill-tag'>Docker</span>
              <span className='skill-tag'>Linux</span>
              <span className='skill-tag'>CI/CD</span>
            </div>
          </div>

          <div className='skill-category'>
            <h3>CS Fundamentals</h3>
            <div className='skill-tags'>
              <span className='skill-tag'>DSA</span>
              <span className='skill-tag'>OOP</span>
              <span className='skill-tag'>OS</span>
              <span className='skill-tag'>System Design</span>
              <span className='skill-tag'>Networks</span>
            </div>
          </div>

          <div className='skill-category'>
            <h3>Tools</h3>
            <div className='skill-tags'>
              <span className='skill-tag'>Git/GitHub</span>
              <span className='skill-tag'>Postman</span>
              <span className='skill-tag'>Jupyter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
