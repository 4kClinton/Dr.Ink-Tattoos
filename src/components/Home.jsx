// src/components/Home.js
import React from 'react';
import logo from '../assets/logo.png'
import Card from './Card';


const Home = () => {
  return (
    <div className="home-container">
     
      <div className="content">
        <img id="home-logo" src={logo} alt="Dr.Ink Logo" />
        <p className='home-intro'>
          Step into the world of Dr.Ink's masterful tattoo artistry. Discover bold designs and intricate details that tell your unique story.
        </p>
      </div>
      <div className="image-gallery">
       
        <Card title="Master the Art of Tattooing." body={<div>Tattoo Classes NOW AVAIBLE!. <img src="https://www.pinterest.com/pin/542191242657267717/" alt="" /></div>} />

      </div>
    </div>
  );
};

export default Home;
