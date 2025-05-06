

import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "project", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <div className="nav-container">
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      <div className={`nav-items ${isOpen ? "show" : ""}`}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active-link"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
