import React, { useState } from 'react';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projectDetails = {
    Portfolio: {
      title: "Portfolio",
      short_description: "Front-end application built with React",
      description: "Supported by specialized AI tools, I aimed to update my portfolio to reflect recent achievements, growth, and expertise, particularly in prompt engineering and low-code technologies.",
      item1: "• Leveraged AI for planning and design.",
      item2: "• Solved unique challenges beyond AI capabilities.",
      item3: "• Conducted comprehensive analysis of design and copy choices.",
      link: "https://github.com/Hernan-Cifala/Portfolio",
      link_text: "View the Code"
    },
    LegacyPortfolio: {
      title: "Legacy Portfolio",
      short_description: "Full Stack application built with Angular",
      description: "As my first web development project, I used a complete tech stack to design a portfolio that presents my education, experience, skills, and completed projects.",
      item1: "• Developed Front-End, Back-End, and Database components.",
      item2: "• Created both local and remote repositories.",
      item3: "• Integrated and deployed the project.",
      link: "https://hernan-cifala-portfolio.web.app/portfolio",
      link_text: "Visit the Site"
    },
    SalesConversion: {
      title: "Sales Conversion Optimization",
      short_description: "Data Analytics Certification Project",
      description: "For an organization’s three social media ad campaigns, I analyzed performance to assess effectiveness, uncover key insights, and suggest improvements for future initiatives.",
      item1: "• Processed and organized data using Excel and SQLite.",
      item2: "• Analyzed and visualized results with R.",
      item3: "• Presented findings and recommendations using PowerPoint.",
      link: "https://docs.google.com/presentation/d/e/2PACX-1vQi6UNHhQQOpr8hEIs0VIBx-JvT4fJ1dt4d8nBA8lBNjbRpzId4eUqAbQQ3cLXSaw/pub?start=false&loop=false&delayms=3000",
      link_text: "Watch the Presentation"
    },
  };

  const openModal = (projectKey) => {
    setCurrentProject(projectDetails[projectKey]);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {Object.keys(projectDetails).map((projectKey) => (
          <div key={projectKey} className="project-column">
            <h2>{projectDetails[projectKey].title}</h2>
            <p>{projectDetails[projectKey].short_description}</p>
            <ul>
              <li>{projectDetails[projectKey].item1}</li>
              <li>{projectDetails[projectKey].item2}</li>
              <li>{projectDetails[projectKey].item3}</li>
            </ul>
            <button onClick={() => openModal(projectKey)} className="read-more-button">Read more...</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
  <h3 className="modal-title">{currentProject?.title}</h3>
  <div className="modal-border"></div>
  <h4 className="modal-subtitle">{currentProject?.short_description}</h4>
  <p className="modal-paragraph">{currentProject?.description}</p>
  <h4 className='modal-list-title'>Accomplishments:</h4>
  <ul className="modal-list">
    <li>{currentProject?.item1}</li>
    <li>{currentProject?.item2}</li>
    <li>{currentProject?.item3}</li>
  </ul>
  <div className="modal-footer">
  <a href={currentProject?.link} target="_blank" rel="noopener noreferrer" className="modal-link">
  {currentProject?.link_text}
  </a>
  <button onClick={closeModal} className="close-modal">Close</button>
  </div>
</div>

        </div>
      )}
    </section>
  );
};

export default Projects;
