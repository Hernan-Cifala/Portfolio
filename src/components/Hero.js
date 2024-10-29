import React from 'react';
import Draggable from 'react-draggable';

const Hero = () => {
  return (
    <section className="hero-section sticky">
      <video autoPlay loop muted className="hero-video">
        <source src="videos/Hero Video.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="hero-title">Welcome</h1>
        {/* Draggable Block */}
        <Draggable>
          <div className="draggable-block">&lt;/&gt;</div>
        </Draggable>
      </div>
    </section>
  );
};

export default Hero;
