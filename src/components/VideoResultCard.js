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

  return (
    <div onClick={onClick} className="flex justify-start cursor-pointer">
      <img
        className="rounded-xl"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className="flex flex-col gap-2  px-6 py-2  justify-start text-wrap font-semibold pr-4 ">
        <p className="line-clamp-3 dark:text-white text-lg">{title}</p>
        <div className="text-sm text-gray-500 dark:text-[#b3b2b2] flex flex-col gap-3">
        <p className="text-gray-500 text-sm">
          {formatViews(videoLikeViewsAndCommentsData?.viewCount)} .{" "}
          {formatPublishedVideo(publishedAt)}
        </p>
          <div className="flex gap-2 items-center">
            <img className="w-8 h-8 rounded-full" src={videoUserProfilePhoto} alt="" />
            <p>{channelTitle}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoResultCard;
