import React from "react";
import "./bottom.css";
import Space from "../../../assets/space.png";
import { CommonButton } from "../../../Common/Button/button";
import YogaPose from '../../../assets/YogaPose1.png';
const ThirdBottom = () => {
  return (
    <div className="yoga-pose-container">
      <div className="top-bottom-container">
        <div className="sec-container-blogpage">
          <img className="imggggs-sitting" src={Space}  alt="" />
          <h2 className="h-two-heading">Want to Start ASAP?</h2>
          <p className="sec-containers-paras">
            Want to discuss the details immediately? <br />
            Book an appointment with our CEO, <br />
            UnKnown
          </p>
          <span className="bbb-button">
            <CommonButton>Let's Talk</CommonButton>
          </span>
          <img className="yoga-pose" src={YogaPose}  />

          {/* <section className="yoga-pose">
           <img src={YogaPose} height={400} alt="" />
         </section> */}
          <section className="bottom-contyellow"></section>
        </div>
      </div>
    </div>
  );
};

export default ThirdBottom;
