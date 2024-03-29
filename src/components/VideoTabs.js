import React from 'react';
import threeDotsIcon from "../assets/three-dots.svg";
import threeDotsIconDark from "../assets/three-dots-dark.svg";
import like from "../assets/like.svg";
import likeDark from "../assets/like-dark.svg";
import dislike from "../assets/dislike.svg";
import dislikeDark from "../assets/dislike-dark.svg";
import download from "../assets/download.svg";
import downloadDark from "../assets/download-dark.svg";
import share from "../assets/share.svg";
import shareDark from "../assets/share-dark.svg";
import bottomArrow from "../assets/bottom-arrow.svg";
import bottomArrowDark from "../assets/bottom-arrow-dark.svg";
import notification from "../assets/notification.svg";
import notificationDark from "../assets/notification-dark.svg";
import useTheme from "../contexts/ThemeContext";
import { formatViews } from '../utils/helper';


function VideoTabs({channelTitle,likeCount , videoUserProfilePhoto,subscriberCount}) {
    const { themeMode } = useTheme();
  return (
    <div className="flex justify-between items-center dark:text-white font-semibold text-sm">
    <div className="flex gap-3 items-center">
      <div className="flex items-center  gap-3">
        <img
          className="w-9 h-9 cursor-pointer rounded-full"
          src={videoUserProfilePhoto}
          alt="user"
        />
        <div className="flex flex-col  ">
          <span className="">{channelTitle}</span>
          <span className="text-xs font-medium dark:text-[#AAAAAA]">{formatViews(subscriberCount)} subscribers</span>
        </div>
      </div>
      <div className="flex flex-row  dark:bg-[#222222] items-center gap-1  bg-gray-200  cursor-pointer rounded-3xl p-2 px-4">
        <img
          className="w-5 "
          src={themeMode === "light" ? notification : notificationDark}
          alt=""
        />
        <span className="font-semibold flex dark:text-white text-sm">
          Subscribe
        </span>
        <img className="w-5 " src={themeMode === 'dark' ? bottomArrowDark : bottomArrow} alt="" />
      </div>
    </div>
    <div className="flex gap-3 dark:text-white font-semibold text-sm">
      <div className="bg-gray-200 flex flex-row gap-2 items-center  dark:bg-[#222222] rounded-3xl cursor-pointer p-2 px-3 h-9 ">
        <img className="w-5 " src={themeMode === 'dark' ? likeDark : like} alt="" />
        <span>{formatViews(likeCount)}</span>
        <span className="border-gray-300 border h-full bg-black"></span>
        <img className="w-5 "src={themeMode === 'dark' ? dislikeDark : dislike} alt="" />

      </div>
  
      <div className="bg-gray-200 flex flex-row items-center dark:bg-[#222222] rounded-3xl cursor-pointer  px-3 h-9 ">
        <span>Share</span>
        <img className="w-5 " src={themeMode === 'dark' ? shareDark : share} alt="" />
      </div>
      <div className="bg-gray-200 flex flex-row items-center dark:bg-[#222222] rounded-3xl cursor-pointer  px-3 h-9 ">
        <span>Download</span>
        <img className="w-5 " src={themeMode === 'dark' ? downloadDark : download} alt="" />
      </div>
      <img className="w-10 p-2 bg-gray-200 dark:bg-[#222222] rounded-full cursor-pointer  " src={themeMode === 'dark' ? threeDotsIconDark : threeDotsIcon} alt="" />
    </div>
  </div>
  )
}

export default VideoTabs