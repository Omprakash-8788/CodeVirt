import React from "react";
import "./bottom.css";
import Space from "../../../assets/space.png";
import { CommonButton } from "../../../Common/Button/button";
import baloonsImage from "../../../assets/ballons.png";

const FourthBottom = () => {
  return (
    <div className="nnn">
      <div className="top-bottom-container">
        <div className="sec-container-bttom">
          <img className="imggggs-image" src={Space} height={300} alt="" />
          <h2>Want to Start ASAP?</h2>
          <p>
            want to discuss the details immediately? <br />
            Book an appointment with our CEO, <br />
            UnKnown
          </p>
          <section className="lets-talk-buttons">
          <CommonButton style={{width:'100px'}}>Let's Talk</CommonButton>

          </section>

          <img src={baloonsImage} alt="" className="kkkk" />

          {/* <section className="bottom-imgs">
           <img src={baloonsImage} alt="" />
         </section> */}
          <section className="bottom-cont-height"></section>
        </div>
      </div>
    </div>
  );
};

export default FourthBottom;
