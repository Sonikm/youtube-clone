import React from "react";
import Comment from "./Comment";
import { formatNumberWithComma } from "../utils/helper";
import useVideoComments from "../hooks/useVideoComments";

function CommentsBox({ commentCount, videoId , isShowComments}) {
  const { videoComments } = useVideoComments(videoId);
  if (!videoComments) return;
  
  return (
    <div className={`${!isShowComments ? "xl:hidden" : " " } flex flex-col gap-4`}>
      <h2 className="font-bold text-xl">
        {formatNumberWithComma(commentCount)} Comments
      </h2>
      <div className="flex flex-col gap-4">
        {videoComments?.map((comment) => (
          <Comment key={comment?.id} comment={comment?.snippet?.topLevelComment?.snippet} />
        ))}
      </div>
    </div>
  );
}

export default CommentsBox;
