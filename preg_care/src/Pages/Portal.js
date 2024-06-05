import React from 'react';
import Navbar2 from '../Component/Navbar2';
import { Link } from 'react-router-dom';
import '../Styles/User_Portal.css';
import '../Styles/portal.css'
function Portal() {
  return (
    <>
      <Navbar2 />
      <div className="portal-container">
        <h1>Who Are You?</h1>
        <div className="button-container">
          <Link to={'/User_log'}>
            <button className="portal-button">Patient</button>
          </Link>
          <Link to={'/Doc_log'}>
            <button className="portal-button">Doctor</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Portal;
