import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("v");
  // console.log(query);

  return (
    <div className="p-4">
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${query}?si=APjRmLy2Pq3A2sxv`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-5">
        <CommentsContainer />
      </div>
    </div>
  );
}

export default WatchPage;
