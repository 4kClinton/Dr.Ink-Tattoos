// src/components/Portfolio.js
import React from 'react';
import Navbar from './Navbar';
import GridGallery from './Gallery';

const Portfolio = () => {
  const images = [
    { src: require('../assets/tat7.jpg'),  },
     { src: require('../assets/tat3.jpg'),  },
  { src: require('../assets/tat2.jpg'), },
  // { src: require('../assets/tat1.jpg'),  },
  { src: require('../assets/tat5.jpg'),  },
  { src: require('../assets/tat6.jpg'),  },
  
  { src: require('../assets/tat4.jpg'),  },
  
  { src: require('../assets/tat8.jpg'),  },
];

  return (
    <div>
      <Navbar />
      <h1>Portfolio</h1>
      <p>Here are some of my best works:</p>
      <GridGallery images={images} />
    </div>
  );
};

export default Portfolio;
