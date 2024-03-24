import React from "react";
import VideoResultCard from "../components/VideoResultCard";
import useSearchVideoList from "../hooks/useSearchVideoList";
import { useNavigate } from "react-router-dom";

function SearchVideoListContainer() {
  const { searchVideoList } = useSearchVideoList();
  const navigate = useNavigate();
  if (!searchVideoList?.length) return;

  function handleNavigateToWatchPage(videoId){
  navigate(`/watch?v=${videoId}`)
  }

  return (
    <div className="pr-20 flex flex-col gap-4">
      {searchVideoList.map((video) => (
        <VideoResultCard videoInfo={video?.snippet} key={video?.id?.videoId} onClick={() =>handleNavigateToWatchPage(video?.id?.videoId)} />
      ))}
    </div>
  );
}

export default SearchVideoListContainer;
