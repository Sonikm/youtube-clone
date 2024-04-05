import React from "react";
import UserAvatar from "./UserAvatar";
import { formatPublishedVideo, formatViews } from "../utils/helper";
import useVideoAdditionalData from "../hooks/useVideoAdditionalData";

function VideoResultCard({ videoInfo, onClick,videoId }) {
  const { title, thumbnails, channelTitle, description,publishedAt , channelId} = videoInfo;
  console.log(videoInfo);

  const { videoLikeViewsAndCommentsData, videoUserProfilePhoto } =
    useVideoAdditionalData(videoId, channelId);
  if (!videoLikeViewsAndCommentsData || !videoUserProfilePhoto) return;
  console.log(thumbnails);


  return (
    <div onClick={onClick} className="flex max-w-[1200px] justify-start cursor-pointer xs:flex-col xs:gap-2">
      <img
        className="rounded-xl w-[450px] h-[250px] sm:w-[220px] sm:h-[120px] lg:w-[450px] lg:h-[200px] md:w-[300px] md:h-[160px] xs:w-full"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className="flex xs:justify-start xs:px-0 flex-col gap-2 md:gap-0 md:text-sm sm:text-xs  px-6 py-2 md:py-0 justify-start text-wrap font-semibold pr-4 ">
        <p className="line-clamp-2 dark:text-white text-lg sm:text-sm ">{title}</p>
        <div className="text-sm text-gray-500 dark:text-[#b3b2b2] flex flex-col gap-3 md:gap-2">
        <p className="text-gray-500 text-sm sm:text-xs dark:text-[#b3b2b2] ">
          {formatViews(videoLikeViewsAndCommentsData?.viewCount)} .{" "}
          {formatPublishedVideo(publishedAt)}
        </p>
          <div className="flex gap-2  items-center">
            <img className="w-8 h-8 md:w-6 md:h-6  rounded-full" src={videoUserProfilePhoto} alt="" />
            <p className="sm:text-xs ">{channelTitle}</p>
          </div>
          <p className="line-clamp-3 sm:line-clamp-2 sm:text-xs  ">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoResultCard;
