import React, { useState } from "react";
import Loader from "./Loader"; // Import the Loader component

const GridGallery = ({ images }) => {
  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);
  const [loadingStates, setLoadingStates] = useState(
    new Array(images.length).fill(true)
  ); // Array to manage loading states

  const handleImageClick = (index) => {
    setEnlargedImageIndex(index);
  };

  const handleCloseModal = () => {
    setEnlargedImageIndex(null);
  };

  const handleImageLoad = (index) => {
    // Set the loading state to false when the image has loaded
    const updatedLoadingStates = [...loadingStates];
    updatedLoadingStates[index] = false;
    setLoadingStates(updatedLoadingStates);
  };

  return (
    <div>
      <div className="grid-gallery">
        {images.map((img, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleImageClick(index)}
          >
            {loadingStates[index] && <Loader />}{" "}
            {/* Show loader while image is loading */}
            <img
              src={img.src}
              alt={img.alt}
              onLoad={() => handleImageLoad(index)} // Trigger handleImageLoad when the image loads
              style={{ display: loadingStates[index] ? "none" : "block" }} // Hide the image until it's loaded
            />
          </div>
        ))}
      </div>

      {enlargedImageIndex !== null && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img
            className="modal-content"
            src={images[enlargedImageIndex].src}
            alt={images[enlargedImageIndex].alt}
          />
          <div className="caption">{images[enlargedImageIndex].alt}</div>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
