import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
    
  if (!comments || comments.length === 0) {
    return <h1>Error</h1>; // Return null if comments are undefined or empty
  }

  return comments.map((comment, index) => (
    <div className="m-5">
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black">
        {/* Recursion */}
        {comment.replies && (
          <CommentList comments={comment.replies} />)}
      </div>
    </div>
  ));
};

export default CommentList;
