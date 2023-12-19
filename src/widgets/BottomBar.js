import React from 'react';
import { Container, Button, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import '../App.css';
import logo from '../resources/logo5.png';

function BottomNavbarComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#D1202C', margin: 0, padding: 10}}>
      <Container >
        <div >
          <Navbar.Brand href="#home" style={{ color: 'white', fontWeight: 'bold' }}>SIGUE BAILANDO</Navbar.Brand>
          <a href='https://www.facebook.com/groups/651480019849154/' target="_blank" rel="noopener noreferrer">
            <Image src={require('../resources/fb.png')} rounded fluid style={{ width: '8%' }} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default BottomNavbarComponent;