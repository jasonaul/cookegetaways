import React from 'react';
import './Overview.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Amenities from '../components/Amenities';


function Overview() {
  return (
    <div>
      <div className="banner">
        <h1 className="banner-text">Beauty in Nature</h1>
        {/* This is the placeholder for the Airbnb API */}
        <div className="airbnb-booking"></div>
      </div>

      <div className="content">
        <h2 >Everything you need for a carefree vacation!</h2>
        <Amenities />
      </div>
    </div>
  );
}

export default Overview;
