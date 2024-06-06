import React, { useState, useEffect } from 'react';
import Navbar2 from '../Component/Navbar2';
import { Sidebar, Menu, MenuItem ,SubMenu} from "react-pro-sidebar";
import '../Styles/User_Portal.css';
import { LineChart } from '@mui/x-charts';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./Avatar.jpg";
import { Link } from 'react-router-dom';

function User_portal() {
  const [userDetails, setUserDetails] = useState({
    patientName: '',
    age: '',
    doctorName: '',
    doctorNumber: '',
    hospitalName: '',
    hospitalNumber: ''
  });

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('https://api.example.com/userDetails')
      .then(response => response.json())
      .then(data => {
        setUserDetails({
          patientName: data.patientName,
          age: data.age,
          doctorName: data.doctorName,
          doctorNumber: data.doctorNumber,
          hospitalName: data.hospitalName,
          hospitalNumber: data.hospitalNumber
        });
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, []);

  const xLabels = {
    1: '1st month',
    1.5: '2nd month',
    2: '3rd month',
    2.5: '4th month',
    3: '5th month',
    3.5: '6th month',
    4: '7th month',
    4.5: '8th month',
    5.5: '9th month'
  };

  const yLabels = {
    45: 'LOW',
    50: 'Moderate',
    60: 'High',
    70: 'Very High',
    80: 'Extreme'
  };

  return (
    <>
      <Navbar2 />
      <div className="sidebar-container">
        <Sidebar>
              <Menu menuItemStyles={{
              button: ({ level, active, disabled }) => {
                if (level === 0)
                  return {
                    color: disabled ? '#f5d9ff' : '#d359ff',
                    backgroundColor: active ? '#FEB69D' : undefined,
                  };
              },
            }}>
    <MenuItem> Dashboard </MenuItem>
    <Link to={'/Nutrition'} style={{ textDecoration: 'none' }}><MenuItem> Nutrtion Tracker </MenuItem></Link>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
      </div>
      <div className='Details'>
        <div style={{ marginTop: '20px', marginLeft: '20px' }}>
          <ReactRoundedImage 
            image={MyPhoto} 
            roundedSize="0"
            imageWidth="200"
            imageHeight="200"
          />
        </div>
        <div className='personal'>
          <h2>Personal Details</h2>
          <p><strong>Name:</strong> Jane Doe</p>
          <p><strong>Age:</strong> 28</p>
          <p><strong>Pregnancy Month:</strong> 5th Month</p>
        </div>
      </div>
      <div className='personal-details'>
        <h2>Personal Details</h2>
        <p><strong>Patient Name:</strong> {userDetails.patientName}</p>
        <p><strong>Age:</strong> {userDetails.age}</p>
        <p><strong>Doctor Name:</strong> {userDetails.doctorName}</p>
        <p><strong>Doctor Number:</strong> {userDetails.doctorNumber}</p>
        <p><strong>Hospital Name:</strong> {userDetails.hospitalName}</p>
        <p><strong>Hospital Number:</strong> {userDetails.hospitalNumber}</p>
      </div>
      <div className='Wei_Chrt'>
        <div style={{ position: 'relative' }}>
          <div className='txt'>Weight Chart</div>
          <LineChart
            xAxis={[
              {
                data: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.5],
                axisLine: { stroke: 'white' },
                tick: { fill: 'green' },
                valueFormatter: value => String(xLabels[value] || value)
              },
            ]}
            yAxis={[
              {
                axisLine: { stroke: 'blue' },
                tick: { fill: 'purple' },
                valueFormatter: value => String(yLabels[value] || value)
              },
            ]}
            series={[
              {
                data: [50, 54, 55, 53, 50, 55, 57, 60],
                color: 'orange',
              },
            ]}
            width={800}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default User_portal;
