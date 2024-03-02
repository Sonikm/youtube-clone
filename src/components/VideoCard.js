import React from "react";

function VideoCard({ videoInfo }) {
    
  return (
    <div className="w-80  p-2">
      <img className="rounded-xl" src={videoInfo?.snippet?.thumbnails?.medium?.url} alt="" />
      <p>{videoInfo?.snippet?.localized?.title}</p>
      <h2>{videoInfo?.snippet?.channelTitle}</h2>
    </div>
  );
}

export default VideoCard;
