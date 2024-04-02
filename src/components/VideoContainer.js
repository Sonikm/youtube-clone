import React from "react";
import VideoCard from "./VideoCard";
import useYtVideoList from "../hooks/useYtVideoList";
import { Link } from "react-router-dom";

function VideoContainer() {
  const { videoList} = useYtVideoList();

  if (!videoList?.length || videoList === null) return;

  return (
    <div className=" flex flex-wrap justify-evenly gap-y-10 gap-x-4">
      {videoList.map((video) => (
        <Link to={`watch?v=${video?.id?.videoId || video?.id}`} key={video?.id?.videoId || video?.id}>
          <VideoCard videoInfo={video?.snippet} videoId={video?.id?.videoId || video?.id }  />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
