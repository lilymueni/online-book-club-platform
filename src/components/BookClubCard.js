import React, { useState } from "react";

const BookClubCard = ({ bookClub }) => {
  const [members, setMembers] = useState(bookClub.members);

  const addMember = (newMember) => {
    setMembers([...members, newMember]);
  };

  return (
    <div className="book-club-card">
      <h2>{bookClub.name}</h2>
      <p>{bookClub.description}</p>
      <p>Number of Members: {members.length}</p>
      <p>Upcoming Read: {bookClub.upcomingBook}</p>
      <button onClick={() => addMember("New Member")}>Add Member</button>
    </div>
  );
};

export default BookClubCard;
