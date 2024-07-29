// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
// import GridGallery from './components/Gallery';
// import CardCarousel from './components/Slider'; // Import CardCarousel component
import './App.css';

function App() {
  

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar always rendered */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* <GridGallery images={images} /> */}
        </Routes>
        {/* <CardCarousel images={images} /> CardCarousel component with images */}
      </div>
    </Router>
  );
}

export default App;
