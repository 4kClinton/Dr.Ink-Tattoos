// src/components/Loader.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../styles/loader.css'; // Create a CSS file for loader styles

const Loader = () => {
    return (
        <div className="loader">
            <FontAwesomeIcon icon={faSpinner} spin size="2x" />
        </div>
    );
};

export default Loader;
