import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Component/H-sidebar';
import Navbar from '../Component/Navbar2';
import '../Styles/HospitalDashboard.css';

function HospitalDashboard() {
  const [hospital, setHospital] = useState({});

  useEffect(() => {
    const fetchHospitalDetails = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/hospital/details');
        setHospital(res.data);
      } catch (err) {
        console.error('Error fetching hospital details:', err);
      }
    };

    fetchHospitalDetails();
  }, []);

  return (
    <div className="hospital-dashboard">
    <Navbar />
      <Sidebar />
      <div className="main-content">
        <div className="hospital-card">
          <h2>Hospital Details</h2>
          <p><strong>Name:</strong> {hospital.name}</p>
          <p><strong>Address:</strong> {hospital.address}</p>
          <p><strong>Phone:</strong> {hospital.phone}</p>
          <p><strong>Email:</strong> {hospital.email}</p>
          <p><strong>Description:</strong> {hospital.description}</p>
          <p><strong>Facilities:</strong> {hospital.facilities}</p>
          <p><strong>Location:</strong> {hospital.location}</p>
        </div>
      </div>
    </div>
  );
}

export default HospitalDashboard;
