import React from "react";
import invesmentLogo from "../Images/Assets/InvestmentLogo.svg";
import "./Investors.css";

const Investors = () => {
  return (
    <>
      <div className="mainInvestorSec">
        <div className="investorSec">
          <div className="investerImgLogo">
            <img src={invesmentLogo} />
          </div>
          <div className="investorCntSec">
            <h2>
              S T A R T U P<br />
              <span className="subHeading investmentHeading">INVESTMENT</span>
            </h2>
            <p className="investorCnt">
              Explore the promising landscape of investment with Curiosense
              Innovations. Our emphasis on play-centric learning and
              collaborative efforts with stakeholders sets us apart. We invite
              you to consider an investment in Curiosense, as we navigate the
              dynamic realm of education, ensuring a prosperous journey into the
              future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investors;
