import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="navbar container">
        <Link to="/" className="logo-brand" onClick={closeMenu} aria-label="Sumit Prasad Homepage">
          <div className="logo-icon">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="url(#sp-grad)" fillOpacity="0.15" />
              <path d="M12 14L28 14M28 14L22 22M28 14L28 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 26L12 26M12 26L18 18M12 26L12 20" stroke="url(#sp-grad-line)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="sp-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="sp-grad-line" x1="12" y1="18" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#0284c7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logo-text">
            <span>Sumit</span> Prasad
          </div>
        </Link>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`} id="navLinks">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
              onClick={closeMenu}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
              onClick={closeMenu}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
              onClick={closeMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
              onClick={closeMenu}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certificates"
              className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
              onClick={closeMenu}
            >
              Certificates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/achievements"
              className={({ isActive }) => (isActive ? "nav-link-item active" : "nav-link-item")}
              onClick={closeMenu}
            >
              Achievements
            </NavLink>
          </li>
          <li className="nav-contact-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "nav-contact-pill active" : "nav-contact-pill")}
              onClick={closeMenu}
            >
              CONTACT ME
            </NavLink>
          </li>
        </ul>

        <div className="nav-right-actions">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "contact-pill-btn hide-mobile active" : "contact-pill-btn hide-mobile")}
            onClick={closeMenu}
          >
            CONTACT ME
          </NavLink>
          <button
            className="menu-btn"
            id="menuBtn"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
}
