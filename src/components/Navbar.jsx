// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import './Navbar.css'; // Assuming the CSS is in Navbar.css

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav>
      <ul className="navbar">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /><br/>
            <span className="visually-hidden">Home</span> {/* Accessible label */}
          </Link>
        </li>
        <li className={location.pathname === '/portfolio' ? 'active' : ''}>
          <Link to="/portfolio">
            <FontAwesomeIcon icon={faImages} />
            <span className="visually-hidden">Portfolio</span> {/* Accessible label */}
          </Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="visually-hidden">Contact</span> {/* Accessible label */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
