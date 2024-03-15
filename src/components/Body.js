import React from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

function Body() {
  return (
    <div className="flex gap-10 p-3">
      <Sidebar />

      <VideoContainer />
    </div>
  );
}

export default Body;
