import React from "react";
import "./bottom.css";
import Space from "../../assets/space.png";
import { CommonButton } from "../../Common/Button/button";
import Walking from "../../../src/assets/Walking2.png";

const Bottom = () => {
  return (
    <div className="nnn">
      <div className="top-bottom-container">
        <div className="sec-container-homepage">
          <img className="space-background-image" src={Space} alt="" />
          <h2>Want to Start ASAP?</h2>
          <p>
            Want to discuss the details immediately? <br />
            Book an appointment with our CEO, <br />
            UnKnown
          </p>
          <span className="bbb-button-container">
            <CommonButton style={{ width: "100px" }}>Let's Talk</CommonButton>
          </span>
          <img
            className="bottom-img-walking"
            src={Walking}
            alt="Walking Astronaut"
          />
          <section className="bottom-cont-background"></section>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
