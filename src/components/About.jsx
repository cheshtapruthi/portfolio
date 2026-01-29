import React from 'react';
import './About.css';
import AboutPoster from '../assets/about_composite.png';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container about-container'>
        <div className='about-img-div'>
          <img src={AboutPoster} alt="Motivational Poster" className='about-img' />
        </div>
        <div className='about-content'>
          <h2 className='title-about'>About Me</h2>
          <p className='about-text'>
            I am an enthusiastic Computer Science student with a deep interest in building scalable web applications and solving real-world problems through code. My journey in tech is driven by curiosity and a desire to create impactful solutions.
          </p>
          <p className='about-text'>
            Beyond just coding, I enjoy exploring new technologies, optimizing system performance, and collaborating on open-source projects. I am constantly learning and refining my skills in full-stack development and artificial intelligence to stay ahead in the rapidly evolving tech landscape.
          </p>


        </div>
      </div>
    </div>
  )
}
export default About;
