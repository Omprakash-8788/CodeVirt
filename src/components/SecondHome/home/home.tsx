import React from "react";
import "./index.css";
import Celeb from "../../../assets/celeb.png";
import background from "../../../assets/sit.png";
import realSpace from "../../assets/space.png";
import Astronaut from "../../../assets/Astronaut.png";
import newSpace from "../../../assets/NewSpace1.png";

const HomeIndex = () => {
  return (
    <div className="second-home-container">
      <div className="index-top-container">
        <h1>
          CodeVirt is a <br />
          <span className="product-dev">Product Development</span> <br />{" "}
          company
        </h1>
        <div className="about-company">
          <h3>
            We develop digital products for the web, mobile and cloud. Years
            ofexperience and numerous projects with clients of different
            caliberfrom all around the globe give us an ability to tailor
            digital solutionsthat are a perfect balance between complexity,
            delivery time and cost. Over the past decade, we`ve built dozens of
            solutions for the fintech,energy, healthcare, fitness,
            transportation, and food industries
          </h3>
        </div>
        <img className="celeb" src={Celeb} />
        <img className="background" src={background}  />
      </div>
      <div className="space-astro-container-about">
        <img className="space-images-about" src={newSpace} alt="Space" />
        <img className="astronaut-about" src={Astronaut} alt="astronaut" />
      </div>
    </div>
  );
};

export default HomeIndex;
