import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'thedoodlenestart@gmail.com',
      link: 'mailto:thedoodlenestart@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9495917116',
      link: 'tel:+919495917116'
    }
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      link: '#'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      link: '#'
    },
    {
      icon: <FaYoutube />,
      name: 'YouTube',
      link: '#'
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">We'd love to hear from you</p>
      </div>

      <div className="contact-content">
        <div className="contact-section">
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link}
                className="contact-card"
                target={info.title === 'Email' ? '_blank' : undefined}
                rel={info.title === 'Email' ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-card__icon">
                  {info.icon}
                </div>
                <div className="contact-card__content">
                  <h3 className="contact-card__title">{info.title}</h3>
                  <p className="contact-card__value">{info.value}</p>
                </div>
                <div className="contact-card__arrow">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-form-section">
            <div className="contact-form-card">
              <h2 className="contact-form-title">Send us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="social-section">
          <h2 className="social-title">Connect With Us</h2>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 