// src/components/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <h2>Contact Me</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <a href="mailto:hernan.cifala@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
          <p>Email me at hernan.cifala@gmail.com and let's talk about technology, creativity and innovation.</p>
        </div>

        <div className="contact-item">
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <p>Have a look at my LinkedIn profile and find out more about my growth.</p>
        </div>

        <div className="contact-item">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <p>Inspect the projects that I have worked on and the code that makes ideas become reality.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
