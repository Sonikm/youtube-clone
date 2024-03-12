import React from "react";
import CloseSidebar from "./CloseSidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import OpenSidebar from "./OpenSidebar";

function Body() {
  const isOpenSidebar = useSelector((store) => store.app.isOpenSidebar);

  return (
    <div className="flex gap-10 p-3">
      {isOpenSidebar ? <OpenSidebar /> : <CloseSidebar />}

      <MainContainer />
    </div>
  );
}

export default Body;
