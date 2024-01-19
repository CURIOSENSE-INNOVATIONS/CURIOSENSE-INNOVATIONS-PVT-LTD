import React from "react";
import Certifiacti1 from "../Images/Certification/certificate-1.jpeg";
import Certifiacti2 from "../Images/Certification/certificate-2.jpeg";
import "./Awards.css";

const Awards = () => {
  return (
    <>
      <div className="aboutMainSec">
      <div className="title">About Us</div>
        <div className="certification-sec">
          <img src={Certifiacti1} alt="Award Certificate" />
          <img src={Certifiacti2} alt="Award Certificate" />
        </div>
      </div>
    </>
  );
};

export default Awards;
