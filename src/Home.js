import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './widgets/Navbar';
import BottomBar from './widgets/BottomBar';
import Main from './widgets/Main';
import Gallery from './pages/Gallery';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Main />
      <BottomBar />


    </div>
  );
}

export default Home;