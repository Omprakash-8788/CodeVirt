import React from "react";
import HoriApp from "../../../Common/Horizontal/horizontal";
import "./index.css";
import BBB from '../../../assets/bbb.png';
import Fishing from '../../../assets/fishing2.png'

const WorkIndex = () => {
  return (
    <div className="top-work-container">
        <img className="bbbs" src={BBB} />
        <img className="fishing" src={Fishing} />
      <div className="workwithpeople-container">
        <h1>WORK WITH PEOPLE WHO KNOW THEIR STUFF</h1>
        <HoriApp />
        <h5>
          We've been more than 10 years in software development building
          solutions for global corporations, emerging startups, and local
          businesses. We have the brightest engineers on the team and well-tuned
          work processes.
        </h5>
      </div>
      <div className="work-container">
        <section className="boxes-cont"></section>
        <section className="boxes-cont"></section>
        <section className="boxes-cont"></section>
        <section className="boxes-cont"></section>
        <section className="boxes-cont"></section>
      </div>

    </div>
  );
};

export default WorkIndex;
