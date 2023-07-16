import React from "react";
import HoriApp from "../../../Common/Horizontal/horizontal";
import Sitting from '../../../assets/sitting.png'
import './index.css';
import sit from '../../../assets/sit.png';


const ClientReviewPage = () => {
 
  return (
    <div>
      <div className="clientreview-top-containers">
        <div className="clientReview-sec-container">
          <div style={{position:'relative'}}>
            <div>
              <section>
                <h2>CLIENT REVIEWS</h2>
                <HoriApp />
              </section>
              <section className="bothimages">
             
                <img src={sit} className="sitting-background-image"/>
                <img className="img-test" src={Sitting} />
              
              </section>
            </div>
            <div className="clientReview-section-container">
              <div className="clientReview-box "></div>
              <div className="clientReview-box "></div>
              <div className="clientReview-box "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewPage;
