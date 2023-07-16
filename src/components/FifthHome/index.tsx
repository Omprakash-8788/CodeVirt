import React from "react";
import TopPage from "./topPage/topPage";
import SecondIndex from "./seconPage";
import ThirdPage from "./thirdPage/thirdPage";
import FourthIndex from "./fourth";
import ClientReviewPage from "./ClientReviewPage";
import WorkIndex from "./workWithPeople";
import IndexBottom from "./Bottom/indexBottom";

const FifthpageIndex = () => {
  return (
    <div>
      <TopPage />
      <SecondIndex />
      <ThirdPage />
      <FourthIndex />
      <ClientReviewPage />
      <WorkIndex />
      <IndexBottom />
    </div>
  );
};

export default FifthpageIndex;
