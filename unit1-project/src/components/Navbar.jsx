import React, { useState } from "react";
//import "../stylesheets/Navbar.css";

function Navbar () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="burgermenu" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="navlinks">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;