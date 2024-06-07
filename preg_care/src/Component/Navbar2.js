import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar2.css';

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
      </div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
           <li><NavLink to="/">Logout</NavLink></li>          

      </ul>
    </nav>
  );
};

export default Navbar1;
