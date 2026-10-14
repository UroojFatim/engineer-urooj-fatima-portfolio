// Home.js
import React from 'react';
import Hero from '../../Hero';
import About from '../../About';
import Certifications from '../../Certifications';
import Skills from '../../Skills';
import Services from '../../Services';
import Projects from '../../Projects';
import Footer from '../../Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Home;
