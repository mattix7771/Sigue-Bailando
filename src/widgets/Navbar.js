import React from 'react';
import { Container, Button, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import '../App.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#D1202C', margin: 0, padding: 0 }}>
      <Container>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold', padding: '10px' }}>
          {/* <img src={logo} alt="Logo" /> */}
          SIGUE BAILANDO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto" style={{ width: '100%', justifyContent: 'flex-end' }}>
              <Nav.Link href="#gallery" style={{ color: 'white', fontWeight: 'bold' }}>Galleri</Nav.Link>
              {/* <Nav.Link href="link" style={{ color: 'white', fontWeight: 'bold' }}>Billeder</Nav.Link>
              <Nav.Link href="link" style={{ color: 'white', fontWeight: 'bold' }}>Videoer</Nav.Link>
              <Nav.Link href="link" style={{ color: 'white', fontWeight: 'bold' }}>Om</Nav.Link> */}
            </Nav>
            
        </Navbar.Collapse>
      </Container>

      <a className='bg-white rounded-full mr-8 hidden lg:inline-block' style={{ width: '30px' }} href='https://www.facebook.com/groups/651480019849154/' target="_blank" rel="noopener noreferrer">
        <Image className='' src={require('../resources/fb_white.png')} rounded fluid style={{ width: '100%' }} />
      </a>

    </Navbar>
  );
}

export default NavbarComponent;
