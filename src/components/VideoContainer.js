import React from "react";
import VideoCard from "./VideoCard";
import useYtVideoList from "../hooks/useYtVideoList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleElements } from "../utils/appSlice";

function VideoContainer() {
  const { videoList} = useYtVideoList();
  const dispatch = useDispatch();

  if (!videoList?.length || videoList === null) return;

function handleClick(){
  dispatch(toggleElements(false));
}

  return (
    <div className=" flex flex-wrap gap-y-10 gap-x-4">
      {videoList.map((video) => (
        <Link to={`watch?v=${video?.id?.videoId || video?.id}`} onClick={()=> handleClick()} key={video?.id?.videoId || video?.id}>
          <VideoCard videoInfo={video?.snippet} videoId={video?.id?.videoId || video?.id }  />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
