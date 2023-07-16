import React from "react";
import HoriApp from "../../../Common/Horizontal/horizontal";
import "./starteam.css";
import SidebarImage from "../../../Common/sidebarImage/sidebarImage";
import background from "../../../assets/sit.png";
import helmetImage from "../../../assets/helmet.png";
const StarTeam = () => {
  return (
    <div className="starteam-container">
      <div className="starteam-sec-container">
        <h1>OUR STAR TEAM</h1>
        <HoriApp />
        <h3>Here is what we look like</h3>
        <section className="starteam-images-container">
          <img
            className="helmetsbackground"
            src={background}
            alt=""
            height={450}
          />
          <img className="helmet" src={helmetImage} alt="" height={500} />
        </section>
      </div>


      <div className="team-container">
        <section className="core-team">
          <h2>Core Team</h2>
        </section>

        <section className="core-team-secbox">

          <section className="first-box">
            <h2>About</h2>
            <h5>
              We create digital products that make business processes more
              efficient help businesses grow.
            </h5>
          </section>
          
          <section className="circle-container">
            <section className="yellow-circle"></section>
          </section>

          <section className="ooo">
            <section className="gray-circle"></section>
          </section>

        </section>




        <div className="team-second-container">
          <section className="team-second-container1">
            <h3>About</h3>
            <h5>
              We create digital products that make business processes more
              efficient help businesses grow.
            </h5>
          </section>
          <section className="yellow-circle-sec"></section>
          <section className="team-second-container2">
            <section className="gray-circle-sec"></section>
          </section>
        </div>
      </div>
      <div className="sidebar-img-container">
        <SidebarImage />
      </div>
    </div>
  );
};

export default StarTeam;
