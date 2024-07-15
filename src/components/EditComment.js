import React, { useState } from "react";

function EditComment({ id, body, onCommentUpdate }) {
  const [commentBody, setCommentBody] = useState(body);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: commentBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedComment) => onCommentUpdate(updatedComment));
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditComment;
