import React, { useState } from "react";
import ButtonList from "./ButtonList";
import SidebarVideos from "./SidebarVideos";
import LiveChat from "./LiveChat";

function VideoSuggestionsSidebar() {
  const [isShowChats, setIsShowChats] = useState(false);

  return (
    <div className=" flex flex-col w-[450px]">
      {isShowChats ? (
        <LiveChat setIsShowChats={ setIsShowChats} />
      ) : (
        <>
          <button
            onClick={() =>setIsShowChats(true)}
            className=" hover:bg-gray-200 mb-3 dark:hover:bg-[--primaryGrayDark] dark:text-white dark:border-[--secondary]  mx-3 font-semibold  hover:border-gray-200 w-full  border border-gray-300  p-[6px] rounded-xl"
          >
            Show Live Chats
          </button>
          <div className="flex gap-2 ml-4 overflow-y-scroll no-scrollbar">
            <ButtonList />
          </div>
          <SidebarVideos />
        </>
      )}

      {}
    </div>
  );
}

export default VideoSuggestionsSidebar;
