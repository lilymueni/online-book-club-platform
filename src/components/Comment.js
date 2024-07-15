import React, { useState } from "react";
import EditComment from "./EditComment";

function Comment({ comment, currentUser, onCommentDelete, onCommentUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const { id, username, body, created_at: createdAt } = comment;

  const timestamp = new Date(createdAt).toLocaleTimeString();

  const isCurrentUser = currentUser.username === username;

  function handleDeleteClick() {
    fetch(`/comments/${id}`, {
      method: "DELETE",
    });

    onCommentDelete(id);
  }

  function handleUpdateComment(updatedComment) {
    setIsEditing(false);
    onCommentUpdate(updatedComment);
  }

  return (
    <li>
      <span className="user">{username}</span>
      <span className="time">{timestamp}</span>
      {isEditing ? (
        <EditComment
          id={id}
          body={body}
          onCommentUpdate={handleUpdateComment}
        />
      ) : (
        <p>{body}</p>
      )}
      {isCurrentUser ? (
        <div className="actions">
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>
          <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        </div>
      ) : null}
    </li>
  );
}

export default Comment;
