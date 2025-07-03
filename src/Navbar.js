import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/images/logo.png"
            alt="Art Classes"
            height="40"
            className="d-inline-block align-top me-2"
          />
          Art Classes
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/"
              active={location.pathname === '/'}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/courses"
              active={location.pathname === '/courses'}
            >
              Courses
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about"
              active={location.pathname === '/about'}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact"
              active={location.pathname === '/contact'}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="ms-lg-3">
            <Button 
              as={Link} 
              to="/login"
              variant="outline-primary"
              className="me-2"
            >
              Login
            </Button>
            <Button 
              as={Link} 
              to="/register"
              variant="primary"
            >
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation; 