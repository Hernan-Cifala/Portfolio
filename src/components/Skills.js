// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section className="skills">
  <h1>Soft Skills</h1>
  <div className="skills-grid">
    <div className="skill-box">
      <h3>Resourcefulness</h3>
      <p>Whether while developing a personal project or while at my job as a LowCode Developer...</p>
    </div>
    <div className="skill-box">
      <h3>Creativity</h3>
      <p>Coming up with ideas to solve problems is important in order to innovate in the technology sector...</p>
    </div>
    <div className="skill-box">
      <h3>Technical Mindset</h3>
      <p>With the speed at which technology advances, it is important to keep an open mind...</p>
    </div>
    <div className="skill-box">
      <h3>Detail-Orientation</h3>
      <p>When developing a web page or scouring through data, it's not enough to just write code...</p>
    </div>
    <div className="skill-box">
      <h3>Autonomy</h3>
      <p>Being able to work independently and make critical decisions without constant oversight...</p>
    </div>
    <div className="skill-box">
      <h3>Time-Management</h3>
      <p>Effectively managing time to meet deadlines and balance multiple tasks is crucial for productivity...</p>
    </div>
        {/* <div className="connection-lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="glowing-circle"></div> */}
      </div>
    </section>
  );
};

export default Skills;
