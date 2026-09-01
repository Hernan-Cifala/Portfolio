// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Tools from './components/Tools';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';  // Imported globally in App.js

function App() {
  return (
    <div>
      {/* First focusable element in the DOM on purpose: it lets keyboard users
          jump past the nav. The target needs tabIndex -1 so the jump moves the
          focus and not just the scroll position. */}
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      {/* Everything below the header is the page content: without a main
          landmark, screen reader users have no way to skip the navigation. */}
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Tools />
        <Skills />
        <Projects />
      </main>
      {/* Outside <main> on purpose: Contact renders the page <footer>, and a
          footer nested inside main is not the contentinfo landmark. */}
      <Contact />
    </div>
  );
}

export default App;
