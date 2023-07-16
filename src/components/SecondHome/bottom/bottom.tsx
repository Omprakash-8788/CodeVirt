import React from "react";
import "./bottom.css";
import Space from "../../../assets/space.png";
import { CommonButton } from "../../../Common/Button/button";
import GirlImage from "../../../assets/girlHelmet1.png";

const SecBottom = () => {
  return (
    <div className="nnn">
      <div className="top-bottom-container">
        <div className="sec-container">
          <img className="imggggsss" src={Space} height={300} alt="" />
          <h2>Want to Start ASAP?</h2>
          <p>
            Want to discuss the details immediately? <br />
            Book an appointment with our CEO, <br />
            UnKnown
          </p>
          <span className="bbb">
            <CommonButton style={{width:'100px'}}>Let's Talk</CommonButton>
          </span>
         
            <img  className="bottom-imgs" src={GirlImage} height={400} alt="" />
      
          <section className="bottom-cont"></section>
        </div>
      </div>
    </div>
  );
};

export default SecBottom;
