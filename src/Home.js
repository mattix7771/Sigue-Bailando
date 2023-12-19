import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './widgets/Navbar';
import BottomBar from './widgets/BottomBar';
import Card from './widgets/Card';
import stripes from './resources/flag stripes.png';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Container style={{ flex: 1, backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.1)), url(${stripes})`, backgroundColor: 'rgba(0,0,0,0.1)', backgroundSize: 'cover', height: '100%' }}>
        <Row style={{ padding: '10px' }}>
          <Col xs={4}>
            <Image src={require('./resources/banner3.jpg')} rounded fluid />
          </Col>
          <Col xs={4}>
            <Image src={require('./resources/banner2.jpg')} rounded fluid />
          </Col>
          <Col xs={4}>
            <Image src={require('./resources/banner1.jpg')} rounded fluid />
          </Col>
        </Row>
      </Container>
      <a className='text-3xl text-center font-bold font-serif text-blue-700'>Vilkommen til Sigue Bailando Bachata and Latin Dance Esbjerg</a>
      <Card header={"Sigue Bailando Bachata and Latin Dance in Esbjerg"} title={"Every Monday bachata classes with Martin Barroso"} text={"19-00 to 20:00 beginners 20:00 to 21:00 level 1 21:00 to 22:00 level 2 join us 💃🇩🇴🕺 Join us and get fun on the dance floor💃🕺"} style={"info"}/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.69421728696!2d8.448413012034774!3d55.467997213779505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212ae6267227%3A0x4d7f10ce0262718e!2sDanmarksgade%20Skole!5e0!3m2!1sen!2sch!4v1702999068134!5m2!1sen!2sch" width="600" height="450" className='border-spacing-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <BottomBar />
    </div>
  );
}

export default Home;
