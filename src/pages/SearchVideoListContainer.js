import React from "react";
import VideoResultCard from "../components/VideoResultCard";
import useSearchVideoList from "../hooks/useSearchVideoList";

function SearchVideoListContainer() {
  const { searchVideoList } = useSearchVideoList();
  if (!searchVideoList?.length) return;

  return (
    <div className="pr-20 flex flex-col gap-4">
      {searchVideoList.map((video) => (
        <VideoResultCard videoInfo={video?.snippet} key={video?.id?.videoId} />
      ))}
    </div>
  );
}

export default SearchVideoListContainer;
