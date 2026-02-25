import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { About } from './About';
import { Contact } from './Contact';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to a section (passed from navigation)
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
};