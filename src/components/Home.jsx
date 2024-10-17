import React from "react";
import Card from "./Card";
import SearchBar from "./Searchbar";


const Home = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <div className="content">
        {/* Use a relative path to the public/assets/logo.png file */}
        <img
          id="home-logo"
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          alt="Dr.Ink Logo"
        />
        <p className="home-intro">
         LET'S INK
        </p>
      </div>
      <div className="image-gallery">
        <Card
          title="Master the Art of Tattooing."
          body={
            <div>
              Tattoo Classes NOW AVAILABLE!{" "}
              <img
                src="https://www.pinterest.com/pin/542191242657267717/"
                alt="Tattoo example"
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Home;
