// import React, { useState } from 'react';

// const GridGallery = ({ images }) => {
//   const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

//   const handleImageClick = (index) => {
//     setEnlargedImageIndex(index);
//   };

//   const handleCloseModal = () => {
//     setEnlargedImageIndex(null);
//   };

//   return (
//     <div>
//       <div className="grid-gallery">
//         {images.map((img, index) => (
//           <div key={index} className="grid-item" onClick={() => handleImageClick(index)}>
//             <img src={img.src} alt={img.alt} />
//           </div>
//         ))}
//       </div>

//       {enlargedImageIndex !== null && (
//         <div className="modal" onClick={handleCloseModal}>
//           <span className="close">&times;</span>
//           <img className="modal-content" src={images[enlargedImageIndex].src} alt={images[enlargedImageIndex].alt} />
//           <div className="caption">{images[enlargedImageIndex].alt}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GridGallery;


// // Define the images array
// const images = [
//   { src: require('../assets/tat1.jpg'), alt: 'Tattoo 1' },
//   { src: require('../assets/tat2.jpg'), alt: 'Tattoo 2' },
//   { src: require('../assets/tat3.jpg'), alt: 'Tattoo 3' },
//   { src: require('../assets/tat4.jpg'), alt: 'Tattoo 4' },
//   { src: require('../assets/tat5.jpg'), alt: 'Tattoo 5' },
// ];

// // Render the GridGallery component with the images array
// // const App = () => (
// //   <div>
// //     <GridGallery images={images} />
// //   </div>
// // );

// // export default App;
