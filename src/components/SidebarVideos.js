import React from "react";
import useSearchVideoList from "../hooks/useSearchVideoList";
import { Link } from "react-router-dom";
import { formatPublishedVideo, formatViews } from "../utils/helper";
import useVideoAdditionalData from "../hooks/useVideoAdditionalData";

function SidebarVideos() {
  const { searchVideoList } = useSearchVideoList();
  if (!searchVideoList?.length) return;

  return (
    <div className="flex gap-2 flex-col p-4">
      {searchVideoList.map((video) => (
        <Link to={`/watch?v=${video?.id?.videoId}`} key={video?.id?.videoId}>
          <Video videoInfo={video?.snippet} videoId={video?.id?.videoId} />
        </Link>
      ))}
    </div>
  );
}

export default SidebarVideos;

function Video({ videoInfo, onClick, videoId }) {
  const { title, thumbnails, publishedAt, channelId, channelTitle } = videoInfo;

  const { videoLikeViewsAndCommentsData, videoUserProfilePhoto } =
    useVideoAdditionalData(videoId, channelId);
  if (!videoLikeViewsAndCommentsData || !videoUserProfilePhoto) return;

  return (
    <div
      onClick={onClick}
      className="flex w-[500px] justify-start cursor-pointer"
    >
      <img
        className="rounded-xl w-44 h-28"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className=" px-6 py-2  font-semibold ">
        <p className=" text-wrap line-clamp-2 dark:text-white text-sm">
          {title}
        </p>
        <p className=" text-wrap line-clamp-1 text-gray-500 dark:text-white text-sm">
          {channelTitle}
        </p>

        <p className="text-gray-500 text-sm">
          {formatViews(videoLikeViewsAndCommentsData?.viewCount)} .{" "}
          {formatPublishedVideo(publishedAt)}
        </p>
      </div>
    </div>
  );
}
