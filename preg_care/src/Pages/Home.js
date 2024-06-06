// src/components/Home.js

import React from 'react';
import Navbar1 from '../Component/Navbar1';
import '../Styles/Home.css';
import PregWomen from '../assets/preg-women.png'; // Ensure this path is correct

function Home() {
  return (
    <div className="home">
      <Navbar1 />
      <section>
        <header className="header">
          <div>
          <h1 className="header-text">Happy Pregnancy</h1>
          <p>Your Journey to Motherhood Starts Here</p>
          </div>
          <div>
          <img src={PregWomen} alt="Pregnant Woman" className="header-image" />
          </div>
        </header>
      </section>
        <section className="intro">
          <div>
          <h2>About Our Service</h2>
          <p>
          Our platform offers comprehensive care and monitoring for pregnant women, ensuring optimal nutrition and medical attention. We provide tools to track medication schedules, food routines, and prenatal appointments, helping expectant mothers stay organized and informed. With personalized reminders and easy-to-access health information, we support every step of the pregnancy journey. Our goal is to ensure that both mother and baby receive the best possible care, promoting a healthy pregnancy and peace of mind. From nutritional guidance to medical updates, our platform is designed to make managing pregnancy simpler and more efficient.
          </p>
          </div>
        </section>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Medication reminders via WhatsApp</li>
            <li>Personalized nutrition plans</li>
            <li>Emergency alerts and location tracking</li>
            <li>Appointment scheduling and follow-up reminders</li>
          </ul>
        </section>
        <section className="cta">
          <h2>Get Started</h2>
          <p>
            Sign up today to take control of your pregnancy care. Our team of experts is here to support you every step of the way.
          </p>
          <a href="/signup" className="cta-button">Sign Up Now</a>
        </section>
      <footer className="footer">
        <p>&copy; 2024 Pregnancy Care and Nutrition Monitoring. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
