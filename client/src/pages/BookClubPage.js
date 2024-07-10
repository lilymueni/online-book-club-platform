import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";

const BookClubPage = () => {
  const [bookClub, setBookClub] = useState(null);
  const { id } = useParams();
  //feetch details aof a particular bookClub and display it as a new page
  useEffect(() => {
    fetch(`/book-clubs/${id}`)
      .then((response) => response.json())
      .then((data) => setBookClub(data));
  }, [id]);

  if (!bookClub) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>{bookClub.name}</h1>
        <p>{bookClub.description}</p>
        <ul>
          {bookClub.members.map((member) => (
            <li key={member.id}>{member.name}</li>
          ))}
        </ul>
        <h2>Available Books</h2>
        <ul>
          {bookClub.books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </div>
      <Comments />
    </>
  );
};

export default BookClubPage;
