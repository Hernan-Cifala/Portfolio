import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

const DraggableBlock = () => {
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    // Remove slide-in class after animation completes
    const timer = setTimeout(() => setSlideIn(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Draggable>
      <div className={`draggable-block ${slideIn ? 'slide-in-right' : ''}`}>&lt;/&gt;</div>
    </Draggable>
  );
};

const Hero = () => {
  return (
    <section className="hero-section sticky">
      <video autoPlay loop muted className="hero-video">
        <source src="videos/Hero Video.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="hero-title">
          Blending Creativity with Technology to Empower Growth and Innovation
        </h1>
        {/* Draggable Block Component */}
        <DraggableBlock />
      </div>
    </section>
  );
};

export default Hero;
