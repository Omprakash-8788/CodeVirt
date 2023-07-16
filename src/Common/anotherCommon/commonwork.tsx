import React from "react";
import "./commonworl.css";
import Sun from "../../assets/lookinglikesun.png";

const CommonWorkSecond = (props:any) => {
  return (
    <div>
      <div className="common-work-container">
        <section className="common-work-img">
          <section className="common-work-circle"></section>
        </section>
        <section className="common-work-text">
          <h2>{props.heading}</h2>
          <p>
           {props.content}
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommonWorkSecond;
