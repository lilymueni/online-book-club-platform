import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Comments from "../components/Comment";
import NewComment from "../components/NewComment.js";
import CommentList from "../components/CommentList.js";

const testUser = { username: "Duane" };

const BookClubPage = () => {
  const [bookClub, setBookClub] = useState(null);
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null); // Placeholder for user, ensure it's defined

  useEffect(() => {
    fetch(`https://backend-bookclub.onrender.com/book_clubs/${id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const handleUpdateComment = (updatedCommentObj) => {
    const updatedComment = comments.map((comment) => {
      if (comment.id === updatedCommentObj.id) {
        return updatedCommentObj;
      } else {
        return comment;
      }
    });
    setComments(updatedComment);
  };

  useEffect(() => {
    fetch(`/book-clubs/${id}`)
      .then((response) => response.json())
      .then((data) => setBookClub(data));
  }, [id]);

  if (!bookClub) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <Header>
        <h1>{bookClub.name}</h1>
        <p>{bookClub.description}</p>
      </Header>
      <Section>
        <h2>Members</h2>
        <ul>
          {bookClub.members.map((member) => (
            <li key={member.id}>{member.name}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2>Available Books</h2>
        <ul>
          {bookClub.books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
        <h2>Users</h2>
        <ul></ul>
      </Section>
      <CommentList
        comments={comments}
        onCommentUpdate={handleUpdateComment}
        onCommentDelete={handleDeleteComment}
      />
      <NewComment currentUser={testUser} onAddComment={handleAddComment} />
    </Container>
  );
};

const Loading = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
  color: #555;
`;

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

const Section = styled.section`
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      background: #f9f9f9;
      margin: 5px 0;
      padding: 10px;
      border-radius: 5px;
    }
  }
`;

export default BookClubPage;
