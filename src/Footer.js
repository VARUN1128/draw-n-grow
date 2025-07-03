import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Contact Information</h5>
            <p className="mb-1">Anagha Ravikumar</p>
            <p className="mb-1">Phone: +91 9495917116</p>
            <p className="mb-3">
              Address: Cherumanchitayil H<br />
              Perumpilly P.O<br />
              Mulanthuruthy
            </p>
            <div className="social-links">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-muted text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/courses" className="text-muted text-decoration-none">
                  Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-muted text-decoration-none">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-muted text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5>Course Categories</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/courses?level=beginner" className="text-muted text-decoration-none">
                  Beginner Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/courses?level=intermediate" className="text-muted text-decoration-none">
                  Intermediate Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/courses?level=advanced" className="text-muted text-decoration-none">
                  Advanced Courses
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center text-muted">
            <small>
              &copy; {new Date().getFullYear()} Art Classes by Anagha Ravikumar. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 