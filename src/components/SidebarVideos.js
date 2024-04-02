import React from "react";
import useSearchVideoList from "../hooks/useSearchVideoList";
import { useNavigate } from "react-router-dom";
import { formatPublishedVideo } from "../utils/helper";

function SidebarVideos() {
  const { searchVideoList } = useSearchVideoList();
  const navigate = useNavigate();
  if (!searchVideoList?.length) return;

  function handleNavigateToWatchPage(videoId) {
    navigate(`/watch?v=${videoId}`);
  }
  return (
    <div className="flex gap-2 flex-col p-4">
      {searchVideoList.map((video) => (
        <Video
          videoInfo={video?.snippet}
          key={video?.id?.videoId}
          onClick={() => handleNavigateToWatchPage(video?.id?.videoId)}
        />
      ))}
    </div>
  );
}

export default SidebarVideos;

function Video({ videoInfo, onClick }) {
  const { title, thumbnails,  publishedAt } =
    videoInfo;

  return (
    <div onClick={onClick} className="flex w-[500px] justify-start cursor-pointer">
      <img
        className="rounded-xl w-44 h-28"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className=" px-6 py-2  font-semibold ">
        <p className=" text-wrap line-clamp-2 dark:text-white text-sm">{title}</p>
        <p>446K views . {formatPublishedVideo(publishedAt)}</p>
      </div>
    </div>
  );
}
