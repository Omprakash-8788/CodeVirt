import React from "react";
import "./services.css";
import AstroPhotography from "../../assets/Mask group.png";
import HoriApp from "../../Common/Horizontal/horizontal";

const OurServices = () => {
  return (
    <div className="top-service-conts">
      <div>
        <section>
          <img src={AstroPhotography} className="astroPhotography" alt="" />
        </section>
        <section>
          <h2 className="service-heading">OUR SERVICES</h2>
          <HoriApp />
        </section>
      </div>
      <div className="ourservices-sec-container">
        <div className="ourservices-section-container">
          <section style={{ flex: "1" }}>
            <section className="services-box">
              <h5 className="box-texts">MVP development</h5>
            </section>
            <p className="paragraph-text" style={{ textAlign: "center" }}>
              The smartest way to build a new product is by starting with the
              smallest possible version. We've built dozens of successful MVPs
              for our clients and will help you develop one in a fast,
              cost-effective manner.
            </p>
          </section>
          <section style={{ flex: "1" }}>
            <section className="services-box">
              <h5 className="box-texts">MVP development</h5>
            </section>
            <p className="paragraph-text" style={{ textAlign: "center" }}>
              Once upon a time, there was an idea, and then a new product
              appeared. We fill in the gaps in your story and take your product
              from conception to completion.
            </p>
          </section>
          <section style={{ flex: "1" }}>
            <section className="services-box">
              <h5 className="box-texts">MVP development</h5>
            </section>
            <p className="paragraph-text" style={{ textAlign: "center" }}>
              Use technology to automate routine business processes and gain
              valuable data. We love helping businesses become more efficient.
              On our latest project, we reduced the time it takes to install
              solar systems from 9 to 2 months.
            </p>
          </section>

          <section style={{ flex: "1" }}>
            <section className="services-box">
              <h5 className="box-texts">MVP development</h5>
            </section>
            <p className="paragraph-text" style={{ textAlign: "center" }}>
              We've built enterprise-grade systems with bank-level security that
              handle millions of requests per second. If you need to verify that
              your software architecture is scalable and secure, we're the best
              team for the job.
            </p>
          </section>
          <section style={{ flex: "1" }}>
            <section className="services-box">
              <h5 className="box-texts">MVP development</h5>
            </section>
            <p className="paragraph-text" style={{ textAlign: "center" }}>
              Is your software far behind schedule. Struggling with SDLC? Don't
              worry. We know how to fine-tune your software development
              operations and coach your team so you can keep the wheels moving
              forward.
            </p>
          </section>
          <section style={{ flex: "1" }}>
            <section className="services-box">
              <h5 className="box-texts">MVP development</h5>
            </section>
            <p className="paragraph-text" style={{ textAlign: "center" }}>
              Is your software far behind schedule. Struggling with SDLC? Don't
              worry. We know how to fine-tune your software development
              operations and coach your team so you can keep the wheels moving
              forward.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
