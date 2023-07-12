import React from 'react';
import './FeaturedRooms.css';
import one from '../images/rooms/roomone.jpg'
import two from '../images/rooms/roomtwo.jpg'
import three from '../images/rooms/roomthree.jpg'
import four from '../images/rooms/roomfour.jpg'

function FeaturedRooms() {
  const rooms = [
    {
      name: "Deluxe Owners Suite",
      description: "Beautifully appointed owner's suite with breathtaking views of the Stowe countryside. Comfortably sleeps two with en suite spa bathroom and walk-in closet.",
      image: one
    },
    {
      name: "Couple's King",
      description: "Two of these rooms available! Cozy, yet spacious room with en suite bathroom and ample closet space.",
      image: two
    },
    {
      name: "Double's Paradise",
      description: "Two full-sized beds with immediate access to back patio and landscape. Private bathroom available just outside of room.",
      image: three
    },
    {
        name: "Perfect for Kids!",
        description: "Incredibly sized bunk-beds with space to spare! Perfect space for adults and kids alike, adjacent to game room and living room.",
        image: four
      },
  ];

  return (
    <>
    <h2>Featured Room Types</h2>
    <div className="featured-rooms">
      {rooms.map((room, index) => (
        <div key={index} className="room">
          <img src={room.image} alt={room.name} className="room-image"/>
          <h2 className="room-name">{room.name}</h2>
          <p className="room-description">{room.description}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default FeaturedRooms;
