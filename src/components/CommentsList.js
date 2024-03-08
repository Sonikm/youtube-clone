import React from "react";
import Comments from "./Comments";

function CommentsList({ commentsData }) {
  return commentsData.map((comment, index) => (
    <div key={index} className="">
      <Comments data={comment} />
      <div className="border-l pl-4 ml-4 border-black">
        {<CommentsList commentsData={comment.replies} />}
      </div>
    </div>
  ));
}

export default CommentsList;
