import React from 'react'
import Navbar2 from '../Component/Navbar2'
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import '../Styles/User_Portal.css'
function User_portal() {
  return (
    <>
    <Navbar2/>
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <div style={{position:'fixed'}}>
        <Menu>
        <div style={{position:'absolute',display:'flex',flexDirection:'column',justifyContent:'space-between',marginTop:'20%'}}>
          
          <MenuItem><h3> Dashboard </h3></MenuItem>
         <Link to={'/Nutrition'}><MenuItem><h3> Nutrition Tracker </h3></MenuItem></Link> 
          <MenuItem><h3> Calendar </h3></MenuItem>
          <MenuItem><h3> Reports </h3></MenuItem>
          </div>
        </Menu>
        </div>
      </Sidebar>
      <h1>WELCOME TO QUICKPAY</h1>
    </div>
    </>
  )
}

export default User_portal