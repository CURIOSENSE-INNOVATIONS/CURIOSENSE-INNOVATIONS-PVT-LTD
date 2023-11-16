import React from "react";
import "../Components/NavBar.css";
import Logo from "../Images/Logo.jpeg";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ABOUT, CONTACT, HOME, INVESTORS, PRODUCT, TEAM } from "../Routes/Routes";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to={`/`}>
            {" "}
            <img src={Logo} />{" "}
          </NavLink>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to={HOME} onClick={toggleNavbar}>
            Home
          </Link>
          <Link to={ABOUT} onClick={toggleNavbar}>
            About
          </Link>
          <Link to={PRODUCT} onClick={toggleNavbar}>
            Products
          </Link>
          <Link to={TEAM} onClick={toggleNavbar}>
            Team
          </Link>
          <Link to={INVESTORS} onClick={toggleNavbar}>
            Investors
          </Link>
          <Link to={CONTACT} onClick={toggleNavbar}>
            Contact Us
          </Link>
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
