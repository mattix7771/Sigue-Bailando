import React from 'react';
import { Container, Button, Nav, Navbar, NavDropdown, Image, Brand } from 'react-bootstrap';
import '../App.css';
import logo from "../resources/logo4.png"

function BottomNavbarComponent() {
  return (
<Navbar expand="lg" className="bg-black p-3 relative">
  <Container className="flex justify-between items-center">
    
    <Navbar.Brand href="/" className="flex items-center text-white lg:px-3 font-serif
                                      sm:w-96">
      <img src={logo} alt="Logo" className="w-16 sm:w-24 lg:w-24 rounded-xl lg:my-2 ml-1 lg:ml-20 mr-3 lg:mr-6" />
      <div className="text-lg sm:text-3xl lg:text-4xl pt-1">SIGUE BAILANDO</div>
    </Navbar.Brand>
    
    <div className="text-white sm:text-2xl">Latin School in Esbjerg</div>

    <div className="text-white sm:text-2xl lg:flex lg:flex-col lg:items-start">
      <div className="flex mb-2 mt-4">
        <img className="w-6 lg:w-8 mr-2" src={require('../resources/pin.png')} alt="Pin" />
        <div>Danmarksgade 53, 6700 Esbjerg</div>
      </div>

      <div className="flex mb-2">
        <img className="w-6 lg:w-8 mr-2" src={require('../resources/email.png')} alt="Email" />
        <div>siguebailandobachata@gmail.com</div>
      </div>

      <div className="flex mb-4">
        <img className="w-6 lg:w-8 mr-2" src={require('../resources/phone.png')} alt="Phone" />
        <div>60125289</div>
      </div>
            
    </div>

    <div className="text-gray-400">
      <hr/>
      <div className='mb-2 sm:text-2xl'>Website developed by Mattia Merati <br/><span className='text-[13px] sm:text-xl'>For webpage inquiries, contact mattione7@gmail.com</span></div>
      <span className='sm:text-xl'>Copyright © 2024 Sigue Bailando - Dance School in Esbjerg</span>
    </div>


        {/* <div className='inline-flex'>
          <Navbar.Brand href="#home" className='text-white font-bold'>SIGUE BAILANDO</Navbar.Brand>
          <a className='ml-auto' href='https://www.facebook.com/groups/651480019849154/' target="_blank" rel="noopener noreferrer">
            
          </a>
        </div> */}
      </Container>
    </Navbar>
  );
}

export default BottomNavbarComponent;