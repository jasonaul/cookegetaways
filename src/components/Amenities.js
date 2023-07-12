import React from 'react';
import { FaUtensils, FaParking, FaFire, FaFireAlt, FaBroadcastTower, FaTv, FaGamepad, FaDog, FaSmokingBan, FaSkiing } from 'react-icons/fa';
import { GiFrontalLobe, GiSkiing, GiDeck } from 'react-icons/gi';
import { AiOutlineCheckCircle, AiOutlineStop } from 'react-icons/ai';
import { IoMdTime } from 'react-icons/io';
import './Amenities.css';
import { GiHomeGarage } from 'react-icons/gi';
import {MdOutdoorGrill, MdDeck, MdOutlineDeck} from 'react-icons/md'

function Amenities() {
  const amenities = [
    {icon: <FaUtensils />, name: "Chef's Kitchen"},
    {icon: <FaParking />, name: "Parking"},
    {icon: <FaFire />, name: "Fireplace"},
    {icon: <FaFireAlt />, name: "Fire pit"},
    {icon: <GiHomeGarage />, name: "Garage"},
    {icon: <MdOutdoorGrill />, name: "Grill"},
    {icon: <GiFrontalLobe />, name: "Livingrooms"},
    {icon: <MdDeck />, name: "Front-deck"},
    {icon: <MdOutlineDeck />, name: "Back-deck"},
    {icon: <FaSkiing />, name: "Ski Storage"},
    {icon: <FaBroadcastTower />, name: "Wireless Broadband Internet"},
    {icon: <FaTv />, name: "Two Massive Televisions"},
    {icon: <FaGamepad />, name: "Game Room"},
  ];
  
  const houseRules = [
    {icon: <IoMdTime />, name: "Check in: 02:00 PM"},
    {icon: <IoMdTime />, name: "Check out: 11:00 AM"},
    {icon: <AiOutlineCheckCircle />, name: "AirBNB Booking"},
    {icon: <FaSmokingBan />, name: "Smoking Not Allowed"},
    {icon: <FaDog />, name: "Dogs Not Allowed"},
  ];

  const policies = [
    {name: "Payment Schedule", description: "We currently accept booking and payment through AirBnB."},
    {name: "Cancellation Policy", description: "We currently follow AirBnB's policies for cancellations."},
  ];
  
  return (
    <div className="amenities">
      <div className="amenities-section">
        <h1>Amenities</h1>
        {amenities.map((amenity, index) => (
          <div key={index} className="amenity">
            {amenity.icon} {amenity.name}
          </div>
        ))}
      </div>
      
      <div className="rules-section">
        <h2>House Rules</h2>
        {houseRules.map((rule, index) => (
          <div key={index} className="rule">
            {rule.icon} {rule.name}
          </div>
        ))}
      </div>
      
      <div className="policy-section">
        <h2>Policy and Notes</h2>
        {policies.map((policy, index) => (
          <div key={index} className="policy">
            <h3>{policy.name}</h3>
            <p>{policy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;
