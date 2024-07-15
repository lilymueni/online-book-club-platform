import React, { useState } from "react";
import styled from "styled-components";

const DiscussionModal = ({ isOpen, onClose, club, addComment }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== "") {
      const newComment = {
        id: Date.now(),
        username: "Current User", // You can replace with actual user data if available
        body: comment,
        created_at: new Date().toISOString(),
      };
      addComment(newComment);
      setComment("");
    }
  };

  return (
    <ModalBackdrop isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <ModalTitle>{club.name} Discussion</ModalTitle>
        <CommentsContainer>
          {club.comments.map((comment) => (
            <Comment key={comment.id}>
              <CommentBody>{comment.body}</CommentBody>
              <CommentInfo>
                <CommentAuthor>{comment.username}</CommentAuthor>
                <CommentTimestamp>{new Date(comment.created_at).toLocaleString()}</CommentTimestamp>
              </CommentInfo>
            </Comment>
          ))}
        </CommentsContainer>
        <CommentInput
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        <SubmitButton onClick={handleSubmitComment}>Post Comment</SubmitButton>
      </ModalContent>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px; /* Adjust width as needed */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CommentsContainer = styled.div`
  margin-bottom: 20px;
`;

const Comment = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const CommentBody = styled.p`
  margin: 0;
`;

const CommentInfo = styled.div`
  font-size: 0.8rem;
  color: #888;
`;

const CommentAuthor = styled.span`
  margin-right: 10px;
`;

const CommentTimestamp = styled.span`
  font-style: italic;
`;

const CommentInput = styled.textarea`
  width: calc(100% - 40px);
  min-height: 80px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #7e76f9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5b57d9;
  }
`;

export default DiscussionModal;
