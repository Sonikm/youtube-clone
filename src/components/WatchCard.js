import React from "react";
import { useSearchParams } from "react-router-dom";
import VideoCardData from "./VideoCardData";
import usePlayVideoData from "../hooks/usePlayVideoData";

function WatchCard() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const { videoPlayData } = usePlayVideoData(videoId);
  if(!videoPlayData) return;
  return (
    <div className=" w-[800px]">
      <div>
        <iframe
          className="rounded-xl"
          width="735"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}?si=eR6X2ozu4KtUaCl2`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="allowfullscreen"
          autoPlay="1"
        ></iframe>
      </div>

      <VideoCardData videoId={videoId} channelId={videoPlayData?.snippet?.channelId} videoPlayData={videoPlayData} />
    </div>
  );
}

export default WatchCard;
