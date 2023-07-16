import React from "react";
import "./index.css";
import HoriApp from "../../../Common/Horizontal/horizontal";
import CommonWorkSecond from "../../../Common/anotherCommon/commonwork";
import '../../../Common/anotherCommon/commonworl.css'

const SecondIndex = () => {
  return (
    <div style={{ position: "relative", margin:'100px 0px 0px 0px' }}>
      {/* <img className="sun-image" src={Sun} alt="" /> */}
      <div className="secondIndex-container">
        <h2 className="secondindex-htwo-heading">BUILD YOUR WEB APP</h2>
        <HoriApp />
        <h5 className="secondindex-hfive-heading">
          Depending on what problem you want to solve and your business
          requirements, we can offer you two types of web app implementation:
          using a traditional software development approach with front- and
          backend development and using low-code and no-code platforms.
        </h5>
      </div>
      <div className="tech-containers">
        <div className="common-work-container">
        <section className="common-work-img">
          <section className="common-work-circle"></section>
        </section>
        <section className="common-work-text">
          <h2>Front End Developemnt</h2>
          <p>
          To develop the front-end or part of your web app that your customers see and interact with, we use React, one of the most flexible web development frameworks. React is a perfect tool for building single-page applications (SPA) or apps that load fast and offer a fluid user experience. Google Maps, Airbnb, Netflix, Pinterest all use SPAs to serve users what they need with each click without making the server re-render a full page.
          </p>
        </section>
      </div>
        <CommonWorkSecond
          heading="Back End Developemnt"
          content="The backend is part of your application that powers the front-end and that your users don't see. If your product requires a custom backend, we recommend building it using Go (Golang). Go is a perfect technology for building high-performing web apps for real-time collaboration, media streaming, video conferencing, messaging, and other use cases. Netflix, Uber, Twitter, and PayPal are currently using Golang."
        ></CommonWorkSecond>
        <CommonWorkSecond
          heading="Web Developemnt using low and no-code platforms"
          content="Want to take your idea to a live product very quickly using minimal resources? Then low-code and no-code platforms might be a solution for you. These platforms allow you to visually select and connect reusable components and prebuilt templates to create the desired workflow. For example, we use Strapi, a headless CMS for building content-rich experiences, and n8n for integrating with different apps."
        ></CommonWorkSecond>
      </div>
    </div>
  );
};

export default SecondIndex;
