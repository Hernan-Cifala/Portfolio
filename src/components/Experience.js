import React from 'react';

const Experience = () => {
  return (
    <section className="experience-section" id="growth">
      <h2>Experience</h2>
      <div className="experience-content">
        {/* Text Content Column */}
        <div className="experience-text">
          <h3>Ssr. LowCode Developer</h3>
          <p><strong>Company:</strong> Metódica Digital</p>
          <p><strong>Type:</strong> Part-time Remote</p>
          <p><strong>Duration:</strong> 2024-11-01 until today</p>
          <p>
            <strong>Description:</strong> As a Semi-Senior LowCode Developer at Metódica, I specialize in building dynamic websites using Wix, automating workflows with Make, and developing intelligent chatbots with UChat, helping clients streamline processes and enhance user engagement.
          </p>
        </div>

        {/* Company Image Column */}
        <div className="experience-image">
          <img src="images/Logo Metódica.webp" alt="Metódica Digital" />
          <p className="company-name">Metódica Digital</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
