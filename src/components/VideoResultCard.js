import React from "react";
import UserAvatar from "./UserAvatar";

function VideoResultCard({ videoInfo }) {
  const { title, thumbnails, channelTitle, description } = videoInfo;

  return (
    <div className="flex justify-start">
      <img
        className="rounded-xl"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className="flex flex-col gap-2  px-6 py-2  justify-start text-wrap font-semibold pr-4 ">
        <p className="line-clamp-3 dark:text-white text-lg">{title}</p>
        <div className="text-sm text-gray-500 dark:text-[#b3b2b2] flex flex-col gap-3">
          <p>446K views . 2 weeks ago</p>
          <div className="flex gap-2">
            <UserAvatar />
            <p>{channelTitle}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoResultCard;
