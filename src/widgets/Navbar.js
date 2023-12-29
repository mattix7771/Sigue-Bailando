import React from 'react';
import { Container, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../App.css';
import logo from '../resources/logo5.png';

function NavbarComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#D1202C', margin: 0, padding: 0 }}>
      <Container>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
          <img src={logo} alt="Logo" />
          SIGUE BAILANDO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto" style={{ width: '100%', justifyContent: 'flex-end' }}>
              <Nav.Link href="#gallery" style={{ color: 'white', fontWeight: 'bold' }}>Galleri</Nav.Link>
              <Nav.Link href="link" style={{ color: 'white', fontWeight: 'bold' }}>Billeder</Nav.Link>
              <Nav.Link href="link" style={{ color: 'white', fontWeight: 'bold' }}>Videoer</Nav.Link>
              <Nav.Link href="link" style={{ color: 'white', fontWeight: 'bold' }}>Om</Nav.Link>
            </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
