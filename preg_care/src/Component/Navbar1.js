// src/components/Navbar1.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar1.css';

export const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">PregCare</div>
      <div
        className="menu-icon"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        &#9776; {/* Menu icon */}
      </div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/Hospital_reg" onClick={() => setMenuOpen(false)}>Register</NavLink></li>
        <li><NavLink to="/Portal" onClick={() => setMenuOpen(false)}>LogIn</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar1;
