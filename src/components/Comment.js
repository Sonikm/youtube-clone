import React from "react";
import userProfile from "../assets/user.png";
import like from "../assets/like.svg";
import likeDark from "../assets/like-dark.svg";
import dislike from "../assets/dislike.svg";
import dislikeDark from "../assets/dislike-dark.svg";
import useTheme from "../contexts/ThemeContext";
import { formatPublishedVideo } from "../utils/helper";

function Comment({ comment }) {
  const {
    authorChannelUrl,
    authorDisplayName,
    authorProfileImageUrl,
    channelId,
    likeCount,
    publishedAt,
    textDisplay,
    textOriginal,
    videoId,
    updatedAt,
  } = comment;

  const { themeMode } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <a href={authorChannelUrl}>
        <img
          className="w-8 h-8 cursor-pointer rounded-full"
          src={authorProfileImageUrl}
          alt="user"
        />
      </a>
      <div className="">
        <div className="flex gap-2 items-center">
          <a href={authorChannelUrl}>
            <span className="font-semibold">{authorDisplayName}</span>
          </a>

          <span className=" text-sm font-normal text-gray-600 dark:text-[#AAAAAA]">
            {formatPublishedVideo(publishedAt)}
          </span>
        </div>
        <p>{textDisplay}</p>
        <div className="flex gap-4 mt-2">
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <img src={themeMode === "dark" ? likeDark : like} alt="" />
              <span className="text-sm">{likeCount || ""}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={themeMode === "dark" ? dislikeDark : dislike} alt="" />
            </div>
          </div>

          <span className="font-semibold text-sm">Reply</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
