import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-me" id='about'>
      <h2>About Me</h2>
      <div className="about-me-content">
        {/* Profile Image Column */}
        <div className="about-me-image">
          <img src="images/Foto-CV.jpg" alt="Hernán Cifalá" />
          <p className="about-me-name">Hernán Cifalá | Developer</p>
          {/* The icons are the whole link content, so each one needs an explicit
              accessible name: an <svg> alone leaves the link unnamed. */}
          <div className="about-me-icons">
            <a href="mailto:hernan.cifala@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Hernán Cifalá"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/hernan-cifala/" target="_blank" rel="noopener noreferrer" aria-label="Hernán Cifalá on LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/Hernan-Cifala" target="_blank" rel="noopener noreferrer" aria-label="Hernán Cifalá on GitHub"><FaGithub /></a>
          </div>
        </div>

        {/* Text Column */}
        <div className="about-me-text">
          <h3>Professional Development</h3>
        
            <p>I am an analytical thinker with a strong technical background and a passion for development. My focus is on creating solutions for small and medium-sized businesses using low-code platforms and prompt engineering, driving growth and efficiency through digital projects.</p>

            <p>I am passionate about technology, that set of tools that enables the fusion of creative thinking and technical approach, allowing us to create, share, and connect innovative ideas.</p>

            <p>Throughout my learning journey, I have completed a series of online courses and acquired knowledge in various technologies. Even in my current job, I am always on the lookout for new challenges and opportunities to continue learning and growing professionally.</p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
