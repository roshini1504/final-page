import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import logo from './logo.jpeg';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Container>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="d-inline-block align-top" style={{ width: '40px', height: '40px' }} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link-blue">Home</Nav.Link>
            <Nav.Link href="/industries" className="nav-link-blue">Industries</Nav.Link>
            <Nav.Link href="/services" className="nav-link-blue">Services</Nav.Link>
            <Nav.Link href="/team" className="nav-link-blue">Team</Nav.Link>
            <Nav.Link href="/clients" className="nav-link-blue">Clients</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-blue">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
