import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className='header'>
      <nav className='navbar'>

        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />) : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
          </li>
          <li className='nav-item'>
            <Link to="certifications" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Certifications</Link>
          </li>
          <li className='nav-item'>
            <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Services</Link>
          </li>
          <li className='nav-item'>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Projects</Link>
          </li>
          <li className='nav-item'>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
