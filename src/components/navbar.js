


import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Med intel</h2>
      </div>

      {/* Hamburger Icon */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Links */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/about">User Management</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        {/* <button className="cart-button">
          🛒 Cart
        </button> */}
      </ul>
    </nav>
  );
};

export default Navbar;
