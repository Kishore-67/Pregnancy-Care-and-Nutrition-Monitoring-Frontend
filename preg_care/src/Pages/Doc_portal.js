import React from 'react'
import Navbar2 from '../Component/Navbar2'
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import '../Styles/User_Portal.css'
function Doc_Portal() {
  return (
    <>
    <Navbar2/>
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <div style={{position:'fixed'}}>
        <Menu>
        <div style={{position:'absolute',display:'flex',flexDirection:'column',justifyContent:'space-between',marginTop:'20%'}}>
          
          <MenuItem><h3> Dashboard </h3></MenuItem>
          <MenuItem><h3> Manage Patient</h3></MenuItem>
          <MenuItem><h3> Appointments </h3></MenuItem>
          <MenuItem><h3> Reports </h3></MenuItem>
          </div>
        </Menu>
        </div>
      </Sidebar>
      <h1>Doc Portal</h1>
    </div>
    </>
  )
}

export default Doc_Portal