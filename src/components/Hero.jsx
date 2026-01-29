import React from 'react';
import './Hero.css';
import HeroImg from '../assets/profile.jpg';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className='container hero-container'>
        <div className='hero-content'>
          <p className='subtitle'>Hello, I'm</p>
          <h1 className='title'><span>Cheshta</span> Pruthi</h1>
          <h3 className='roles'>Software Developer | Full Stack Engineer | AI Enthusiast</h3>
          <p className='description'>
            Pursuing B.Tech in Computer Science and Engineering with a strong foundation in software development, data structures, and algorithms. Proven ability to design and implement innovative solutions through hands-on experience in diverse projects.
          </p>
          <div className='hero-btns'>
            <Link to="projects" smooth={true} offset={-100} duration={500} className='btn'>View Work</Link>
            <Link to="contact" smooth={true} offset={-100} duration={500} className='btn btn-secondary'>Contact Me</Link>
          </div>
        </div>
        <div className='hero-image'>
          <div className='img-box'>
            <img src={HeroImg} alt="Cheshta Pruthi" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
