import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import GridGallery from "./Gallery";
import axios from "axios"; // You can use fetch if you prefer

const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetching images from the deployed db.json file in the public folder
    axios
      .get("/db.json") // Since db.json is in the public folder, this will work
      .then((response) => {
        setImages(response.data.images); // Assuming your JSON structure has an "images" array
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

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
