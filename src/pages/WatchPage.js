import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";
import LiveChat from "../components/LiveChat";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("v");
  // console.log(query);

  return (
    <div className="p-4 flex justify-between ">
      <div className="flex-1">
        <iframe
        className="w-full"
          width="660"
          height="480"
          src={`https://www.youtube.com/embed/${query}?si=APjRmLy2Pq3A2sxv`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="mt-5">
        <CommentsContainer />
      </div>
      </div>

       <LiveChat/>
   
      
    </div>
  );
}

export default WatchPage;
