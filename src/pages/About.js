import React from 'react';
import '../styles/About.css';
import { FaPalette, FaGraduationCap, FaHeart } from 'react-icons/fa';
import founderImage from '../assets/ji.jpg';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-title">About Artsy Sprouts</h1>
        <p className="about-subtitle">Nurturing Creative Minds</p>
      </div>

      <div className="about-content">
        <div className="founder-section">
          <div className="founder-image-container">
            <img src={founderImage} alt="Founder of Artsy Sprouts" className="founder-image" />
          </div>
          <div className="founder-info">
            <h2 className="founder-title">Meet Our Founder</h2>
            <p className="founder-description">
              Welcome to Artsy Sprouts! I'm passionate about bringing the joy of art to young minds
              and helping them discover their creative potential. With years of experience in art
              education, I've developed a unique approach that makes learning art both fun and
              effective for children.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaPalette className="value-icon" />
              <h3>Creative Freedom</h3>
              <p>We encourage unrestricted artistic expression and imagination.</p>
            </div>
            <div className="value-card">
              <FaGraduationCap className="value-icon" />
              <h3>Quality Education</h3>
              <p>Our structured curriculum ensures steady artistic growth.</p>
            </div>
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Nurturing Environment</h3>
              <p>We create a supportive space for young artists to flourish.</p>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            At Artsy Sprouts, we believe every child has an artist within them. Our mission is to
            nurture this creative spirit through structured, engaging art education that builds
            confidence, develops skills, and ignites a lifelong passion for artistic expression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 