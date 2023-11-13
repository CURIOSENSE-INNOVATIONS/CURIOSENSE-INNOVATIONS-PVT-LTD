import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="address-sec">
        <h3>Curiosense Innovations PVT LTD</h3>
        <address>
          #2nd Floor, AES Block.
          <br />
          Acharya Institute Of Technology
          <br />
          Soldevanahalli, Bangalore - 560107
        </address>
      </div>
      <div className="social-media-sec">
        <div className="social-icons">
          <a href="tel:+919901940345">
            <FontAwesomeIcon icon={faPhone} size="2xl" className="icons" />
          </a>
          <a href="mailto:curiosense.co.in@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" className="icons" />
          </a>
          {/* <FontAwesomeIcon icon={faInstagram} size="2xl" /> */}
        </div>
        <span>Terms Of Use</span>
        <span> | </span>
        <span>Privacy Policy</span>

        <p> &copy; 2023 Curiosense Innovations. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
