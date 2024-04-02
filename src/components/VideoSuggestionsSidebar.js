import React from "react";
import ButtonList from "./ButtonList";
import SidebarVideos from "./SidebarVideos";
// import rightArrow from "../assets/right-arrow.svg";

function VideoSuggestionsSidebar() {
  return (
    <div className=" flex flex-col">
      <div className="flex gap-2 overflow-y-scroll">
        <ButtonList />
      </div>
      <SidebarVideos />
    </div>
  );
}

export default VideoSuggestionsSidebar;
