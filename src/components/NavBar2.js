import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar2.css';

function NavBar2() {
    return (
        <nav className="navbar2">
            <div className="company-name2">Cooke Getaways</div>
            <ul className="nav-links2">
                <li><NavLink exact to="/" activeClassName="nav-link-active2">Home</NavLink></li>
                <li><NavLink to="/overview" activeClassName="nav-link-active2">Overview</NavLink></li>
                <li><NavLink to="/map" activeClassName="nav-link-active2">Map</NavLink></li>
                <li><NavLink to="/gallery" activeClassName="nav-link-active2">Gallery</NavLink></li>
                <li><NavLink to="/reviews" activeClassName="nav-link-active2">Reviews</NavLink></li>
                <li><NavLink to="/contact" activeClassName="nav-link-active2">Contact</NavLink></li>
            </ul>
            <button className="book-now-btn">Book Now</button>
        </nav>
    );
}

export default NavBar2;
