import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="company-name">Cooke Getaways</div>
            <ul className="nav-links">
                <li><NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink></li>
                <li><NavLink to="/overview" activeClassName="nav-link-active">Overview</NavLink></li>
                <li><NavLink to="/map" activeClassName="nav-link-active">Map</NavLink></li>
                <li><NavLink to="/gallery" activeClassName="nav-link-active">Gallery</NavLink></li>
                <li><NavLink to="/rates" activeClassName="nav-link-active">Rates</NavLink></li>
                <li><NavLink to="/reviews" activeClassName="nav-link-active">Reviews</NavLink></li>
                <li><NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink></li>
            </ul>
            <button className="book-now-btn">Book Now</button>
        </nav>
    );
}

export default NavBar;
