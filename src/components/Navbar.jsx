

// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
// import "./Navbar.css"; // if you want to separate styles

const Navbar = () => (
  <div className="nav-items">
    <ul>
      {[
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "project", label: "Projects" },
        { to: "contact", label: "Contact" },
      ].map(({ to, label }) => (
        <li key={to}>
          <Link
            to={to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}         // adjust if you have a fixed navbar height
            activeClass="active-link"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;
