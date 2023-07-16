import React from "react";
import "./work.css";
import HoriApp from "../../Common/Horizontal/horizontal";
import CommonWork from "../../Common/work/work";

const Work = () => {
  return (
    <div>
      <div className="work-containers-contents">
        <h2>HOW WE WORK</h2>
        <HoriApp />
        <p>
          We don't know whether this philosophy makes us better. But it
          certainly makes us different.
        </p>
      </div>
      <div>
        <CommonWork
          heading="Never say can't"
          content="We don’t have any bans at MadAppGang. Except one. The phrases this is impossible or  I can’t do it are prohibited. We do research, suggest solutions, and evaluate these solutions from the technical, financial, and temporal points of view. Then we come up with a decision.
        It’s never the impossible one."
        />
        <CommonWork
          heading="Be your own boss"
          content="Being your own boss means taking responsibility for your own actions. We don’t make others do our job. And we don’t rely on any managers with inflated corporate titles to make things work. We brainstorm ideas and generate solutions. If we need help, we raise the issue and solve it within our team."
        />
        <CommonWork
          heading="Challenge yourself"
          content="Everybody at MadAppGang has one common trait: a strong desire to learn. Personal development is about challenging yourself. You can never see any improvements if you stick to your comfort zone. If you stop growing, you drown. We aren’t sharks but we’d rather keep moving than to stay still."
        />
        <CommonWork
          heading="Embrace the new"
          content="Technology is constantly changing. We stay ahead of the curve. AI and machine learning, blockchain and IoT – we have experience in these areas. We learn new technologies out of curiosity and because they help our clients create better products. We’re small and we move faster than others."
        />
      </div>
    </div>
  );
};

export default Work;
