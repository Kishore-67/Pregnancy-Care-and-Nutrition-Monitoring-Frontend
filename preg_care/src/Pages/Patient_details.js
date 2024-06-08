import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Pateint_Details.css';  // Ensure you have the CSS file
import Navbar1 from '../Component/Navbar2';
import Sidebar from "../Component/D-Sidebar";

const PatientDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/data?search=${searchTerm}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  return (
    <div>
        <Navbar1/>
        <Sidebar/>
      <div className='pdetails'>
        <div className='in'>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search..." 
        /></div>
        <div className='bt'><button onClick={handleSearch}>Search</button></div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.patientId}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PatientDetails;