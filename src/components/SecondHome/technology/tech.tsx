import React from "react";
import "./tech.css";
import HoriApp from "../../../Common/Horizontal/horizontal";
import FlagImage from "../../../assets/flag.png";

const Technology = () => {
  return (
    <div className="top-tech-container">
      <div className="sec-tech-container">
        <h1>OUR CORE TECHNOLOGY</h1>
        <HoriApp />
        <h3>
          Our core tech stack includes Go, React, Swift, and Kotlin something
          that was invented less than a decade ago.
        </h3>
        <img className="flagImage" src={FlagImage} alt="Flag" height={250} />
      </div>
      <div className="tech-box-container">
        <section className="tech-box">
          <h1>Go</h1>
          <hr className="short-line" />
          <p>
            The best way to build a simple, reliable, efficient, and secure
            backend with support for concurrency in its DNA.
          </p>
        </section>
        <section className="tech-box">
          <h1>Swift</h1>
          <hr className="short-line" />
          <p>
            A new, community-driven, safe, fast, fun to use, and easy to
            read/write. A replacement for Objective-C.
          </p>
        </section>
        <section className="tech-box">
          <h1>Kotlin</h1>
          <hr className="short-line" />
          <p>
            A better way to develop appsfor Android: modern, concise,safe,
            interoperable, tool-friendly, and open source.
          </p>
        </section>
        <section className="tech-box">
          <h1>C/C++</h1>
          <hr className="short-line" />
          <p>
            The only way to dive into the most complicated systems. C/C++ are
            especially useful for IoT solutions.
          </p>
        </section>
        <section className="tech-box">
          <h1>Gorilla</h1>
          <hr className="short-line" />
          <p>
            The best toolkit to create microservices in the Go programming
            language.
          </p>
        </section>
        <section className="tech-box">
          <h1>Objective-C</h1>
          <hr className="short-line" />
          <p>
            A must-have language to integrate and support legacy code for iOS
            and Mac applications.
          </p>
        </section>
        <section className="tech-box">
          <h1>React</h1>
          <hr className="short-line" />
          <p>
            Real web apps can only be created with ReactJS. Don’t believe us
            –ask Facebook.
          </p>
        </section>
        <section className="tech-box">
          <h1>Flutter</h1>
          <hr className="short-line" />
          <p>
            The fastest and the most cost-efficient way to implement
            cross-platform mobile apps from one codebase.
          </p>
        </section>
        <section className="tech-box">
          <h1>MongoDB</h1>
          <hr className="short-line" />
          <p>
            The most scalable database with fast integration and a rich feature
            set.
          </p>
        </section>
        <section className="tech-box">
          <h1>BeeGo</h1>
          <hr className="short-line" />
          <p>
            The best web framework for building complex web applications using
          </p>
        </section>
        <section className="tech-box">
          <h1>Java</h1>
          <hr className="short-line" />
          <p>
            A must-have language to integrate and support legacy code for
            Android
          </p>
        </section>
        <section className="tech-box">
          <h1>JavaScript</h1>
          <hr className="short-line" />
          <p>
            The only way to write real webapps. We use Babel, a JS compiler that
            works with the latest versions of JavaScript (ES2015 and
          </p>
        </section>
      </div>
    </div>
  );
};

export default Technology;
