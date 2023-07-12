import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="footer-name">Cooke Getaways</div>
                <ul className="footer-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/overview">Overview</a></li>
                    <li><a href="/map">Map</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/reviews">Reviews</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-right">
                <div className="footer-copyright">
                    &copy; Cooke Getaways - All Rights Reserved
                </div>
                <div className="footer-webmaster">
                    Website Built by <a href="https://jasonaul.com">Jason Aul</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
