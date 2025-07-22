import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTiktok } from '@fortawesome/free-brands-svg-icons';
//import '..stylesheets/Footer.css';



function Footer () {
    return (
        <footer className="footer">
            <p>&copy; 2025 Your Lawn Guy</p>
            <div className="socials">
                <FontAwesomeIcon icon={faFacebookF} beatFade size="2x" />
                <FontAwesomeIcon icon={faInstagram} beatFade size="2x" />
                <FontAwesomeIcon icon={faTiktok} beatFade size="2x" />
            </div>
        </footer>
    )
}

export default Footer;