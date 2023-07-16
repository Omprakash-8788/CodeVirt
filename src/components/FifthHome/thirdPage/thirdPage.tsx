import React from "react";
import HoriApp from "../../../Common/Horizontal/horizontal";
import { CommonButton } from "../../../Common/Button/button";
import "./thirdPage.css";

const ThirdPage = () => {
  return (
    <div className="thirdpage-top-container">
      <div className="thirdpage-container">
        <h1>OUR WORKS</h1>
        <HoriApp />
        <h4>Check out our case studies to learn more about our experience.</h4>
      </div>
      <div className="contents-box">
        <div className="first-content-box">
          <div className="first-boxes"></div>
          <div className="second-boxes">
            <section className="sss">
              <p>8 july 2022 </p>
              <div className="dot"></div>
              <span className="name-box">Alina Dolbenska</span>
            </section>
            <div className="contents-heading">
              <h2>Golang Outsourcing: How It Works </h2>
              <hr />
              <h4>
                Learn when and how you can outsource Golang developers, what
                outsourcing model to choose, and how to succeed when working
                with an outsourced team.
              </h4>
              <CommonButton style={{ width: "170px" }}>
                Continue Reading
              </CommonButton>
            </div>
          </div>
        </div>
      </div>
      <div className="contents-box">
        <div className="first-content-box">
          <div className="first-boxes"></div>
          <div className="second-boxes">
            <section className="sss">
              <p>8 july 2022 </p>
              <div className="dot"></div>
              <span className="name-box">Alina Dolbenska</span>
            </section>
            <div className="contents-heading">
              <h2>Golang Outsourcing: How It Works </h2>
              <hr />
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus accusamus iste corporis quibusdam assumenda, tempore
                quasi eos nam asperiores repellat?
              </h4>
              <CommonButton style={{ width: "170px" }}>
                Continue Reading
              </CommonButton>
            </div>
          </div>
        </div>
        <section className="moreprojects">
          <CommonButton style={{width:"120px"}}>More Projects</CommonButton>
        </section>
      </div>
    </div>
  );
};

export default ThirdPage;
