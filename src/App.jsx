import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionTransition from './components/SectionTransition';

function App() {
  return (
    <>
      <Navbar />
      <SectionTransition>
        <Hero />
      </SectionTransition>
      <SectionTransition>
        <About />
      </SectionTransition>
      <SectionTransition>
        <Certifications />
      </SectionTransition>
      <SectionTransition>
        <Skills />
      </SectionTransition>
      <SectionTransition>
        <Services />
      </SectionTransition>
      <SectionTransition>
        <Projects />
      </SectionTransition>
      <SectionTransition>
        <Contact />
      </SectionTransition>
      <SectionTransition>
        <Footer />
      </SectionTransition>
    </>
  );
}

export default App;
