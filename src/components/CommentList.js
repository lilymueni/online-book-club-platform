import React from "react";
import Comment from "./Comment";

function CommentList({
  comments,
  currentUser,
  onCommentDelete,
  onUpdateComment,
  
}) {
  return (
    <div className="list">
      <ul>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            currentUser={currentUser}
            onCommentDelete={onCommentDelete}
            onUpdateComment={onUpdateComment}
          />
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
