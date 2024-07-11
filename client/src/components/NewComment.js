import React, { useState } from "react";

function NewComment({ currentUser, onAddComment }) {
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: currentUser.username,
        body: body,
      }),
    })
      .then((r) => r.json())
      .then((newComment) => {
        onAddComment(newComment);
        setBody("");
      });
  }

  return (
    <form className="new-message" onSubmit={handleSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default NewComment; 
