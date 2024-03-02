import React from "react";
import Slidebar from "./Slidebar";
import MainContainer from "./MainContainer";

function Body() {
  return (
    <div className="grid grid-flow-col">
      <Slidebar />
      <MainContainer/>
    </div>
  );
}

export default Body;
