import React from "react";
import "./blog.css";
import WeBlog from "../../../Common/We Blog/weblog";
import { CommonButton } from "../../../Common/Button/button";
import stittingonrock from "../../../assets/sittingonRock1.png";
import SidebarImage from "../../../Common/sidebarImage/sidebarImage";

const Blog = () => {
  return (
    <div className="top-blog-container">
      
      <div className="sec-blog-container">
      <section className="weblog-box">
          <WeBlog></WeBlog>
        </section>
        
        <img className="img-rock" src={stittingonrock} />
        <p>
          Once upon a time one mad individual decided to build a machine
          learning algorithm that would turn code into stories... <br />{" "}
          Discover and learn from our mad team. Engineering stories that will
          blow your mind and make you a better person.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, unde!
        </p>
        <section className="button-talk">
          <CommonButton style={{width:'100px'}}>Let's Talk</CommonButton>
        </section>
      </div>
      <div className="contents-box">
        <div className="first-content-box">
          <div className="first-boxes"></div>
          <div className="second-boxes">
            <section className="sss">
              <p>8 july 2022 </p>
              <div className="dot"></div>
              <span className="names-alina">Alina Dolbenska</span>
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
      </div>
      <div className="contents-box">
        <div className="first-content-box">
          <div className="first-boxes"></div>
          <div className="second-boxes">
            <section className="sss">
              <p>8 july 2022 </p>
              <div className="dot"></div>
              <span className="names-alina">Alina Dolbenska</span>
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
      </div>
      <div className="contents-box">
        <div className="first-content-box">
          <div className="first-boxes"></div>
          <div className="second-boxes">
            <section className="sss">
              <p>8 july 2022 </p>
              <div className="dot"></div>
              <span className="names-alina">Alina Dolbenska</span>
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
      </div>{" "}
      <div className="contents-box">
        <div className="first-content-box">
          <div className="first-boxes"></div>
          <div className="second-boxes">
            <section className="sss">
              <p>8 july 2022 </p>
              <div className="dot"></div>
              <span className="names-alina">Alina Dolbenska</span>
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
      </div>
      <section className="sidebarimage-section">
        <SidebarImage />
      </section>
    </div>
  );
};

export default Blog;
