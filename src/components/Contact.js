// src/components/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Rendered outside <main> as the page footer: a <footer> only counts as the
// contentinfo landmark when it is a direct child of body, not nested in main.
const Contact = () => {
  return (
    <footer className="contact" id='contact'>
      <h2>Contact Me</h2>
      <div className="contact-grid">
        {/* Each link's only content is an icon, so the accessible name has to be
            declared: otherwise all three are announced as unnamed links. */}
        <div className="contact-item">
          <a href="mailto:hernan.cifala@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Hernán Cifalá">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
          <p>Email me at hernan.cifala@gmail.com and let's talk about technology, creativity and innovation.</p>
        </div>

        <div className="contact-item">
          <a href="https://www.linkedin.com/in/hernan-cifala/" target="_blank" rel="noopener noreferrer" aria-label="Hernán Cifalá on LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <p>Visit my LinkedIn profile and find out more about my journey and ongoing growth.</p>
        </div>

        <div className="contact-item">
          <a href="https://github.com/Hernan-Cifala" target="_blank" rel="noopener noreferrer" aria-label="Hernán Cifalá on GitHub">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <p>Explore the projects that I have worked on and the code that makes ideas become reality.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
