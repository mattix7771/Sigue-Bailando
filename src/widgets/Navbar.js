import React, { useEffect, useState } from 'react';
import { Container, Button, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import '../App.css';
import logo from "../resources/logo4.png"

function NavbarComponent({ opacity }) {

  const [navOpacity, setNavOpacity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MAXSCROLL = 600;
  const scroll = "fixed"; // fixed for following menu or absilute for static menu

  const handleScroll = () => {
    if (navOpacity < MAXSCROLL && !isMenuOpen && !opacity){
      setNavOpacity(window.scrollY/MAXSCROLL);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if(opacity){
      setNavOpacity(opacity);
    }
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen((prevState) => {
      const newMenuOpenState = !prevState;
  
      if (newMenuOpenState) {
        setNavOpacity(1);
      } else{
        setNavOpacity(window.scrollY/MAXSCROLL);
      }

      return newMenuOpenState;
    });
  }

  return (
    <Navbar id="navbar" variant="dark" expand="lg" className='w-full lg:m-0' style={{ backgroundColor: `rgba(229, 32, 44, ${navOpacity})`, padding: 0, position: `${scroll}`, top: 0, "z-index": "10" }}>
      <Container>
        
        <Navbar.Brand href="/" className='flex items-center text-white lg:px-3 font-serif'>
          <img src={logo} alt="Logo" className='w-16 sm:w-32 lg:w-24 rounded-xl lg:my-2 ml-1 lg:ml-20 mr-3 lg:mr-6' />
          <span className='text-lg sm:text-4xl lg:text-4xl pt-1'>SIGUE BAILANDO</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" onClick={handleMenuOpen}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ width: '100%', justifyContent: 'flex-end' }}>
            <Nav.Link href="#gallery" className='font-bold text-white text-2xl sm:text-4xl font-serif'>Gallery</Nav.Link>
            {/* <Nav.Link href="link" style={{ color: 'white', fontWeight: 'bold' }}>Billeder</Nav.Link>
            <Nav.Link href="link" style={{ color: 'white', fontWeight: 'bold' }}>Videoer</Nav.Link>
            <Nav.Link href="link" style={{ color: 'white', fontWeight: 'bold' }}>Om</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

      </Container>


    </Navbar>
  );
}

export default NavbarComponent;
