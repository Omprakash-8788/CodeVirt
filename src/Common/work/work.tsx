import React from "react";
import "./work.css";

const CommonWork = (props:any) => {
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

export default CommonWork;
