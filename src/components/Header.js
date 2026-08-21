// src/components/Header.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // The links are the only navigation the site has, so on mobile they collapse
  // into this menu instead of being hidden.
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-left">
        <h1>Hernán Cifalá | Developer</h1>
      </div>
      <div className="header-right">
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav id="main-nav">
          <ul className={menuOpen ? 'open' : ''}>
            <li><a href="#about" onClick={closeMenu}>About Me</a></li>
            <li><a href="#growth" onClick={closeMenu}>My Growth</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
