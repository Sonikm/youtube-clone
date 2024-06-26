import React, { useState } from "react";
import SidebarVideos from "./SidebarVideos";
import LiveChat from "./LiveChat";

function VideoSuggestionsSidebar() {
  const [isShowChats, setIsShowChats] = useState(false);

  return (
    <div className=" flex flex-col ">
      {isShowChats ? (
        <LiveChat setIsShowChats={ setIsShowChats} />
      ) : (
        <>
          <button
            onClick={() =>setIsShowChats(true)}
            className=" hover:bg-gray-200 mb-3 max-w-[390px] dark:hover:bg-[--primaryGrayDark] dark:text-white dark:border-[--secondary]  mx-3 font-semibold  hover:border-gray-200 w-full  border border-gray-300  p-[6px] rounded-xl"
          >
            Show Live Chats
          </button>
          <SidebarVideos />
        </>
      )}

      {}
    </div>
  );
}

export default VideoSuggestionsSidebar;
