import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
      <div className="title">Contact Us</div>
      <div className="contactus-sec">
        <div className="contact-logo">
          <FontAwesomeIcon icon={faEnvelope} size="2xl" className="icons" />
          <h3>: curiosense.co.in@gmail.com</h3>
        </div>
        <div className="contact-logo">
          <FontAwesomeIcon icon={faPhone} size="2xl" className="icons" />
          <h3>: +91 9901940345</h3>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
