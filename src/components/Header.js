// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Hernán Cifalá | Developer</h1>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#growth">My Growth</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
