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
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Tools />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
