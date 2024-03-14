import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div className="flex gap-10 p-3">
      <Sidebar />

      <MainContainer />
    </div>
  );
}

export default Body;
