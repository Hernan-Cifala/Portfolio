import React from "react";
import {
  FaReact, FaAngular, FaHtml5, FaCss3, FaJsSquare, FaGit, FaGithub, FaFigma, FaDatabase } from "react-icons/fa";
import { SiWix, SiMake, SiChatbot, SiOpenai } from "react-icons/si"; // Additional icons

const Tools = () => {
  return (
    <section className="tools">
      <h2>Hard Skills</h2>
      <div className="tools-grid">
        {/* LowCode Column */}
        <div className="tools-column">
          <h3>LowCode</h3>
          <div className="icon-list">
            <div className="tooltip">
              <SiWix />
              <span className="tooltip-text">
              Using Wix, I have developed several web applications with minimal to no coding, effectively enhancing businesses' digital presence while optimizing project timelines.
              </span>
            </div>
            <div className="tooltip">
              <SiMake />
              <span className="tooltip-text">
              With Make, I have connected various apps and services, automating tasks to streamline processes and increase client efficiency.
              </span>
            </div>
            <div className="tooltip">
              <SiChatbot />
              <span className="tooltip-text">
              With UChat, I have built AI-driven chatbots that integrate across multiple messaging channels, boosting client engagement.
              </span>
            </div>
            <div className="tooltip">
              <SiOpenai />
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
              <FaReact />
              <span className="tooltip-text">
              Utilizing React, I developed this portfolio, creating a responsive front-end application to showcase my experience and skills.
              </span>
            </div>
            <div className="tooltip">
              <FaAngular />
              <span className="tooltip-text">
              Utilizing Angular, I developed the initial version of my portfolio, a project that marked my first full-stack web development experience.
              </span>
            </div>
            <div className="tooltip">
              <FaHtml5 />
              <span className="tooltip-text">
              With HTML, I have structured the foundations of numerous web pages, following best practices for design and scalability.
              </span>
            </div>
            <div className="tooltip">
              <FaCss3 />
              <span className="tooltip-text">
              With CSS, I crafted the look and layout for web pages, allowing for unique customization and visual appeal.
              </span>
            </div>
            <div className="tooltip">
              <FaJsSquare />
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
              <FaGit />
              <span className="tooltip-text">
              With Git, I implemented version control across projects, facilitating collaboration and organized development.
              </span>
            </div>
            <div className="tooltip">
              <FaGithub />
              <span className="tooltip-text">
              On GitHub, I have published my projects and documented my learning journey, showcasing my growth and connecting with other developers.
              </span>
            </div>
            <div className="tooltip">
              <FaFigma />
              <span className="tooltip-text">
              In Figma,  I honed foundational UI/UX design skills, supporting real-time collaboration and creating prototypes and wireframes.
              </span>
            </div>
            <div className="tooltip">
              <FaDatabase />
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
