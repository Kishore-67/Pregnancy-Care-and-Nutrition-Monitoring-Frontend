import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar1.css';

export const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="logo">MyApp</div>
      <div
        className="menu-icon"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
      </div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Hospital_reg">Register</NavLink></li>
        <li><NavLink to="/Portal">LogIn</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar1;
