import React from "react";
import "./work.css";
import HoriApp from "../../../Common/Horizontal/horizontal";
import CommonWork from "../../../Common/work/work";

const SecWorks = () => {
  return (
    <div className="top-work-container">
      <div className="sec-work-container">
        <h1>HOW WE WORK</h1>
        <HoriApp />
        <h3>
          We don't know whether this philosophy makes us better. But it
          certainly makes us different.
        </h3>
      </div>
      <div>
        <section style={{ paddingBottom: "20px" }}>
          <CommonWork
            heading="Discuss"
            content="What is your app's main value? What are your business objectives? Any third-party solution you'd like to integrate with? We need to have a clear picture of what you have in mind. As a result of this stage, we will provideyou with a bare scope and cost estimations."
          />
        </section>
        <section style={{ paddingBottom: "20px" }}>
          <CommonWork
            heading="Strategize"
            content="Strategizing includes drawing a mind map, writing use cases, designing user flows, defining technology stacks, preparing test documentation, and more. You'll get a precise scope and cost estimations and a product development roadmap at the end of this stage."
          />
        </section>
        <section style={{ paddingBottom: "20px" }}>
          <CommonWork
            heading="Iterate"
            content="We organize our process in two ways: Scrum or Kanban. Kanban is greatfor projects that require flexibility. Scrum works best for projects with a precise scope. We follow a continuous delivery approach with dailymeetings and demos at the end of each iteration."
          />
        </section>
        <section style={{ paddingBottom: "20px" }}>
          <CommonWork
            heading="Improve"
            content="After we launch your product, we can help you maintain and support it.Our support activities цinclude 24/7 critical bug fixing, stability monitoring, internal engineering team coaching, protection from security vulnerabilities, and planning new releases."
          />
        </section>
      </div>
    </div>
  );
};

export default SecWorks;
