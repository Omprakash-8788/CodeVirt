import React from "react";
import "./platform.css";
import HoriApp from "../../../Common/Horizontal/horizontal";
const Platform = () => {
  const boxStyle = {
    width: "120px",
    height: "120px",
    border:'5px solid #EB820F',
    margin: "5px",
    
  };
  return (
    <div>
      <div className="platform-container">
        <h2>PLATFORM WE USE</h2>
        <HoriApp />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vitae
          illum facere molestias nihil commodi, quaerat illo! Blanditiis, porro
          cumque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          vitae
        </p>
      </div>
      <div className="platform-box-container">
        <div className="content-box-styles"></div>
        <div className="content-box-styles"></div>
        <div className="content-box-styles"></div>
        <div className="content-box-styles"></div>
        <div className="content-box-styles"></div>
        <div className="content-box-styles"></div>
        <div className="content-box-styles"></div>
        <div className="content-box-styles"></div>
        <div className="content-box-styles"></div>
        <div className="content-box-styles"></div>
      </div>
    </div>
  );
};

export default Platform;
