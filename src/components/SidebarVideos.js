import React from "react";
import { Link } from "react-router-dom";
import { formatPublishedVideo, formatViews } from "../utils/helper";
import useVideoAdditionalData from "../hooks/useVideoAdditionalData";
import SidebarShimmer from "./ui/SidebarShimmer";
import useSidebarVideos from "../hooks/useSidebarVideos";

function SidebarVideos() {
  const { sidebarVideosList } = useSidebarVideos();
  if (!sidebarVideosList?.length) return <SidebarShimmer />;

  return (
    <div className="flex gap-2  flex-col p-4">
      {sidebarVideosList.map((video) => (
        <Link to={`/watch?v=${video?.id?.videoId}`} key={video?.id?.videoId}>
          <Video videoInfo={video?.snippet} videoId={video?.id?.videoId} />
        </Link>
      ))}
    </div>
  );
}

export default SidebarVideos;

function Video({ videoInfo, videoId }) {
  const { title, thumbnails, publishedAt, channelId, channelTitle } = videoInfo;

  const { videoLikeViewsAndCommentsData, videoUserProfilePhoto } =
    useVideoAdditionalData(videoId, channelId);
  if (!videoLikeViewsAndCommentsData || !videoUserProfilePhoto) return;

  return (
    <div
      className="flex w-[420px] xl:w-[600px] md:w-[450px] sm:w-[400px] xs:w-[350px] justify-start cursor-pointer sm:text-sm"
    >
      <img
        className="rounded-xl w-44 h-28 sm:w-40 sm:h-26"
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
