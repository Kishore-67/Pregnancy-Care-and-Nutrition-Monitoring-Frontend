// Doc_Portal.js

import React, { useState, useEffect } from 'react';
import Navbar2 from '../Component/Navbar2';
import Sidebar from '../Component/D-Sidebar';
import '../Styles/Doc_portal.css';

function Doc_Portal() {
  const [doctorDetails, setDoctorDetails] = useState({
    name: '',
    patientsAttended: 0,
    specialty: '',
    Consultations: '',
    email: ''
  });

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('https://api.example.com/doctorDetails')
      .then(response => response.json())
      .then(data => {
        setDoctorDetails({
          name: data.name,
          patientsAttended: data.patientsAttended,
          specialty: data.specialty,
          email: data.email
        });
      })
      .catch(error => console.error('Error fetching doctor details:', error));
  }, []);

  return (
    <div className='par'>
      <Navbar2 />
      <Sidebar />
      <div style={{display:'flex',position:'absolute',top:'11%',left:'22%'}}><h2>Overview</h2></div>
      
      <div className="Details">
        <div className="details-container">
          <div className="detail-item">
            <strong>Doctor Name</strong>
            <div>{doctorDetails.name}</div>
          </div>
          <div className="detail-item">
            <strong>Patients Attended</strong>
            <div>{doctorDetails.patientsAttended}</div>
          </div>
          <div className="detail-item">
            <strong>Specialty</strong>
            <div>{doctorDetails.specialty}</div>
          </div>
          <div className="detail-item">
            <strong>Consultations</strong>
            <div>{doctorDetails.Consultations}</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Doc_Portal;
