import React from "react";

function VideoCard({ video }) {
  return (
    <div className="w-80  p-2">
      <img
        className="rounded-xl"
        src={video?.snippet?.thumbnails?.medium?.url}
        alt=""
      />
      <p>{video?.snippet?.localized?.title}</p>
      <h2>{video?.snippet?.channelTitle}</h2>
    </div>
  );
}

export default VideoCard;

export const AdVideoCard = ({ video }) => {
  return (
    <div className="border border-red-500 p-1  m-1 rounded-lg">
      <VideoCard  video={video} />
    </div>
  );
};
