import React from "react";
import VideoResultCard from "../components/VideoResultCard";
import useSearchVideoList from "../hooks/useSearchVideoList";
import { Link, useNavigate } from "react-router-dom";

function SearchVideoListContainer() {
  const { searchVideoList } = useSearchVideoList();
  const navigate = useNavigate();
  if (!searchVideoList?.length) return;

  function handleNavigateToWatchPage(videoId) {
    navigate(`/watch?v=${videoId}`);
  }

  return (
    <div className="pr-20 flex flex-col gap-4 xs:gap-8">
      {searchVideoList.map((video) => (
        <Link to={`/watch?v=${video?.id?.videoId}`} key={video?.id?.videoId}>
          <VideoResultCard
            videoId={video?.id?.videoId}
            videoInfo={video?.snippet}
            key={video?.id?.videoId}
            onClick={() => handleNavigateToWatchPage(video?.id?.videoId)}
          />
        </Link>
      ))}
    </div>
  );
}

export default SearchVideoListContainer;
