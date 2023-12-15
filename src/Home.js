import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './widgets/Navbar';
import banner1 from './resources/banner1.jpg';
import banner2 from './resources/banner2.jpg';
import banner3 from './resources/banner3.jpg';

function Home() {
  return (
    <>
      <Navbar />
      <Container>
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
    </>
  );
}

export default Home;
