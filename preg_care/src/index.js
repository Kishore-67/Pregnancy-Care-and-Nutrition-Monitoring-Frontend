import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import Hospital_Reg from './Authentication/Hospital_Reg';
import Doc_log from './Authentication/Doctor_log.js';
import User_log from './Authentication/User_log.js';
import Portal from './Pages/Portal.js'
import Doc_Portal from './Pages/Doc_portal.js';
import User_portal from './Pages/User_portal.js';


const appRouter = createBrowserRouter([
  
  {
    path: '/',
    element: <App/>
  },
  {
    path:'/Portal',
    element:<Portal/>
  },
 {
    path: '/User_log',
    element:<User_log/>
  },
  {
    path:'/Home',
    element:<Home/>
  },
  {
    path:'/Doc_log',
    element:<Doc_log/>
  },
  {
    path:'/Hospital_reg',
    element:<Hospital_Reg/>
  },
  {
    path:'/User_Portal',
    element:<User_portal/>
  },
  {
    path:'/Doc_Portal',
    element:<Doc_Portal/>
  },



  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
