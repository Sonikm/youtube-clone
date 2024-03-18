import React from "react";
import Slidebar from "./Slidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import WatchPage from "../pages/WatchPage";

function Body() {
  return (
    <div className="grid grid-flow-col">
      <Slidebar />
      {/* <MainContainer/>
      <WatchPage/> */}
      <Outlet />
    </div>
  );
}

export default Body;
