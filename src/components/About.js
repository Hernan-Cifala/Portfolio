import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-me" id='about'>
      <h2>About Me</h2>
      <div className="about-me-content">
        {/* Profile Image Column */}
        <div className="about-me-image">
          {/* Intrinsic dimensions declared so the browser reserves the space
              before the file arrives: without them the text below shifts when
              the image lands (CLS). The CSS still controls the rendered size. */}
          <img src="images/Foto-CV.jpg" alt="Hernán Cifalá" width="288" height="288" loading="lazy" />
          <p className="about-me-name">Hernán Cifalá | Developer</p>
          {/* The icons are the whole link content, so each one needs an explicit
              accessible name: an <svg> alone leaves the link unnamed. */}
          <div className="about-me-icons">
            {/* The accessible name says where the link goes because these open
                away from the page: sighted users get that from the new tab
                appearing, and without it in the name nobody else does. The
                mailto says "email app" and not "new tab", which is what it
                actually does. */}
            <a href="mailto:hernan.cifala@gmail.com" aria-label="Email Hernán Cifalá (opens your email app)"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/hernan-cifala/" target="_blank" rel="noopener noreferrer" aria-label="Hernán Cifalá on LinkedIn (opens in a new tab)"><FaLinkedin /></a>
            <a href="https://github.com/Hernan-Cifala" target="_blank" rel="noopener noreferrer" aria-label="Hernán Cifalá on GitHub (opens in a new tab)"><FaGithub /></a>
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
