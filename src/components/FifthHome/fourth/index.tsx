import React from "react";
import HoriApp from "../../../Common/Horizontal/horizontal";
import './index.css'

const FourthIndex = () => {
    const boxStyle = {
        width: "120px",
        height: "120px",
        border:'5px solid #EB820F',
        margin: "5px",
        
      };
  return (
    <div className="fourthindex-top-container">
      <div className="fourthindex-container">
        <h1>PLATFORM WE USE</h1>
        <HoriApp />
        <h5>
          Whether it's web, mobile, desktop, IoT, or the cloud, we have the
          expertise to build software for the platforms of your choice
        </h5>
      </div>
      <div className="top-fourth-box-container">
      <div className="fourth-box-container">
        <div className="boxStyle"></div>
        <div className="boxStyle">Trial</div>
        <div className="boxStyle"></div>
        <div className="boxStyle"></div>
        <div className="boxStyle"></div>
        <div className="boxStyle"></div>        <div className="boxStyle"></div>
        <div className="boxStyle"></div>
        <div className="boxStyle"></div>
        <div className="boxStyle"></div>
      </div>
      </div>
    </div>
  );
};

export default FourthIndex;
