import React from "react";
import HomePage from "./homePage";
import OurServices from "../Services/services";
import ClientReview from "./ClientReview/clientReview";
import Platform from "./Platform/platform";
import Work from "../weWork/work";
import Bottom from "../Bottom/bottom";

const IndexHome = () => {
  return (
    <div>
      <HomePage />
      <OurServices />
      <ClientReview />
      <Platform />
      <Work />
      <Bottom />
    </div>
  );
};

export default IndexHome;
