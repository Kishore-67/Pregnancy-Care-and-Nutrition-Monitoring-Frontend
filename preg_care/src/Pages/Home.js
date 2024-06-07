// src/components/Home.js

import React from 'react';
import Navbar1 from '../Component/Navbar1';
import '../Styles/Home.css';
import PregWomen from '../assets/preg-women.png'; // Ensure this path is correct
import FetalBaby from '../assets/fetal baby.png'; // Corrected the filename to use a hyphen

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

        <div className="intro-content">
          <img src={FetalBaby} alt="Fetal Baby" className="intro-image" />
          <div className="intro-text">
            <h2 className='heading'>About Our Service</h2>
            <p>
              Our platform offers comprehensive care and monitoring for pregnant women, ensuring optimal nutrition and medical attention. We provide tools to track medication schedules, food routines, and prenatal appointments, helping expectant mothers stay organized and informed. With personalized reminders and easy-to-access health information, we support every step of the pregnancy journey. Our goal is to ensure that both mother and baby receive the best possible care, promoting a healthy pregnancy and peace of mind. From nutritional guidance to medical updates, our platform is designed to make managing pregnancy simpler and more efficient.
            </p>
          </div>
        </div>

        <h2 className='heading'>Features</h2>
        <div className="features">
          <div className="card">
            <strong>Medication reminders via WhatsApp</strong>
            <p>Receive timely reminders for your medications directly through WhatsApp, ensuring you never miss a dose.</p>
          </div>
          <div className="card">
            <strong>Personalized nutrition plans</strong>
            <p>Get customized nutrition plans tailored to your specific dietary needs and health goals.</p>
          </div>
          <div className="card">
            <strong>Emergency alerts and location tracking</strong>
            <p>In case of emergencies, send alerts with your location to your loved ones or caregivers instantly.</p>
          </div>
          <div className="card">
            <strong>Appointment scheduling and follow-up reminders</strong>
            <p>Schedule appointments with ease and receive reminders for upcoming and follow-up visits to ensure you stay on track with your health care.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2 className='heading'>Get Started</h2>
        <p>
          Sign up today to take control of your pregnancy care. Our team of experts is here to support you every step of the way.
        </p>
        <a href="/signup" className="cta-button">Sign Up Now</a>
      </section>
      <footer className="footer">
        <p style={{ color: '#c469b9' }}>&copy; 2024 Pregnancy Care and Nutrition Monitoring. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
