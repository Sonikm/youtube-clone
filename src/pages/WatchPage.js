import React from "react";
import WatchContainer from "../components/WatchContainer";
import VideoSuggestionsSidebar from "../components/VideoSuggestionsSidebar";

function WatchPage() {

  return (
    <div className={` flex flex-row xl:flex-col  sm:ml-0 overflow-hidden`}>
     <WatchContainer/>
     <VideoSuggestionsSidebar/>
    </div>
  );
}

export default WatchPage;
