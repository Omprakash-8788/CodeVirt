import React from "react";
import "./homePage.css";
import NewSpace from '../../assets/NewSpace1.png';
import realSpace from "../../assets/realSpace.png";
import Astronaut from '../../assets/Astronaut.png'
import jumpingAstro from "../../assets/jumpingAstron.png";
import { CommonButton } from "../../Common/Button/button";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-sec-container">
        <h3>
          Hi, we’re CodeVirt.{" "}
          <span>We build web, mobile and cloud native apps</span> for our
          clients worldwide. And we’re serious about{" "}
          <span>
            creating amazing products, powered by modern technology and
            engineering talent
          </span>
        </h3>
        <div>
          <div className="homeimage-container">
            <img src={NewSpace} alt="space" className="space-image" />
            <section>
              <h2 className="space-image-text">Build A Product</h2>
              <h4 className="space-image-text-para">
                Don't just crank our code
              </h4>
              <img className="jumpingAstro-celeb" src={jumpingAstro} alt="" />
            </section>
            <section className="space-image-button">
              <CommonButton style={{width:"130px"}}>Let's Talk</CommonButton>
            </section>
          </div>
        </div>
      </div>
      <div className="space-astro-container">
        <img className="space-images-first" src={realSpace} alt="Space" />
        <img className="astronaut-first" src={Astronaut} alt="astronaut" />
      </div>
    </div>
  );
};

export default HomePage;
