import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-me" id='about'>
      <h1>About Me</h1>
      <div className="about-me-content">
        {/* Profile Image Column */}
        <div className="about-me-image">
          <img src="images/Foto-CV.jpg" alt="Hernán Cifalá" />
          <p className="about-me-name">Hernán Cifalá | Developer</p>
          <div className="about-me-icons">
            <a href="mailto:your-email@example.com"><FaEnvelope /></a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>

        {/* Text Column */}
        <div className="about-me-text">
          <h3>Professional Development</h3>
        
            <p>I am an analytical thinker with a strong technical background and a passion for development. My focus is on creating solutions for small and medium-sized businesses without the need for coding, driving growth and efficiency through digital projects.</p>

            <p>I am passionate about technology, that set of tools that enables the fusion of creative thinking and technical approach, allowing us to create, share, and connect innovative ideas.</p>

            <p>Throughout my learning journey, I have completed a series of online courses and acquired knowledge in various technologies. Even in my current job, I am always on the lookout for new challenges and opportunities to continue learning and growing professionally.</p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
