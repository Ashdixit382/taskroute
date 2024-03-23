import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Upskill Mafia All rights reserved.</p>
        <button className="register-btn">Register for free</button>
      </div>
    </footer>
  );
};

export default Footer;