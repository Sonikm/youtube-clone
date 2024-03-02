import React from "react";
import ButtonComponents from "./ButtonComponents";
import VideoContainer from "./VideoContainer";

function MainContainer() {
  return (
    <div className="col-span-6 overflow-hidden">
      <ButtonComponents />
      <VideoContainer/>
    </div>
  );
}

export default MainContainer;
