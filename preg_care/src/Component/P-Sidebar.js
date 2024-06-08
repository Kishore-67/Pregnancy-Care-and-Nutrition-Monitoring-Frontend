import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Sidebar.css';
import UserLogo from '../assets/Avatar.jpg';

function Sidebar() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/Profile/profile');
        const { user } = res.data;
        setUsername(user.name);
      } catch (err) {
        console.error('Error fetching user profile:', err);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="sidebar">
      <div className="user-info">
        <img src={UserLogo} alt="User Logo" className="user-logo" />
        <h3>{username}</h3>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="/User_Portal">Dashboard</a></li>
          
          <li><a href="/Nutrition">Nutrition Tracker</a></li>
          {/* <li><a href="/medical-records">Medical Records</a></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;