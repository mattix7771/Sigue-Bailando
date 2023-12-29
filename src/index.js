import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Gallery from './pages/Gallery';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="gallery" element={<Gallery />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);