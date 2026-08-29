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
      {/* Decorative and mouse-only: hidden from assistive tech rather than
          announced as a stray "</>" with no keyboard equivalent. */}
      <div
        className={`draggable-block ${slideIn ? 'slide-in-right' : ''}`}
        aria-hidden="true"
      >
        &lt;/&gt;
      </div>
    </Draggable>
  );
};

const Hero = () => {
  return (
    <section className="hero-section sticky">
      {/* playsInline is required by Safari on iOS: without it the video does
          not autoplay inline and the hero stays empty. */}
      <video autoPlay loop muted playsInline aria-hidden="true" tabIndex={-1} className="hero-video">
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
