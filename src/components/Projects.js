import React, { useCallback, useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const modalRef = useRef(null);
  // Whatever had focus before the modal opened, so it can be handed back on close.
  const lastFocusedRef = useRef(null);

  const projectDetails = {
    Portfolio: {
      title: "Portfolio",
      short_description: "Front-end application built with React",
      description: "Supported by specialized AI tools, I aimed to update my portfolio to reflect recent achievements, growth, and expertise, particularly in prompt engineering and low-code technologies.",
      item1: "• Leveraged AI for planning and design.",
      item2: "• Solved unique challenges beyond AI capabilities.",
      item3: "• Conducted comprehensive analysis of design and copy choices.",
      links: [
        { url: "https://github.com/Hernan-Cifala/Portfolio", text: "View the Code" }
      ]
    },
    LegacyPortfolio: {
      title: "Legacy Portfolio",
      short_description: "Full Stack application built with Angular",
      description: "As my first web development project, I used a complete tech stack to design a portfolio that presents my education, experience, skills, and completed projects.",
      item1: "• Developed Front-End, Back-End, and Database components.",
      item2: "• Created both local and remote repositories.",
      item3: "• Integrated and deployed the project.",
      links: [
        { url: "https://github.com/Hernan-Cifala/FrontEnd", text: "View the Front-End Code" },
        { url: "https://github.com/Hernan-Cifala/BackEnd", text: "View the Back-End Code" }
      ]
    },
    SalesConversion: {
      title: "Sales Conversion Optimization",
      short_description: "Data Analytics Certification Project",
      description: "For an organization’s three social media ad campaigns, I analyzed performance to assess effectiveness, uncover key insights, and suggest improvements for future initiatives.",
      item1: "• Processed and organized data using Excel and SQLite.",
      item2: "• Analyzed and visualized results with R.",
      item3: "• Presented findings and recommendations using PowerPoint.",
      links: [
        { url: "https://docs.google.com/presentation/d/e/2PACX-1vQi6UNHhQQOpr8hEIs0VIBx-JvT4fJ1dt4d8nBA8lBNjbRpzId4eUqAbQQ3cLXSaw/pub?start=false&loop=false&delayms=3000", text: "Watch the Presentation" }
      ]
    },
  };

  // The trigger is captured from the event rather than read off document.activeElement:
  // a pointer click does not necessarily focus the button first, and then focus would
  // be handed back to <body> on close instead of to the card the user came from.
  const openModal = (projectKey, trigger) => {
    lastFocusedRef.current = trigger;
    setCurrentProject(projectDetails[projectKey]);
    setShowModal(true);
  };

  const closeModal = useCallback(() => setShowModal(false), []);

  // Escape to close, and Tab cycles inside the dialog instead of walking the page
  // behind it. Without the trap, a keyboard user tabs out of an open modal and
  // lands on content that is visually covered by the overlay.
  useEffect(() => {
    if (!showModal) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = modalRef.current?.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    // The page behind the overlay must not scroll while the dialog is open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    modalRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocusedRef.current?.focus();
    };
  }, [showModal, closeModal]);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {Object.keys(projectDetails).map((projectKey) => (
          <div key={projectKey} className="project-column">
            <h3>{projectDetails[projectKey].title}</h3>
            <p>{projectDetails[projectKey].short_description}</p>
            <ul>
              <li>{projectDetails[projectKey].item1}</li>
              <li>{projectDetails[projectKey].item2}</li>
              <li>{projectDetails[projectKey].item3}</li>
            </ul>
            {/* Every card renders the same visible label, so the accessible name
                carries the project title to keep the buttons distinguishable. */}
            <button
              onClick={(e) => openModal(projectKey, e.currentTarget)}
              className="read-more-button"
              aria-label={`Read more about ${projectDetails[projectKey].title}`}
            >
              Read more...
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
          >
            <h3 className="modal-title" id="project-modal-title">{currentProject?.title}</h3>
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
              {currentProject?.links?.map((link) => (
                // aria-label repeats the visible text on purpose: it overrides
                // the link's name, so dropping it would lose "View the Back-End
                // Code" and leave only the warning.
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="modal-link"
                   aria-label={`${link.text} (opens in a new tab)`}>
                  {link.text}
                </a>
              ))}
              <button onClick={closeModal} className="close-modal">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
