// import React, { useState, useEffect } from "react";
// import BookClubCard from "./BookClubCard";

// const BookClub = () => {
//   const [bookClubs, setBookClubs] = useState([]);

//   useEffect(() => {
//     fetch("/bookclubs")
//       .then((response) => response.json())
//       .then((data) => setBookClubs(data));
//   }, []);

//   return (
//     <div className="book-club-list">
//       {bookClubs.map((bookClub) => (
//         <BookClubCard key={bookClub.id} bookClub={bookClub} />
//       ))}
//     </div>
//   );
// };

// export default BookClub;

import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const initialFormData = {
  name: "",
  cover: "",
  description: "",
  genre: "",
  members: 0, // Initialize members count
};

const BookClub = () => {
  const [showForm, setShowForm] = useState(false);

  const [bookClubs, setBookClubs] = useState([]);

  const [formData, setFormData] = useState(initialFormData);

  const bookClubRefs = useRef({});

  useEffect(() => {
    fetch(`https://backend-bookclub.onrender.com/book_clubs`)
      .then((response) => response.json())
      .then((data) => setBookClubs(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newClub = {
      ...formData,
      members: Math.floor(Math.random() * 100) + 1, // Simulate random number of members
    };
    setBookClubs([...bookClubs, newClub]);
    setFormData(initialFormData);
    setShowForm(false);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setFormData(initialFormData);
  };

  return (
    <Wrapper>
      <NavBar>
        <Title>Book Clubs</Title>
        <AddButton onClick={() => setShowForm(true)}>
          Add a new Book Club
        </AddButton>
      </NavBar>
      {showForm && (
        <FormContainer>
          <Form onSubmit={handleFormSubmit}>
            <FormLabel>Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <FormLabel>Cover Image URL</FormLabel>
            <FormInput
              type="text"
              name="cover"
              value={formData.cover}
              onChange={handleInputChange}
              required
            />
            <FormLabel>Description</FormLabel>
            <FormTextArea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <FormLabel>Genre</FormLabel>
            <FormInput
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              required
            />
            <FormButton type="submit">Create Book Club</FormButton>
            <CancelButton type="button" onClick={handleFormClose}>
              Cancel
            </CancelButton>
          </Form>
        </FormContainer>
      )}

      {/*  {
          bookClubs.map((club) => {
            <BookClubCard club= {club/>
          })
        } */}

      <CardContainer>
        {bookClubs.map((club, index) => (
          <Card key={index} ref={(el) => (bookClubRefs.current[index] = el)}>
            <Image src={club.cover} alt={club.name} />
            <ClubName>{club.name}</ClubName>
            <Description>{club.description}</Description>
            <Members>{club.members} members</Members>
            <DiscussionButton to={`/discussion/${club.name}`}>
              Discussion
            </DiscussionButton>
          </Card>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const AddButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #7e76f9;
  color: white;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;

  &:hover {
    background-color: #5b57d9;
  }
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

const FormLabel = styled.label`
  font-size: 1rem;
`;

const FormInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormTextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 100px;
`;

const FormButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #7e76f9;
  color: white;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;

  &:hover {
    background-color: #5b57d9;
  }
`;

const CancelButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #ccc;
  color: #333;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  outline: none;

  &:hover {
    background-color: #bbb;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  border-radius: 8px;
  object-fit: cover;
`;

const ClubName = styled.h3`
  margin: 15px 0 5px;
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #666;
  margin-bottom: 10px;
`;

const Members = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 15px;
`;

const DiscussionButton = styled(Link)`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #7e76f9;
  color: white;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5b57d9;
  }
`;

export default BookClub;
