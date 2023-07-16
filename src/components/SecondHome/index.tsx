import React from "react";
import HomeIndex from "./home/home";
import SecWorks from "./work/work";
import Technology from "./technology/tech";
import StarTeam from "./Star Team/starteam";
import ToolsPage from "./toolsPage/tools";
import SecBottom from "./bottom/bottom";

const SecondHomeIndex = () => {
  return (
    <>
      <HomeIndex />
      <SecWorks />
      <Technology/>
      <StarTeam/>
      <ToolsPage/>
      <SecBottom/>
    </>
  );
};

export default SecondHomeIndex;
