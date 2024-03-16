import React from "react";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  return (
    <div className="">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?si=eR6X2ozu4KtUaCl2`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="allowfullscreen"
        autoPlay="1"
      ></iframe>
    </div>
  );
}

export default WatchPage;
