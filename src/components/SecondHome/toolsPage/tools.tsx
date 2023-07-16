import React from "react";
import HoriApp from "../../../Common/Horizontal/horizontal";
import "./tools.css";
import Group from "../../../assets/Group 1.png";

const ToolsPage = () => {
  return (
    <div className="tools-top-container">
      <div className="tools-sec-container">
        <h1>TOOLS IN USE </h1>
        <HoriApp />
        <h3>
        These tools help us make our work process effective and transparent:        </h3>
      </div>
      <div className="tools-content-container">
        <section>
          <img src={Group} className="tools-image" height={450} alt="" />
        </section>
        <section>
          <section className="tools-box"></section>
          <section className="tools-box"></section>
          <section className="tools-box"></section>
          <section className="tools-box"></section>
          <section className="tools-circle"></section>
        </section>
      </div>
    </div>
  );
};

export default ToolsPage;
