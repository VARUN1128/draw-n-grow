import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPalette } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  const controlNavbar = () => {
    if (window.innerWidth <= 768) { // Only apply for mobile
      if (window.scrollY > lastScrollY) { // Scrolling down
        setShouldHideHeader(true);
      } else { // Scrolling up
        setShouldHideHeader(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // Don't render navbar on login page
  if (location.pathname === '/login') {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${shouldHideHeader ? 'hidden' : ''}`}>
      <div className="navbar-brand">
        <Link to="/" className="logo">
          <FaPalette className="logo-icon" />
          <span>Artsy Sprouts</span>
        </Link>
      </div>

      <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/courses" onClick={closeMenu}>Courses</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/login" className="login-button" onClick={closeMenu}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar; 