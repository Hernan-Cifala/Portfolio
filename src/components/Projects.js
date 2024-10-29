import React from 'react';

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {/* Portfolio Project */}
        <div className="project-column">
          <h2>Portfolio</h2>
          <p>Front-end app made with React</p>
          <ul>
            <li>• Planning and design done with Artificial Intelligence.</li>
            <li>• Resolution of ocurrences which the AI could not resolve.</li>
            <li>• Full analysis of design and copywriting choices.</li>
          </ul>
        </div>

        {/* Legacy Portfolio Project */}
        <div className="project-column">
          <h2>Legacy Portfolio</h2>
          <p>Full Stack app made with Angular</p>
          <ul>
            <li>• Development of Front-End, Back-End and Database.</li>
            <li>• Creation of local and remote repositories.</li>
            <li>• Integration and deployment of the project.</li>
          </ul>
        </div>

        {/* Sales Conversion Optimization Project */}
        <div className="project-column">
          <h2>Sales Conversion Optimization</h2>
          <p>Data Analytics Certification Project</p>
          <ul>
            <li>• Processing of data in Excel and SQLite.</li>
            <li>• Data Analysis and Visualization with R.</li>
            <li>• Presentation of results with PowerPoint.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
