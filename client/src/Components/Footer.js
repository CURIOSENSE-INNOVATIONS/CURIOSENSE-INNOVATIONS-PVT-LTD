import React from "react";
import "./Footer.css"

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
          --------- social media icons ----------
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
