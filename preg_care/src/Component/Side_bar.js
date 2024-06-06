import React from 'react'
import { Sidebar, Menu, MenuItem ,SubMenu} from "react-pro-sidebar";
import '../Styles/User_Portal.css'
import { Link } from 'react-router-dom';
function Side_bar() {
  return (
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
   <Link to={'/User_Portal'} style={{ textDecoration: 'none' }}> <MenuItem> Dashboard </MenuItem></Link>
    <Link to={'/Nutrition'} style={{ textDecoration: 'none' }}><MenuItem> Nutrtion Tracker </MenuItem></Link>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
      </div>  )
}

export default Side_bar