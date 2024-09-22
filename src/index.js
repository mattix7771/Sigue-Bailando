import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Gallery from './pages/Gallery';
import SignUp from './pages/SignUp'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';

ReactGA.initialize('YOUR_TRACKING_ID');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);