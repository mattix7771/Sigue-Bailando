import React from 'react';
import { Container, Button, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import '../App.css';

function BottomNavbarComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#D1202C', margin: 0, padding: 10}}>
      <Container >
        <div className='inline-flex'>
          <Navbar.Brand href="#home" className='text-white font-bold'>SIGUE BAILANDO</Navbar.Brand>
          <a className='ml-auto' href='https://www.facebook.com/groups/651480019849154/' target="_blank" rel="noopener noreferrer">
            <Image className='mr-auto' src={require('../resources/fb.png')} rounded fluid style={{ width: '8%' }} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default BottomNavbarComponent;