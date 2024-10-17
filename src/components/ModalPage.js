import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ModalPage = () => {
    const navigate = useNavigate();
    const { imageId } = useParams(); // Get the image ID from the URL
    const location = useLocation();
    const { state } = location;
    console.log('Location State:', state); // Log the state to verify its content
    const images = state || []; // Get the images passed from the SearchBar

    const closeModal = () => {
        navigate(-1); // Go back to the previous route
    };

    const id = Number(imageId); // Convert imageId to a number
    if (!images[id]) return null; // Return null if no image is found

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={images[id]} alt="Large Dog" />
                <button className="close-modal" onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default ModalPage;
