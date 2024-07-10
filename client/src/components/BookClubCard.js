import React, { useState } from "react";

const BookClubCard = ({ bookClub }) => {
  return (
    <div className="book-club-card">
      <h2>{bookClub.name}</h2>
      <p>{bookClub.description}</p>
      <p>Number of Members: {bookClub.members.length}</p>
      <p>Upcoming Read: {bookClub.upcomingBook}</p>
    </div>
  );
};

export default BookClubCard;
