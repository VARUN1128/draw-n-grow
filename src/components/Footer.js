import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">Connect With Us</h3>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaDiscord className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <a href="mailto:thedoodlenestart@gmail.com" className="contact-link">
              <MdEmail className="contact-icon" />
              thedoodlenestart@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Artsy-Sprouts. All rights reserved.
        </p>
        <p className="developed-by">
          Developed by NextGen Software Solutions
        </p>
      </div>
    </footer>
  );
};

export default Footer; 