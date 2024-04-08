import React from "react";
import { useSearchParams } from "react-router-dom";
import VideoCardData from "./VideoCardData";
import usePlayVideoData from "../hooks/usePlayVideoData";
import WatchVideoShimmer from "./ui/WatchVideoShimmer";

function WatchCard() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const { videoPlayData } = usePlayVideoData(videoId);
  if (!videoPlayData) return <WatchVideoShimmer />;
  return (
    <div className=" max-w-[800px]  lg:w-full pr-10">
      <div className="flex justify-center  flex-1 overflow-hidden mr-10 md:w-[600px] w-[760px] sm:w-[400px] sm:h-[250px] lg:w-[650px] xs:w-[300px] xs:h-[150px] h-[400px] md:h-[350px]">
        <iframe
          className="rounded-xl flex-1 "
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="allowfullscreen"
          autoPlay="1"
        ></iframe>
      </div>

      <VideoCardData
        videoId={videoId}
        channelId={videoPlayData?.snippet?.channelId}
        videoPlayData={videoPlayData}
      />
    </div>
  );
}

export default WatchCard;
