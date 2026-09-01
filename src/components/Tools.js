import React from "react";
import {
  FaReact, FaAngular, FaHtml5, FaCss3, FaJsSquare, FaGit, FaGithub, FaFigma, FaDatabase } from "react-icons/fa";
import { SiWix, SiMake, SiChatbot, SiOpenai } from "react-icons/si"; // Additional icons

const Tools = () => {
  return (
    <section className="tools">
      <h2>Hard Skills</h2>
      {/* Every icon carries an aria-label: react-icons renders an <svg role="img">,
          which is announced as an unnamed image without one. The tooltip text is
          hover-only, so the label is the only name these have on keyboard or
          screen reader. aria-label and not title: title would add a native
          browser tooltip on top of the custom one. */}
      <div className="tools-grid">
        {/* LowCode Column */}
        <div className="tools-column">
          <h3>LowCode</h3>
          <div className="icon-list">
            <div className="tooltip">
              <SiWix aria-label="Wix" />
              <span className="tooltip-text">
              Using Wix, I have developed several web applications with minimal to no coding, effectively enhancing businesses' digital presence while optimizing project timelines.
              </span>
            </div>
            <div className="tooltip">
              <SiMake aria-label="Make" />
              <span className="tooltip-text">
              With Make, I have connected various apps and services, automating tasks to streamline processes and increase client efficiency.
              </span>
            </div>
            <div className="tooltip">
              <SiChatbot aria-label="UChat" />
              <span className="tooltip-text">
              With UChat, I have built AI-driven chatbots that integrate across multiple messaging channels, boosting client engagement.
              </span>
            </div>
            <div className="tooltip">
              <SiOpenai aria-label="OpenAI" />
              <span className="tooltip-text">
              Wielding OpenAI and ChatGPT, I developed AI assistants that helped accelerate my productivity, learning, and growth.
              </span>
            </div>
          </div>
        </div>

        {/* Full Stack Column */}
        <div className="tools-column">
          <h3>Full Stack</h3>
          <div className="icon-list">
            <div className="tooltip">
              <FaReact aria-label="React" />
              <span className="tooltip-text">
              Utilizing React, I developed this portfolio, creating a responsive front-end application to showcase my experience and skills.
              </span>
            </div>
            <div className="tooltip">
              <FaAngular aria-label="Angular" />
              <span className="tooltip-text">
              Utilizing Angular, I developed the initial version of my portfolio, a project that marked my first full-stack web development experience.
              </span>
            </div>
            <div className="tooltip">
              <FaHtml5 aria-label="HTML5" />
              <span className="tooltip-text">
              With HTML, I have structured the foundations of numerous web pages, following best practices for design and scalability.
              </span>
            </div>
            <div className="tooltip">
              <FaCss3 aria-label="CSS3" />
              <span className="tooltip-text">
              With CSS, I crafted the look and layout for web pages, allowing for unique customization and visual appeal.
              </span>
            </div>
            <div className="tooltip">
              <FaJsSquare aria-label="JavaScript" />
              <span className="tooltip-text">
              Through JavaScript and its libraries, I developed interactive scripts, adding dynamic features and functionality to websites.
              </span>
            </div>
          </div>
        </div>

        {/* Other Column */}
        <div className="tools-column">
          <h3>Project Management</h3>
          <div className="icon-list">
            <div className="tooltip">
              <FaGit aria-label="Git" />
              <span className="tooltip-text">
              With Git, I implemented version control across projects, facilitating collaboration and organized development.
              </span>
            </div>
            <div className="tooltip">
              <FaGithub aria-label="GitHub" />
              <span className="tooltip-text">
              On GitHub, I have published my projects and documented my learning journey, showcasing my growth and connecting with other developers.
              </span>
            </div>
            <div className="tooltip">
              <FaFigma aria-label="Figma" />
              <span className="tooltip-text">
              In Figma,  I honed foundational UI/UX design skills, supporting real-time collaboration and creating prototypes and wireframes.
              </span>
            </div>
            <div className="tooltip">
              <FaDatabase aria-label="SQL" />
              <span className="tooltip-text">
              With SQL, I have learnt how to manage and query databases effectively, allowing for efficient data retrieval, updates, and organization.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
