import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import './NavBar.css';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="company-name"><NavLink exact to="/" className="main-link">Cooke Getaways</NavLink></div>
      <FiMenu onClick={handleHamburgerClick} className="hamburger-icon" />
      {showMenu && 
        <div className="menu-popup">
          <ul className="nav-links">
            <li><NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink></li>
            <li><NavLink to="/overview" activeClassName="nav-link-active">Overview</NavLink></li>
            <li><NavLink to="/map" activeClassName="nav-link-active">Map</NavLink></li>
            <li><NavLink to="/gallery" activeClassName="nav-link-active">Gallery</NavLink></li>
            <li><NavLink to="/reviews" activeClassName="nav-link-active">Reviews</NavLink></li>
            <li><NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink></li>
          </ul>
          <button className="book-now-btn"><NavLink className="book-link" to="https://www.airbnb.com/rooms/50953696">Book Now</NavLink></button>
        </div>
      }
      <ul className="nav-links desktop">
        <li><NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink></li>
        <li><NavLink to="/overview" activeClassName="nav-link-active">Overview</NavLink></li>
        <li><NavLink to="/map" activeClassName="nav-link-active">Map</NavLink></li>
        <li><NavLink to="/gallery" activeClassName="nav-link-active">Gallery</NavLink></li>
        <li><NavLink to="/reviews" activeClassName="nav-link-active">Reviews</NavLink></li>
        <li><NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink></li>
      </ul>
      <button className="book-now-btn desktop"><NavLink className="book-link" to="https://www.airbnb.com/rooms/50953696">Book Now</NavLink></button>
    </nav>
  );
}

export default NavBar;
