import React, { useState } from 'react';

const GridGallery = ({ images }) => {
  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setEnlargedImageIndex(index);
  };

  const handleCloseModal = () => {
    setEnlargedImageIndex(null);
  };

  return (
    <div>
      <div className="grid-gallery">
        {images.map((img, index) => (
          <div key={index} className="grid-item" onClick={() => handleImageClick(index)}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {enlargedImageIndex !== null && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={images[enlargedImageIndex].src} alt={images[enlargedImageIndex].alt} />
          <div className="caption">{images[enlargedImageIndex].alt}</div>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
