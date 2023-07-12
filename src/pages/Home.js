import React from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import one from "../images/carousel/one.jpg"
import two from "../images/carousel/two.jpg"
import three from "../images/carousel/three.jpg"
import FeaturedRooms from '../components/FeaturedRooms';
function Home() {
  return (
    <div>
      <div className="banner">
        <h1 className="banner-text">Enjoy greatness</h1>
        {/* This is the placeholder for the Airbnb API */}
        <div className="airbnb-booking"></div>
      </div>

      <div className="content">
        <h2 >Everything you need for a carefree vacation!</h2>
        <Carousel>
            <div>
                <img src={one} alt="Image 1"/>
            </div>
            <div>
                <img src={two} alt="Image 2"/>
            </div>
            <div>
                <img src={three} alt="Image 3"/>
            </div>
        </Carousel>
      </div>
      <FeaturedRooms />
    </div>
  );
}

export default Home;
