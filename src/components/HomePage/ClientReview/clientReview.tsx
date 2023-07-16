import React from "react";
import "./clientReview.css";
import HoriApp from "../../../Common/Horizontal/horizontal";
import Sitting from '../../../assets/sitting.png';
import sit from "../../../assets/sit.png";

const ClientReview = () => {
  return (
    <div>
      <div className="clientReview-sec-containers">
        <div>
          <div>
            <section>
              <h2>CLIENT REVIEWS</h2>
              <HoriApp />
            </section>
            <section>
              <img className="background-image-black" height={500} src={sit} />

              <img className="img-img" height={500} src={Sitting} />
            </section>
          </div>
          <div className="clientReview-section-containers">
            <div className="clientReview-box "></div>
            <div className="clientReview-box "></div>
            <div className="clientReview-box "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
