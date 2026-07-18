import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Sumit<span>Prasad</span>
        </Link>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`} id="navLinks">
          <li>
            <NavLink to="/" onClick={closeMenu} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={closeMenu}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <button className="menu-btn" id="menuBtn" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>
    </header>
  );
}
