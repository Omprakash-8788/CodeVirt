import React from "react";
import "./indexBottom.css";
import Space from '../../../assets/space.png'
import { CommonButton } from "../../../Common/Button/button";
import BasketBall from '../../../assets/BasketBall1.png'

const INdexBottom = () => {
  return (
    <div className="nnn">
      <div className="top-bottom-container">
        <div className="sec-container-bottom">
          <img className="imgggg" src={Space} />
          <h2>Want to Start ASAP?</h2>
          <p>
            Want to discuss the details immediately? <br />
            Book an appointment with our CEO, <br />
            UnKnown
          </p>
          <span className="bbb-buttomss">
            <CommonButton style={{width:'100px'}}>Let's Talk</CommonButton>
          </span>
          <section className="bottom-img">
           <img src={BasketBall} className="basketball" />
         </section>
          <section className="bottom-cont"></section>
        </div>
      </div>
    </div>
  );
};

export default INdexBottom;
