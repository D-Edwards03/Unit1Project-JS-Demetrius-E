import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
        <h1>YOUR LAWN GUY</h1>
      <nav className="navbar">
        <div className="burgermenu" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navlinks ${isOpen ? "open" : ""}`}>
          <li>
            <button onClick={() => navigate("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate("/about")}>About</button>
          </li>
          <li>
            <button onClick={() => navigate("/reviews")}>Reviews</button>
          </li>
          <li>
            <button onClick={() => navigate("/contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
