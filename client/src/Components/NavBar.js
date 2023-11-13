import React from "react";
import "../Components/NavBar.css"
import Logo from "../Images/Logo.jpeg"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/"> <img src={Logo} /> </NavLink>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Products</Link>
          <Link to='/teams'>Teams</Link>
          <Link to='/investors'>Investors</Link>
          <Link to='/contactus'>Contact Us</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
