import React, { useState, useEffect } from "react";
import BookClubCard from "./BookClubCard";

const BookClub = () => {
  const [bookClubs, setBookClubs] = useState([]);

  useEffect(() => {
    fetch("/bookclubs")
      .then((response) => response.json())
      .then((data) => setBookClubs(data));
  }, []);

  return (
    <div className="book-club-list">
      {bookClubs.map((bookClub) => (
        <BookClubCard key={bookClub.id} bookClub={bookClub} />
      ))}
    </div>
  );
};

export default BookClub;
