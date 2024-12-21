import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Header.css'; // Custom CSS for additional styling
import logo from '../Assets/logototurn-removebg-preview.png'; // Import the image as 'logo'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Check if the current path is /Signin or /Signup
  if (location.pathname === '/Signin' || location.pathname === '/Signup') {
    return null; // Don't render the header if on Signin or Signup page
  }

  return (
    <Navbar expand="lg" className="custom-header">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo} // Use 'logo' here, which is the imported image path
            alt="BizView Solutions Logo"
            className="brand-logo"
            style={{ height: '80px', width: 'auto' }} // Adjust height as needed
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links d-flex align-items-center">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/Reviewpage" className="custom-nav-link">REVIEWS</Nav.Link>
            <Nav.Link as={Link} to="/Aboutus" className="custom-nav-link">ABOUT US</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center"> 
            <Button variant="outline-light" as={Link} to="/Signin" className="login-btn mr-2">Login</Button>
            <Button variant="success" as={Link} to="/Signup" className="signup-btn">Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
