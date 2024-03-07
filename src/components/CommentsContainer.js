import React from "react";
import CommentsList from "./CommentsList";
import { commentsData } from "../utils/constants";

function CommentsContainer() {
  return (
    <div className="">
      <h1 className="font-bold text-lg">Comments:</h1>
      <CommentsList commentsData={commentsData} />
    </div>
  );
}

export default CommentsContainer;
