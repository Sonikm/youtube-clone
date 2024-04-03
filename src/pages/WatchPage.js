import React from "react";
import WatchContainer from "../components/WatchContainer";
import VideoSuggestionsSidebar from "../components/VideoSuggestionsSidebar";

function WatchPage() {
  return (
    <div className="flex flex-row flex-1 w-screen overflow-hidden gap-2">
     <WatchContainer/>
     <VideoSuggestionsSidebar/>
    </div>
  );
}

export default WatchPage;
