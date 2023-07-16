import React from "react";
import "./toppage.css";
import { CommonButton } from "../../../Common/Button/button";
import glassBack from "../../../assets/glassBack1.png";

const TopPage = () => {
  return (
    <div>
      <div className="toppage-container">
        <div className="getintouch-form">
          <div className="toppages-containers">
            <h1>
              Web App <span>Development Services</span>
            </h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              beatae distinctio laboriosam eligendi fugiat excepturi reiciendis
              quidem quasi corporis amet!
            </h3>
            <section>
              <CommonButton style={{ width: "100px" }}>Read More</CommonButton>
            </section>
          </div>
        </div>

        <img className="glassback-image" src={glassBack} />
      </div>
    </div>
  );
};

export default TopPage;
