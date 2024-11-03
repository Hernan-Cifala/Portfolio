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
          <p><strong>Duration:</strong> November 2023 – Present</p>
          <p>
            <strong>Description:</strong> In my role as a Semi-Senior LowCode Developer at Metódica, I build dynamic websites with Wix, automate workflows using Make, and develop intelligent chatbots through UChat. My focus is on streamlining processes and enhancing user engagement, helping clients achieve digital transformation efficiently and effectively.
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
