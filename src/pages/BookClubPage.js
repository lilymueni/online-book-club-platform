import React, {useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
//import Comments from "../components/Comment";
import NewComment from "../components/NewComment.js";
//import CommentList from "../components/CommentList.js";
//import DicussionModal from "../components/CommentList.js";

const testUser = { username: "Duane" };
//sample bookclub for testing
const testClub = {
  id: 1,
  name: "Social Justice",
  books: [
    { id: 1, title: "reject finance bill" },
    { id: 2, title: "must go" },
  ],
  cover:
    "https://i.pinimg.com/736x/28/8d/e3/288de3c1d0b35cc50bc018acb879573c.jpg",
  description: "Books focusing on social issues and activism.",
  genre: "Social Justice",
  members: [
    { id: 1, name: "Kelly1" },
    { id: 2, name: "Kelly2" },
    { id: 3, name: "Kelly3" },
    { id: 4, name: "Kelly4" },
  ],
  comments: [
    {
      rname: "User1",
      body: "Great club!",
      created_at: "2024-07-12T10:30:00Z",
    },
    {
      id: 2,
      username: "User2",
      body: "I love the discussions here.",
      created_at: "2024-07-12T11:15:00Z",
    },
  ],
};

const BookClubPage = () => {
  const [bookClub] = useState(null);
  const { id } = useParams();
  const [setComments] = useState([]);
  //const [user, setUser] = useState(null); // Placeholder for user, ensure it's defined

  //Fetch the clicked bookclub
  /*   useEffect(() => {
    fetch(`/book_clubs/${id}`)
      .then((response) => response.json())
      .then((data) => setBookClub(data));
  }, [id]);

  if (!bookClub) {
    return <Loading>Loading...</Loading>;
  }
 */

  //fetch comments from the database
  const handleAddComment = (newComment) => {
    fetch(`/book_clubs/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        if (response.status === 201) {
          // Comment added successfully
          alert("comment added");
        } else {
          // Handle error
          alert("there was an error adding your comment");
        }
      })
      .catch((error) => {
        // Handle error
      });

    if (!bookClub) {
      return <Loading>Loading...</Loading>;
    }

    setComments([...testClub.comments, newComment]);
  };

  // const handleDeleteComment = (id) => {
  //   const updatedComments = comments.filter((comment) => comment.id !== id);
  //   setComments(updatedComments);
  // };

  // const handleUpdateComment = (updatedCommentObj) => {
  //   const updatedComment = comments.map((comment) => {
  //     if (comment.id === updatedCommentObj.id) {
  //       return updatedCommentObj;
  //     } else {
  //       return comment;
  //     }
  //   });
  //   setComments(updatedComment);
  // };

  return (
    <Container>
      <Header>
        <h1>{testClub.name}</h1>
        <p>{testClub.description}</p>
      </Header>
      <Section>
        <h2>Members</h2>
        <ul>
          {testClub.members.map((member) => (
            <li key={member.id}>{member.name}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2>Available Books</h2>
        <ul>
          {testClub.books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>

        <h2>Comments</h2>
        <ul>
          {testClub.comments.map((comment) => (
            <li key={comment.username}>{comment.body}</li>
          ))}
        </ul>
        {/* <CommentList
          comments={comments}
          onCommentUpdate={handleUpdateComment}
          onCommentDelete={handleDeleteComment}
        /> */}
        <NewComment currentUser={testUser} onAddComment={handleAddComment} />
      </Section>
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
