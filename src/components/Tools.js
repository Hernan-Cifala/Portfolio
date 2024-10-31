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
              <span className="tooltip-text">Wix is an app to design webs</span>
            </div>
            <div className="tooltip">
              <SiMake />
              <span className="tooltip-text">
                Make is used for automatations
              </span>
            </div>
            <div className="tooltip">
              <SiChatbot />
              <span className="tooltip-text">
                UChat is an app for building conversational bots
              </span>
            </div>
            <div className="tooltip">
              <SiOpenai />
              <span className="tooltip-text">
                OpenAI is a platform to design and test advanced AI bots
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
                React is a popular framework for designing complex web
                applications
              </span>
            </div>
            <div className="tooltip">
              <FaAngular />
              <span className="tooltip-text">
                Angular is a popular framework for designing complex web
                applications
              </span>
            </div>
            <div className="tooltip">
              <FaHtml5 />
              <span className="tooltip-text">
                HTML is the foundation of every web app
              </span>
            </div>
            <div className="tooltip">
              <FaCss3 />
              <span className="tooltip-text">
                CSS is used to style every web page
              </span>
            </div>
            <div className="tooltip">
              <FaJsSquare />
              <span className="tooltip-text">
                JavaScript is the base programming language for web apps
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
                Git is a great tool for scalable project management
              </span>
            </div>
            <div className="tooltip">
              <FaGithub />
              <span className="tooltip-text">
                Github is a great tool for scalable and remote project
                management
              </span>
            </div>
            <div className="tooltip">
              <FaFigma />
              <span className="tooltip-text">
                Figma is used for advanced design applications
              </span>
            </div>
            <div className="tooltip">
              <FaDatabase />
              <span className="tooltip-text">
                Databases and SQL is important for every project managing
                dynamic data
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
